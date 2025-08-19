import React from "react";
import { FaArrowRight } from "react-icons/fa";
import TriangleBullet from "../Home/TriangleBullet";
import SectionHeader from "./Animated_SectionHeader";

const ServicesSection = ({
  subtitle,
  title ,
  paragraph,
  paragraph2 ,
  services = [],
  bgImage,
  bgColor = "white",
  justify,
  text_align,
  showBullet,
}) => {
  return (
    <>
    <section
      className={`w-full py-10 px-8 sm:py-14 md:py-16 md:px-18 bg-cover bg-center`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
        backgroundColor: bgColor,
      }}
    >
      {/* Section header */}
      <SectionHeader
        subTitle={subtitle}
        titleWords={title}
        description={paragraph}
        description2={paragraph2}
        justify={justify}
        text_align={text_align}
        showBullet={showBullet}
      />

      {/* Services Grid */}
      <div className="mt-12 grid gap-8 px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, idx) => {
          const isMiddleCard = idx % 3 === 1; // Middle in each row

          return (
            <div
              key={idx}
              data-aos={isMiddleCard ? "" : "fade-up"}
              className="relative group rounded-3xl md:rounded-t-full shadow-lg overflow-hidden flex flex-col min-h-[400px] bg-[#1c1c2e] text-white"
            >
              {/* Hover fill overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff3b2a] via-[#e62013] to-[#8b1a10] rounded-t-full scale-y-0 opacity-0 origin-bottom transition-all duration-500 ease-out group-hover:scale-y-100 group-hover:opacity-100"></div>

              {/* Content */}
              <div className="relative z-10 pt-25 p-10 flex-1 flex flex-col transition-colors duration-500 group-hover:text-white">
                <h4 className="text-2xl text-center font-bold mb-4 leading-snug">
                  {service.title}
                </h4>
                <p className="text-gray-300 group-hover:text-white text-[16px] mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                <ul className="space-y-3 flex-1">
                  {service.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-100 group-hover:text-white text-[16px] leading-snug"
                    >
                      <FaArrowRight
                        className="mt-1 text-gray-400 group-hover:text-white flex-shrink-0"
                        size={14}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
};

export default ServicesSection;

//How to use
//import ServicesSection from "../components/ServicesSection";
// const services = [
//   {
//     title: "Fast Performance",
//     description: "PHP ensures speedy development and execution.",
//     features: ["Low cost", "Wide support", "Database integration"],
//   },
//   {
//     title: "Scalability",
//     description: "Handles projects of all sizes efficiently.",
//     features: ["Flexible", "Extensible", "Secure"],
//   },
//   {
//     title: "Community Support",
//     description: "Large developer community for continuous improvement.",
//     features: ["Open-source", "Lots of frameworks", "Active forums"],
//   },
// ];
{
  /* <ServicesSection
  subtitle="PHP"
  heading="Benefits of PHP"
  description="PHP offers fast, flexible, and cost-effective web development. It's open-source, widely supported, and ensures seamless integration with databases."
  services={services}
  backgroundImage="/body-bg-2-scaled-1.webp"
/> */
}
