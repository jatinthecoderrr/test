import React from "react";
import SectionHeader from "./HeaderComponent";

const allLogos = [
   {
    name: "skilledu",
    src: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/skilledu.webp",
  },
  {
    name: "tofutrips",
    src: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/tofutrips.webp",
  },
  {
    name: "main-black-logo",
    src: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/main-black-logo.webp",
  },
  {
    name: "tofucomputech-logo",
    src: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/tofucomputech-logo-1-300x119.webp",
  },
 
];

export default function ScrollingTechStackSingleRow() {
  // Duplicate once for infinite loop effect
  const logos = [...allLogos, ...allLogos, ...allLogos, ...allLogos, ...allLogos];

  return (
    <div className="w-full overflow-hidden bg-transparent my-8 md:mb-12 md:mt-16">
       <SectionHeader
        subTitle="Trusted Partnership"
        titleWords={["Brands", "We're", "Partnered", "With"]}
        description="We collaborate with trusted brands, building strong partnerships to deliver exceptional value and innovative solutions."
      />
      <div className="flex whitespace-nowrap animate-marquee">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center  py-1  min-w-max mx-2"
          >
            <img
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              className="w-50  mx-8 p-2.5"
            />
            
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style >{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
