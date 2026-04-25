import { ChildrenType } from "@/types/types";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const Layout = ({ children }: ChildrenType) => {
  return (
    <>
      <Header />
      <main className="max-w-7xl px-2.5 xl:px-0 h-full w-full mx-auto mb-auto">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
