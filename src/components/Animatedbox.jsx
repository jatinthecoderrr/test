import React, { useEffect, useRef, useState } from "react";
import TriangleBullet from "../components/Home/TriangleBullet"; // Assuming you have a TriangleBullet component

const CTASection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`relative rounded-3xl overflow-hidden max-w-8xl mx-auto transition-all duration-700 ease-out transform
    ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        {/* Animated Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out ${
            visible
              ? "scale-100 translate-x-0"
              : "scale-170 translate-x-7 sm:translate-x-6"
          }`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20">
          {/* Text */}
          <div className="text-center md:text-left mb-6 md:mb-0 max-w-xl">
            {subtitle && (
              <h5 className="text-xs sm:text-sm md:text-base flex gap-3 font-extrabold tracking-widest text-black mb-2">
                <TriangleBullet /> <span>{subtitle}</span>
              </h5>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                {title}
              </h2>
            )}
          </div>

          {/* Button */}
          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className="inline-flex group items-center mr-20 gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#5e0d04] to-[#e62013] text-white rounded-full transition duration-300 text-sm sm:text-base md:text-lg relative overflow-hidden"
            >
              {/* Animated background only on button */}
              <span className="relative z-10">{buttonText}</span>
              <div className="bg-red-500 p-1 rounded-full">
                <div className="absolute inset-0 bg-red-500 scale-y-0 opacity-0  transition-all duration-500 ease-out group-hover:scale-y-100 group-hover:opacity-100 pointer-events-none"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 relative z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
