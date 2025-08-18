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
      className="w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-15"
    >
      <div
        className={`relative rounded-3xl overflow-hidden max-w-8xl mx-auto transition-all duration-1000 ease-out transform
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
          <div className="text-center md:text-left mb-6 md:mb-0 max-w-xl md:ml-10 ">
            {subtitle && (
              <h5 className="text-xs sm:text-sm md:text-base flex items-center gap-3 !font-extrabold  text-black mb-2 ">
                <TriangleBullet /> <span>{subtitle}</span>
              </h5>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
                {title}
              </h2>
            )}
          </div>

          {/* Button */}
          {buttonText && buttonLink && (
<a
  href={buttonLink}
  className="relative lg:mr-15 md:mr-5 inline-flex group items-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-4
             rounded-full bg-gradient-to-r from-[#e62013] to-[#5e0d04] text-white overflow-hidden"
>
  {/* Circle that expands */}
  <span
    className="absolute inset-0 flex items-center justify-end pr-4 sm:pr-6 md:pr-8 z-0">
    <span className="flex items-center justify-center bg-[#e82110] w-6 h-6 rounded-full transition-transform duration-500 ease-out
                      group-hover:scale-[18]">
    </span>
  </span>

  {/* Content (text + arrow) */}
  <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base md:text-lg uppercase font-extrabold">
    <span>{buttonText}</span>
    <div className="p-1  rounded-full relative z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </span>
</a>



          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

