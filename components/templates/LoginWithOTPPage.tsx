'use client'

import { useSearchParams } from "next/navigation";
import TextPassInput from "@/elements/authPages/TextPassInput";

const LoginWithOTPPage = () => {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")

return (
    <div className="mx-auto my-10 max-w-100 bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl ">
      <h2 className="text-2xl text-cyan-600 font-bold mb-4">
        Verify it's you
      </h2>
      <p>We send a verification code to your email.</p>
      <span className="font-bold">{email}</span>
      <p>
        Please enter the code in the text box below and verify it is you to login and reset password 
      </p>
      <p className="font-medium my-2 mb-4">
        Notes! the code expire time is 15 minute from sending time
      </p>
      <form id="verifyForm">
        <TextPassInput
          title="Code"
          name="OTPCode"
          type="text"
          value={""}
          onChange={() => {}}
          onBlur={() => {}}
          error={""}
          blur={false}
          placeholder="Verification code"
        />
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => {}}
            className="hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md py-0.5 px-4 text-cyan-600 font-medium transition-colors ease-in"
          >
            Resend code
          </button>
          <button
            type="submit"
            form="verifyForm"
            className="hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md py-0.5 px-4 text-cyan-600 font-medium transition-colors ease-in"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginWithOTPPage;
