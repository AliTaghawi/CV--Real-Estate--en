import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { AuthStatusMessages, StatusCodes, StatusMessages } from "@/types/enums";
import connectDB from "@/utils/connectDB";
import { generateVerificationCode, sendVerificationEmail } from "@/utils/verificationFunctions";
import { emailValidationSchema } from "@/utils/validation";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, type } = await req.json();

    try {
      await emailValidationSchema.validateAsync({email})
    } catch (error: any) {
      console.log(error.details[0])
      return NextResponse.json(
        { error: error.details[0].message },
        { status: StatusCodes.UNPROCESSABLE_ENTITY }
      )
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
      if (expiryTime > now) {
        return NextResponse.json(
          { error: AuthStatusMessages.NOT_EXPIRED_CODE },
          { status: StatusCodes.BAD_REQUEST },
        );
      }
    }

    
    const emailOTPToken = generateVerificationCode();
    const emailOTPTokenExpiry = new Date();
    const expiryTime = type == "login" ? 5 : 15
    emailOTPTokenExpiry?.setMinutes(emailOTPTokenExpiry.getMinutes() + expiryTime);

    user.emailOTPToken = emailOTPToken;
    user.emailOTPTokenExpiry = emailOTPTokenExpiry;
    await user.save();

    await sendVerificationEmail(email, emailOTPToken);

    return NextResponse.json(
      { message: AuthStatusMessages.TOKEN_SENDED },
      { status: StatusCodes.OK },
    );

  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: StatusMessages.SERVER_ERROR },
      { status: StatusCodes.SERVER_ERROR },
    );
  }
}
