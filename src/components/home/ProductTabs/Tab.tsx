import MainProductCard from "@/components/common/ProductCards/MainProductCard";
import Title from "@/components/common/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TabItem = {
  id: string;
  label: string;
};

const tabs: TabItem[] = [
  { id: "deals", label: "DEALS" },
  { id: "journals", label: "JOURNALS" },
  { id: "fancy-pen", label: "FANCY PEN" },
  { id: "backpacks", label: "BACKPACKS" },
  { id: "gift-bags", label: "GIFT BAGS" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("deals");

  const renderContent = () => {
    switch (activeTab) {
      case "deals":
        return (
          <div className="p-4 ">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={"auto"} // Show 5 cards at a time
              loop={true}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-next-button",
                prevEl: ".swiper-prev-button",
              }}
              pagination={{ clickable: true }}
              className="mySwiper w-full"
            >
              {/* Product Slides */}
              {[...Array(10)].map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center md:!w-[250px] !w-[200px]"
                >
                  <MainProductCard />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        );
      case "journals":
        return <div className="p-4">Journals Content</div>;
      case "fancy-pen":
        return <div className="p-4">Fancy Pen Content</div>;
      case "backpacks":
        return <div className="p-4">Backpacks Content</div>;
      case "gift-bags":
        return <div className="p-4">Gift Bags Content</div>;
      default:
        return <div className="p-4">Please select a category</div>;
    }
  };

  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-16">
        {/* Header */}
        <Title
          title="Cute Stationery"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident incidunt a voluptates explicabo soluta voluptatum doloribus asperiores, deleniti nemo dolorem debitis culpa voluptatibus saepe aliquam praesentium eveniet! Laborum, eum!"
        />

        {/* Tab Navigation */}
        <div className="md:flex justify-center space-x-8  hidden  border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 text-sm font-medium tracking-wider transition-colors duration-200
                ${
                  activeTab === tab.id
                    ? "  text-foreground font-bold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative block md:hidden ">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={"auto"}
            loop={true}
            navigation={{
              nextEl: ".swiper-next-button-tab",
              prevEl: ".swiper-prev-button-tab",
            }}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {/* Product Slides */}
            {tabs.map((tab) => (
              <SwiperSlide
                key={tab.id}
                className="flex justify-center !w-auto py-2"
              >
                <Button
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-3 text-sm font-medium tracking-wider transition-colors duration-200 bg-white
            ${
              activeTab === tab.id
                ? "text-white font-bold bg-primary "
                : "text-gray-500 hover:text-gray-700"
            }`}
                >
                  {tab.label}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="absolute flex justify-start items-center  bg-gradient-to-l from-transparent to-white  transition-all   left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer  w-16 text-primary md:p-2  h-full p-1  swiper-next-button-tab">
            <ChevronLeft className="md:h-8 h-4 md:w-8 w-4 " />
          </button>
          <button className="absolute  flex justify-end items-center    transition-all  right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-gradient-to-r from-transparent to-white w-16 text-primary md:p-2 p-1 h-full   swiper-prev-button-tab">
            <ChevronRight className="md:h-8 h-4 md:w-8 w-4  " />
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Index;
