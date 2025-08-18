// Global Header componet 
import React, { useEffect, useRef, useState } from "react";
import TriangleBullet from "../Home/TriangleBullet" // Adjust path if needed

const SectionHeader = ({ subTitle, titleWords, description, description2, customTextAnimation = false,text_align,justify,showBullet = true  }) => {
  const imgRef = useRef(null);
    const textRef = useRef(null);
    const [imgVisible, setImgVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
  
    useEffect(() => {
      const imgObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImgVisible(true);
            imgObserver.disconnect();
          }
        },
        { threshold: 0.3 }
      );
  
      const textObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTextVisible(true);
            textObserver.disconnect();
          }
        },
        { threshold: 0.3 }
      );
  
      if (imgRef.current) imgObserver.observe(imgRef.current);
      if (textRef.current) textObserver.observe(textRef.current);
  
      return () => {
        imgObserver.disconnect();
        textObserver.disconnect();
      };
    }, []);

  return (
    <div className={`max-full mx-auto px-6 py-10 text-left md:text-center `} ref={textRef}>
      <div
            className={
              customTextAnimation
                ? `${textVisible ? textAnimationClass : "opacity-0"}`
                : ` ${text_align} space-y-3 sm:space-y-4 transition-all duration-700 ease-out ${
                    textVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`
            }
          >
            <h5
              className={
                customTextAnimation
                  ? ""
                  : ` flex gap-2 sm:gap-3 text-[16px] sm:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${justify} ${
                      textVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`
              }
            >
              <div className="flex items-center  gap-2 ">
              {showBullet && <TriangleBullet />} <span className="text-gray-600">{subTitle}</span>
              </div>
            </h5>
            <h2
              className={
                customTextAnimation
                  ? ""
                  : `text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] not-italic normal-case font-extrabold leading-snug transition-all duration-700 delay-200 ${
                      textVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`
              }
            >
              {titleWords}
            </h2>
            <p
              className={
                customTextAnimation
                  ? ""
                  : `text-gray-700 text-[15px] sm:text-[18px] not-italic normal-case font-normal leading-relaxed text-base transition-all duration-700 delay-300 ${
                      textVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`
              }
            >
              {description}
            </p>

            <p
              className={
                customTextAnimation
                  ? ""
                  : `text-gray-700 text-[15px] sm:text-[18px] not-italic normal-case font-normal leading-relaxed text-base transition-all duration-700 delay-300 ${
                      textVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`
              }
            >
              {description2}
            </p>
          </div>

     

      
    </div>
  );
};

export default SectionHeader;


// how to use 
{/* <SectionHeader
        subTitle="Our Best Services"
        titleWords="We Provide Best Services"
        description=" Discover our premium services designed to deliver exceptional results. From innovative
            solutions to expert execution, we provide everything you need to achieve your goals and
            elevate your business."
      /> */}
