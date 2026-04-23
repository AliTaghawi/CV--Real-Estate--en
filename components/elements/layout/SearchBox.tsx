import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <>
      {/* <button className="text-xl p-1 hover:bg-zinc-700 rounded-md">
        <IoMdSearch/>
      </button> */}
      <div className="flex items-center bg-white dark:bg-zinc-950 py-1 px-2.5 border border-zinc-300 dark:border-zinc-500 rounded-2xl">
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
    </>
  );
};

export default SearchBox;
