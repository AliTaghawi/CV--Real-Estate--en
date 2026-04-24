import { ChildrenType } from "@/types/types";
import Header from "@/layout/Header"

const Layout = ({ children }: ChildrenType) => {
  return (
    <>
    <Header />
      <main className="max-w-7xl h-full w-full mx-auto mb-auto">
        {children}
      </main>
      <footer className="max-w-7xl w-full mx-auto">Footer</footer>
    </>
  );
};

export default Layout;
