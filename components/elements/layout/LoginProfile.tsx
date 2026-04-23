import Link from "next/link";
import { TbLogin2 } from "react-icons/tb";

const LoginProfile = () => {
  return (
    <div>
      <Link
        href="/login"
        className="flex items-center gap-0.5 py-1 px-2.5 border border-zinc-400 dark:border-zinc-500 rounded-md bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ease-in"
      >
        Sign in
        <TbLogin2 className="text-xl" />
      </Link>
    </div>
  );
};

export default LoginProfile;
