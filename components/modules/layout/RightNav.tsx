import LoginProfile from "@/elements/layout/LoginProfile";
import SearchBox from "@/elements/layout/SearchBox";
import Themes from "@/elements/layout/Themes";

const RightNav = () => {
  return (
    <div className="flex items-center gap-1 md:gap-4 text-sm md:text-base">
      <SearchBox/>
      <Themes />
      <LoginProfile />
    </div>
  );
};

export default RightNav;
