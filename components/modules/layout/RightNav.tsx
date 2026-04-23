import LoginProfile from "@/elements/layout/LoginProfile";
import SearchBox from "@/elements/layout/SearchBox";
import Themes from "@/elements/layout/Themes";

const RightNav = () => {
  return (
    <div className="flex items-center gap-4">
      <SearchBox/>
      <Themes />
      <LoginProfile />
    </div>
  );
};

export default RightNav;
