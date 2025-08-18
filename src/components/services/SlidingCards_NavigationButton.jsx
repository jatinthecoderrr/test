import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TriangleBullet from "../Home/TriangleBullet"

/**
 * Reusable Services Slider Section
 *
 * @param {string} subTitle - Small subtitle above heading
 * @param {string} title - Split-letter heading
 * @param {Array} services - Services list [{ icon, title, description }]
 * @param {string} bgColor - Background color (default #f5f3f0)
 */
function ServicesSlider({
  subTitle = "",
  title = "",
  discription = "",
  services = [],
  bgColor = "#f5f3f0",
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="w-full h-full py-12 md:pb-18 md:pt-12 md:px-14 relative z-10"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Subtitle */}
        <div className="text-[rgb(91,91,91)] justify-center items-center flex gap-3 text-[19px] font-extrabold mb-2 uppercase animate-fadeInDown">
          <TriangleBullet /> <span>{subTitle}</span>
        </div>

        {/* Split-letter Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex justify-center flex-wrap leading-snug">
          {title.split("").map((char, i) => (
            <span
              key={i}
              className="split-letter"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <p className="pd-5 md:pb-10 text-gray-600 text-lg font-medium"> 
            {discription}
        </p>

        <div className="relative mt-8">
          {/* Slider Buttons */}
          <div className="flex gap-3 justify-center md:justify-end md:absolute md:right-0 md:-top-14 mb-4 md:mb-0">
            <button
              ref={prevRef}
              className="service-prev p-3 rounded-full shadow-md bg-gray-100 hover:bg-[#e82110] transition group/arrow"
            >
              <FaArrowLeft className="text-black group-hover/arrow:text-white transition" />
            </button>
            <button
              ref={nextRef}
              className="service-next p-3 rounded-full shadow-md bg-gray-100 hover:bg-[#e82110] transition group/arrow"
            >
              <FaArrowRight className="text-black group-hover/arrow:text-white transition" />
            </button>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            loop={true}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl gap-4 shadow-lg p-6 flex flex-col justify-between pb-14 w-full h-full transition-transform group">
                  <div className="flex flex-col gap-4 relative">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-16 h-16 object-contain mx-auto md:mx-0 group-hover:animate-bounce"
                    />
                    <div>
                      <h3 className="text-[26px] font-semibold text-left pb-1 md:text-xl text-black">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-[18px] text-left text-sm md:text-base">
                        {service.description}
                      </p>
                      <button className="absolute -bottom-12 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#e82110] transition group/arrow">
                        <FaArrowRight className="text-black group-hover/arrow:text-white transition" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ServicesSlider;


//how to use this component
// import ServicesSlider from "./ServicesSlider";

// const servicesData = [
//   {
//     icon: "/icons/web.png",
//     title: "Web Development",
//     description: "Build scalable, responsive websites tailored to your needs.",
//   },
//   {
//     icon: "/icons/app.png",
//     title: "App Development",
//     description: "High-performance mobile apps for iOS and Android.",
//   },
//   {
//     icon: "/icons/seo.png",
//     title: "SEO Optimization",
//     description: "Boost your rankings and online visibility.",
//   },
//   {
//     icon: "/icons/marketing.png",
//     title: "Digital Marketing",
//     description: "Grow your brand with smart marketing strategies.",
//   },
// ];

// function HomePage() {
//   return (
//     <ServicesSlider
//       subTitle="What We Offer"
//       title="Our Premium Services"
//       services={servicesData}
//       bgColor="#f5f3f0"
//     />
//   );
// }
