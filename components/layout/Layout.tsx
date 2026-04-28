import { ChildrenType } from "@/types/types";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import MobileMenu from "@/modules/layout/MobileMenu";

const Layout = ({ children }: ChildrenType) => {
  return (
    <>
      <Header />
      <main className="px-2.5 xxl:px-0 w-full mx-auto mb-auto ">
        <div className="max-w-8xl mx-auto min-h-[calc(100vh-167px)]">{children}</div>
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default Layout;
