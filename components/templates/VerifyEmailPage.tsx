"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import TextPassInput from "@/elements/authPages/TextPassInput";
import { MouseEvent } from "react";

const validationSchema = Yup.object({
  OTPCode: Yup.string().length(5).required(),
});

const VerifyEmailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams()

  const email = searchParams.get("email")

  const initialValues = {
    OTPCode: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  async function onSubmit(
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void },
  ) {
    const data = {
      OTPCode: values.OTPCode,
      email,
    };

    //login and verify email
    const response = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    console.log("login:", response);

    // if success show success message
    if (response?.status === 200) {
      toast.success("Your email is verified and you'r logged in");
      resetForm();
      router.replace("/");
    } else {
      // if login failed just verifying email
      const result = await fetch("/api/auth/verify-email-otp", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      });
      const res = await result.json();

      // handling verification response with condition
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success( "Your email is verified, but something went wrong in login process try login again!");
        resetForm();
        router.push("/login");
      }
    }
  }

  const resendHandler = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    const result = await fetch("/api/auth/send-email-otp", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "content-type": "application/json" },
    });
    const res = await result.json();
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success(res.message);
    }
  };

  return (
    <div className="mx-auto my-10 max-w-100 bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl ">
      <h2 className="text-2xl text-cyan-600 font-bold mb-4">
        Verify your Email
      </h2>
      <p>We send a verification code to your email.</p>
      <span className="font-bold">{email}</span>
      <p>
        Please enter the code in the text box below and verify your email to
        complete the registration process.
      </p>
      <p className="font-medium my-2 mb-4">
        Notes! the code expire time is 15 minute from sending time
      </p>
      <form id="verifyForm" onSubmit={formik.handleSubmit}>
        <TextPassInput
          title="Code"
          name="OTPCode"
          type="text"
          value={formik.values.OTPCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.OTPCode}
          blur={formik.touched.OTPCode}
          placeholder="Verification code"
        />
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={resendHandler}
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

export default VerifyEmailPage;
