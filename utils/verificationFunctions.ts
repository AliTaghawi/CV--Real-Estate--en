const verificationCodeLength = process.env.verificationCodeLength || 5
const codeLength = +verificationCodeLength

export function generateVerificationCode() {
  let code = "";
  for (let i = 0; i < codeLength; i++) {
    code += Math.trunc(Math.random() * 10).toString();
  }
  return code;
}

export async function sendVerificationEmail(email: string, token: string | null) {
  // developing send email codes with resend or Nodemailer...
  console.log(`emailVerification code for: ${email} is => ${token}`);
}

