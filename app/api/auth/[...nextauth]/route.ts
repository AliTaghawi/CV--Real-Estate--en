import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/User";
import { AuthStatusMessages, StatusMessages } from "@/types/enums";
import { loginValidationSchema, OTPValidationSchema } from "@/utils/validation";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "text" },
        OTPCode: { label: "OTPCode", type: "text" },
      },
      async authorize(credentials, req) {
        const { email, password = "", OTPCode } = credentials ?? {};

        // connect to DB
        try {
          await connectDB();
        } catch (error) {
          console.log(error);
          throw new Error(StatusMessages.SERVER_ERROR);
        }

        //validation data
        try {
          if (OTPCode) {
            await OTPValidationSchema.validateAsync({ email, OTPCode });
          } else {
            await loginValidationSchema.validateAsync({ email, password });
          }
        } catch (error: any) {
          console.log(error.details[0]);
          throw new Error(error.details[0].message);
        }

        //check user exist
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
          throw new Error(StatusMessages.NOTFOUND_USER);
        }

        //check if email is verified
        if (!user.emailVerified && OTPCode) {
          const expiryTime = user.emailOTPTokenExpiry?.getTime() || 0;
          const now = new Date().getTime();
          if (expiryTime < now) {
            throw new Error(AuthStatusMessages.EXPIRED_CODE);
          }
        } else if (!user.emailVerified) {
          throw new Error(AuthStatusMessages.EMAIL_UNVERIFIED);
        }

        //check if OTPCode is correct
        if (OTPCode && user.emailOTPToken !== OTPCode) {
          throw new Error(AuthStatusMessages.WRONG_VERIFICATION_CODE);
        } else if (OTPCode && user.emailOTPToken === OTPCode) {
          user.emailVerified = true;
          user.emailOTPToken = null;
          user.emailOTPTokenExpiry = null;
          await user.save();
        } else {
          //check if password is correct
          const isValid = await verifyPassword(password, user.password);
          if (!isValid) {
            throw new Error(AuthStatusMessages.WRONG_USERNAME_PASSWORD);
          }
        }

        //check if user is banned
        if (user.banned) {
          throw new Error(StatusMessages.USER_BANNED);
        }

        return { email, id: user._id, role: user.role };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
