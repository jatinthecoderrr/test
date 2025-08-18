import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../Services/Animated_SectionHeader";

/**
 * MissionVision Section - Reusable
 *
 * @param {string} subTitle - Small subtitle
 * @param {string} title - Main heading
 * @param {string} description - Short paragraph
 * @param {Array} slides - Array of { img, alt, title, description }
 */
function MissionVision({
  subTitle = "Mission & Vision",
  title = "Our Mission and Vision",
  description = "Empowering innovation through technology and promoting a sustainable future.",
  slides = [],
  backgroundImage = "", // new prop
}) {
  return (
    <section
      className="relative w-full py-10 md:py-16 md:px-14"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "", // fallback
      }}
    >
      <div className="container mx-auto px-6 flex flex-col md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Column - Text */}
         <SectionHeader
        subTitle={subTitle}
        titleWords={title}
        description={description}
        text_align="md:text-left"
      />

        {/* Right Column - Swiper Slider */}
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

export default MissionVision;


// we can use this component like this

// import MissionVision from "./";

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
//     <MissionVision
//       subTitle="Company Goals"
//       title="Mission, Vision & Values"
//       description="Driving innovation while staying committed to sustainability."
//       slides={missionSlides}
//     />
//   );
// }
