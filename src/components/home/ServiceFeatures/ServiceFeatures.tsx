import { Truck, CreditCard, Gift, MessageSquare } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "For All Orders Over $120",
    color: "#E0F7FA", // Light Blue
  },
  {
    icon: CreditCard,
    title: "Safe Payments",
    description: "100% Secure Payment",
    color: "#FFCC80", // Light Orange (replacing green)
  },
  {
    icon: Gift,
    title: "Discount Coupons",
    description: "Enjoy Huge Promotions",
    color: "#FFF9C4", // Light Yellow
  },
  {
    icon: MessageSquare,
    title: "Quality Support",
    description: "Dedicated 24/7 Support",
    color: "#FFB3E6", // Light Pink (replacing purple)
  },
];

const ServiceFeatures = () => {
  return (
    <div className="w-full md:px-4 md:py-16 py-4  bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className=" grid-cols-1 divide-x-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:grid hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-6 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex-shrink-0">
                <feature.icon
                  className="w-12 h-12 text-gray-700"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000, // Time between slide transitions in milliseconds (3 seconds)
              disableOnInteraction: false, // Continue autoplay even after user interacts with the slider
            }}
            navigation={{
              nextEl: `.swiper-prev-button`,
              prevEl: `.swiper-next-button`,
            }}
            // Update slide index
            pagination={{ clickable: true }}
            className="mySwiper !h-full"
          >
            {features.map((feature, index) => (
              <SwiperSlide style={{}} key={index}>
                <div
                  style={{
                    backgroundColor: `${feature.color}`,
                    backgroundImage: "url(/images/bg-page-title.png)",
                  }}
                  className={`  flex items-center space-x-4 bg-cover bg-no-repeat ${
                    index === 1
                      ? "bg-center "
                      : index === 2
                      ? "bg-left "
                      : index === 3
                      ? "bg-top "
                      : "bg-bottom"
                  } p-6 transition-all duration-300 justify-center  h-20`}
                >
                  <div className="flex-shrink-0">
                    <feature.icon
                      className="w-10 h-10 text-gray-700"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default ServiceFeatures;
