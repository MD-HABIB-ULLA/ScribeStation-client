import { BsQuestion } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


import { useState } from "react";
import DropDwonOne from "@/components/common/dropdwons/DropDwonOne";
const TopHeader = () => {
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("Doller");
  return (
    <div>
      <div className=" text-foreground font-extralight  ">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="sm:flex hidden items-center gap-4">
           
            <div className="text-light-gray text-xs md:text-sm transition-colors duration-500 flex items-center gap-1 group cursor-pointer">
              <FaWhatsapp className="group-hover:text-primary transition-colors duration-500 " />
              <span>+8801310704365</span>
            </div>
          </div>
          <div className="text-xs md:text-sm hidden md:block">
            <span>World`s Fastest Online Shopping Destination</span>
          </div>
          <div className="text-xs md:text-sm sm:hidden block text-center flex-1">
            <span>World`s Fastest Online Shopping Destination</span>
          </div>
          <div className="text-light-gray text-xs md:text-sm flex gap-2 items-center">
            <div className="hidden md:flex  cursor-pointer hover:text-primary transition-all duration-500 items-center">
              <span>Help</span>
              <BsQuestion />
            </div>
            <div className="hidden md:flex cursor-pointer hover:text-primary transition-all duration-500  items-center">
              <span>Track Order</span>
              <BsQuestion />
            </div>
            <div className="sm:flex gap-2 hidden">
              <DropDwonOne
                content={
                  <>
                    <ul className="  w-24 bg-white border border-gray-200 shadow-lg rounded overflow-hidden">
                      <li
                        onClick={() => setLanguage("Italiano")}
                        className="px-4 py-2 border-b hoverText cursor-pointer"
                      >
                        Italiano
                      </li>
                      <li
                        onClick={() => setLanguage("English")}
                        className="px-4 py-2  hoverText cursor-pointer"
                      >
                        English
                      </li>
                    </ul>
                  </>
                }
              >
                <div className="flex cursor-pointer hover:text-primary transition-all duration-500 gap- items-center">
                  <span>{language}</span>
                  <IoIosArrowDown />
                </div>
              </DropDwonOne>

              <DropDwonOne
                alignMent="right"
                content={
                  <>
                    <ul className="  w-24 bg-white border border-gray-200 shadow-lg rounded overflow-hidden">
                      <li
                        onClick={() => setCurrency("Doller")}
                        className="px-4 py-2 border-b hoverText cursor-pointer"
                      >
                        Doller $
                      </li>
                      <li
                        onClick={() => setCurrency("Euro")}
                        className="px-4 py-2  hoverText cursor-pointer"
                      >
                        Euro €
                      </li>
                    </ul>
                  </>
                }
              >
                <div className="flex cursor-pointer hover:text-primary transition-all duration-500 gap-1 items-center">
                  <span>{currency}</span>
                  <IoIosArrowDown />
                </div>
              </DropDwonOne>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
