"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";

const styles = "p-1 px-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors ease-in"

const Themes = () => {
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const showHandler = () => {
    setShow(!show);
  };

  const setMode = (mode: string) => {
    setTheme(mode)
    setShow(false)
  }

  if (!loaded)
    return (
      <div className="text-xl p-1 rounded-md hover:bg-zinc-200/65 dark:hover:bg-zinc-700 transition-colors ease-in">
        <MdComputer />
      </div>
    );

  return (
    <div className="relative">
      <button
        onClick={showHandler}
        className="text-xl p-1 rounded-md hover:bg-zinc-200/65 dark:hover:bg-zinc-700 transition-colors ease-in"
      >
        {theme === "light" && <MdLightMode />}
        {theme === "dark" && <MdDarkMode />}
        {theme === "system" && <MdComputer />}
      </button>
      <div
        className={`${show ? "flex" : "hidden"} flex-col text-xl absolute top-7.5 -right-2 z-10 p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-500 rounded-lg`}
      >
        <button className={styles} onClick={() => {setMode("light")}}>
          <MdLightMode />
        </button>
        <button className={styles} onClick={() => {setMode("dark")}}>
          <MdDarkMode />
        </button>
        <button className={styles} onClick={() => {setMode("system")}}>
          <MdComputer />
        </button>
      </div>
    </div>
  );
};

export default Themes;
