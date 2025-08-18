import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import SectionHeader from "../services/Animated_SectionHeader";


/**
 * Reusable Services Section
 * @param {string} subTitle - Small heading text
 * @param {string[]} titleWords - Array of words for main heading
 * @param {string} description - Section description text
 * @param {Array} services - Services array [{ title, description, image, link }]
 */
function ServicesSection({
  subTitle = "Our Best Services",
  titleWords = ["We", "Provide", "Best", "Services"],
  description = "Discover our premium services designed to deliver exceptional results.",
  services = [],
}) {
  // Function to determine border classes (kept same as your logic)
  function getBorderClasses(index) {
    const base = "border-[#d9d8d8]";

    const mdCols = 2;
    const lgCols = 3;

    const mdRightBorder = (index + 1) % mdCols !== 0;
    const mdBottomBorder = index < services.length - mdCols;

    const lgRightBorder = (index + 1) % lgCols !== 0;
    const lgBottomBorder = index < services.length - lgCols;

    return [
      "border-b",
      "border-r",
      base,
      mdRightBorder ? "md:border-r" : "md:border-r-0",
      mdBottomBorder ? "md:border-b" : "md:border-b-0",
      lgRightBorder ? "lg:border-r" : "lg:border-r-0",
      lgBottomBorder ? "lg:border-b" : "lg:border-b-0",
    ].join(" ");
  }

  return (
    <div className="w-full bg-[#c8aeff1f]">
      <div className="max-w-7xl mx-auto py-14">
        {/* Header */}
        <SectionHeader
          subTitle={subTitle}
          titleWords={titleWords}
          description={description}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group px-8 py-12 bg-transparent transition duration-300 overflow-hidden ${getBorderClasses(
                index
              )}`}
            >
              <div className="icon mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-18 w-auto"
                />
              </div>

              <h4 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.38] font-extrabold font-urbanist mb-2 text-[#252A4E]">
                <a href={service.link}>{service.title}</a>
              </h4>

              <p className="text-[#666A83] text-[18px] leading-[30px] font-medium font-urbanist mb-4 h-full overflow-hidden transition-all duration-[400ms] ease-in-out">
                {service.description}
              </p>

              <a
                href={service.link}
                className="absolute bottom-4 left-6 text-black text-xl font-extrabold hover:no-underline inline-flex items-center opacity-0 translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More{" "}
                <span className="ml-2">
                  <FaArrowCircleRight className="text-black bg-white rounded-full text-2xl" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;



// how to use this component in a page
// import ServicesSection from "./ServicesSection";

// const myServices = [
//   {
//     title: "Web Development",
//     description: "Crafting responsive websites...",
//     image: "/images/web.png",
//     link: "/web-development",
//   },
//   {
//     title: "App Development",
//     description: "Building scalable mobile apps...",
//     image: "/images/app.png",
//     link: "/app-development",
//   },
// ];

// function HomePage() {
//   return (
//     <ServicesSection
//       subTitle="What We Do"
//       titleWords={["Our", "Creative", "Solutions"]}
//       description="We help businesses grow with technology-driven services."
//       services={myServices}
//       columns={{ sm: 1, md: 2, lg: 4 }}
//     />
//   );
// }
