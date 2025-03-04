import MainProductCard from "@/components/common/ProductCards/MainProductCard";
import Title from "@/components/common/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const BestSelling = () => {
  return (
    <div className=" ">
      <div className="max-w-7xl mx-auto px-4 md:py-16 py-4">
        {/* Header */}
        <Title
          title="Best Sellers"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident incidunt a voluptates explicabo soluta voluptatum doloribus asperiores, deleniti nemo dolorem debitis culpa voluptatibus saepe aliquam praesentium eveniet! Laborum, eum!"
        />
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={'auto'}
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
            <SwiperSlide key={index} className="flex justify-center md:!w-[250px] !w-[200px]">
              <MainProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSelling;
