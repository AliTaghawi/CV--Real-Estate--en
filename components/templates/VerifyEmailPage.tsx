"use client";

import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { RootState } from "@/redux/store";
import TextPassInput from "@/elements/authPages/TextPassInput";
import { GoAlert } from "react-icons/go";

const initialValues = {
  OTPCode: "",
  altEmail: "",
};

const validationSchema = Yup.object({
  OTPCode: Yup.string().length(5).required(),
  altEmail: Yup.string().email().required(),
});

const VerifyEmailPage = () => {
  const authInfo = useSelector((state: RootState) => state.authInfo);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  async function onSubmit(
    values: any,
    { resetForm }: { resetForm: () => void },
  ) {}

  return (
    <div className="mx-auto my-10 max-w-100 bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl ">
      <h2 className="text-2xl text-cyan-600 font-bold mb-4">
        Verify your Email
      </h2>
      <p>We send a verification code to your email.</p>
      <span className="font-bold">{authInfo.email} text@email.com</span>
      <p>
        Please enter the code in the text box below and verify your email to
        complete the registration process.
      </p>
      <p className="font-medium my-2 mb-4">
        Notes! the code expire time is 15 minute from sending time
      </p>
      <form>
        {authInfo.email ? null : (
          <div>
            <p className="text-sm mt-4 mb-1 text-red-900">
              <GoAlert className="inline mb-0.75 me-0.5" />
              Your email is not available for verification, please enter your
              email as well.
            </p>
            <TextPassInput
              title="Email"
              name="email"
              type="email"
              value={formik.values.altEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.altEmail}
              blur={formik.touched.altEmail}
              placeholder="Email that you registered with"
            />
          </div>
        )}
        <div className="flex items-center justify-between">
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
          <button
            type="submit"
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
