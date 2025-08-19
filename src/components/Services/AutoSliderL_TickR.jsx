import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaCheckCircle } from "react-icons/fa";

/**
 * MissionVision Section - Reusable
 *
 * @param {string} subTitle - Small subtitle
 * @param {string} title - Main heading
 * @param {string} description - Short paragraph
 * @param {Array} slides - Array of { img, alt, title, description }
 */
function SliderL_TickR({
  features = [],
  slides = [],
  backgroundImage = "",
  bgColor = "white", // new prop
}) {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const [imgVisible, setImgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => setImgVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const textObserver = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (imgRef.current) imgObserver.observe(imgRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (imgRef.current) imgObserver.unobserve(imgRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <section
      className="relative w-full py-10 md:py-16 md:px-14"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: bgColor, // fallback
      }}
    >
      <div className="container mx-auto px-6 flex flex-col md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column - Swiper Slider */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
            }}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="!pb-18  custom-pagination"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-4 md:pb-14 sm:p-6 rounded-3xl shadow-md text-left h-full flex flex-col justify-between custom-pagination">
                  <div>
                    <div className="flex justify-left mb-4">
                      <img
                        src={slide.img}
                        alt={slide.alt}
                        className="w-16 h-16 sm:w-18 sm:h-18 object-contain"
                      />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-extrabold mb-2">
                      {slide.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base font-medium">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Right Column - Text */}
        <div
          ref={textRef}
          className={`transition-all duration-700 ease-out pl-5 md:pl-0 ${
            textVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-left space-y-2 sm:space-y-2 lg:space-y-4 sm:mr-10 lg:mr-20">
            {/* Features List */}
            {features.length > 0 && (
              <div
                className={`transition-all duration-700 delay-400 ${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <ul className="space-y-2 sm:space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="group flex items-start gap-2 text-gray-800 text-sm sm:text-base md:text-lg cursor-pointer transition-all duration-300 hover:text-[#fc2512]"
                    >
                      <span className="text-black mt-1 transition-colors duration-300 group-hover:text-[#fc2512]">
                        <FaCheckCircle size={20} />
                      </span>
                      <span className="transition-colors text-[16px] sm:text-[18px] md:text-[20px] duration-300 group-hover:text-black">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Pagination Styling */}
      <style>{`
      .custom-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
   background: #6e0000; 
  opacity: 0.3;           /* faded for inactive */
  transition: all 0.3s ease;
  border-radius: 50%;
}

.custom-pagination .swiper-pagination-bullet-active {
  opacity: 1;            /* solid color */
  width: 16px;
  height: 16px;
  background: #6e0000;
}



      `}</style>
    </section>
  );
}

export default SliderL_TickR;

// we can use this component like this

// import SliderL_TickR from "./";

// const missionSlides = [
//   {
//     img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/03/mission.webp",
//     alt: "Our Mission",
//     title: "Our Mission",
//     description:
//       "Our mission is to empower growth and innovation through technology, creating impactful solutions for businesses and individuals.",
//   },
//   {
//     img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/03/vision.webp",
//     alt: "Our Vision",
//     title: "Our Vision",
//     description:
//       "Our vision is to lead technological advancement responsibly while promoting sustainability and inspiring the next generation of passionate innovators.",
//   },
//   {
//     img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/03/values.webp",
//     alt: "Our Values",
//     title: "Our Values",
//     description:
//       "Our values are to foster innovation, integrity, and collaboration, while committing to sustainability and excellence in all our endeavors.",
//   },
// ];

// function AboutPage() {
//   return (
//     <SliderL_TickR
//       features={[
//         "Responsive and mobile-friendly",
//         "Improved SEO structure",
//         "Faster load times",
//         "Modern UI/UX design",
//       ]}
//       slides={missionSlides}
//     />
//   );
// }
