import React, { useState } from 'react';
import SectionHeader from '../../components/Home/HeaderComponent';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaLaptopCode } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { ChevronDown } from 'lucide-react';
import Button from '../../components/Button';
import toast, { Toaster } from "react-hot-toast";
import SocialMediaHeader from '../../components/SocialMediaHeader';
import { Helmet } from "react-helmet";

function ContactUs() {
        const links = [
                {       
                        name: "Facebook",
                        href: "https://www.facebook.com/geektheoryGT/",
                        icon: <FaFacebookF />,
                },
                {
                        name: "Whatsapp",
                        href: "https://wa.me/+919043486056",
                        icon: <FaWhatsapp />,
                },
                {
                        name: "Instagram",
                        href: "https://www.instagram.com/GeekTheory/",
                        icon: <FaInstagram />,
                },
                {       
                        name: "LinkedIn",
                        href: "https://www.linkedin.com/company/geek-theory-pvt-ltd",
                        icon: <FaLinkedinIn />,
                },
        ];

        const services = [
                "Web Development",
                "Ecommerce",
                "Mobile App Development",
                "Digital Marketing",
                "Development",
                "Hire Developers",
                "Institute Management System",
                "IOT Solutions",
                "Classified-Ads-Solution",
                "Other"
        ];

        const [form, setForm] = useState({
                name: "",
                service: "Web Development",
                phone: "",
                email: "",
                message: ""
        });

        const [errors, setErrors] = useState({});
        const [dropdownOpen, setDropdownOpen] = useState(false);

        const notify = () => {
                toast.success("Message sent successfully!", {
                        position: "top-right",
                        style: {
                                background: "#1f2937",
                                color: "#fff",
                                borderRadius: "0.5rem",
                                padding: "0.75rem 1rem",
                        },
                });
        };

        const validateForm = () => {
                let newErrors = {};
                if (!form.name.trim()) newErrors.name = "Please fill out this field.";
                if (!form.service.trim() || form.service === "Web Development") {
                        // Assuming "Web Development" is the default and should be a valid selection.
                        // If the user must select a different option, change this logic.
                }
                if (!form.phone.trim()) newErrors.phone = "Please fill out this field.";
                if (!form.message.trim()) newErrors.message = "Please fill out this field.";
                if (!form.email.trim()) newErrors.email = "Please fill out this field.";
                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
        };

        const handleChange = (e) => {
                setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
                // Clear the error for the field being edited
                if (errors[e.target.name]) {
                        setErrors(prev => ({ ...prev, [e.target.name]: null }));
                }
        };

        const handleServiceSelect = (service) => {
                setForm({ ...form, service });
                setDropdownOpen(false);
                // Clear service error on selection
                if (errors.service) {
                        setErrors(prev => ({ ...prev, service: null }));
                }
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                if (validateForm()) {
                        notify();
                        console.log('Form is valid and submitted:', form);
                }
        };

        return (
                <section className=" bg-[url('../../contact-bg.png')] bg-cover bg-center ">
                        <Toaster />
                        <SocialMediaHeader />
                        <div className='md:max-w-[880px] flex items-center justify-center mx-auto px-4 pt-24'>
                                <SectionHeader
                                        subTitle="CONTACT US"
                                        titleWords={["Excited", "About", "The", "Project", "?",
                                                "Please", "Get", "In", "Touch."]}
                                        description=" "
                                />
                        </div>

                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[53%_47%] gap-10 p-8">

                                {/* Contact Form */}
                                <div className="bg-white rounded-2xl p-8 shadow-[inset_0px_0px_49px_-5px_rgba(0,_0,_0,_0.1)] shadow-gray-200">
                                        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                                        <form onSubmit={handleSubmit} className="z-10 relative" noValidate>
                                                <div className='flex flex-wrap md:flex-nowrap justify-between gap-6'>
                                                        {/* Left Column */}
                                                        <div className='flex flex-col items-start w-full md:w-1/2'>
                                                                {/* Full Name */}
                                                                <div className='w-full'>
                                                                        <label className="text-black font-semibold mb-2 flex items-center gap-2">
                                                                                {/* FaUser icon as SVG */}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" /></svg>
                                                                                FULL NAME <span className="text-red-500">*</span>
                                                                        </label>
                                                                        <input
                                                                                type="text"
                                                                                name="name"
                                                                                value={form.name}
                                                                                onChange={handleChange}
                                                                                placeholder="Full Name"
                                                                                className={`w-full text-gray-600 font-medium bg-gray-100 rounded-full px-5 py-4 mb-1 focus:outline-none 
                               ${errors.name ? 'border-b-2 border-red-500' : ''}`}
                                                                        />
                                                                        {errors.name && <span className="text-sm text-red-500 mt-1 block">Please fill out this field.</span>}
                                                                </div>

                                                                {/* Dropdown */}
                                                                <div className="relative">
                                                                        <label className="text-black font-semibold mb-2 uppercase flex items-center gap-2 mt-5">
                                                                                <FaLaptopCode className="w-[20px]" />
                                                                                Select Service Type
                                                                                <span className="text-red-500">*</span>
                                                                        </label>
                                                                        <div
                                                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                                                                className="w-[280px] bg-gray-100 rounded-full cursor-pointer mb-4 px-5 py-4 flex justify-between items-center"
                                                                        >
                                                                                <span>{form.service}</span>
                                                                                <ChevronDown
                                                                                        className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                                                                />
                                                                        </div>
                                                                        {dropdownOpen && (
                                                                                <ul className="absolute z-50 w-full text-sm text-gray-600 bg-white rounded-lg min-h-70 max-h-70 overflow-y-auto">
                                                                                        {services.map((service, index) => (
                                                                                                <li
                                                                                                        key={index}
                                                                                                        onClick={() => handleServiceSelect(service)}
                                                                                                        className="p-3 text-gray-600 font-medium hover:bg-gray-200 cursor-pointer"
                                                                                                >
                                                                                                        {service}
                                                                                                </li>
                                                                                        ))}
                                                                                </ul>
                                                                        )}
                                                                </div>




                                                                {/* Phone Number */}
                                                                <div className='w-full mt-4'>
                                                                        <label className="text-black font-semibold mb-2 flex items-center gap-2">
                                                                                {/* FaPhoneAlt icon as SVG */}
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.22 15.22 0 0 0 6.59 6.59l2.45-2.45a1 1 0 0 1 1.04-.26a11.36 11.36 0 0 0 3.73.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A19 19 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1a11.36 11.36 0 0 0 .5 3.73a1 1 0 0 1-.26 1.04z" /></svg>
                                                                                PHONE NUMBER <span className="text-red-500">*</span>
                                                                        </label>
                                                                        <input
                                                                                type="tel"
                                                                                name="phone"
                                                                                value={form.phone}
                                                                                onChange={handleChange}
                                                                                placeholder="Type phone number"
                                                                                className={`w-full text-gray-600 font-medium bg-gray-100 rounded-full px-5 py-4 mb-1 focus:outline-none 
                               ${errors.phone ? 'border-b-2 border-red-500' : ''}`}
                                                                        />
                                                                        {errors.phone && <span className="text-sm text-red-500 mt-1 block">Please fill out this field.</span>}
                                                                </div>
                                                        </div>

                                                        {/* Right Column */}
                                                        <div className='flex flex-col items-start w-full md:w-1/2'>
                                                                {/* Message */}
                                                                <div className='w-full'>
                                                                        <label className="text-black font-semibold mb-2 flex">
                                                                                MESSAGE<span className="text-red-500">*</span>
                                                                        </label>
                                                                        <textarea
                                                                                name="message"
                                                                                value={form.message}
                                                                                onChange={handleChange}
                                                                                placeholder="Type Your Message"
                                                                                rows={5}
                                                                                className={`w-full p-3 text-gray-600 font-medium rounded-2xl min-h-[250px] mb-1 bg-gray-100 focus:outline-none 
                               ${errors.message ? 'border-b-2 border-red-500' : ''}`}
                                                                        ></textarea>
                                                                        {errors.message && <span className="text-sm text-red-500 mt-1 block">Please fill out this field.</span>}
                                                                </div>
                                                        </div>
                                                </div>

                                                {/* Email and Submit Button */}
                                                <div className='mt-6'>
                                                        <label className="text-black font-semibold flex mb-2 items-center gap-2">
                                                                {/* MdOutlineMailOutline icon as SVG */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
                                                                EMAIL ADDRESS <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                                type="email"
                                                                name="email"
                                                                value={form.email}
                                                                onChange={handleChange}
                                                                placeholder="Type email address"
                                                                className={`w-full text-gray-600 font-medium bg-gray-100 rounded-full px-5 py-4 mb-1 focus:outline-none 
                             ${errors.email ? 'border-b-2 border-red-500' : ''}`}
                                                        />
                                                        {errors.email && <span className="text-sm text-red-500 mt-1 block">Please fill out this field.</span>}
                                                        <div className="text-center mt-6">
                                                                <Button title="Send Message" />
                                                        </div>
                                                </div>
                                        </form>
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-8 mt-10">
                                        <div className="flex items-start space-x-4">
                                                <div className="bg-[#EEDEFC] rounded-full 
                px-3 py-2.5 
                sm:px-4 sm:py-3.5 
                flex items-center justify-center">
                                                        <FaMapMarkerAlt className="text-red-500 text-xl md:text-[1.4rem] sm:text-xl  mt-1" />
                                                </div>

                                                <div>
                                                        <p className="font-semibold text-lg sm:text-xl md:text-[1.4rem] text-[#111111]">
                                                                Head Office (Chennai)
                                                        </p>
                                                        <p className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed">
                                                                22a, 10, Venkatachalam St, Gokulam Colony,<br /> Ramakrishnapuram, West Mambalam,
                                                                Chennai, <br /> Tamil Nadu  600033
                                                        </p>
                                                </div>


                                        </div>
                                        <div className="flex items-start space-x-4">
                                                <div className="bg-[#EEDEFC] rounded-full 
                px-3 py-2.5 
                sm:px-4 sm:py-3.5 
                flex items-center justify-center">
                                                        <FaMapMarkerAlt className="text-red-500 text-xl sm:text-xl mt-1" />
                                                </div>
                                                <div>
                                                        <p className="font-semibold text-lg sm:text-xl md:text-[1.4rem] text-[#111111]">
                                                                Ujjain Branch
                                                        </p>
                                                        <p className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed">
                                                                Navkar Complex, Prakash Nagar, Sindhi Colony, Ujjain,<br />  Madhya Pradesh 456006
                                                        </p>
                                                </div>

                                        </div>
                                        <div className="flex items-start space-x-4">
                                                <div className="bg-[#EEDEFC] rounded-full 
                px-3 py-2.5 
                sm:px-4 sm:py-3.5 
                flex items-center justify-center">
                                                        <FaPhoneAlt className="text-red-500 text-xl sm:text-xl mt-1" />
                                                </div>
                                                <div>
                                                        <p className="font-semibold text-lg sm:text-xl md:text-[1.4rem] text-[#111111]">
                                                                Phone Number
                                                        </p>
                                                        <p className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed">
                                                                +91 9043486056
                                                        </p>
                                                </div>

                                        </div>
                                        <div className="flex items-start space-x-4">
                                                <div className="bg-[#EEDEFC] rounded-full 
                px-3 py-2.5 
                sm:px-4 sm:py-3.5 
                flex items-center justify-center">
                                                        <FaEnvelope className="text-red-500 text-xl sm:text-xl mt-1" />
                                                </div>
                                                <div>
                                                        <p className="font-semibold text-lg sm:text-xl md:text-[1.4rem] text-[#111111]">
                                                                Email Address
                                                        </p>
                                                        <p className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed">
                                                                info@geektheo.com
                                                        </p>
                                                </div>

                                        </div>

                                        {/* Social Links */}
                                        <div className="flex space-x-4 pt-4 relative z-40">
                                                {links.map((link, index) => (
                                                        <a
                                                                key={index}
                                                                href={link.href}
                                                                aria-label={link.name}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="p-5 border text-xl border-red-500 rounded-full text-red-500 
                     hover:bg-red-500 hover:text-white transition-colors duration-300"
                                                        >
                                                                {link.icon}
                                                        </a>
                                                ))}
                                        </div>
                                </div>
                        </div>
                        
                </section>
        );
}

export default ContactUs;


