import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Button from "./Button";
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 150) { // You can adjust this value
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className="bg-[#1f1f1f] text-white px-6 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6 gap-6">
        <img
          src="/geeklogo-text-white.png"
          alt="GeekTheory Logo"
          className="max-w-[220px]"
        />
        <h2 className="text-2xl font-bold text-center md:text-left">
          Ready To Get Started
        </h2>
        <Button title="Let's Meet" />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row justify-between md:gap-40 gap-5 mt-10">
        {/* Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="font-bold text-2xl mb-4 md:w-56">
            Subscribe To Our Newsletter
          </h3>
          <form className="flex items-center bg-white overflow-hidden rounded-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 text-black flex-1 outline-none placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-gray-500 p-6 text-black flex items-center justify-center rounded-r-full hover:bg-[#D5430E] hover:text-white transition-colors duration-500 ease-in-out"
              aria-label="Send email"
            >
              <FiSend size={22} />
            </button>
          </form>

        </div>

        {/* Links Section using Flexbox */}
        <div className="flex flex-wrap gap-x-7 gap-y-10 text-sm w-full mt-10">
          <div className="w-full md:w-[22%]">
            <h3 className="font-bold text-2xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Top Services</li>
              <li>Our Products</li>
              <li>Satisfied Clients</li>
              <li>IT Consultation</li>
            </ul>
          </div>
          <div className="w-full md:w-[22%]">
            <h3 className="font-bold text-2xl mb-4">About</h3>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Meet Our Team</li>
              <li>Projects</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="w-full md:w-[22%]">
            <h3 className="font-bold text-2xl mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
            </ul>
          </div>
          <div className="w-full md:w-[22%]">
            <h3 className="font-bold text-2xl mb-4">Help</h3>
            <ul className="space-y-2">
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex gap-2 mb-4 md:mb-0">
          <a
            href="https://www.facebook.com/geektheoryGT/"
            aria-label="Facebook"
            className="bg-white rounded-lg p-3 hover:bg-red-600 hover:text-white transition text-black"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/geek-theory-pvt-ltd/"
            aria-label="LinkedIn"
            className="bg-white rounded-lg p-3 hover:bg-red-600 hover:text-white transition text-black"
          >
            <FaLinkedinIn className="text-xl hover:text-blue-400" />
          </a>
          <a
            href="https://www.instagram.com/GeekTheory/"
            aria-label="Instagram"
            className="bg-white rounded-lg p-3 hover:bg-red-600 hover:text-white transition text-black"
          >
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a
            href="https://wa.me/919043486056"
            aria-label="WhatsApp"
            className="bg-white rounded-lg p-3 hover:bg-red-600 hover:text-white transition text-black"
          >
            <FaWhatsapp className="text-xl hover:text-green-500" />
          </a>
        </div>
        <p className="text-center">
          © 2025 Geektheory |{" "}
          <span className="text-red-600 font-semibold">
            All Rights Reserved
          </span>
        </p>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4 z-100">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-black text-white fixed bottom-[-20px] right-5 py-2 px-3 rounded-3xl  shadow-lg hover:bg-gray-800 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 30"
              stroke="currentColor"
              strokeWidth={2}
              className="h-15 w-6 text-white mx-auto"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 60V5M5 12l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>
      {/* <button
      id="scrollToTopButton"
  className="fixed bottom-[-20px] right-5 z-50 bg-black text-white py-2 px-3 rounded-3xl border-black cursor-pointer transition"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  aria-label="Scroll to top"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 30"
    stroke="currentColor"
    strokeWidth={2}
    className="h-15 w-6 text-white mx-auto"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 60V5M5 12l7-7 7 7" />
  </svg>
</button> */}

    </footer>
  );
};

export default Footer;
