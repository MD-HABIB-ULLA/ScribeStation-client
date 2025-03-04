import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Import Swiper styles

interface Testimonial {
  id: number;
  name: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Debanjan Roy",
    image: "/images/avater.webp",
    quote:
      "Sedac risus phasellus lacinia, magna a ullamcorper laoreet, lectusarcu pulvinar risus, vitae facilisis libero dolor a purus.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "/images/avater.webp",
    quote:
      "Exceptional service and attention to detail. The team went above and beyond my expectations. I couldn't be happier with the results.",
  },
  {
    id: 3,
    name: "Michael Chen",
    image: "/images/avater.webp",
    quote:
      "The level of professionalism and expertise demonstrated was outstanding. I highly recommend their services to anyone.",
  },
];

export default function TestimonialSlider() {
  const [mounted, setMounted] = useState(false);

  // Handle hydration issues with Swiper
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      style={{ backgroundImage: "url(/images/bg-1.webp)" }}
      className="relative   py-16 bg-cover bg-no-repeat "
    >
      <div className="container m-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className=" pb-7">
              <div className="flex flex-col items-center px-4 text-center">
                <div className="relative h-20 w-20 overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name}'s testimonial`}
                    className="rounded-full object-cover size-[80px]"
                  />
                </div>
                <blockquote className="mt-6 max-w-xl text-sm text-gray-600">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="mt-3 block text-base font-semibold not-italic text-foreground">
                  {testimonial.name}
                </cite>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
