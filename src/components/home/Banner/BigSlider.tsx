import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BigSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -50, transition: { duration: 1 } },
  };
  const messageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 1.5 } },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    exit: { opacity: 0, y: -50, transition: { duration: 2 } },
  };
  return (
    <div className="relative h-full group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000, // Time between slide transitions in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay even after user interacts with the slider
        }}
        navigation={{
          nextEl: `.swiper-prev-button`,
          prevEl: `.swiper-next-button`,
        }}
        onSlideChange={({ activeIndex }) => setSlideIndex(activeIndex)} // Update slide index
        pagination={{ clickable: true }}
        className="mySwiper !h-full"
      >
        <SwiperSlide>
          <div
            className="bg-cover bg-center rounded-xl bg-no-repeat h-full md:p-16  shadow-md p-4 flex"
            style={{ backgroundImage: "url(/images/station-slider-06.jpg)" }}
          >
            <div className="h-full w-full flex items-center overflow-hidden  justify-center md:justify-start">
              <div className="flex flex-col md:items-start items-center md:gap-8 gap-1 ">
                <motion.div
                  key={`title-${slideIndex}`} // Ensure a unique key for title
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={nameVariants}
                  className="text-sm"
                >
                  ScribeStation
                </motion.div>
                <motion.div
                  key={`message-${slideIndex}`} // Ensure a unique key for message
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={messageVariants}
                  className="md:text-4xl md:text-left text-center text-xl font-bold w-[70%]"
                >
                  Stationery That Inspires Creativity
                </motion.div>
                <motion.div
                  key={`button-${slideIndex}`} // Ensure a unique key for button
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={buttonVariants}
                  className=""
                >
                  <button className="rounded-full md:px-3 py-1 border px-3  md:py-2 border-foreground text-foreground hover:text-white hover:border-primary hover:bg-primary bg-transparent md:text-sm text-[10px] flex items-center gap-1 md:gap-2">
                    Shop Now <FaArrowRightLong />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* New Slide with White Foreground and Different Title */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center rounded-xl bg-no-repeat shadow-md h-full md:p-16 p-4 flex"
            style={{ backgroundImage: "url(/images/station-slider-01.jpg)" }}
          >
            <div className="h-full w-full flex items-center overflow-hidden justify-center md:justify-start">
              <div className="flex flex-col md:items-start items-center md:gap-8 gap-1">
                <motion.div
                  key={`title-${slideIndex + 1}`} // Unique key for the new title
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={nameVariants}
                  className="text-sm text-white"
                >
                  PaperWorld {/* New title */}
                </motion.div>
                <motion.div
                  key={`message-${slideIndex + 1}`} // Unique key for the new message
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={messageVariants}
                  className="md:text-4xl md:text-left text-center text-xl font-bold w-[70%] text-white"
                >
                  Your Imagination, Our Paper
                </motion.div>
                <motion.div
                  key={`button-${slideIndex + 1}`} // Unique key for the new button
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={buttonVariants}
                  className=""
                >
                  <button className="rounded-full md:px-3 py-1 border px-3 md:py-2 border-white text-white hover:text-white hover:border-primary hover:bg-primary bg-transparent md:text-sm text-[10px] flex items-center gap-1 md:gap-2">
                    Shop Now <FaArrowRightLong />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="absolute group-hover:opacity-100 opacity-0 transition-all   left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-primary md:p-2 p-1 rounded-full  swiper-next-button">
        <ChevronLeft className="md:h-8 h-4 md:w-8 w-4 text-white" />
      </button>
      <button className="absolute group-hover:opacity-100 opacity-0 transition-all  right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-primary md:p-2 p-1 rounded-full">
        <ChevronRight className="md:h-8 h-4 md:w-8 w-4 text-white swiper-prev-button" />
      </button>
    </div>
  );
}
