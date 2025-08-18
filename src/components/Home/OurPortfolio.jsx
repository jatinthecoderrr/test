import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import SectionHeader from "./HeaderComponent"; // Adjust path if needed
import Button from "../Button"; // Adjust path if needed


const projects = [
  {
    title: "Fit For Tooth",
    description: "Appointment Booking Website",
    image: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/01/fitfortooth.webp",
  },
  {
    title: "Ednue Technologies Pvt. Ltd.",
    description: "Institution Website",
    image: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/01/eee-1-1.png",
  },
  {
    title: "Kumkumadi Lip Balm",
    description: "E-commerce Cosmetic Product",
    image: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/01/padma.webp",
  },
  {
    title: "Government Polytechnic",
    description: "College Website",
    image: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/agarpolytechnic.geektheo.com_1.png",
  },
  {
    title: "SkilledU",
    description: "Institute Website",
    image: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/skilledu.in_geek-e1749724209859.png",
  },
  {
    title: "Socratech AI",
    description: "Web App",
    image: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/socratech-1-scaled-e1749725589409.png",
  },
];

// Component to handle each card with active-state logic
const ProjectCard = ({ project }) => {
  const { isActive } = useSwiperSlide();

  return (
    <div className="relative group overflow-hidden rounded-xl w-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[520px] object-cover rounded-xl"
      />
      {isActive && (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 rounded-xl flex flex-col justify-end p-6 opacity-100 transition duration-2000"
          >
            <button
              type="button"
              className="text-base px-4 py-2 mb-2 text-white rounded bg-gradient-to-r from-[#e62013] to-[#5e0d04] transition-transform duration-3000 max-w-fit"
            >
              {project.description}
            </button>
            <h3 className="text-white text-2xl font-bold hover:text-[#e62013] transition-colors duration-900 ease-in-out ">{project.title}</h3>
          </div>
          {/* Thin red line at the bottom of the active card */}
          <div className="absolute left-0 bottom-0 w-full h-[7px] bg-gradient-to-r from-[#e62013] to-[#5e0d04] rounded-b-xl z-30" />
        </>
      )}
      
    </div>
  );
};

export default function PortfolioCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative py-10 bg-[url('/portfolio-bg.png')] bg-cover w-full">
      <SectionHeader
        subTitle="Our Portfolio"
        titleWords={["Our", "Success", "Project", "'s", "That", "Inspire"]}
        description=""
      />

      <div className="relative w-full flex justify-center items-center overflow-hidden m-0 p-0">
       <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={3}
  spaceBetween={20}
  speed={500}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }}
  modules={[EffectCoverflow, Navigation]}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 2,
    depth: 55,
    modifier: 2.5,
    slideShadows: false,
  }}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  className="portfolio-swiper w-full flex overflow-visible m-0 p-0" // important for scale
>
  {projects.map((project, index) => (
    <SwiperSlide
      key={index}
      className="relative w-full transition-transform duration-500 ease-in-out m-0 p-0"
    >
      <ProjectCard project={project} />
    </SwiperSlide>
  ))}
</Swiper>

        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="z-20 absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-xl w-10 h-10 flex items-center justify-center hover:bg-gradient-to-r from-[#e62013] to-[#5e0d04] md:left-[30%] md:-translate-x-1/2 md:p-8"
        >
          &#8592;
        </button>
        <button
          ref={nextRef}
          className="z-20 absolute right-2  cursor-pointer top-1/2 -translate-y-1/2 bg-black text-white rounded-xl w-10 h-10 flex items-center justify-center hover:bg-gradient-to-r from-[#e62013] to-[#5e0d04] md:right-[30%] md:translate-x-1/2 md:p-8"
        >
          &#8594;
        </button>
        
      </div>
      <div className="flex justify-center my-9">
        <Button title="SEE OUR CREATIONS"/>
        </div>
        
      {/* Active slide scale effect */}
    <style >{`
 .portfolio-swiper .swiper-slide {
  transform: scale(0.85);
  transition: transform 0.9s ease-in-out;
  opacity: 0.1; 
  pointer-events: auto; /* allow clicking */
}

.portfolio-swiper .swiper-slide-active {
  transform: scale(1.2);
  z-index: 3;
  opacity: 1;
}

.portfolio-swiper .swiper-slide-prev,
.portfolio-swiper .swiper-slide-next {
  transform: scale(0.9);
  z-index: 2;
  opacity: 0.8;
}
    
`}</style>

    </div>
  );
}
