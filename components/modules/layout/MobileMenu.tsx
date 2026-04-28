"use client";
import Link from "next/link";

const styles =
  "px-4 py-1.5 hover:bg-zinc-100 hover:outline outline-zinc-300 dark:outline-zinc-600 dark:hover:bg-zinc-800 rounded-sm transition-colors ease-in";

const MobileMenu = () => {
  return (
    <div className="fixed top-0 -left-full h-screen w-1/3 min-w-48 flex flex-col gap-2 p-4 bg-cyan-50/20 backdrop-blur-sm border-r border-zinc-400 z-20 transition-all duration-300 ease-in-out">
      <Link href="/" className={styles}>
        Home
      </Link>
      <Link href="/property-files" className={styles}>
        Properties
      </Link>
      <Link href="/Agents" className={styles}>
        Agents
      </Link>
      <Link href="/about-us" className={styles}>
        About-us
      </Link>
    </div>
  );
};

export default MobileMenu;
