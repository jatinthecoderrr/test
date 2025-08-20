import React from "react";
import { useState, useRef, useEffect } from "react";
import ServicesSlider from "../../../components/services/SlidingCards_NavigationButton";
import ImageTextSection from "../../../components/imageL_TextR";
import ImageTextSectionReversed from "../../../components/imageR_TextL";
import CTASection from "../../../components/Animatedbox";
import { Helmet } from "react-helmet";
const AffordableWebDesign = () => {
  const foldername = "/Affordable Web Design";
  const services = [
    {
      title: "Responsive Web Design",
      description:
        "Responsive web design optimizes layouts, ensuring all information is presented to customers in the best possible viewing manner across devices.",
      link: "https://geektheo.com/affordable-web-design/",
      icon: `${foldername}/responsive3.webp`,
      bg: "https://geektheo.copreneurs.in/wp-content/uploads/2024/06/ser-bg.webp",
    },
    {
      title: "Dynamic Website Design",
      description:
        "A website plays a vital role for every organization or business, significantly impacting the company's reputation and online presence.",
      link: "https://geektheo.com/progressive-web-apps/",
      icon: `${foldername}/web-dev.webp`,
      bg: "https://geektheo.copreneurs.in/wp-content/uploads/2024/06/ser-bg.webp",
    },
    {
      title: "Corporate Website Design",
      description:
        "Geektheory, a low-cost web design company in India, brings expertise in working with businesses of all sizes, delivering high-quality solution tailored to your needs.",
      link: "https://geektheo.com/startup-e-commerce/",
      icon: `${foldername}/code.webp`,
      bg: "https://geektheo.copreneurs.in/wp-content/uploads/2024/06/ser-bg.webp",
    },
    {
      title: "E-Commerce Website Design",
      description:
        "As an online retailer, it's essential to convert casual buyer into loyal local customer, driving repeat business and fostering strong relationships.",
      link: "https://geektheo.com/custom-software-development/",
      icon: `${foldername}/ecommerce-1.webp`,
      bg: "https://geektheo.copreneurs.in/wp-content/uploads/2024/06/ser-bg.webp",
    },
    {
      title: "Template Design",
      description:
        "We provide efficient and professional website design services, offering a comprehensive range of templates tailored to meet your needs.",
      link: "https://geektheo.com/affordable-app-development/",
      icon: `${foldername}/design.webp`,
      bg: "bg-white",
    },
    {
      title: "Web Portal Design",
      description:
        "When the portal is crucial to your business, you cannot afford to compromise on its performance and reliability.",
      link: "https://geektheo.com/ui-ux-design-services/",
      icon: `${foldername}/web-hosting.webp`,
      bg: "bg-white",
    },
    {
      title: "CMS Web Design",
      description:
        "CMS allows you to effortlessly manage your website's content with ease, without needing technical expertise or advanced skills.",
      link: "https://geektheo.com/digital-marketing-agency/",
      icon: `${foldername}/cms-1.webp`,
      bg: "bg-white",
    },
    {
      title: "Static Web Design",
      description:
        "A static website is a basic type of website created by developing pages and uploading them to a web server for display.",
      link: "https://geektheo.com/seo-services/",
      icon: `${foldername}/slide-website.webp`,
      bg: "bg-white",
    },
  ];
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 lg:py-40"
        style={{
          backgroundImage: "url('/page_bread.webp')",
        }}
      >
        <div className="absolute inset-0"></div> {/* breadcrumb overlay */}
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-black font-extrabold text-4xl md:text-6xl lg:text-7xl mb-0">
              Affordable Web Design
            </h1>
          </div>
        </div>
      </div>
      {/* Your dream website, at a dream price */}
      <ImageTextSectionReversed
          imageSrc={`${foldername}/dream-website.webp`}
          imageAlt="Brand Image"
          title="Your dream website, at a dream price"
          subtitle=" Dream website"
          description="Geektheory is committed to providing top-notch web design
                  services in Chennai. Our mission is to transform your ideas
                  into captivating, customized websites that align perfectly
                  with your business objectives. We pride ourselves on
                  delivering high-quality websites at affordable prices. Our
                  experienced team of professionals is dedicated to making your
                  dreams a reality by creating designs that effectively convey
                  your business message."
          description2="Our designs blend aesthetics with seamless functionality. We
                  offer cost-effective solutions without compromising
                  effectiveness. Customer satisfaction is our priority, ensuring
                  timely project delivery. With Geektheory, we bring your vision
                  to life, creating a platform that elevates your business."
          animationClass="translate-y-40" // slide from right
          // extraImgClass="h-[800px]"
          showButton = {true} // NEW: show or hide button
          buttonTitle = "GET FREE CONSULTATION" // NEW: button label
          buttonLink = "https://geektheo.com/contact/" // NEW: optional link
        />
      {/* What We offer Component */}
      <ServicesSlider
        subTitle="Our Services"
        title="What we Offer"
        // discription="At Geektheory, we ensure your new website outshines the old one and meets modern standards. Our redesign services refresh your brand and correct past design flaws Magento, an open-source CMS powered by PHP and MySQL, is gaining popularity for ecommerce websites. It allows businesses to stand out with customized features, offering an interactive user base and SEO benefits for better Google rankings. Magento also serves as a powerful marketing tool, enabling easy website customization to meet business needs. As the leading Magento development agency in Chennai, we ensure the best solutions for your ecommerce growth."
        services={services}
        bgColor="#f5f3f0"
      />
      {/* Responsive*/}
        <ImageTextSectionReversed
          imageSrc={`${foldername}/responsive-1.webp`}
          imageAlt="Brand Image"
          title="Responsive Web Design"
          subtitle="Responsive"
          description="It is easy to view and navigate through this website. Responsive website design company in Chennai can bring in more profit for a business. We offer responsive design solutions which makes the websites and the apps smart enough to adapt its content in accordance with the device’s screen size. We aim to increase the usability of the project. We are Best responsive web designing company in Chennai provide service with very reasonable price."
          description2="We develop responsive websites which saves your time. Also, responsive websites are preferred by the search engines. Thus, your website becomes search engine friendly. Responsive takes less time to load. This increases the website traffic and conversion. With us, you will get a website which looks modern, sleek, and clean. Customer’s satisfaction is the ultimate aim of our experts. Best web designing company in Chennai, build a website template with corporate standards."
          animationClass="translate-y-40" // slide from right
          // extraImgClass="h-[800px]"
        />
      {/* conversational */}

        <ImageTextSection
          imageSrc={`${foldername}/conversational-marketing.webp`}
          title="Conversational Marketing"
          subtitle="Conversational"
          description="In 2023, social commerce will play a bigger part in society. Customer evaluations, employee advocacy, and other forms of content provide a framework for brand- based content opportunities and social proof chances. It is simpler to convert social media viewers into consumers by eliminating the process of tapping from a social media app to the brand website to make a purchase."
          animationClass="translate-y-40" // slide from right
          bgImage="/body-bg-2-scaled-1.jpg"
        />
      {/* Static */}
        <ImageTextSectionReversed
          imageSrc={`${foldername}/design (1).webp`}
          imageAlt="Brand Image"
          title="Static Web Design"
          subtitle="Static"
          description="This will work well for smaller sites or the sites which have a short lifespan. A static website is easier to create and host. As a Top web design company in Chennai and static website design Company in Chennai offers creative and appealing designs to our clients. A static website will allow you to explain the objectives and goals of your company. We aim to ensure your online presence with the help of a static website design. If your company has a static website, it will load and launch at a faster rate. Our spool of technical experts discovers new horizons to make you happy with the design."
          // description2="We develop responsive websites which saves your time. Also, responsive websites are preferred by the search engines. Thus, your website becomes search engine friendly. Responsive takes less time to load. This increases the website traffic and conversion. With us, you will get a website which looks modern, sleek, and clean. Customer’s satisfaction is the ultimate aim of our experts. Best web designing company in Chennai, build a website template with corporate standards."
          animationClass="translate-y-40" // slide from right
          // extraImgClass="h-[800px]"
        />
      {/* Web Portal */}
        <ImageTextSection
          imageSrc={`${foldername}/web-portal.webp`}
          title="Web Portal Design"
          subtitle="Web Portal"
          description="The purpose of a website is to bring together the required information and showcase it in a specific platform. We use variety of technologies, tools, and platforms for developing a website which meets the portal requirements. We provide a web portal service which is organized and well-planned while bringing together web-based applications for performing various procedures."
          description2="Our experts are proficient in offering vertical and horizontal portals. We have in-depth experience for creating completely customized websites that are innovative and advanced."
          animationClass="translate-y-40" // slide from right
          bgImage="/body-bg-2-scaled-1.jpg"
        />
      {/* Why us */}
        <ImageTextSection
          imageSrc={`${foldername}/Geek-logo_webp-e1745647573961.webp`}
          title="Why Geektheory"
          subtitle="Why Us"
          description="Looking for affordable web design in Chennai? Look no further! We offer a wide range of web design services at prices that won't break the bank. Whether you're looking for a simple website or a complex e-commerce site, we can help you create a professional-looking website that will help you achieve your business goals.We understand that budget is a major concern for many businesses, but we believe that everyone should have access to high-quality web design. That's why we offer a variety of affordable web design packages to fit your needs and budget."
          // description2="Our experts are proficient in offering vertical and horizontal portals. We have in-depth experience for creating completely customized websites that are innovative and advanced."
          animationClass="translate-y-40" // slide from right
          showButton={true}
          buttonTitle="CONTACT US NOW"
          buttonLink="https://geektheo.com/contact/"
        />
      {/* Animated Section */}
        <CTASection
          subtitle="CONTACT US"
          title="Ready To Experience Upstage Yourself ?"
          buttonText="Let's get started"
          buttonLink="https://geektheo.com/about/"
          backgroundImage="/bg.webp"
        />
    </>
  );
};
export default AffordableWebDesign;
