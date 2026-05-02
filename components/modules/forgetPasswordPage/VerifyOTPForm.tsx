import * as Yup from "yup"
import TextPassInput from "@/elements/authPages/TextPassInput";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";

type propsType = {
  email: string | null,
  setIsVerified: Dispatch<SetStateAction<boolean>>,
  setOTPCode: Dispatch<SetStateAction<string>>,
}

const initialValues = {
  OTPCode: ""
}

const validationSchema = Yup.object({
  OTPCode: Yup.string().length(5).required(),

})

const VerifyOTPForm = ({email, setIsVerified, setOTPCode}: propsType) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  async function onSubmit() {
    
  }

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
        Notes! the code expire time is 5 minute from sending time
      </p>
      <form id="verifyForm">
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

export default VerifyOTPForm;