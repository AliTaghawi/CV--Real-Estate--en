import Link from "next/link";

const styles = "relative top-1 text-zinc-500 hover:text-zinc-950 transition-colors ease-in";

const Navbar = () => {
  return (
    <div className="flex items-center gap-5">
      <Link href="/" className="flex items-center gap-1 w-fit">
        <img
          src="RealEstate.png"
          alt="logo"
          className="block size-6 rounded-sm"
        />{" "}
        <p className="text-2xl font-medium relative top-[3px]">
          <span className="text-cyan-600">R</span>eal{" "}
          <span className="text-cyan-600">E</span>state
        </p>
      </Link>
      <Link href="/property-files" className={`ms-5 ${styles}`}>
        Properties
      </Link>
      <Link href="/about-us" className={styles}>
        About-us
      </Link>
    </div>
  );
};

export default Navbar;
