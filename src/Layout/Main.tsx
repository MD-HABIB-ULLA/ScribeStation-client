import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className=" min-h-screen ">
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
