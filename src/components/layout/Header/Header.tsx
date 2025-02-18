import { useEffect, useState } from "react";
import BottomHeader from "./BottomHeader";
import HeaderMain from "./HeaderMain";
import TopHeader from "./TopHeader";
import ScrollToTopButton from "./ScrollToTopButton";
import { BottomNavBar } from "./BottomNavBar";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);
  return (
    <div className="flex flex-col border-b">
      <TopHeader />
      <HeaderMain />
      <BottomHeader />

      <div
        className={`fixed duration-300 w-full shadow-md z-50 ${
          scrollPosition >= 130 ? "top-0" : "-top-32"
        }`}
      >
        <HeaderMain />
      </div>

      {/* up button */}

      <ScrollToTopButton />
      <BottomNavBar />
    </div>
  );
};

export default Header;
