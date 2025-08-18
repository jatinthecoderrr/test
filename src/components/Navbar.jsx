import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn, FaAngleDown, FaBars } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { MdMailOutline } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const linkClass = ({ isActive }) =>
    isActive ? "text-[#FC2411] font-medium" : "hover:text-[#FC2411]";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#FC2411] font-medium border-b border-gray-200 py-3 px-4"
      : "hover:text-[#FC2411] border-b border-gray-200 py-3 px-4";

  return (
    <header className="w-full z-50 relative">
      {/* Upper Header */}
      <div className=" hidden md:flex justify-between items-center text-sm px-4 md:px-8 py-2 ">
        <a
          href="tel:+919043486056"
          className="flex items-center gap-2 text-gray-700 hover:text-[#FC2411]"
        >
          <FaPhoneAlt color="#FC2411" />
          <span>Tel: +91 90434 86056</span>
        </a>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="https://www.linkedin.com/company/geek-theory-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn color="#FC2411" size={18} />
          </a>
          <a
            href="https://wa.me/919043486056"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp color="#FC2411" size={20} />
          </a>
          <a
            href="https://www.instagram.com/GeekTheory/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram color="#FC2411" size={20} />
          </a>
          <a
            href="https://www.facebook.com/geektheoryGT/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF color="#FC2411" size={18} />
          </a>
          <a href="mailto:info@geektheory.in" aria-label="Email">
            <MdMailOutline color="#FC2411" size={20} />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center mt-2  md:mt-0 px-4 md:px-4 pb-3 md:mr-5 ">
        
        <button onClick={() => navigate("/")} className="z-20">
          <img
            src="/gt-logo-black-text.png"
            alt="Geek Theory Logo"
            className="w-48 cursor-pointer"
          />
        </button>

        {/* Mobile menu button */}
        <button
          className="lg:hidden z-20 text-gray-800 hover:text-[#FC2411]"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <FaAngleDown size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden overflow-y-auto`}
        >
          <div className="flex justify-between p-4">
            <img
              src="/GeekTheoryIcon.png"
              alt="Geek Theory Logo"
              className="w-20 cursor-pointer"
            />

            <button
              onClick={closeSidebar}
              className="text-gray-800 hover:text-[#FC2411]"
              aria-label="Close menu"
            >
              <RxCross2 size={24} />
            </button>
          </div>

          <div className="flex flex-col ">
            <NavLink to="/" className={mobileLinkClass} onClick={closeSidebar}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={mobileLinkClass}
              onClick={closeSidebar}
            >
              About
            </NavLink>

            {/* Services Dropdown Mobile */}
            <div className="border-b border-gray-200">
              <button
                className={`flex justify-between items-center w-full py-3 px-4 hover:text-[#FC2411] ${
                  openDropdown === "services" ? "text-[#FC2411]" : ""
                }`}
                onClick={() => toggleDropdown("services")}
              >
                <span>Services</span>
                <GoChevronDown
                  className={`transition-transform duration-200 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                  openDropdown === "services" ? "max-h-screen" : "max-h-0"
                }`}
              >
                {[
                  {
                    title: "WEB DESIGN",
                    links: [
                      ["Affordable Web Design", "/affordable-web-design"],
                      ["Corporate Web Design", "/corporate-web-design"],
                      [
                        "Content Management System",
                        "/content-management-system",
                      ],
                      ["HTML5 Web Design", "/html5-web-design"],
                      ["Responsive Web Design", "/responsive-web-design"],
                      ["Website Redesigning", "/website-redesigning"],
                    ],
                  },
                  {
                    title: "WEB DEVELOPMENT",
                    links: [
                      ["Php Web Development", "/php-web-development"],
                      ["Progressive Web Apps", "/progressive-web-apps"],
                      [
                        "Real Time Web Application Development",
                        "/real-time-web-application",
                      ],
                      [
                        "Special Framework Development",
                        "/special-framework-development",
                      ],
                      ["React Js Development", "/react-js-development"],
                    ],
                  },
                  {
                    title: "ECOMMERCE",
                    links: [
                      ["Magento Development", "/magento-development"],
                      ["Startup E-Commerce", "/startup-ecommerce"],
                      ["Premium E Commerce", "/premium-ecommerce"],
                      ["Magento Hosting", "/magento-hosting"],
                    ],
                  },
                  {
                    title: "MOBILE APP DEVELOPMENT",
                    links: [
                      ["Android App Development", "/android-app-development"],
                      ["iOS App Development", "/ios-app-development"],
                      ["Hybrid App Development", "/hybrid-app-development"],
                      [
                        "Angular JS App Development",
                        "/angular-js-app-development",
                      ],
                      ["Flutter App Development", "/flutter-app-development"],
                    ],
                  },
                  {
                    title: "DEVELOPMENT",
                    links: [
                      ["Mean Stack Development", "/mean-stack-development"],
                      ["Django Web Development", "/django-web-development"],
                      ["Web Conference App", "/web-conference-app"],
                      ["Game Development", "/game-development"],
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="mb-4 px-4 ">
                    <h4 className="text-[#FC2411] font-semibold py-2">
                      {section.title}
                    </h4>
                    {section.links.map(([label, to]) => (
                      <NavLink
                        key={to}
                        to={to}
                        className="block py-2 pl-2 hover:text-[#FC2411]"
                        onClick={closeSidebar}
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Hire Developers Dropdown Mobile */}
            <div className="border-b border-gray-200">
              <button
                className={`flex justify-between items-center w-full py-3 px-4 hover:text-[#FC2411] ${
                  openDropdown === "hire" ? "text-[#FC2411]" : ""
                }`}
                onClick={() => toggleDropdown("hire")}
              >
                <span>Hire Developers</span>
                <GoChevronDown
                  className={`transition-transform duration-200 ${
                    openDropdown === "hire" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                  openDropdown === "hire" ? "max-h-screen" : "max-h-0"
                }`}
              >
                {[
                  ["Hire Laravel Developer", "/hire-laravel-developer"],
                  ["Hire Magento Developer", "/hire-magento-developer"],
                  ["Hire Web Developer", "/hire-web-developer"],
                ].map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className="block py-2 px-6 hover:text-[#FC2411]"
                    onClick={closeSidebar}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Products Dropdown Mobile */}
            <div className="border-b border-gray-200">
              <button
                className={`flex justify-between items-center w-full py-3 px-4 hover:text-[#FC2411] ${
                  openDropdown === "products" ? "text-[#FC2411]" : ""
                }`}
                onClick={() => toggleDropdown("products")}
              >
                <span>Products</span>
                <GoChevronDown
                  className={`transition-transform duration-200 ${
                    openDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                  openDropdown === "products" ? "max-h-screen" : "max-h-0"
                }`}
              >
                {[
                  [
                    "Institute Management System",
                    "/institute-management-system",
                  ],
                  ["HR Management System", "/hr-management-system"],
                  ["Event Booking Solution", "/event-booking-solution"],
                  ["Food Ordering Solution", "/food-ordering-solution"],
                  ["Retail Point of Sales", "/retail-pos"],
                  ["Google Data Extractor", "/google-data-extractor"],
                  ["IOT Solutions", "/iot-solutions"],
                  ["Classified Ads Solution", "/classified-ads-solution"],
                  ["Retail POS Software", "/retail-pos-software"],
                  ["Trading and Retail ERP", "/trading-retail-erp"],
                  ["Lease Management System", "/lease-management-system"],
                  ["On Demand Service Booking", "/on-demand-service-booking"],
                  ["On Demand Taxi Booking", "/on-demand-taxi-booking"],
                ].map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className="block py-2 px-6 hover:text-[#FC2411]"
                    onClick={closeSidebar}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/contact"
              className={mobileLinkClass}
              onClick={closeSidebar}
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Overlay when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px]  text-gray-800">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          {/* Services Dropdown - Desktop */}
          <div className="relative group">
            <div className="cursor-pointer flex items-center gap-1 hover:text-[#FC2411] group-hover:text-[#FC2411]">
              Services <FaAngleDown className="mt-1" />
            </div>
            <div
              className="fixed left-0 right-0  top-[100px] mt-3 bg-cover bg-no-repeat  bg-[url('/DropdownBG.jpg')] p-6 rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-wrap gap-6 w-[98.5%] z-50 shadow-lg "
              style={{ margin: "0 auto" }}
            >
              {[
                {
                  title: "WEB DESIGN",
                  links: [
                    ["Affordable Web Design", "/affordable-web-design"],
                    ["Corporate Web Design", "/corporate-web-design"],
                    ["Content Management System", "/content-management-system"],
                    ["HTML5 Web Design", "/html5-web-design"],
                    ["Responsive Web Design", "/responsive-web-design"],
                    ["Website Redesigning", "/website-redesigning"],
                  ],
                },
                {
                  title: "WEB DEVELOPMENT",
                  links: [
                    ["Php Web Development", "/php-web-development"],
                    ["Progressive Web Apps", "/progressive-web-apps"],
                    [
                      "Real Time Web Application Development",
                      "/real-time-web-application",
                    ],
                    [
                      "Special Framework Development",
                      "/special-framework-development",
                    ],
                    ["React Js Development", "/react-js-development"],
                  ],
                },
                {
                  title: "ECOMMERCE",
                  links: [
                    ["Magento Development", "/magento-development"],
                    ["Startup E-Commerce", "/startup-ecommerce"],
                    ["Premium E Commerce", "/premium-ecommerce"],
                    ["Magento Hosting", "/magento-hosting"],
                  ],
                },
                {
                  title: "MOBILE APP DEVELOPMENT",
                  links: [
                    ["Android App Development", "/android-app-development"],
                    ["iOS App Development", "/ios-app-development"],
                    ["Hybrid App Development", "/hybrid-app-development"],
                    [
                      "Angular JS App Development",
                      "/angular-js-app-development",
                    ],
                    ["Flutter App Development", "/flutter-app-development"],
                  ],
                },
                {
                  title: "DEVELOPMENT",
                  links: [
                    ["Mean Stack Development", "/mean-stack-development"],
                    ["Django Web Development", "/django-web-development"],
                    ["Web Conference App", "/web-conference-app"],
                    ["Game Development", "/game-development"],
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="flex flex-col gap-2 mr-4 ">
                  <h4 className="text-[#FC2411] font-semibold">
                    {section.title}
                  </h4>
                  {section.links.map(([label, to]) => (
                    <NavLink key={to} to={to} className={linkClass}>
                      {label}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Hire Developers Dropdown - Desktop */}
          <div className="relative group">
            <div className="cursor-pointer flex items-center gap-1 hover:text-[#FC2411] group-hover:text-[#FC2411]">
              Hire Developers <FaAngleDown className="mt-1" />
            </div>
            <div className="absolute top-full right-0 mt-5 bg-[url('/DropdownBG.jpg')] bg-cover bg-no-repeat  p-6 rounded-b-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[300px] z-50">
              {[
                ["Hire Laravel Developer", "/hire-laravel-developer"],
                ["Hire Magento Developer", "/hire-magento-developer"],
                ["Hire Web Developer", "/hire-web-developer"],
              ].map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  className={linkClass + " flex flex-col mb-2 hover:text-[#FC2411]"}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Products Dropdown - Desktop */}
          <div className="relative group">
            <div className="cursor-pointer flex items-center gap-1 hover:text-[#FC2411] group-hover:text-[#FC2411]">
              Products <FaAngleDown className="mt-1" />
            </div>
            <div className="absolute top-full right-0 mt-5 bg-[url('/DropdownBG.jpg')] bg-cover bg-no-repeat  p-6 rounded-b-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[500px] z-50 flex gap-6">
              <div className="flex flex-col gap-2 w-1/2">
                {[
                  [
                    "Institute Management System",
                    "/institute-management-system",
                  ],
                  ["HR Management System", "/hr-management-system"],
                  ["Event Booking Solution", "/event-booking-solution"],
                  ["Food Ordering Solution", "/food-ordering-solution"],
                  ["Retail Point of Sales", "/retail-pos"],
                  ["Google Data Extractor", "/google-data-extractor"],
                  ["IOT Solutions", "/iot-solutions"],
                ].map(([label, to]) => (
                  <NavLink key={to} to={to} className={linkClass}>
                    {label}
                  </NavLink>
                ))}
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                {[
                  ["Classified Ads Solution", "/classified-ads-solution"],
                  ["Retail POS Software", "/retail-pos-software"],
                  ["Trading and Retail ERP", "/trading-retail-erp"],
                  ["Lease Management System", "/lease-management-system"],
                  ["On Demand Service Booking", "/on-demand-service-booking"],
                  ["On Demand Taxi Booking", "/on-demand-taxi-booking"],
                ].map(([label, to]) => (
                  <NavLink key={to} to={to} className={linkClass}>
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;