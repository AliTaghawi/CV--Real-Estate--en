"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";

const Themes = () => {
  const [loaded, setLoaded] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded)
    return (
      <div className="text-xl p-1 rounded-md hover:bg-zinc-200/65 dark:hover:bg-zinc-700 transition-colors ease-in">
        <MdComputer />
      </div>
    );

  return (
    <div>
      <button className="text-xl p-1 rounded-md hover:bg-zinc-200/65 dark:hover:bg-zinc-700 transition-colors ease-in">
        {theme === "light" && <MdLightMode />}
        {theme === "dark" && <MdDarkMode />}
        {theme === "system" && <MdComputer/>}
      </button>
    </div>
  );
};

export default Themes;
