// Global Header componet 
import React from "react";
import TriangleBullet from "./TriangleBullet"; // Adjust path if needed

const SectionHeader = ({ subTitle, titleWords, description  }) => {
  return (
    <div className="max-full mx-auto px-5 py-3 text-left md:text-center">
      <div className="text-[13px]  sm:text-[16px] text-gray-600 font-extrabold md:text-[18px] leading-[16px] sm:leading-[17px]  uppercase tracking-wider flex items-center justify-start md:justify-center gap-2 font-urbanist pb-3 sm:pb-4">
        <TriangleBullet />
        {subTitle}
      </div>

      <div className="flex flex-wrap justify-start md:justify-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[47px] xl:text-[55px] leading-tight text-black font-extrabold ">
        {titleWords.map((word, i) => (
          <div key={i} className="inline-block mx-1">
            {word.split("").map((letter, j) => (
              <span key={j} className="inline-block font-urbanist font-extrabold">
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>

      <p className="text-gray-600 mt-4 mb-0 text-base sm:text-lg leading-relaxed max-w-2xl ml-0 md:mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
