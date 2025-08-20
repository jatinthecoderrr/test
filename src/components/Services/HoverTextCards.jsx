import React from "react";
import SectionHeader from "./Animated_SectionHeader";

/**
 * Reusable Benefits Section
 * 
 * @param {string} title - Main heading (split letters animation applied)
 * @param {string} paragraph - Section description text
 * @param {Array} features - Features array [{ img, title, description, hoverColor }]
 */
function BenefitsSection({
  subtitle,
  title,
  paragraph ,
  features = [],
  
}) {
  return (
    <section className="w-full py-6 sm:py-8 md:py-14 md:px-10 bg-neutral-50 relative z-10">
      <SectionHeader
        subTitle={subtitle}
        titleWords={title}
        description={paragraph}
        text_align="md:text-center"
        justify="justify-center"
      />

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-8  pt-2 md:pb-8 md:pt-3 cursor-pointer">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-8 transition-colors duration-300 group"
            >
              {/* Image Circle */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full shadow-xl flex items-center justify-center bg-white transition-transform duration-300 group-hover:scale-110">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-18 h-18 p-1"
                />
              </div>

              {/* Text */}
              <div>
                <h3
                  className={`text-xl font-extrabold text-gray-900 mb-2 transition-colors duration-300 ${feature.hoverColor}`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;


// how to use this component

// import BenefitsSection from "./";

// const benefitsData = [
//   {
//     img: "/icons/speed.png",
//     title: "Faster Performance",
//     description: "Optimized code and lightweight design for speed.",
//     hoverColor: "group-hover:text-red-500",
//   },
//   {
//     img: "/icons/responsive.png",
//     title: "Fully Responsive",
//     description: "Looks great on mobile, tablet, and desktop.",
//     hoverColor: "group-hover:text-blue-500",
//   },
//   {
//     img: "/icons/seo.png",
//     title: "SEO Optimized",
//     description: "Rank higher on Google with SEO-friendly structure.",
//     hoverColor: "group-hover:text-green-500",
//   },
// ];

// function HomePage() {
//   return (
    // <BenefitsSection
    //   title="Why Choose Our Redesign Services?"
    //   paragraph="Redesigning your website gives your business a fresh start. Our expert team ensures it is modern, fast, and aligned with your goals."
    //   features={benefitsData}
    // />
//   );
// }
