import { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down 100vh
      if (window.scrollY >= window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  return (
    <>
 
        <button
          onClick={scrollToTop}
          className={`fixed md:bottom-10 bottom-16 md:right-10 right-5 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition duration-300 ${showButton? "scale-100" : "scale-0"}`}
        >
          <FaAnglesUp />
        </button>

    </>
  );
};

export default ScrollToTopButton;
