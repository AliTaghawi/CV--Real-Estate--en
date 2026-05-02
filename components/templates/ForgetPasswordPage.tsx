"use client";

import VerifyOTPForm from "@/modules/forgetPasswordPage/VerifyOTPForm";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const ForgetPasswordPage = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [OTPCode, setOTPCode] = useState<string>("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <>
    {!isVerified && <VerifyOTPForm email={email} setIsVerified={setIsVerified} setOTPCode={setOTPCode} />}
    </>
  );
};

export default ForgetPasswordPage;
