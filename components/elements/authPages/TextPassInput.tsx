"use client";

import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { TextPassInputType } from "@/types/types";

const TextPassInput = ({
  title,
  name,
  type,
  value,
  onBlur,
  onChange,
  blur,
  error,
  placeholder,
}: TextPassInputType) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col relative mt-1 mb-4.5">
      {title && (
        <label htmlFor={name} className="ms-1">
          {title}:
        </label>
      )}
      <input
        type={type === "password" && show ? "text" : type}
        name={name}
        id={name}
        className={`border ${error && blur ? "border-red-500 dark:border-red-800" : "border-zinc-300 dark:border-zinc-600"} focus:border-cyan-700 rounded-md py-1 px-2 bg-white dark:bg-zinc-900 outline-0 ${type === "password" && "pe-7"}`}
        placeholder={placeholder ?? ""}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 bottom-2.5"
        >
          {show ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      )}
      {error && blur && (
        <span className="text-xs text-red-500 dark:text-red-700 absolute -bottom-4.5 left-1.5">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextPassInput;
