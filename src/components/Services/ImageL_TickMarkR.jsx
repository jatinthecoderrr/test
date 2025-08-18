import React, { useRef, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

// Example: you already have this custom icon
import TriangleBullet from "../Home/TriangleBullet"; 

/**
 * Reusable Feature Section
 * 
 * @param {string} subTitle - Small subtitle above heading
 * @param {string} title - Main heading
 * @param {string} description1 - First description paragraph
 * @param {string} description2 - Second description paragraph (optional)
 * @param {string[]} features - Array of tickmark features
 * @param {string} image - Image path/URL
 * @param {string} bgImage - Background image path/URL
 * @param {string} bgColor - Background color (default = white)
 */
function FeatureSection({
  subTitle = "Redesigning",
  title = "Why Go For Website Redesigning?",
  description1 = "",
  description2 = "",
  features = [],
  image = "",
  bgImage = "",
  bgColor = "white",
}) {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const [imgVisible, setImgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => setImgVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const textObserver = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (imgRef.current) imgObserver.observe(imgRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (imgRef.current) imgObserver.unobserve(imgRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <section
      className="w-full py-10 px-8 sm:py-14 md:py-16 md:px-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
        backgroundColor: bgColor,
      }}
    >
      <div className="max-w-[1500px] mx-auto lg:px-0 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left: Image */}
        <div className="flex justify-center items-center">
          <div
            ref={imgRef}
            className={`transition-transform duration-700 ease-out ${
              imgVisible
                ? "translate-y-0 translate-x-0 opacity-100"
                : "translate-y-20 opacity-25"
            }`}
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-90 md:h-[380px] object-contain rounded-3xl"
              />
            )}
          </div>
        </div>

        {/* Right: Text */}
        <div
          ref={textRef}
          className={`transition-all duration-700 ease-out pl-5 md:pl-0 ${
            textVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-left space-y-2 sm:space-y-2 lg:space-y-4 sm:mr-10 lg:mr-20">
            {/* Small Title */}
            <h5
              className={`flex gap-3 items-center text-sm sm:text-lg md:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                textVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <TriangleBullet /> <span>{subTitle}</span>
            </h5>

            {/* Main Heading */}
            <h2
              className={`text-xl sm:text-3xl md:text-[40px] lg:text-[60px] font-extrabold leading-snug transition-all duration-700 delay-200 ${
                textVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {title}
            </h2>

            {/* Paragraph 1 */}
            {description1 && (
              <p
                className={`text-gray-600 font-medium text-sm sm:text-base md:text-[18px] md:pb-1 leading-relaxed transition-all duration-700 delay-300 ${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                {description1}
              </p>
            )}

            {/* Paragraph 2 */}
            {description2 && (
              <p
                className={`text-gray-600 font-medium text-sm sm:text-base md:text-[18px] md:pb-1 leading-relaxed transition-all duration-700 delay-300 ${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                {description2}
              </p>
            )}

            {/* Features List */}
            {features.length > 0 && (
              <div
                className={`transition-all duration-700 delay-400 ${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <ul className="space-y-2 sm:space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="group flex items-start gap-2 text-gray-600 font-medium text-sm sm:text-base md:text-[18px] cursor-pointer transition-all duration-300 hover:text-[#fc2512]"
                    >
                      <span className="text-black mt-1 transition-colors duration-300 group-hover:text-[#fc2512]">
                        <FaCheckCircle size={20} />
                      </span>
                      <span className="transition-colors text-[14px] sm:text-[16px] md:text-[18px] duration-300 group-hover:text-black">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;


//how to use this component in a page
// import FeatureSection from "./FeatureSection";

// function HomePage() {
//   return (
    // <FeatureSection
    //   subTitle="Redesigning"
    //   title="Why Go For Website Redesigning?"
    //   description1="At Geektheory, we ensure your new website outshines the old one."
    //   description2="Our redesign services refresh your brand and correct past design flaws."
    //   features={[
    //     "Responsive and mobile-friendly",
    //     "Improved SEO structure",
    //     "Faster load times",
    //     "Modern UI/UX design",
    //   ]}
    //   image="/images/features.webp"
    //   bgImage="/images/bg-pattern.png"
    //   bgColor="#f9fafb"
    // />
//   );
// }
