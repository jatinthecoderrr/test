
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const defaultLogos = [
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "React JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "JAVA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Swift", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

export default function InfiniteSwiperCarousel({
  logos = defaultLogos,
  speed = 5000,
  pauseDuration = 0,
  spaceBetween = 20,
}) {
  const swiperRef = useRef(null);

  const handleInteraction = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
      clearTimeout(swiperRef.current._restartTimer);
      swiperRef.current._restartTimer = setTimeout(() => {
        swiperRef.current.autoplay.start();
      }, pauseDuration);
    }
  };

  return (
    <div className="w-full p-4  overflow-hidden">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={speed}
        slidesPerView="auto"
        spaceBetween={spaceBetween}
        grabCursor={true}
        freeMode={true}
        freeModeMomentum={false}
        allowTouchMove={true}
        className="mySwiper"
      >
        {[...logos, ...logos].map((logo, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto"
            onClick={handleInteraction}
            onTouchStart={handleInteraction}
            onMouseDown={handleInteraction}
          >
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-white shadow cursor-pointer select-none transition">
              <img src={logo.src} alt={logo.name} className="h-6 w-6" />
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
