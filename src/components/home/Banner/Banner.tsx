import BigSlider from "./BigSlider";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/bannerbg.webp)" }}
      className="lg:h-[600px] h-auto bg-cover bg-center bg-no-repeat"
    >
      <div className="h-full w-full container m-auto py-16 px-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-3 gap-4 h-full">
          {/* Big Slider (Takes 3 columns on large, full width on smaller screens) */}
          <div className="overflow-hidden rounded-3xl lg:col-span-3 md:col-span-2 md:row-span-2 row-span-1  col-span-1 h-full">
            <BigSlider />
          </div>

          {/* Colored Blocks - Adjusted for better responsiveness */}
          <div className="bg-rose-400 lg:col-span-2  col-span-1 h-[250px] lg:h-full rounded-3xl"></div>
          <div className="bg-cyan-400 lg:col-span-2  col-span-1 h-[250px] lg:h-full rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

