import React from "react";
import { FaArrowCircleRight } from "react-icons/fa"; 
import SectionHeader from "./HeaderComponent";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting dynamic, responsive websites tailored to your needs. Experience scalability, and seamless user experiences.",
    image: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/web_home.webp",
    link: "https://geektheo.com/php-web-development/",
  },
  {
    title: "Software Development",
    description:
      "Building robust, custom software solutions to streamline operations, boost efficiency, and meet your unique business goals.",
    image: "https://geektheory.tofutrips.com/wp-content/uploads/2025/01/web-dev.webp",
    link: "https://geektheo.com/real-time-web-application-development/",
  },
  {
    title: "Hire Developers",
    description:
      "Hire skilled developers to deliver innovative, efficient solutions tailored to drive success for your unique business needs.",
    image: "https://geektheory.tofutrips.com/wp-content/uploads/2025/01/hire.webp",
    link: "https://geektheo.com/hire-web-developer/",
  },
  {
    title: "App Development",
    description:
      "Designing intuitive, high-performance mobile apps to enhance user engagement and drive your business forward seamlessly.",
    image:
      "https://geektheory.tofutrips.com/wp-content/uploads/2025/01/app-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats-website-smartphone-application-mobile-pack-design-icons-5580808.webp",
    link: "https://geektheo.com/android-app-development/",
  },
  {
    title: "Game Development",
    description:
      "Creating immersive, engaging gaming experiences with cutting-edge technology tailored to captivate and entertain players.",
    image: "https://geektheory.tofutrips.com/wp-content/uploads/2025/01/game-development.webp",
    link: "https://geektheo.com/game-development/",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand visibility and growth with result-driven digital marketing strategies tailored to your business goals.",
    image: "https://geektheory.tofutrips.com/wp-content/uploads/2025/01/digital-marketing.webp",
    link: "https://geektheo.com/contact/",
  },
];

// Function to determine border classes
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

function OurServices() {
  return (
    <div className="w-full bg-[#c8aeff1f]">
      <div className="max-w-7xl mx-auto py-14">
        {/* Header */}
         <SectionHeader
        subTitle="Our Best Services"
        titleWords={["We", "Provide", "Best", "Services"]}
        description=" Discover our premium services designed to deliver exceptional results. From innovative
            solutions to expert execution, we provide everything you need to achieve your goals and
            elevate your business."
      />


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group px-8 py-12 bg-transparent transition duration-300 overflow-hidden ${getBorderClasses(index)}`}
            >
              <div className="icon mb-4">
                <img src={service.image} alt={service.title} className="h-18 w-auto" />
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

export default OurServices;
