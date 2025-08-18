// src/components/Aboutus.jsx
import React, { useRef, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";
import Button from "../Button";
import TriangleBullet from "./TriangleBullet"; // Assuming you have a TriangleBullet component
const Aboutus = () => {
  const logoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 bg-white min-h-screen gap-10"
      id="aboutus"
    >
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
        <div className="text-red-800 text-sm font-bold flex gap-2 tracking-widest">
          <TriangleBullet />
          <span>ABOUT US</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Geektheory
        </h1>

        <div className="w-48 md:w-64 lg:w-72 h-auto mt-6">
          <div
            ref={logoRef}
            className={`origin-center transition-all duration-700 ease-out opacity-0`}
            style={{
              transform: inView
                ? "translate3d(0px, 0px, 0px) rotate(0deg) scale(1)"
                : "translate3d(0px, 100px, 0px) rotate(45deg) scale(0.5)",
              opacity: inView ? 1 : 0,
            }}
          >
            <img
              src="https://geektheory.tofutrips.com/wp-content/uploads/2025/01/cropped-geeklogo-1.png"
              alt="Geektheory Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 max-w-2xl">
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          Geektheory, an IT service provider, specializes in web development,
          design, digital marketing, SEO, Mobile Applications, and industrial
          software. Advocating for a paperless, eco-friendly future, we deliver
          innovative solutions across diverse technologies.
        </p>

        {/* Features */}
        <div className="space-y-6 mb-8">
          <Feature
            icon={<FaCheckCircle className="text-white w-6 h-6" />}
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
        <Button title={"Learn More"} />
      </div>
    </div>
  );
};

// Reusable Feature Component
const Feature = ({ icon, svg, title, text }) => (
  <div className="flex items-start">
    <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mr-4 mt-1 shrink-0">
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
    <p className="text-gray-600 text-sm md:text-base">
      <strong className="block text-gray-900">{title}</strong>
      {text}
    </p>
  </div>
);

export default Aboutus;
