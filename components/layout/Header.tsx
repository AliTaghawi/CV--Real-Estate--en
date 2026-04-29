import Navbar from "@/modules/layout/Navbar";
import RightNav from "@/modules/layout/RightNav";

const Header = () => {
  return (
    <header className="w-full p-2.5 xxl:px-0 bg-zinc-50/70 dark:bg-zinc-900/60 border-b border-zinc-300 dark:border-zinc-600 sticky z-10 top-0 backdrop-blur-sm ">
      <nav className="max-w-8xl mx-auto flex items-center justify-between">
        <Navbar />
        <RightNav />
      </nav>
    </header>
  );
};

export default Header;
