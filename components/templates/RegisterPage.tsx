"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import TextPassInput from "@/elements/authPages/TextPassInput";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "confirm password is not match with password")
    .required(),
});

const RegisterPage = () => {
  const router = useRouter()
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  async function onSubmit(
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void },
  ) {

    const result = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "content-type": "application/json" },
    });
    const res = await result.json();

    if (res.error) {
      console.log(res.error);
      toast.error(res.error)
    } else {
      toast.success(res.message)
      resetForm();
      router.push(`/verify-email?email=${values.email}`)
    }
  }

  return (
    <div className="mx-auto my-20 max-w-100 bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl ">
      <h2 className="text-3xl font-bold text-cyan-600 mb-4">Register form</h2>
      <form id="loginForm" onSubmit={formik.handleSubmit}>
        <TextPassInput
          title="Email"
          name="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          error={formik.errors.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          blur={formik.touched.email}
        />
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
      </form>
      <div className="flex items-center justify-between mt-8">
        <div className="text-sm ms-0.5">
          <span>Have an account?</span>
          <Link
            href="/login"
            className="ms-1 text-base font-medium text-cyan-600 hover:underline"
          >
            login
          </Link>
        </div>
        <button
          type="submit"
          form="loginForm"
          className="hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md py-0.5 px-4 text-cyan-600 font-medium transition-colors ease-in"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
