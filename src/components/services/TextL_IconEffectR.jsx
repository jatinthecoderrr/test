import React, { useRef, useState, useEffect } from "react";
import TriangleBullet from "../Home/TriangleBullet"
import Button from "../Button";
import { motion } from "framer-motion";

const AnimatedSection = ({
  backgroundImage = "",
  backgroundColor = "white",
  subtitle = "Technologies",
  title = "New Technologies and Methods",
  description = "",
  buttonText = "GET STARTED",
  services = [],
}) => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  const [textVisible, setTextVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const textObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setTextVisible(true);
    }, observerOptions);

    const imgObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setImgVisible(true);
    }, observerOptions);

    if (textRef.current) textObserver.observe(textRef.current);
    if (imgRef.current) imgObserver.observe(imgRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
      if (imgRef.current) imgObserver.unobserve(imgRef.current);
    };
  }, []);

  return (
    <section
      className="w-full py-10 sm:py-14 md:py-16"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left: Text */}
        <div className="order-2 md:order-1" ref={textRef}>
          <div
            className={`text-left space-y-4 transition-all duration-700 ease-out ${
              textVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h5
              className={`flex gap-3 text-base items-center sm:text-lg md:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                textVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <TriangleBullet /> <span>{subtitle}</span>
            </h5>

            <h2
              className={`text-2xl sm:text-4xl md:text-[60px] font-extrabold leading-snug transition-all duration-700 delay-200 ${
                textVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {title}
            </h2>

            <p
              className={`text-gray-700 text-base sm:text-lg md:text-[18px] leading-relaxed transition-all duration-700 delay-300 ${
                textVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {description}
            </p>

            <div
              className={`transition-all duration-700 delay-300 ${
                textVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <Button title={buttonText} />
            </div>
          </div>
        </div>

        {/* Right: Image Grid */}
        <div
          id="img-col"
          className="flex justify-center items-center order-1 md:order-2"
        >
          <div
            ref={imgRef}
            className={`transition-all duration-700 ease-out transform ${
              imgVisible
                ? "translate-y-0 translate-x-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-white shadow-md hover:shadow-[#e82110] rounded-full p-6 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="w-20 h-20 flex items-center justify-center mb-4">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800">
                      {service.title}
                    </h5>
                  </div>
                ))} */}
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="flex flex-col items-center justify-center gap-3 px-8 py-8 rounded-full border border-gray-300 bg-transparent cursor-pointer relative overflow-hidden"
                      style={{
                        minWidth: "120px",
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        // stronger tilt (-20° to 20°)
                        const offsetX = (x / rect.width - 0.5) * 60;
                        const offsetY = (y / rect.height - 0.5) * 60;

                        const icon = e.currentTarget.querySelector("img");
                        if (icon) {
                          icon.style.transform = `rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`; // ⬅ no scale
                          icon.style.transition = "transform 0.1s ease-out";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const icon = e.currentTarget.querySelector("img");
                        if (icon) {
                          icon.style.transform = `rotateX(0deg) rotateY(0deg)`; // ⬅ reset without scale
                          icon.style.transition = "transform 0.3s ease-in-out";
                        }
                      }}
                    >
                      {/* Icon (no hover scale) */}
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-25 h-25 object-contain transition-transform"
                      />

                      <span className="text-base font-semibold text-gray-800">
                        {service.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;

//How to use
// import AnimatedSection from "./AnimatedSection";

// const services = [
//   { img: "/icons/php.png", title: "PHP" },
//   { img: "/icons/react.png", title: "React" },
//   { img: "/icons/node.png", title: "Node.js" },
// ];

// export default function Home() {
//   return (
//     <AnimatedSection
//       backgroundImage="/bg-pattern.png"
//       backgroundColor="#ffffff"
//       subtitle="Technologies"
//       title="New Technologies and Methods"
//       description="Top PHP web development companies in Chennai ensure timely project delivery..."
//       buttonText="GET STARTED"
//       services={services}
//     />
//   );
// }
