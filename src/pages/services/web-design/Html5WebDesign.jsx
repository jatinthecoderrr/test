import React from "react";
import ImageTextSection from "../../../components/imageL_TextR";
import ImageTextSectionReversed from "../../../components/imageR_TextL";
import { useState, useRef, useEffect } from "react";
import FeatureSectionRev from "../../../components/services/ImageR_TickMarkL";
import FeatureSection from "../../../components/services/ImageL_TickMarkR";
import CTASection from "../../../components/Animatedbox";
import { Helmet } from "react-helmet";
const Html5WebDesign = () => {
  const foldername = "/HTML5";
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-32 lg:py-40"
        style={{
          backgroundImage: "url('/page_bread.webp')",
        }}
      >
        <div className="absolute inset-0"></div> {/* breadcrumb overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-black font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-0">
              HTML5 Web Design
            </h1>
          </div>
        </div>
      </div>
      {/* HTML5 Web Design Company in Chennai */}
      <ImageTextSection
        imageSrc={`${foldername}/html5.webp`}
        title="HTML5 Web Design Company in Chennai"
        subtitle="HTML 5"
        description="As the best HTML5 web design company in Chennai, Geektheory creates structured, scalable, and secure websites for all devices. Our tech-savvy HTML5 solutions enhance user experience, ensuring easy maintenance and seamless API integration."
        description2="As the best HTML5 web design company in Chennai, Geektheory leverages HTML5 for cross-platform applications with great functionality. We transform data into responsive, user-friendly designs for all mobile devices."
        animationClass="translate-y-40" // slide from right
        // bgImage="/body-bg-2-scaled-1.jpg"
      />
      {/* Benefits of HTML5 Web Designing */}
      <FeatureSectionRev
        subTitle="HTML 5"
        title="Benefits of HTML5 Web Designing"
        description2="Geektheory , based in the Indian capital of Chennai, should be your obvious choice for any top HTML5 web designing company in Chennai activity. While there are numerous players in the field of web designing, Geektheory simply offers a lot more!."
        features={[
          "Compatible with all modern browsers.",
          "Supports both desktop and mobile websites.",
          "Enables rich media content for top-tier designs.",
          "‘Canvas’ feature enhances interactive elements.",
          "Loads faster than older HTML versions.",
        ]}
        image={`${foldername}/benifit.webp`}
        bgColor="#f5f3f0"
      />
      {/* Web Design Using HTML5 */}
      <ImageTextSection
        imageSrc={`${foldername}/html5design.webp`}
        title="Web Design Using HTML5"
        subtitle="HTML 5"
        description="HTML5 is lean yet powerful language. New tags that are common for document structures offer browsers, authors, and the search engine more knowledge about the content. New form specifies addresses, dates, emails, and telephone numbers for facilitating more useful input and client-side validation. With our pixel perfect result and our on time delivery makes us one of the best HTML5 web design companies in Chennai."
        description2="Relying on our HTML5 developers will be the best option to get an effective and innovative design for your website. The competency of our experts to use HTML5 canvas drawing tool enables the designers to develop highly responsive website which will make your website have a dominant online presence. Geektheory offers the best HTML5 web design company in Chennai to our clients for leveraging the potential in various ways."
        animationClass="translate-y-40" // slide from right
        // bgImage="/body-bg-2-scaled-1.jpg"
      />
      {/* Why us*/}
      <ImageTextSectionReversed
        imageSrc={`${foldername}/Geek-logo_webp-e1745647573961.webp`}
        imageAlt="Brand Image"
        title="Why Geektheory"
        subtitle="Why Us"
        description="Geektheory is a top web design company in Chennai, known for delivering high-quality app solutions and expert HTML5 web design. Our skilled developers and designers follow a structured development process to create innovative, user-friendly websites."
        description2="We specialize in utilizing CSS3 and HTML5 to offer seamless mobile app development and an optimized user experience, ensuring your website stands out on all devices."
        animationClass="translate-y-40" // slide from right
        // extraImgClass="h-[800px]"
        backgroundImage="/body-bg-2-scaled-1.jpg"
      />
      {/* Web App Compatibility */}
      <FeatureSection
        subTitle="Compatibility"
        title="HTML Web App Compatibility"
        description1="HTML5 ensures modern browser compatibility, better content structure, and improved SEO. It helps build dynamic, responsive, and user-friendly websites."
        description2="With over 9 years of experience, we are a leading HTML5 web design company in Chennai, specializing in building high-performance web applications. Our expertise ensures cross-browser accessibility, advanced functionality, and a superior user experience."
        features={[
          "80% of HTML Web App Chrome Compatible",
          "77% of HTML Web App Firefox Compatible",
          "72% of HTML Web App Opera Compatible",
          "26% of HTML Web App IE Compatible",
        ]}
        image={`${foldername}/web-portal.webp`}
        bgImage="/images/bg-pattern.png"
        bgColor="#f5f3f0"
      />
      {/* Interface of Mobile Application */}
      <ImageTextSectionReversed
        imageSrc={`${foldername}/mobile.webp`}
        title="Interface of Mobile Application"
        subtitle="Mobile Application"
        description="We craft interactive mobile app interfaces using JavaScript frameworks like Ionic, AngularJS, and PolymerJS. Our team delivers tailored UI/UX solutions to meet client needs. As one of the top HTML5 web design companies in Chennai, we implement structured data to boost search rankings and have deep expertise in various HTML5 frameworks."
        description2="UI/UX design can be the difference between user dismay and user delight. This is the reason we have a team of experienced professionals who choose the pixels seriously. Behind every mobile app, there is a story about an amazing design. We have a design-first and build-second approach and this directs everything that we do."
        animationClass="translate-y-40" // slide from right
        // bgImage="/body-bg-2-scaled-1.jpg"
      />
      {/* Interface of Web Application */}
      <ImageTextSection
        imageSrc={`${foldername}/portal.webp`}
        title="Interface of Web Application"
        subtitle="Web Application"
        description="With more applications shifting to the web, UI design has become crucial for user experience. Web applications eliminate installation constraints and offer easy access. At Geektheory, we create unique HTML5 components to ensure your website is easily accessible to your target audience. Our experts optimize navigation to ensure customers can find what they need in two clicks."
        description2="Our creative professionals design interactive UI/UX elements to deliver exceptional results. We provide optimized code that ensures your application runs smoothly, unaffected by JavaScript or other frameworks. Geektheory is the best HTML5 web design company in Chennai, known for creating innovative websites with our expert team."
        animationClass="translate-y-40" // slide from right
        bgImage="/body-bg-2-scaled-1.jpg"
      />
      {/* Wearable Device */}
      <ImageTextSectionReversed
        imageSrc={`${foldername}/wearable.webp`}
        title="Interface of Wearable Device Application"
        subtitle="Wearable Device"
        description="Geektheory is a leading wearable application designing service in Chennai. We continue to be the pioneer in creating the best technical application combining functionality and world-class mobile experience. We ensure that the apps that we develop are flawlessly delivered and are customer-centric. We formulate the best wearable tech applications for our customers."
        description2="With innovative designs and satisfied clients, we stand out as the best HTML5 web design company in Chennai. Our skilled professionals ensure consistency, agility, and top-tier wearable app solutions to elevate your business."
        animationClass="translate-y-40" // slide from right
        // bgImage="/body-bg-2-scaled-1.jpg"
      />
      {/* Animated Section */}
      <CTASection
        subtitle="CONTACT US"
        title="Looking For A Web Development Company?"
        buttonText="TALK TO OUR EXPERTS"
        buttonLink="https://geektheo.com/about/"
        backgroundImage="/bg.webp"
      />
    </>
  );
};

export default Html5WebDesign;
