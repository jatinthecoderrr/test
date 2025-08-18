import React from "react";
import TriangleBullet from "../../../components/Home/TriangleBullet";
import { useState, useRef, useEffect } from "react";
import Button from "../../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ImageTextSection from "../../../components/imageL_TextR";
import ImageTextSectionReversed from "../../../components/imageR_TextL";
import CTASection from "../../../components/Animatedbox";
const AffordableWebDesign = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const foldername = "/Affordable Web Design";
  const title = "What we Offer";
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
      icon: "/web-dev.webp",
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
  const [headingVisible, setHeadingVisible] = useState(false);
  const headingRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeadingVisible(true);
      },
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [imgVisible, setImgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible(true);
          imgObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          textObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) imgObserver.observe(imgRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      imgObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);
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
      <section className="w-full py-6 md:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12">
            {/* Text Column */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="text-left">
                <h5 className="text-[rgb(92,92,92)] flex gap-3 text-base md:text-xl uppercase mb-1 font-extrabold">
                  <TriangleBullet />
                  Dream website
                </h5>
                <h2
                  ref={headingRef}
                  className={`text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6  origin-left ${
                    headingVisible
                      ? "animate-stretchFromLeft"
                      : "scale-x-0 opacity-0"
                  }`}
                >
                  Your dream website, at a dream price
                </h2>
                <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                  Geektheory is committed to providing top-notch web design
                  services in Chennai. Our mission is to transform your ideas
                  into captivating, customized websites that align perfectly
                  with your business objectives. We pride ourselves on
                  delivering high-quality websites at affordable prices. Our
                  experienced team of professionals is dedicated to making your
                  dreams a reality by creating designs that effectively convey
                  your business message. <br />
                  <br />
                  Our designs blend aesthetics with seamless functionality. We
                  offer cost-effective solutions without compromising
                  effectiveness. Customer satisfaction is our priority, ensuring
                  timely project delivery. With Geektheory, we bring your vision
                  to life, creating a platform that elevates your business.
                </p>
                <Button title="GET FREE CONSULTATION" />
              </div>
            </div>
            {/* Image Column */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="relative flex justify-center">
                <span
                  className="absolute inset-0 bg-white rounded-full"
                  style={{ zIndex: -1 }}
                ></span>
                <div className="relative z-10 w-3/4 md:w-full">
                  <img
                    src="/Affordable Web Design/dream-website.webp"
                    alt="Why Choose Us"
                    className="rounded-xl m-auto w-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We offer */}
      <section className="w-full h-full py-12 bg-[#f5f3f0]">
        <div className="container mx-auto px-4 text-center">
          {/* Subtitle */}
          <div className="text-[rgb(91, 91, 91)] justify-center flex gap-3 text-[19px] font-weight:900 font-extrabold mb-2 uppercase animate-fadeInDown">
            <TriangleBullet /> <span>Our Services</span>
          </div>

          {/* Split-letter Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex justify-center flex-wrap leading-snug">
            {title.split("").map((char, i) => (
              <span
                key={i}
                className="split-letter"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <div className="relative mt-8">
            {/* Slider Buttons - reposition for mobile */}
            <div className="flex gap-3 justify-center md:justify-end md:absolute md:right-0 md:-top-14 mb-4 md:mb-0">
              <button
                ref={prevRef}
                className="service-prev  p-3 rounded-full shadow-md  bg-gray-100 hover:bg-[#e82110] transition group/arrow"
              >
                <FaArrowLeft className="text-black group-hover/arrow:text-white transition" />
              </button>
              <button
                ref={nextRef}
                className="service-next  p-3 rounded-full shadow-md  bg-gray-100 hover:bg-[#e82110] transition group/arrow"
              >
                <FaArrowRight className="text-black group-hover/arrow:text-white transition" />
              </button>
            </div>

            {/* Slider */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              loop={true}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl gap-4 shadow-lg p-6 flex flex-col justify-between pb-14  w-full h-full transition-transform group">
                    <div className="flex flex-col gap-4 relative">
                      <img
                        src={service.icon}
                        // alt={service.title}
                        className="w-16 h-16 object-contain mx-auto md:mx-0 group-hover:animate-bounce"
                      />
                      <div>
                        <h3 className="text-[26px] font-semibold text-left pb-1 md:text-xl  text-black">
                          {service.title}
                        </h3>
                        <p className="text-gray-500  text-[18px] line text-left  text-sm md:text-base">
                          {service.description}
                        </p>
                        <button className="absolute -bottom-12 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#e82110] transition group/arrow">
                          <FaArrowRight className="text-black group-hover/arrow:text-white transition" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Responsive*/}
      <section>
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
      </section>
      {/* conversational */}
      <section>
        <ImageTextSection
          imageSrc={`${foldername}/conversational-marketing.webp`}
          title="Conversational Marketing"
          subtitle="Conversational"
          description="In 2023, social commerce will play a bigger part in society. Customer evaluations, employee advocacy, and other forms of content provide a framework for brand- based content opportunities and social proof chances. It is simpler to convert social media viewers into consumers by eliminating the process of tapping from a social media app to the brand website to make a purchase."
          animationClass="translate-y-40" // slide from right
          bgImage="/body-bg-2-scaled-1.jpg"
        />
      </section>
      {/* Static */}
      <section>
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
      </section>
      {/* Web Portal */}
      <section>
        <ImageTextSection
          imageSrc={`${foldername}/web-portal.webp`}
          title="Web Portal Design"
          subtitle="Web Portal"
          description="The purpose of a website is to bring together the required information and showcase it in a specific platform. We use variety of technologies, tools, and platforms for developing a website which meets the portal requirements. We provide a web portal service which is organized and well-planned while bringing together web-based applications for performing various procedures."
          description2="Our experts are proficient in offering vertical and horizontal portals. We have in-depth experience for creating completely customized websites that are innovative and advanced."
          animationClass="translate-y-40" // slide from right
          bgImage="/body-bg-2-scaled-1.jpg"
        />
      </section>
      {/* Why us */}
      <section>
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
};

export default AffordableWebDesign;
