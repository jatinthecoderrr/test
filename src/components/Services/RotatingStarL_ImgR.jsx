import React, { useEffect, useRef, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import TriangleBullet from "../Home/TriangleBullet";

function RotatingStarL_ImgR({
  subtitle = "Web Design",
  title = "Corporate Web Design Experts",
  description = "Default description goes here...",
  steps = [],
  imageSrc = "/default.webp",
  foldername = "",
}) {
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
      className="w-full py-8 px-4 sm:px-6 md:py-14 md:px-8 lg:px-16 bg-white"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left: Text */}
        <div className="order-2 md:order-1 mx-5" ref={textRef}>
          <div
            className={`text-left space-y-4 transition-all duration-700 ease-out ${
              textVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Small Heading */}
            <h5
              className={`flex items-center gap-3 text-base sm:text-lg md:text-xl font-extrabold text-gray-600 uppercase transition-all duration-700 delay-100 ${
                textVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <TriangleBullet /> <span>{subtitle}</span>
            </h5>

            {/* Main Title */}
            <h2
              className={`text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] font-extrabold leading-snug transition-all duration-700 delay-200 ${
                textVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className={`text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-700 delay-300 ${
                textVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              {description}
            </p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 md:gap-x-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div
                    className={`flex items-center justify-center px-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${step.color} transition-transform duration-500 ease-out group-hover:scale-125`}
                  >
                    <FaRegStar
                      size={20}
                      className="transition-transform duration-500 ease-out group-hover:rotate-180"
                    />
                  </div>
                  <span className="font-extrabold text-base sm:text-lg md:text-xl leading-tight transition-colors duration-300 group-hover:text-gray-700">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div id="img-col" className="flex justify-center order-1 md:order-2">
          <div
            ref={imgRef}
            className={`transition-all duration-700 ease-out transform ${
              imgVisible ? "translate-y-0 translate-x-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="main-img d-block">
              <img
                src={foldername ? `${foldername}/${imageSrc}` : imageSrc}
                alt="Service"
                className="rounded-3xl sm:rounded-3xl max-w-[95%] sm:max-w-sm md:max-w-[400px] md:mr-5 lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default RotatingStarL_ImgR;



//how to use 
// const steps = [
//   { text: "Customized Web Design", color: "bg-orange-100 text-orange-500" },
//   { text: "Competitive Rates", color: "bg-red-100 text-red-500" },
//   { text: "Multimedia Integration", color: "bg-blue-100 text-blue-500" },
//   { text: "Business Growth Focused", color: "bg-green-100 text-green-500" },
// ];

// function ServicesPage() {
//   return (
//     <AnimatedSection
//       subtitle="Web Design"
//       title="Corporate Web Design Experts"
//       description="Geektheory is a leading corporate web design company in Chennai, offering unique and dynamic websites that effectively represent your brand..."
//       steps={steps}
//       foldername="/images"
//       imageSrc="corporate.webp"
//     />
//   );
// }
