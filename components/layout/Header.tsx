import Navbar from "@/modules/layout/Navbar";

const Header = () => {
  return (
    <header className="w-full px-8 py-2 bg-zinc-50/50 dark:bg-zinc-800/50 border-b border-zinc-300 dark:border-zinc-600 sticky top-0 backdrop-blur-sm ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
