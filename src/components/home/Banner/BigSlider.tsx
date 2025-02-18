import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

export default function BigSlider() {
  return (
    <div className="relative h-full group">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: `.swiper-prev-button`,
          prevEl: `.swiper-next-button`,
        }}
        pagination={{ clickable: true }}
        className="mySwiper !h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full !h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="absolute group-hover:block hidden left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-primary p-2 rounded-full  swiper-next-button">
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      <button className="absolute group-hover:block hidden right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-primary p-2 rounded-full">
        <ChevronRight className="h-8 w-8 text-white swiper-prev-button" />
      </button>
    </div>
  );
}
