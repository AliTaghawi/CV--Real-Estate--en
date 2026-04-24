"use client";

import { useRouter } from "next/navigation";
import { TbArrowBackUp } from "react-icons/tb";

const BackButton = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.back();
  };

  return (
    <button
      onClick={clickHandler}
      className="flex items-center gap-1 text-lg font-medium bg-zinc-100 dark:bg-zinc-900 pt-0.5 px-4 border border-zinc-400 dark:border-zinc-600 hover:bg-zinc-200/65 dark:hover:bg-zinc-800 transition-colors rounded-md"
    >
      Go back <TbArrowBackUp className="text-2xl mb-1" />
    </button>
  );
};

export default BackButton;
