import React from "react";
import { motion } from "framer-motion";
import TriangleBullet from "../../components/Home/TriangleBullet"; // Assuming you have a TriangleBullet component
import AnimatedProgressCircle from "../../components/Home/AnimatedProgressCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState, useRef, useEffect } from "react";
import "../../components/CustomCSS/splitText.css"; // Assuming you have custom animations defined here
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../components/Button"; // Assuming you have a Button component
import CTASection from "../../components/Animatedbox"; // Assuming you have a CTASection component
import ImageTextSection from "../../components/imageL_TextR";
import ImageTextSectionReversed from "../../components/imageR_TextL";
import ScrollingTechStackMultipleRows from "../../components/About/OurClients"; // Assuming you have a ScrollingTechStackMultipleRows component
import SocialMediaHeader from "../../components/SocialMediaHeader"; // Assuming you have a SocialMediaHeader component

const About = () => {
  const services = [
    {
      title: "Web Design",
      description: "Enhance performance, deliver a seamless user experience.",
      link: "https://geektheo.com/",
      icon: "/About/web-design.webp",
      bg: "https://geektheo.copreneurs.in/wp-content/uploads/2024/06/ser-bg.webp",
    },
    {
      title: "Web Development",
      description:
        "Optimize functionality, ensure smooth and reliable performance.",
      link: "https://geektheo.com",
      icon: "/About/web-dev.webp",
      bg: "https://geektheo.copreneurs.in/wp-content/uploads/2024/06/ser-bg.webp",
    },
    {
      title: "E-Commerce Solutions",
      description: "Streamline processes, drive seamless online transactions.",
      link: "https://geektheo.com",
      icon: "/About/ecommerce-1.webp",
      bg: "https://geektheo.copreneurs.in/wp-content/uploads/2024/06/ser-bg.webp",
    },
    {
      title: "Custom Business Solutions",
      description: "Tailor Strategies, optimize business operations.",
      link: "https://geektheo.com",
      icon: "/About/custom-business-solution.webp",
      bg: "https://geektheo.copreneurs.in/wp-content/uploads/2024/06/ser-bg.webp",
    },
    {
      title: "Mobile App Development",
      description: "Innovative, user-friendly mobile experiences.",
      link: "https://geektheo.com",
      icon: "/About/mobile-app.webp",
      bg: "bg-white",
    },
    {
      title: "Game Development",
      description:
        "Create immersive experiences, deliver captivating gameplay.",
      link: "https://geektheo.com",
      icon: "/About/4756473.webp",
      bg: "bg-white",
    },
    {
      title: "Hybrid App Development",
      description: "Build versatile apps, reach all platforms seamlessly.",
      link: "https://geektheo.com",
      icon: "/About/hybrid-app.webp",
      bg: "bg-white",
    },
    {
      title: "IOT",
      description: "Connect devices, enable smarter solutions.",
      link: "https://geektheo.com",
      icon: "/About/iot.webp",
      bg: "bg-white",
    },
    {
      title: "Retail POS",
      description: "Streamline transactions, enhance retail efficiency.",
      link: "https://geektheo.com",
      icon: "/About/pos.webp",
      bg: "bg-white",
    },
    {
      title: "Institute Management System",
      description: "Simplify administration, enhance institutional workflow.",
      link: "https://geektheo.com",
      icon: "/About/LMS.webp",
      bg: "bg-white",
    },
    {
      title: "Classified Ads Solution",
      description: "Facilitate listing, streamline market connection.",
      link: "https://geektheo.com",
      icon: "/About/Classified-Ads-Solutions.webp",
      bg: "bg-white",
    },
    {
      title: "Digital Marketing",
      description: "Boost visibility, drive targeted engagement.",
      link: "https://geektheo.com",
      icon: "/About/Digital_marketing.webp",
      bg: "bg-white",
    },
    {
      title: "Hire Developers",
      description: "Find talent, build innovative solutions.",
      link: "https://geektheo.com",
      icon: "/About/hire-developer.webp",
      bg: "bg-white",
    },
  ];
  const images = [
    { src: "/About/011-scaled.webp", alt: "Image 1" },
    { src: "/About/13.0.webp", alt: "Image 2" },
    { src: "/About/08.webp", alt: "Image 3" },
    { src: "/About/06.webp", alt: "Image 4" },
    { src: "/About/04-scaled.webp", alt: "Image 5" },
    { src: "/About/055-scaled.webp", alt: "Image 6" },
    { src: "/About/07.webp", alt: "Image 7" },
    { src: "/About/11.1.webp", alt: "Image 8" },
    { src: "/About/09.webp", alt: "Image 9" },
    { src: "/About/12.webp", alt: "Image 10" },
    { src: "/About/10.jpg", alt: "Image 11" },
    { src: "/About/work.webp", alt: "Image 12" },
    { src: "/About/02-scaled.webp", alt: "Image 13" },
    { src: "/About/20250215_1236232-scaled.webp", alt: "Image 14" },
    { src: "/About/work-area.webp", alt: "Image 15" },
    { src: "/About/03-scaled.webp", alt: "Image 16" },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [imgVisible1, setImgVisible1] = useState(false);
  const imgRef1 = useRef(null);
  const [imgVisible2, setImgVisible2] = useState(false);
  const imgRef2 = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const headingRef = useRef(null);
  const title = "What we Offer";
  const title2 = "Moments That Define Us";
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
  useEffect(() => {
    const observer1 = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible1(true);
          observer1.disconnect(); // stops observing after first trigger
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef1.current) observer1.observe(imgRef1.current);
    return () => observer1.disconnect();
  }, []);
  useEffect(() => {
    const observer2 = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible2(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.2 } //Reduce it for faster animation
    );
    if (imgRef2.current) observer2.observe(imgRef2.current);
    return () => observer2.disconnect();
  }, []);
  return (
    <>

      <div
        className="relative bg-cover bg-center bg-no-repeat pb-24 md:pb-32 lg:pb-40"
        style={{
          backgroundImage:
            "url('/page_bread.webp')",
        }}
      >
        <SocialMediaHeader/>
        <div className="absolute inset-0"></div> {/* breadcrumb overlay */}
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-black font-extrabold pt-12 text-4xl md:text-6xl lg:text-7xl mb-0 md:pt-28">
              About
            </h1>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <section className="w-full py-6 md:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12">
            {/* Text Column */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="text-left">
                <h5 className="text-[rgb(92,92,92)] flex gap-3 text-base md:text-xl uppercase mb-1 font-extrabold">
                  <TriangleBullet />
                  ABOUT US
                </h5>
                <h2
                  ref={headingRef}
                  className={`text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-snug origin-left ${
                    headingVisible
                      ? "animate-stretchFromLeft"
                      : "scale-x-0 opacity-0"
                  }`}
                >
                  Why Choose Us
                </h2>
                <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                  Geektheory, an IT service provider and digital marketing
                  consultant with diversified roots across various domains of
                  technologies that drive the world. Specialized in the
                  heterogeneity of technology including web development, web
                  designing, social media marketing, search engine optimization,
                  email marketing, and industrial software, Geek Theory is a
                  staunch advocate of creating a paperless, environmentally
                  responsible society.
                </p>

                {/* Progress Indicators */}
                <div className="flex gap-10 md:gap-10 flex-wrap justify-center">
                  <AnimatedProgressCircle
                    targetPercent={100}
                    label="Client Satisfied"
                  />
                  <AnimatedProgressCircle
                    targetPercent={100}
                    label="Ontime Deliveries"
                  />
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="relative flex justify-center">
                <span
                  className="absolute inset-0 bg-[#f4efff] rounded-full"
                  style={{ zIndex: -1 }}
                ></span>
                <div className="relative z-10 w-3/4 md:w-full">
                  <img
                    src="/About/why.webp"
                    alt="Why Choose Us"
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision Section */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-r from-[#fdf2e4]/50 via-[#fc2310]/25 to-[#dadef5]/75">
        <div className="container mx-auto px-4 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="w-full mb-8 md:mb-0">
            <div className="text-left">
              <h5 className="text-[rgb(92,92,92)] flex gap-3 text-base sm:text-lg md:text-xl uppercase mb-1 font-extrabold">
                <TriangleBullet /> Mission &amp; Vision
              </h5>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-snug">
                Our Mission and Vision
              </h2>
              <p className="text-black text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                Empowering innovation through technology and promoting a
                sustainable future.
              </p>
            </div>
          </div>

          {/* Right Column - Swiper Slider */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
              }}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="!pb-8"
            >
              <SwiperSlide>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                      <img
                        src="https://geeknew.sonicboomx.com/wp-content/uploads/2025/03/mission.webp"
                        alt="Our Mission"
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">
                      Our Mission
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base font-medium">
                      Our mission is to empower growth and innovation through
                      technology, creating impactful solutions for businesses
                      and individuals.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                      <img
                        src="https://geeknew.sonicboomx.com/wp-content/uploads/2025/03/vision.webp"
                        alt="Our Vision"
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">
                      Our Vision
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm font-medium">
                      Our vision is to lead technological advancement
                      responsibly while promoting sustainability and inspiring
                      the next generation of passionate innovators.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                      <img
                        src="https://geeknew.sonicboomx.com/wp-content/uploads/2025/03/values.webp"
                        alt="Our Values"
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">
                      Our Values
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base font-medium">
                      Our values are to foster innovation, integrity, and
                      collaboration, while committing to sustainability and
                      excellence in all our endeavors.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* JoinUs Section */}
      <ImageTextSection
        imageSrc="/About/plan.webp"
        imageAlt="Plan Image"
        title="You Plan, We Make it Happen!"
        subtitle="Join Us"
        description="Our motive narrows to paying close attention to client needs and
                offer far-reaching solutions. With over 100+ clients ranging
                from small to large scale industries, we always aim for
                excellence at a considerably low cost. Driven by youngsters and
                a flair for innovation, our journey is always about success. As
                a forward-looking business, we are paying close attention to
                shifting trends in a bid to adjust our services to cater to
                emerging needs."
        animationClass="translate-y-40" // slide from right
      />

      {/* Learn Section */}
      <ImageTextSectionReversed
        imageSrc="/About/brand.webp"
        imageAlt="Brand Image"
        title="Explore our complete brand-building toolkit."
        subtitle="Learn"
        description="You can help customers in real-time across all of your channels from email, social, website, iOS, and android apps. Convert your emails into tickets and keep them."
        animationClass="translate-y-40" // slide from right
      />

      {/* What We offer */}
      <section className="w-full py-12 bg-[#f5f3f0]">
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
                <SwiperSlide key={index} className="h-full">
                  <div className="bg-white rounded-2xl gap-4 shadow-lg p-6 flex flex-col justify-between h-auto min-h-[300px] transition-transform group">
                    <div className="flex flex-col gap-4 relative">
                      <img
                        src={service.icon}
                        // alt={service.title}
                        className="w-16 h-16 object-contain mx-auto md:mx-0 group-hover:animate-bounce"
                      />
                      <div>
                        <h3 className="text-[26px] font-semibold text-left pb-1 md:text-xl  text-black">
                          <a href={service.link}>{service.title}</a>
                        </h3>
                        <p className="text-gray-500  text-[18px] line text-left  text-sm md:text-base">
                          {service.description}
                        </p>
                        <a href={service.link}><button className="absolute -bottom-16 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#e82110] transition group/arrow">
                          <FaArrowRight className="text-black group-hover/arrow:text-white transition" />
                        </button></a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
            {/* Our Client */}
            <ScrollingTechStackMultipleRows/>


      {/* Our Gallery */}
      <section className="w-full py-12 bg-[#f5f3f0]">
        <div className="container mx-auto px-4 text-center">
          {/* Subtitle */}
          <div className="text-[rgb(91, 91, 91)] justify-center flex gap-3 text-[19px] font-weight:900 font-extrabold mb-2 uppercase animate-fadeInDown">
            <TriangleBullet /> <span>Our Gallery</span>
          </div>

          {/* Split-letter Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex justify-center pb-4 flex-wrap leading-snug">
            {title2.split("").map((char, i) => (
              <span
                key={i}
                className="split-letter"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <div className="container mx-auto px-4">
            {/* <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2> */}

            {/* Masonry layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="break-inside-avoid-column mb-4 rounded-xl shadow-lg overflow-hidden bg-white"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-auto object-cover transition-transform duration-500 hover:scale-105 ${image.className}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className=" flex justify-center mt-5">
              <Button title="EXPLORE MORE" />
            </div>
          </div>
        </div>
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

export default About;
