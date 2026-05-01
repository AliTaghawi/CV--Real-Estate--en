"use client";

import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
// import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import TextPassInput from "@/elements/authPages/TextPassInput";
import Link from "next/link";
// import { setInfo } from "@/redux/features/registerInfo/registerInfoSlice";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

const LoginPage = () => {
  // const dispatch = useDispatch();
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  async function onSubmit(
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void },
  ) {
    const res = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (res?.status === 200) {
      toast.success("You logged in successfully");
      resetForm();
      router.push("/");
    } else {
      console.log(res?.error);
      toast.error(res?.error || "error in login");
    }
  }

  const forgetHandler = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    // if (!formik.errors.email && formik.touched.email) {
    //   dispatch(setInfo({ email: formik.values.email }));
    //   const result = await fetch("/api/auth/send-email-otp", {
    //     method: "POST",
    //     body: JSON.stringify({ email: formik.values.email }),
    //     headers: { "content-type": "application/json" },
    //   });
    //   const res = await result.json();
    //   if (res.error) {
    //     toast.error(res.error);
    //   } else {
    //     toast.success(res.message);
    //     router.push(`/verify-email?type=fp&email=${formik.values.email}`);
    //   }
    // } else {
    //   toast.error("Enter your email");
    // }
  };

  return (
    <div className="mx-auto my-20 max-w-100 bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl ">
      <h2 className="text-3xl font-bold text-cyan-600 mb-4">LogIn form</h2>
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
          placeholder="Enter your password"
          value={formik.values.password}
          error={formik.errors.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          blur={formik.touched.password}
        />
      </form>
      <div className="flex flex-col items-end">
        <div className="w-full flex items-center justify-between text-sm ms-0.5">
          <div className="flex">
            <p>Don't have an account?</p>
            <Link
              href="/register"
              className="text-cyan-600 font-medium hover:underline ms-1"
            >
              Register
            </Link>
          </div>
          <button
            onClick={forgetHandler}
            className="ms-1 font-medium text-cyan-600 cursor-pointer hover:underline"
          >
            forget password
          </button>
        </div>
        <button
          type="submit"
          form="loginForm"
          className="hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md py-0.5 px-4 text-cyan-600 font-medium transition-colors ease-in mt-3 mb-1"
        >
          LogIn
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
