"use client"
import { useOutsideClick } from "hooks/useOutsideClick";
import { useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  let visible = "hidden"
  useOutsideClick(ref, () => {
    setShow(false)
  })

  const showHandler = () => {
    setShow(!show)
    setTimeout(() => {
      show ? visible = "flex" : "hidden"
    }, 300);
  }

  return (
    <div ref={ref} className="relative">
      <div  className={`${show ? "max-xs:animate-search-open max-xs:flex" : `max-xs:animate-search-close ${visible}`} overflow-hidden max-xs:absolute top-6.5 -right-2 xs:flex items-center bg-white dark:bg-zinc-950 py-1 px-2.5 border border-zinc-300 dark:border-zinc-500 rounded-2xl max-xs:shadow-md max-xs:text-base `}>
        <input
          type="text"
          name="Search"
          className="outline-0"
          placeholder="Search in title"
        />
        <button className="text-xl cursor-pointer">
          <IoMdSearch />
        </button>
      </div>
      <button onClick={showHandler} className="xs:hidden p-1 hover:bg-zinc-200/65 dark:hover:bg-zinc-700 rounded-md transition-colors ease-in">
        {show? <span className="text-lg/tight">&#10006;</span> : <IoMdSearch className="text-xl"/>}
      </button>
      {/* <div className={`fixed top-0 left-0 ${show ? "flex" : "hidden"} justify-center items-start w-full p-8 h-screen bg-zinc-50/80 z-10`}>
        <div className="w-full max-w-96 mt-20">
          <span className="size-6 flex items-center justify-center text-white bg-red-400 rounded-md ml-auto mb-10">&#10006;</span>
          <div ref={ref} className={`w-full max-w-96 flex items-center text-base bg-white dark:bg-zinc-950 py-1 px-2.5 border-2 border-zinc-400 dark:border-zinc-500 rounded-2xl`}>
            <input
              type="text"
              name="Search"
              className="outline-0 w-full"
              placeholder="Search in title"
            />
            <button className="text-2xl cursor-pointer">
              <IoMdSearch />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SearchBox;
