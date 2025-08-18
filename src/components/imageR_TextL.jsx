// import React, { useEffect, useRef, useState } from "react";
import TriangleBullet from "../components/Home/TriangleBullet";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
const ImageTextSectionReversed = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  description2,
  animationClass = "translate-y-20", // default image animation
  customTextAnimation = false, // full control if true
  textAnimationClass = "", // your custom animation classes
  extraImgClass = "", // extra class for custom height/width
  backgroundImage = "", // NEW: background image URL
  backgroundColor = "", // NEW: fallback/solid bg color
  bgClass = "bg-white", // NEW: custom Tailwind bg classes if needed
  showButton = false, // NEW: show or hide button
  buttonTitle = "Get Started", // NEW: button label
  buttonLink = "#", // NEW: optional link
}) => {
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
    <section
      className={`w-full py-10 px-4 sm:py-12 sm:px-6 md:py-19 md:px-16 ${bgClass}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: backgroundColor || undefined,
      }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left: Text */}
        <div className="order-2 md:order-1" ref={textRef}>
          <div
            className={
              customTextAnimation
                ? `${textVisible ? textAnimationClass : "opacity-0"}`
                : `text-left space-y-3 sm:space-y-4 transition-all duration-700 ease-out ${
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
                  : `flex gap-2 sm:gap-3 text-[16px] sm:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                      textVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`
              }
            >
              <div className="flex items-center gap-2">
                <TriangleBullet />{" "}
                <span className="text-gray-600">{subtitle}</span>
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
              {title}
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
            {/* Conditionally Render Button */}
            {showButton && (
              <div className="pt-4">
                <Button title={buttonTitle} link={buttonLink} />
              </div>
            )}
          </div>
        </div>

        {/* Right: Image */}
        <div
          id="img-col"
          className="flex mx-auto justify-center order-1 md:order-2"
        >
          <div
            ref={imgRef}
            className={`transition-all duration-700 ease-out transform ${
              imgVisible
                ? "translate-y-0 translate-x-0 opacity-100"
                : `${animationClass} opacity-0`
            }`}
          >
            <div className="main-img d-block w-full flex justify-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className={`rounded-3xl w-full max-w-[380px] sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain ${extraImgClass}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSectionReversed;
