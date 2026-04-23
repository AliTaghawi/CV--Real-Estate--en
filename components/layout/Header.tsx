import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-8 py-2 bg-zinc-50/50 dark:bg-zinc-800/50 border-b border-zinc-300 dark:border-zinc-600 sticky top-0 backdrop-blur-sm ">
      <nav className="max-w-7xl mx-auto flex items-center">
        <Link href="/" className="flex items-center gap-1 w-fit">
          <img
            src="RealEstate.png"
            alt="logo"
            className="block size-8 rounded-sm"
          />{" "}
          <p className="text-xl font-medium mt-auto leading-tight">
            <span className="text-cyan-600">R</span>eal{" "}
            <span className="text-cyan-600">E</span>state
          </p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
