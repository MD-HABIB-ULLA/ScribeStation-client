import { FaArrowRightLong } from "react-icons/fa6";

const Offer = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/bg.webp)" }}
      className="md:h-[180px] w-full bg-cover bg-no-repeat bg-center md:my-8 my-4 py-6"
    >
      <div className="container m-auto px-6 flex flex-col md:flex-row justify-between items-center h-full text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto">
          <div className="md:pr-16 md:border-r-2 border-foreground flex flex-col text-center md:text-left">
            <h1 className="text-lg md:text-3xl font-bold text-foreground">
              SALE 10% OFF
            </h1>
            <span className="text-xs md:text-sm font-light mt-2 text-gray-500">
              Art & painting supplies
            </span>
          </div>
          <div className="flex flex-col md:pl-4 mt-2 md:mt-0">
            <span className="text-xs md:text-sm font-light text-gray-500">
              Starts at
            </span>
            <h1 className="text-lg md:text-3xl font-bold text-foreground">
              $190
            </h1>
          </div>
        </div>

        {/* Right Section - Button */}
        <div className="mt-4 md:mt-0">
          <button className="rounded-full px-4 md:px-6 py-2 border border-foreground text-foreground hover:text-white hover:border-primary hover:bg-primary bg-transparent text-xs md:text-sm flex items-center gap-1 md:gap-2">
            Shop Now <FaArrowRightLong className="text-xs md:text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
