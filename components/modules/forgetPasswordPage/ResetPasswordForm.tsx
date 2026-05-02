import TextPassInput from "@/elements/authPages/TextPassInput";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

type propsType = {
  email: string | null;
  OTPCode: string | null;
};

const initialValues = {
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "confirm password is not match with password")
    .required(),
});

const ResetPasswordForm = ({ email, OTPCode }: propsType) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  async function onSubmit(
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void },
  ) {}

  return (
    <div className="mx-auto my-20 max-w-100 bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl ">
      <h2 className="text-2xl font-bold text-cyan-600 mb-4">
        Enter your new password
      </h2>
      <form id="resetForm" onSubmit={formik.handleSubmit}>
        <TextPassInput
          title="Password"
          name="password"
          type="password"
          placeholder="Enter strong Password"
          value={formik.values.password}
          error={formik.errors.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          blur={formik.touched.password}
        />
        <TextPassInput
          title="Confirm password"
          name="confirmPassword"
          type="password"
          placeholder="Repeat your Password"
          value={formik.values.confirmPassword}
          error={formik.errors.confirmPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          blur={formik.touched.confirmPassword}
        />
        <div className="flex items-center justify-between">
          <Link
            href="/login"
            className="hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-500 rounded-md py-0.5 px-4 text-zinc-600 dark:text-zinc-300 font-medium transition-colors ease-in mt-1 cursor-default"
          >
            Cancel
          </Link>
          <button
            type="submit"
            form="resetForm"
            className="hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md py-0.5 px-4 text-cyan-600 font-medium transition-colors ease-in mt-1"
          >
            Reset password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
