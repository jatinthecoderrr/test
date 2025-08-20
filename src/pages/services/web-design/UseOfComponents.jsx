import React from 'react'
import ServicesSection from "../../../components/Services/CenterText_ReadMore"; 
import FeatureSection from "../../../components/Services/ImageL_TickMarkR";
import FeatureSectionRev from "../../../components/Services/ImageR_TickMarkL";
import BenefitsSection from "../../../components/Services/HoverTextCards";
import ServicesSlider from "../../../components/Services/SlidingCards_NavigationButton";
import MissionVision from "../../../components/Services/TextL_AutoSliderR";
import { Helmet } from "react-helmet";
const CorporateWebDesign = () => {
  const foldername = "Website Redesigning";
   const myServices = [
  {
    title: "Web Development",
    description: "Crafting responsive websites...",
    image: "/images/web.png",
    link: "/web-development",
  },
  
  {
    title: "App Development",
    description: "Building scalable mobile apps...",
    image: "/images/app.png",
    link: "/app-development",
  },
  {
    title: "App Development",
    description: "Building scalable mobile apps...",
    image: "/images/app.png",
    link: "/app-development",
  },
  {
    title: "App Development",
    description: "Building scalable mobile apps...",
    image: "/images/app.png",
    link: "/app-development",
  },
  {
    title: "App Development",
    description: "Building scalable mobile apps...",
    image: "/images/app.png",
    link: "/app-development",
  },
    {
    title: "App Development",
    description: "Building scalable mobile apps...",
    image: "/images/app.png",
    link: "/app-development",
  },
    {
    title: "App Development",
    description: "Building scalable mobile apps...",
    image: "/images/app.png",
    link: "/app-development",
  },
    {
    title: "App Development",
    description: "Building scalable mobile apps...",
    image: "/images/app.png",
    link: "/app-development",
  },
    {
    title: "App Development",
    description: "Building scalable mobile apps...",
    image: "/images/app.png",
    link: "/app-development",
  },
]; 

 const servicesData = [
  {
    icon: "/icons/web.png",
    title: "Web Development",
    description: "Build scalable, responsive websites tailored to your needs.",
  },
  {
    icon: "/icons/app.png",
    title: "App Development",
    description: "High-performance mobile apps for iOS and Android.",
  },
  {
    icon: "/icons/seo.png",
    title: "SEO Optimization",
    description: "Boost your rankings and online visibility.",
  },
  {
    icon: "/icons/marketing.png",
    title: "Digital Marketing",
    description: "Grow your brand with smart marketing strategies.",
  },
  {
    icon: "/icons/web.png",
    title: "Web Development",
    description: "Build scalable, responsive websites tailored to your needs.",
  },
  {
    icon: "/icons/app.png",
    title: "App Development",
    description: "High-performance mobile apps for iOS and Android.",
  },
  {
    icon: "/icons/seo.png",
    title: "SEO Optimization",
    description: "Boost your rankings and online visibility.",
  },
  {
    icon: "/icons/marketing.png",
    title: "Digital Marketing",
    description: "Grow your brand with smart marketing strategies.",
  },
];

const features = [
    {
      title: "Start A New",
      description:
        "Website redesigning offers a fresh start, allowing you to fix past mistakes and build a stronger online presence.",
      img: `${foldername}/update.webp`,
      hoverColor: "group-hover:text-[#0d6efd]",
    },
    {
      title: "Wider Audience",
      description:
        "The digital world moves fast—staying ahead means adapting quickly.",
      img: `${foldername}/users.webp`,
      hoverColor: "group-hover:text-[#8160a8]",
    },
    {
      title: "Increase Conversion",
      description:
        "A website’s conversion rate directly impacts business profits.",
      img: `${foldername}/code-optimize.webp`,
      hoverColor: "group-hover:text-[#64c574]",
    },
    {
      title: "Get Better Ranking",
      description:
        "A new website boosts search rankings and visibility with fresh, SEO-optimized content.",
      img: `${foldername}/talent.webp`,
      hoverColor: "group-hover:text-[#15b82c]",
    },
    {
      title: "Reinforce Your Brand",
      description:
        "Redesigning your website lets you refresh your brand and create a more engaging, user-friendly interface.",
      img: `${foldername}/ecommerce_creative.webp`,
      hoverColor: "group-hover:text-[#7e77a2]",
    },
    {
      title: "Boosts Morale",
      description:
        "Redesigning your website helps refresh your brand and improve user experience.",
      img: `${foldername}/end-users.webp`,
      hoverColor: "group-hover:text-[#d3635c]",
    },
  ];

const missionSlides = [
  {
    img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/03/mission.webp",
    alt: "Our Mission",
    title: "Our Mission",
    description:
    " As the leading Magento development agency in Chennai, we ensure the best solutions for your ecommerce growth Our mission is to empower growth and innovation through technology, creating impactful solutions for businesses and individuals.",
  },
  {
    img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/03/vision.webp",
    alt: "Our Vision",
    title: "Our Vision",
    description:
      "Our vision is to lead technological advancement responsibly while promoting sustainability and inspiring the next generation of passionate innovators.",
  },
  {
    img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/03/values.webp",
    alt: "Our Values",
    title: "Our Values",
    description:
      "Our values are to foster innovation, integrity, and collaboration, while committing to sustainability and excellence in all our endeavors.",
  },
];

  return (
    <>
    <ServicesSection
      subTitle="What We Do"
      titleWords="We Provide Best Services"
      description="We help businesses grow with technology-driven services located in the heart of the city, we specialize in delivering top-notch web design solutions that elevate your brand and engage your audience. Our team of experts combines creativity with technical expertise to create stunning, user-friendly websites that drive results."
      services={myServices}
      columns={{ sm: 1, md: 2, lg: 4 }}
    />

   
  
    <FeatureSection
      subTitle="Redesigning"
      title="Why Go For Website Redesigning?"
      description1="At Geektheory, we ensure your new website outshines the old one and meets modern standards. Our redesign services refresh your brand and correct past design flaws."
      description2="Our redesign services refresh your brand and correct past design flaws for   ."
      features={[
        "Responsive and mobile-friendly",
        "Improved SEO structure",
        "Faster load times",
        "Modern UI/UX design",
      ]}
      image="/GeekTheoryIcon.png"
      bgImage="/images/bg-pattern.png"
      bgColor="#f9fafb"
    />

    <FeatureSectionRev
      subTitle="Redesigning"
      title="Why Go For Website Redesigning?"
      description1="At Geektheory, we ensure your new website outshines the old one and meets modern standards. Our redesign services refresh your brand and correct past design flaws."
      description2="Our redesign services refresh your brand and correct past design flaws for   ."
      features={[
        "Responsive and mobile-friendly",
        "Improved SEO structure",
        "Faster load times",
        "Modern UI/UX design",
      ]}
      image="/GeekTheoryIcon.png"
      bgImage="/images/bg-pattern.png"
      bgColor="#f9fafb"
    />

   

    <BenefitsSection
      title="Why Choose Our Redesign Services?"
      paragraph="Redesigning your website gives your business a fresh start. Our expert team ensures it is modern, fast, and aligned with your goals."
      features={features}
    />

      <ServicesSlider
      subTitle="What We Offer"
      title="Our Premium Services"
      discription="At Geektheory, we ensure your new website outshines the old one and meets modern standards. Our redesign services refresh your brand and correct past design flaws Magento, an open-source CMS powered by PHP and MySQL, is gaining popularity for ecommerce websites. It allows businesses to stand out with customized features, offering an interactive user base and SEO benefits for better Google rankings. Magento also serves as a powerful marketing tool, enabling easy website customization to meet business needs. As the leading Magento development agency in Chennai, we ensure the best solutions for your ecommerce growth."
      services={servicesData}
      bgColor="#f5f3f0"
    />

     <MissionVision
      subTitle="Company Goals"
      title="Mission, Vision & Values"
      slides={missionSlides}
    />

    </>
  );
}

export default CorporateWebDesign