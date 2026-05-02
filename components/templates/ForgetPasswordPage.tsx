"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ResetPasswordForm from "@/modules/forgetPasswordPage/ResetPasswordForm";
import VerifyOTPForm from "@/modules/forgetPasswordPage/VerifyOTPForm";

const ForgetPasswordPage = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [OTPCode, setOTPCode] = useState<string>("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <>
      {isVerified ? (
        <ResetPasswordForm email={email} OTPCode={OTPCode} />
      ) : (
        <VerifyOTPForm
          email={email}
          setIsVerified={setIsVerified}
          setOTPCode={setOTPCode}
        />
      )}
    </>
  );
};

export default ForgetPasswordPage;
