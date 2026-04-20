import { ChildrenType } from "@/types/types";

const Layout = ({children}: ChildrenType) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;