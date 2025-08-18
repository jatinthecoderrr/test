import React, { useState, useRef, useEffect } from 'react';
import SocialMediaHeader from '../../../components/SocialMediaHeader';
import RotatingStarL_ImgR from '../../../components/Services/RotatingStarL_ImgR';
import MissionVision from '../../../components/Services/TextL_AutoSliderR';
import BenefitsSection from '../../../components/Services/HoverTextCards';
import ImageTextSectionReversed from '../../../components/imageR_TextL'
import CTASection from '../../../components/Animatedbox'
import AnimatedSection from "../../../components/Services/TextL_IconEffectR";

const CorporateWebDesign = () => {
  const foldername = "Corporate Web Design"
   
    const steps = [
    {
      text: "Customized Web Design",
      color: "bg-orange-100 text-orange-500",
    },
    {
      text: "Competitive Rates",
      color: "bg-red-100 text-red-500",
    },
    {
      text: "Multimedia Integration",
      color: "bg-blue-100 text-blue-500",
    },
    {
      text: "Business Growth Focused",
      color: "bg-green-100 text-green-500",
    },
  ];

  const missionSlides = [
  {
    img: `${foldername}/responsive2.webp`,
    alt: "Our Mission",
    title: "Our Mission",
    description:
      "Our mission is to empower growth and innovation through technology, creating impactful solutions for businesses and individuals.",
  },
  {
    img: `${foldername}/web-hosting.webp`,
    alt: "Our Vision",
    title: "Responsive Website",
    description:
      "Responsive web design company in Chennai for websites on mobiles, tablets, and desktops.",
  },
  {
    img: `${foldername}/web-dev.webp`,
    alt: "Our Values",
    title: "Dynamic Website",
    description:
      "Smart web design is our core strategy for creating dynamic and impactful websites.",
  },
  {
    img: `${foldername}/template-design.webp`,
    alt: "Our Values",
    title: "Graphic Design",
    description:
      "A picture speaks louder than words. Our experts create graphics that enhance your business.",
  },
  {
    img: `${foldername}/code.webp`,
    alt: "Our Values",
    title: "Custom Website",
    description:
      "We provide custom web designs tailored to client needs, creating websites in a creative way.",
  },
  {
    img: `${foldername}/template-design.webp`,
    alt: "Our Values",
    title: "Template Design",
    description:
      "We focus on client-provided specifications while creating websites with template designs.",
  },
];

const benefitsData = [
  {
    img: `${foldername}/widget.webp`,
    title: "Layout",
    description: "The manner in which the graphic, texts, and ads are arranged in the website.",
    hoverColor: "group-hover:text-[#0d6efd]",
  },
   {
      title: "Color",
      description:
        "Depends on your choice and helps in defining your website.",
      img: `${foldername}/color.webp`,
      hoverColor: "group-hover:text-[#8160a8]",
    },
    {
      title: "Fonts ",
      description:
        "Web safe fonts will make the content legible.",
      img: `${foldername}/font.webp`,
      hoverColor: "group-hover:text-[#64c574]",
    },
    {
      title: "Content",
      description:
        "The design and the content work hand in hand to highlight the message of the website.",
      img: `${foldername}/custom-requirement-1.webp`,
      hoverColor: "group-hover:text-[#15b82c]",
    },
    {
      title: "Graphics",
      description:
        "The graphic design enhances the look of the website.",
      img: `${foldername}/web-design.webp`,
      hoverColor: "group-hover:text-[#7e77a2]",
    },
    {
      title: "SEO Friendly",
      description:
        "Creating search engine friendly designs.",
      img: `${foldername}/seo.webp`,
      hoverColor: "group-hover:text-[#d3635c]",
    },
];
const services = [
  { img: `${foldername}/html-5123.webp`, title: "HTML5" },
  { img: `${foldername}/css12.webp`, title: "CSS3" },
  { img: `${foldername}/js123.webp`, title: "JAVASCRIPT" },
  { img: `${foldername}/jquery_webp.webp`, title: "JQUERY" },
  { img: `${foldername}/React2.webp`, title: "React JS" },
  { img: `${foldername}/wordpress123.webp`, title: "WORDPRESS" },
];

  return (
    <>
    <div
        className="relative bg-cover bg-center bg-no-repeat pb-24 md:pb-32 lg:pb-40"
        style={{
          backgroundImage:
            "url('/page_bread.webp')",
        }}
      >
        <SocialMediaHeader />
        <div className="absolute inset-0"></div> {/* breadcrumb overlay */}
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-black font-extrabold pt-12 text-4xl md:text-6xl lg:text-7xl mb-0 md:pt-28">
              Website Redesigning
            </h1>
          </div>
        </div>
      </div>

      {/* Corporate Web Design Experts */}
      <section>
      <RotatingStarL_ImgR
      subtitle="Web Design"
      title="Corporate Web Design Experts"
      description="Geektheory is a leading corporate web design company in Chennai, offering unique and dynamic websites that effectively represent your brand. We provide customized, professional web design services to ensure an outstanding browsing experience and cater to user expectations. With competitive rates and multimedia features, we help businesses stand out and create lasting impressions. Our team works to enhance your business prospects with designs that give you an edge over competitors."
      steps={steps}
      foldername={`${foldername}`}
      imageSrc="corporate.webp"
    />
      </section>

        {/* Technological stack */}
        <section>
              <AnimatedSection
      backgroundImage="/body-bg-2-scaled-1.jpg"
      backgroundColor="#ffffff"
      subtitle="Technological"
      title="Technological Stack"
      description="Geektheory values research and development in web design. Our team stays updated with the latest technologies, providing tailored solutions for your industry. We focus on solving problems, testing theories, and meeting user needs. As a top corporate web design company in Chennai, we ensure security, scalability, and compatibility with existing systems."
      buttonText="I HAVE A PROJECT"
      services={services}
    />
        </section>

        {/*  our Design  */}
        <section>
          <MissionVision
      subTitle="Web design"
      title="Our Design Services"
      description="Driving innovation while staying committed to sustainabilityWe offer a range of design solutions tailored to meet the unique needs of your business, ensuring creativity, functionality, and responsiveness."
      slides={missionSlides}
      backgroundImage="/body-bg-2-scaled-1.jpg"
    />
        </section>

        {/* Creative Design  */}
        <BenefitsSection
        subtitle=" Design"
      title="Creative Design"
      paragraph="Geektheory creates visually appealing corporate websites, consulting with clients to understand their needs, ensuring innovation, and delivering the best design service."
      features={benefitsData}
    />

  {/* Why Us  */}
      
         <section>
        <ImageTextSectionReversed
          imageSrc={`${foldername}/Geek-logo_webp-e1745647573961.webp`}
          imageAlt="Brand Image"
          title="Why Geektheory"
          subtitle="Why Us"
          description="Geektheory is a top web design company in Chennai, known for delivering high-quality app solutions and expert HTML5 web design. Our skilled developers and designers follow a structured development process to create innovative, user-friendly websites."
          description2="We specialize in utilizing CSS3 and HTML5 to offer seamless mobile app development and an optimized user experience, ensuring your website stands out on all devices."
          animationClass="translate-y-40" // slide from right
          backgroundImage="/body-bg-2-scaled-1.jpg"
        />
      </section>

             {/* Animated Section */}
      <section>
        <CTASection
          subtitle="CONTACT US"
          title="Ready To Experience Upstage Yourself ?"
          buttonText="Let's get started"
          buttonLink="https://geektheo.com/about/"
          backgroundImage="/bg.webp"
        />
      </section>
        
    </>
  );
}
export default CorporateWebDesign