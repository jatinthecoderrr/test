import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeader from "./Animated_SectionHeader";

/**
 * FeatureGridSection Component
 */
function FeatureGridSection({
  subTitle = "",
  title = "",
  description1 = "",
  description2 = "",
  features = [],
  bgImage = "",
  bgColor = "white",
}) {
  return (
    <section
      className="w-full py-10 md:py-16 md:px-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
        backgroundColor: bgColor,
      }}
    >
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <SectionHeader
          subTitle={subTitle}
          titleWords={title}
          description={description1}
          description1={description2}
          text_align="md:text-center"
        justify="justify-center"
        />

        {/* Features Grid */}
        {features.length > 0 && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 px-4 ">
            {features.map((feature, index) => (
              <li
                key={index}
                className="group flex items-start gap-2 z-10 text-gray-600 font-medium text-sm sm:text-base md:text-[17px] cursor-pointer transition-all duration-300 hover:text-[#fc2512]"
              >
                <span className="text-black mt-1 transition-colors duration-300 group-hover:text-[#fc2512]">
                  <FaCheckCircle size={18} />
                </span>
                <span className="transition-colors duration-300 group-hover:text-black">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default FeatureGridSection;
