import NoicyBg from "@/components/common/bg/NoicyBg";
import HorizontalCard from "@/components/common/ProductCards/HorizontalCard";
import Sidebar from "@/components/common/Sidebar/Sidebar";

import { useEffect, useState } from "react";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router";

const HeaderMain = () => {
  const placeholders: string[] = [
    "Books...",
    "Bags...",
    "Calculators...",
    "Papers...",
    "Note books...",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0);
  const [isOpenCartItem, setIsOpenCartItem] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {" "}
      <NoicyBg>
        <div className="container mx-auto px-4 py-3 z-10">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className="cursor-pointer">
                <img
                  src="/images/logoheader.png"
                  className="h-8 cursor-pointer md:block hidden"
                  alt="logo"
                />
                <img
                  src="/images/favicon.png"
                  className="h-8 cursor-pointer block md:hidden"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex-1 h-full ">
              <div className="md:max-w-[80%]  max-w-[90%] m-auto w-full">
                <div className="w-full bg-white flex items-center justify-between border-foreground  rounded-full overflow-hidden  md:h-10 h-8">
                  <input
                    type="text"
                    placeholder={`Search for ${placeholders[placeholderIndex]}`}
                    className=" w-full h-full px-3 md:text-sm text-xs rounded-full overflow-hidden bg-transparent text-foreground outline-none"
                  />
                  <button className="bg-primary rounded-full text-white md:text-sm text-xs md:px-4 px-2 flex items-center  h-full justify-center ">
                    {" "}
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className=" flex items-center gap-4 text-gray-700">
                <Link to="/" className="relative md:block hidden">
                  <FiHeart size={22} />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Link>

                <div
                  onClick={() => setIsOpenCartItem(true)}
                  className="relative"
                >
                  <FiShoppingCart size={22} />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </div>

                <Link
                  to="/login"
                  className="flex items-center gap-1 rounded-full  md:border"
                >
                  <div className="flex items-center justify-center bg-white border rounded-full md:p-2 p-1 ">
                    <FiUser size={22} />
                  </div>
                  <div className="md:flex hidden items-center justify-center bg-transparent text-foreground pr-2 hoverText">
                    Login
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </NoicyBg>
      {/* side bars  */}
      <Sidebar
        isOpen={isOpenCartItem}
        title="Cart Items"
        onClose={() => setIsOpenCartItem(false)}
        position="right"
      >
        <div>
      
          <div className="space-y-2">
            <HorizontalCard />
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default HeaderMain;
