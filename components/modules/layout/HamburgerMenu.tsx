"use client";

const spanStyle = "w-5.5 h-0.5 bg-zinc-950 dark:bg-zinc-100 block";

const HamburgerMenu = () => {
  return (
    <button className="h-4.5 flex flex-col justify-between md:hidden me-2">
      <span className={spanStyle}></span>
      <span className={spanStyle}></span>
      <span className={spanStyle}></span>
    </button>
  );
};

export default HamburgerMenu;
