import { NextRequest, NextResponse } from "next/server";
import { AuthStatusMessages, StatusCodes, StatusMessages } from "@/types/enums";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { OTPValidationSchema } from "@/utils/validation";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, OTPCode } = await req.json();

    try {
      await OTPValidationSchema.validateAsync({ email, OTPCode });
    } catch (error: any) {
      // console.log(error.details[0]);
      return NextResponse.json(
        { error: error.details[0].message },
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

    return NextResponse.json(
      { message: AuthStatusMessages.EMAIL_VERIFIED, status: StatusCodes.OK },
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
