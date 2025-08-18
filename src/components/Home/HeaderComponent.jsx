// // Global Header componet
// import React from "react";
// import TriangleBullet from "./TriangleBullet"; // Adjust path if needed

// const SectionHeader = ({ subTitle, titleWords, description }) => {
//   return (
//     <div className="max-w-4xl mx-auto px-2 py-6 text-left md:text-center">
//       <div className="text-[13px] sm:text-[15px] md:text-[17px] leading-[16px] sm:leading-[17px] text-[rgb(91,91,91)] uppercase tracking-wider flex items-center justify-start md:justify-center gap-2 font-urbanist pb-3 sm:pb-4 font-extrabold">
//         <TriangleBullet />
//         {subTitle}
//       </div>

//       <div className="flex flex-wrap justify-start md:justify-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[60px] leading-tight text-gray-900">
//         {titleWords.map((word, i) => (
//           <div key={i} className="inline-block mx-1">
//             {word.split("").map((letter, j) => (
//               <span key={j} className="inline-block font-urbanist font-extrabold">
//                 {letter}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>

//       <p className="text-gray-600 mt-4 mb-0 text-base sm:text-lg leading-relaxed max-w-2xl ml-0 md:mx-auto">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default SectionHeader;
// Global Header component
import React from "react";
import TriangleBullet from "./TriangleBullet"; // Adjust path if needed

const SectionHeader = ({ subTitle, titleWords, description }) => {
  // Ensure titleWords is always an array
  const words = Array.isArray(titleWords)
    ? titleWords
    : (titleWords || "").split(" ");

  return (
    <div className="max-w-4xl mx-auto px-2 py-6 text-left md:text-center">
      {/* Subtitle */}
      <div className="text-[13px] sm:text-[15px] md:text-[17px] leading-[16px] sm:leading-[17px] text-[rgb(91,91,91)] uppercase tracking-wider flex items-center justify-start md:justify-center gap-2 font-urbanist pb-3 sm:pb-4 font-extrabold">
        <TriangleBullet />
        {subTitle}
      </div>

      {/* Title */}
      <div className="flex flex-wrap justify-start md:justify-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[60px] leading-tight text-gray-900">
        {words.map((word, i) => (
          <div key={i} className="inline-block mx-1">
            {word.split("").map((letter, j) => (
              <span
                key={j}
                className="inline-block font-urbanist font-extrabold"
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-4 mb-0 text-base sm:text-lg leading-relaxed max-w-2xl ml-0 md:mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
