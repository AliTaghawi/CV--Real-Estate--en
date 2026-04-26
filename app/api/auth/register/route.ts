import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { AuthStatusMessages, StatusCodes, StatusMessages } from "@/types/enums";
import connectDB from "@/utils/connectDB";
import { registerValidationSchema } from "@/utils/validation";
import { hashPassword } from "@/utils/auth";
import { generateVerificationCode, sendVerificationEmail } from "@/utils/verificationFunctions";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password, confirmPassword } = await req.json();

    try {
      await registerValidationSchema.validateAsync({
        email,
        password,
        confirmPassword,
      });
    } catch (error: any) {
      console.log(error.details[0]);
      return NextResponse.json(
        { error: error.details[0].message },
        { status: StatusCodes.UNPROCESSABLE_ENTITY },
      );
    }

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      if (existedUser.emailVerified) {
        return NextResponse.json(
          { error: AuthStatusMessages.EXISTED_USER },
          { status: StatusCodes.BAD_REQUEST },
        );
      } else {
        const expiryTime = existedUser.emailOTPTokenExpiry.getTime();
        const now = new Date().getTime();
        if (expiryTime > now) {
          return NextResponse.json(
            { error: AuthStatusMessages.EMAIL_VERIFICATION_GRACE },
            { status: StatusCodes.BAD_REQUEST },
          );
        } else {
          const result = await User.findOneAndDelete({email})
          console.log(`Deleted unverified user for allow new registration: ${email}`, result)
        }
      }
    }

    const hashedPassword = await hashPassword(password)

    const fullName = email.split("@")[0] || "";
    const emailOTPToken = generateVerificationCode() ;
    const emailOTPTokenExpiry = new Date();
    emailOTPTokenExpiry?.setMinutes(emailOTPTokenExpiry.getMinutes() + 15);
    
    const user = await User.create({
      email,
      password: hashedPassword,
      fullName,
      emailOTPToken,
      emailOTPTokenExpiry,
    })

    await sendVerificationEmail(email, emailOTPToken)

    return NextResponse.json(
      {message: AuthStatusMessages.TOKEN_SENDED},
      { status: StatusCodes.OK},
    )
    
  } catch (error) {
    return NextResponse.json(
      { error: StatusMessages.SERVER_ERROR },
      { status: StatusCodes.SERVER_ERROR },
    );
  }
}
