import { NextRequest, NextResponse } from "next/server";
import { AuthStatusMessages, StatusCodes, StatusMessages } from "@/types/enums";
import connectDB from "@/utils/connectDB";
import { forgetPasswordValidationSchema } from "@/utils/validation";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, OTPCode, password, confirmPassword } = await req.json();

    try {
      await forgetPasswordValidationSchema.validateAsync({
        email,
        OTPCode,
        password,
        confirmPassword,
      });
    } catch (error: any) {
      return NextResponse.json(
        { error: error.details[0].messages },
        { status: StatusCodes.UNPROCESSABLE_ENTITY },
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: StatusMessages.NOTFOUND_USER },
        { status: StatusCodes.NOTFOUND },
      );
    }

    if (!user.emailVerified) {
      return NextResponse.json(
        { error: AuthStatusMessages.EMAIL_UNVERIFIED },
        { status: StatusCodes.BAD_REQUEST },
      );
    }

    if (user.emailOTPToken) {
      const expiryTime = user.emailOTPTokenExpiry.getTime() || 0;
      const now = new Date().getTime();
      if (expiryTime < now) {
        return NextResponse.json(
          { error: AuthStatusMessages.EXPIRED_CODE },
          { status: StatusCodes.BAD_REQUEST },
        );
      }
    } else {
      return NextResponse.json(
        { error: AuthStatusMessages.TOKEN_NOT_EXIST },
        { status: StatusCodes.NOTFOUND },
      );
    }

    if (user.emailOTPToken !== OTPCode) {
      return NextResponse.json(
        { error: AuthStatusMessages.WRONG_VERIFICATION_CODE },
        { status: StatusCodes.FORBIDDEN },
      );
    }

    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;
    user.emailOTPToken = null;
    user.emailOTPTokenExpiry = null;
    user.save();

    return NextResponse.json(
      { message: StatusMessages.PASSWORD_UPDATED },
      { status: StatusCodes.OK },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: StatusMessages.SERVER_ERROR },
      { status: StatusCodes.SERVER_ERROR },
    );
  }
}
