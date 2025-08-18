import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Button from "./Button";

const Footer = () => {
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
          <form className="flex items-center bg-white overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 text-black flex-1 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#5f5f5f] p-5 text-white"
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
            href="#"
            aria-label="Facebook"
            className="bg-white rounded-lg p-3 hover:bg-red-600 hover:text-white transition text-black"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="bg-white rounded-lg p-3 hover:bg-red-600 hover:text-white transition text-black"
          >
            <FaLinkedinIn className="text-xl hover:text-blue-400" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="bg-white rounded-lg p-3 hover:bg-red-600 hover:text-white transition text-black"
          >
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a
            href="#"
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
      <button
        className="fixed bottom-5 right-5 bg-black text-white p-3 rounded-full border border-white cursor-pointer hover:bg-white hover:text-black transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
