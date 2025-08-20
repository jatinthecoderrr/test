import React, { useRef, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";
import Button from "../Button";
import TriangleBullet from "./TriangleBullet";

const Aboutus = () => {
  const logoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
             observer.disconnect();

      }
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row  items-center justify-between md:py- md:px-10 md:mb-30 gap-4  bg-white"
      id="aboutus"
    >
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 md:mr-4 ">
        <div className="text-gray-900 text-lg font-extrabold flex gap-2 tracking-widest">
          <span><TriangleBullet /></span>
          <span className="font-extrabold md:ml-3 md:text-lg md:items-end"> ABOUT US</span>
        </div>
        <h1 className="text-6xl md:text-6xl font-extrabold text-gray-900 mt-4">
          Geektheory
        </h1>

        <div className="w-36 sm:w-44 md:w-56 lg:w-64 mt-0">
          <div
            ref={logoRef}
            className="origin-center !pt-0 transition-all duration-1000 ease-out opacity-0  sm:max-h-58 md:!mx-auto lg:w-120 md:w-85"
            style={{
              transform: inView
                ? "translate3d(0px, 0px, 0px) rotate(0deg) scale(1)"
                : "translate3d(0px, 100px, 0px) rotate(45deg) scale(0.5)",
              opacity: inView ? 1 : 0,
            }}
          >
            <img
              src="/GeekTheoryIcon.png"
              alt="Geektheory Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 max-w-2xl md:mt-20 text-lg ">
        <p className="text-gray-600 text-base md:text-lg font-semibold leading-relaxed mb-6 mt-5">
          Geektheory, an IT service provider, specializes in web development,
          design, digital marketing, SEO, mobile applications, and industrial
          software. Advocating for a paperless, eco-friendly future, we deliver
          innovative solutions across diverse technologies.
        </p>

        {/* Features */}
        <div className="space-y-6 mb-8 ">
          <Feature
            icon={<FaCheckCircle className="text-white  w-6 h-6" />}
            title="Guaranteed Results"
            text="Proven methods ensure consistent success and measurable outcomes."
          />
          <Feature
            icon={<MdBuild className="text-white w-6 h-6" />}
            title="Quality Services"
            text="Commitment to excellence ensures reliable and superior outcomes."
          />
          <Feature
            icon={<BsHeartFill className="text-white w-6 h-6" />}
            title="Client Satisfaction"
            text="Dedicated to delivering exceptional experiences and lasting trust."
          />
        </div>

        {/* CTA Button */}
        <Button  title={"Learn More"} />
      </div>
    </div>
  );
};

// Reusable Feature Component
// Inside Feature component
const Feature = ({ icon, svg, title, text }) => (
  <div className="flex items-start">
    <div
      className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mr-4 mt-1 shrink-0
      transition-transform duration-700 ease-in-out hover:rotate-180"
    >
      {icon ? (
        <span className="text-white font-bold">{icon}</span>
      ) : (
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {svg}
        </svg>
      )}
    </div>
    <div className="flex-1">
      <p className="text-gray-600 text-sm md:text-base">
        <strong className="block text-gray-900">{title}</strong>
        {text}
      </p>
    </div>
  </div>
);
;

export default Aboutus;
