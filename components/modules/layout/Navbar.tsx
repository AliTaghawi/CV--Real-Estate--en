import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const styles = "hidden md:block text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors ease-in";

const Navbar = () => {
  return (
    <div className="flex items-center gap-2.5 xs:gap-4">
      <HamburgerMenu />
      <Link href="/" className="flex items-center gap-1 w-fit">
        <img
          src="RealEstate.png"
          alt="logo"
          className="block size-6 rounded-sm relative -top-0.5"
        />{" "}
        <p className="text-lg xs:text-xl lg:text-2xl font-medium">
          <span className="text-cyan-600">R</span>eal{" "}
          <span className="text-cyan-600">E</span>state
        </p>
      </Link>
        <Link href="/property-files" className={`ms-3 ${styles}`}>
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

export default Navbar;
