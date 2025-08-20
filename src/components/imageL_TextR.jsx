import React, { useEffect, useRef, useState } from "react";
import TriangleBullet from "../components/Home/TriangleBullet";
import Button from "../components/Button"; // adjust path to your Button component

const ImageTextSection = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  description2,
  animationClass = "translate-y-20",
  customTextAnimation = false,
  textAnimationClass = "",
  bgImage = "",
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
          (true);
          imgObserver.disconnsetImgVisibleect();
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
      className="w-full py-6 px-6 sm:py-6 sm:px-6 md:py-14 md:px-15 -cover bg-center bg-no-repeat"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundColor: bgImage ? "transparent" : "white",
      }}
    >
      <div className="  grid md:grid-cols-2 items-center justify-center gap-12">
        {/* Left: Image */}
        <div className="flex justify-end">
          <div
            ref={imgRef}
            className={`transition-transform duration-700 ease-out ${
              imgVisible
                ? "translate-y-0 translate-x-0 opacity-100"
                : `${animationClass} opacity-25`
            }`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-3xl w-full  object-contain"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div
          ref={textRef}
          className={ 
            customTextAnimation
              ? `${textVisible ? textAnimationClass : "opacity-0"}`
              : `transition-all duration-700 ease-out ${
                  textVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } w-full max-w-[380px] sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain`
          }
        >
          <div className="text-left space-y-4">
            <h5
              className={
                customTextAnimation
                  ? ""
                  : `flex gap-3 items-center text-gray-600 text-[20px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                      textVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`
              }
            >
              <TriangleBullet /> <span>{subtitle}</span>
            </h5>
            <h2
              className={
                customTextAnimation
                  ? ""
                  : `text-4xl  text-[60px] not-italic normal-case font-extrabold leading-snug transition-all duration-700 delay-200 ${
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
                  : `text-gray-600 text-[18px] font-medium not-italic normal-case leading-relaxed text-base transition-all duration-700 delay-300 ${
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
                  : `text-gray-600 text-[18px] not-italic normal-case font-medium leading-relaxed text-base transition-all duration-700 delay-300 ${
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
      </div>
    </section>
  );
};

export default ImageTextSection;
