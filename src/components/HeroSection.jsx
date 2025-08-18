import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import InfiniteSwiperCarousel from "./Markquee";
import Aboutus from "./Home/Aboutus";
import Timeline from "./Home/Work";
import Faq from "./Home/faq";

const heroData = [
  {
    title: "Next-Gen Websites for Future-Ready Businesses!",
    description:
      "Transforming digital landscapes with next-gen, future-ready web solutions for unstoppable business growth!",
    button: "GET STARTED NOW!",
  },
  {
    title: "Smart , Scalable & Secure Software Solutions!",
    description:
      "Smart web solutions to scale your brand, engage users, and drive results.",
    button: "CONTACT US",
  },
  {
    title: "Smart E-commerce Solutions for Modern Businesses!",
    description:
      "Delivering blazing fast performance, stunning UI, and powerful scalability.",
    button: "SEE OUR WORK",
  },
  {
    title: "Turning Visions into Stunning Mobile Apps!",
    description:
      "Smart web solutions to scale your brand, engage users, and drive results.",
    button: "CONTACT US",
  },
];

const HeroSection = () => {
  return (
    <div className="bg-[url('/Bg2.png')] bg-cover">
      <section className="w-full h-screen flex items-center justify-center  relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="w-full h-full"
        >
          {heroData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center h-full text-center px-6 md:mx-16 xl:mx-36 md:mt-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6  drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg lg:text-xl  mb-8 max-w-2xl">
                  {slide.description}
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-full text-base md:text-lg hover:bg-gray-800 transition">
                  {slide.button}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-swiper-prev absolute left-4 sm:left-6 top-[60%] -translate-y-1/2 z-20 bg-[#5f5f5f] text-white p-2  rounded-full shadow-lg cursor-pointer hover:bg-gray-200 transition">
          <FaAngleLeft size={20} />
        </div>
        <div className="custom-swiper-next absolute right-4 sm:right-6 top-[60%] -translate-y-1/2 z-20 bg-[#5f5f5f] text-white p-2  rounded-full shadow-lg cursor-pointer hover:bg-gray-200 transition">
          <FaAngleRight size={20} />
        </div>
      </section>
      <InfiniteSwiperCarousel />
      <InfiniteSwiperCarousel />
      <InfiniteSwiperCarousel />
      <InfiniteSwiperCarousel />
    </div>
  );
};

export default HeroSection;
