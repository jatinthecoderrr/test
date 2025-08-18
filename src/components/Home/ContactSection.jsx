import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPlug,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
// Adjust the path as necessary

const ContactSection = () => {
  return (
    <section className="pb-32  bg-[url('/contact-bg.png')] bg-cover bg-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full lg:w-7/12 pt-24 pl-4 lg:pl-16 pr-4 lg:pr-0">
            <div className="mb-8">
              <div className="text-red-500 text-lg font-medium mb-2 animate-fadeInRight">
                Contact Us
              </div>
              <h2 className="text-4xl text-white lg:text-5xl font-bold leading-snug tracking-tight mb-6">
                <span className="block">One Web Solution For</span>
                <span className="block">Your Business</span>
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Improve efficiency, provide a better customer experience <br />
                with modern technology services available
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://geektheo.com/contact/"
                className="relative inline-block px-10 py-5 rounded-full text-white text-2xl font-semibold overflow-hidden bg-gradient-to-r from-[#5e0d04] to-[#e62013] transition-all duration-500 group hover:bg-gradient-to-l"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-5/12 relative mt-12 lg:mt-0">
            <span className="absolute -top-[70px] left-[-30px] w-25 h-25 z-50">
              <img
                src="https://geeknew.sonicboomx.com/wp-content/uploads/2024/06/star.webp"
                alt="Star"
                className="w-full h-full object-contain"
              />
            </span>

            <form className="bg-[#171926] shadow-lg rounded-2xl p-8 space-y-6 z-10 pt-25 relative top-[-40px]">
              <div>
                <label className="block text-white mb-2 flex items-center gap-2">
                  <FaUser /> Name *
                </label>
                <input
                  type="text"
                  placeholder="Type Name"
                  className="w-full border bg-white border-gray-300 rounded-md px-4 py-2 "
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 flex items-center gap-2">
                  <FaPhoneAlt /> Phone *
                </label>
                <input
                  type="tel"
                  placeholder="Type phone number"
                  className="w-full border bg-white border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 items-center gap-2">
                  <MdOutlineMailOutline className="text-2xl" /> Email *
                </label>
                <input
                  type="email"
                  placeholder="Type email address"
                  className="w-full border bg-white border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 items-center gap-2">
                  <FaPlug /> Subject *
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border bg-white border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="relative px-40 py-5 text-white font-semibold rounded-md overflow-hidden bg-gradient-to-r from-[#5e0d04] to-[#e62013] transition-all duration-500 group hover:scale-105 hover:bg-gradient-to-l"
                >
                  {/* <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-black transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 opacity-0 translate-x-full"></span> */}
                  <span className="relative z-10 group-hover:text-white">
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
