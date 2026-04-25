import BackButton from "@/elements/notfound/BackButton";
import Link from "next/link";
import { BiError, BiHome } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <h2 className="text-5xl font-semibold mb-7">Oops!</h2>
        <div className="flex items-baseline w-fit mx-auto text-red-700 dark:text-red-500">
          <p className="text-9xl font-black pr-4">404</p>
          <BiError className="text-8xl" />
        </div>
        <h2 className="text-2xl font-semibold">
          Sorry, the requested page was Not Found
        </h2>
        <div className="mt-4 flex items-stretch justify-between">
          <BackButton />
          <Link href="/" className="flex items-center gap-1 py-0.5 px-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-600 hover:bg-zinc-200/65 dark:hover:bg-zinc-800 transition-colors rounded-md w-fit font-medium" >
            Home Page <BiHome className="text-xl mb-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
