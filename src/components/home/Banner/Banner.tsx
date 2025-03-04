import { FaArrowRightLong } from "react-icons/fa6";
import BigSlider from "./BigSlider";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/banner.jpg)" }}
      className="lg:h-[600px] h-auto bg-cover bg-center bg-no-repeat"
    >
      <div className="h-full w-full container m-auto lg:py-16 md:py-8 py-4 px-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 md:gap-4 gap-2 h-full">
          {/* Big Slider (Takes 3 columns on large, full width on smaller screens) */}
          <div className="overflow-hidden   lg:col-span-3 md:col-span-2 md:row-span-2 row-span-1  col-span-1 md:h-full  h-[180px]">
            <BigSlider />
          </div>

          {/* Colored Blocks - Adjusted for better responsiveness */}
          <div
            style={{ backgroundImage: "url(/images/sidebanner.avif)" }}
            className=" lg:col-span-2 shadow-md  col-span-1 h-[180px] md:h-[250px] bg-cover bg-center lg:h-full rounded-xl md:block hidden text-center md:text-left "
          >
            <div className=" p-8  h-full  flex flex-col md:items-start items-center justify-center">
              <h1 className="text-sm   text-forgive mb-4 bg-cover bg-center">
                Office/Home
              </h1>
              <p className="text-3xl text-foreground font-bold mb-6">Metal Taps</p>
              <button className="rounded-full md:px-3 py-1 border px-3   border-foreground text-foreground hover:text-white hover:border-primary hover:bg-primary bg-transparent md:text-sm text-[10px] flex items-center gap-1 md:gap-2">
                Shop Now <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url(/images/tap.avif)" }}
            className=" lg:col-span-2 shadow-md  col-span-1 h-[180px] md:h-[250px] bg-cover bg-center lg:h-full rounded-xl md:block hidden text-center md:text-left "
          >
            <div className=" p-8  h-full  flex flex-col md:items-start items-center justify-center">
              <h1 className="text-sm   text-forgive mb-4 bg-cover bg-center">
                Office/Home
              </h1>
              <p className="text-3xl text-foreground font-bold mb-6">Metal Pens</p>
              <button className="rounded-full md:px-3 py-1 border px-3  border-foreground text-foreground hover:text-white hover:border-primary hover:bg-primary bg-transparent md:text-sm text-[10px] flex items-center gap-1 md:gap-2">
                Shop Now <FaArrowRightLong />
              </button>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Banner;
