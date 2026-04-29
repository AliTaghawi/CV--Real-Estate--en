"use client"

import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup"

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
}

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")]).required(),
})

const onSubmit = () => {}

const RegisterPage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  
  return (
    <div className='mx-auto mt-20 w-100 bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl '>
      <h2 className="text-3xl font-bold text-cyan-600 mb-4">Register from</h2>
      <div className="flex flex-col relative mb-5.5">
        <label htmlFor="" className="ms-1">Email:</label>
        <input type="email" name="" id="" className="border border-zinc-300 dark:border-zinc-600 focus:border-cyan-700 rounded-md py-1 px-2 bg-white dark:bg-zinc-900 outline-0" placeholder="Your Email" />
        <span className="text-xs text-red-500 absolute -bottom-4.5 left-1.5">this is a ERROR</span>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="text-sm ms-0.5">
          <span>Have an account?</span>
          <Link href="/login" className="ms-1 text-base font-medium text-cyan-600">login</Link>
        </div>
        <button className="hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md py-0.5 px-4 text-cyan-600 font-medium transition-colors ease-in">Register</button>
      </div>

    </div>
  );
};

export default RegisterPage;