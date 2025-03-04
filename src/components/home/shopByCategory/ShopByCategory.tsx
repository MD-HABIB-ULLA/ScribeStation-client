import Title from "@/components/common/Title/Title";

const ShopByCategory = () => {
  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-16">
        {/* Header */}
        <Title
          title="Shop by Categories"
          description="Essential office supplies in our online stationery shop that keep your office operations smooth and efficient"
        />

        <div className="grid md:grid-cols-3 md:grid-rows-2 grid-rows-6 gap-2">
          <div
            className="row-span-2 bg-rose-200 overflow-hidden  rounded-xl  h-full bg-cover bg-no-repeat bg-center  "
            style={{ backgroundImage: "url(/images/cat1.webp)" }}
          >
            <div className="h-full w-full gradient p-6  flex flex-col justify-end items-center">
              <span className="capitalize px-3 bg-white text-sm rounded-full  py-2 ">
                penchil & paper
              </span>
            </div>
          </div>
          <div
            className="bg-blue-400  md:h-[235px] h-[180px]  rounded-xl bg-cover bg-no-repeat bg-center  overflow-hidden"
            style={{ backgroundImage: "url(/images/cat2.avif)" }}
          >
            <div className="h-full w-full gradient p-6  flex flex-col justify-end items-center">
              <span className="capitalize px-3 bg-white text-sm rounded-full  py-2 ">
                penchil & paper
              </span>
            </div>
          </div>
          <div
            className="row-span-2 bg-rose-200 overflow-hidden rounded-xl  h-full bg-cover bg-no-repeat bg-center   "
            style={{ backgroundImage: "url(/images/cat3.avif)" }}
          >
            <div className="h-full w-full gradient p-6  flex flex-col justify-end items-center">
              <span className="capitalize px-3 bg-white text-sm rounded-full  py-2 ">
                penchil & paper
              </span>
            </div>
          </div>
          <div
            className="bg-blue-400  md:h-[235px] h-[180px]  rounded-xl overflow-hidden   bg-cover bg-no-repeat bg-center "
            style={{ backgroundImage: "url(/images/cat4.webp)" }}
          >
            <div className="h-full w-full gradient p-6  flex flex-col justify-end items-center">
              <span className="capitalize px-3 bg-white text-sm rounded-full  py-2 ">
                penchil & paper
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
