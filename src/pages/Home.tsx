import Banner from "@/components/home/Banner/Banner";
import BestSelling from "@/components/home/bestSelling/BestSelling";
import NewsletterForm from "@/components/home/NewsletterForm/NewsletterForm";
import Offer from "@/components/home/Offer/Offer";
import Tab from "@/components/home/ProductTabs/Tab";
import TestimonialSlider from "@/components/home/reviews/TestimonialSlider";
import ServiceFeatures from "@/components/home/ServiceFeatures/ServiceFeatures";
import ShopByCategory from "@/components/home/shopByCategory/ShopByCategory";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("https://www.examtice.com/backend/api/getCourses")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <Banner />
      <ServiceFeatures />
      <Tab />
      <Offer />
      <ShopByCategory />
      <BestSelling />
      <TestimonialSlider />
      <NewsletterForm />
    </div>
  );
};

export default Home;
