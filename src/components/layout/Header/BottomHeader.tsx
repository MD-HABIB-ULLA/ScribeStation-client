import DropDwonOne from "@/components/common/dropdwons/DropDwonOne";
import { TbCategoryMinus } from "react-icons/tb";
import { categories } from "./HeaderLinks";
import { NavLink } from "react-router";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useState } from "react";
import Sidebar from "@/components/common/Sidebar/Sidebar";

const BottomHeader = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  return (
    <>
      {" "}
      <div className="container mx-auto px-4  ">
        <div className="flex justify-between items-center">
          <div className="md:block hidden">
            <DropDwonOne
              content={
                <>
                  <ul className=" md:text-sm text-xs w-40 bg-white border border-gray-200 shadow-lg rounded overflow-hidden">
                    {categories.map((item, i) => (
                      <li
                        key={i}
                        className="px-2 py-1.5 border-b  hoverText cursor-pointer"
                      >
                        <div className="flex items-center gap-2 ">
                          <div>{item.icon}</div>
                          <div>{item.name}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              }
            >
              <div className="flex gap-2 items-center py-2 ">
                <TbCategoryMinus />
                <div className="text-[10px] lg:text-sm text-foreground font-bold hoverText">
                  Browse Categories
                </div>
              </div>
            </DropDwonOne>
          </div>

          <div
            onClick={() => setIsOpenCategory(true)}
            className="flex  md:hidden gap-2 items-center py-2 "
          >
            <TbCategoryMinus />
            <div className="text-[10px] lg:text-sm text-foreground font-bold hoverText">
              Browse Categories
            </div>
          </div>
          <nav className="flex-1 md:flex hidden  items-center lg:text-sm text-xs justify-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 ${
                  isActive
                    ? "text-primary border-b-2 border-primary font-bold"
                    : "text-foreground  hoverText"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `px-4 py-2 ${
                  isActive
                    ? "text-primary border-b-2 border-primary font-bold"
                    : "text-foreground hoverText"
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 ${
                  isActive
                    ? "text-primary border-b-2 border-primary font-bold"
                    : "text-foreground hoverText"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `px-4 py-2 ${
                  isActive
                    ? "text-primary border-b-2 border-primary font-bold"
                    : "text-foreground hoverText"
                }`
              }
            >
              Contacts
            </NavLink>
          </nav>
          <div>
            <div className="flex items-center justify-center  py-2 rounded-lg ">
              <HiOutlineLightBulb className="text-primary text-2xl mr-2" />
              <span className="lg:text-sm text-[10px] font-bold text-foreground">
                Clearance Up To <span className="text-primary">30% Off</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* category sider bars  */}
      <Sidebar
        isOpen={isOpenCategory}
        onClose={() => setIsOpenCategory(false)}
        title="Categories"
        position="left"
      >
        <ul className=" md:text-sm text-xs  bg-white border border-gray-200 shadow-lg rounded overflow-hidden">
          {categories.map((item, i) => (
            <li
              key={i}
              className="px-2 py-1.5 border-b  hoverText cursor-pointer"
            >
              <div className="flex items-center gap-2 ">
                <div>{item.icon}</div>
                <div>{item.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </Sidebar>
    </>
  );
};

export default BottomHeader;
