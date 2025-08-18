import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

function SocialMediaHeader() {
  const contactLink = {
    href: "tel:+919043486056",
    icon: <FaPhoneAlt color="#FC2411" />,
    label: "Tel: +91 90434 86056",
    isText: true,
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/geek-theory-pvt-ltd/",
      icon: <FaLinkedinIn color="#FC2411" size={18} />,
      label: "LinkedIn",
    },
    {
      href: "https://wa.me/919043486056",
      icon: <IoLogoWhatsapp color="#FC2411" size={20} />,
      label: "WhatsApp",
    },
    {
      href: "https://www.instagram.com/GeekTheory/",
      icon: <FaInstagram color="#FC2411" size={20} />,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/geektheoryGT/",
      icon: <FaFacebookF color="#FC2411" size={18} />,
      label: "Facebook",
    },
    {
      href: "mailto:info@geektheory.in",
      icon: <MdMailOutline color="#FC2411" size={20} />,
      label: "Email",
    },
  ];

  return (
    <div className="flex md:flex justify-between items-center text-sm px-2 md:px-8 py-3">
      {/* Phone */}
      <a
        href={contactLink.href}
        className="flex items-center gap-2 text-gray-700 hover:text-[#FC2411] transition-colors duration-300"
      >
        {contactLink.icon}
        <span>{contactLink.label}</span>
      </a>

      {/* Social Icons */}
      <div className="flex justify-between items-center gap-2 md:gap-4 z-50">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="hover:scale-110 transition-transform duration-300"
          >
            {link.icon}
          </a>
          
        ))}
      </div>
    </div>
  );
}

export default SocialMediaHeader;
