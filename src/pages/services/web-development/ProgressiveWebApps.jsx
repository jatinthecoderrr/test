import React from "react";
import ImageTextSection from "../../../components/imageL_TextR";
import { useState, useRef, useEffect } from "react";
import TriangleBullet from "../../../components/Home/TriangleBullet";
import { FaCheckCircle, FaArrowRight, FaRegStar } from "react-icons/fa";
import CTASection from "../../../components/Animatedbox";
import Button from "../../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import FeatureSection from "../../../components/services/ImageR_TickMarkL";

const ProgressiveWebApps = () => {
  const foldername = "/Progressive_Web_Apps";
  //Progressive Web Applications
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
  const features = [
    "We use PWA features like service workers & TLS.",
    "Users can choose to keep the app on the home screen or app launcher.",
    "On return visits, the browser shows a prompt from manifest details.",
    "Launching from the home screen lets the app work offline, giving users a full app-like experience.",
  ];
  // Installation and App Manifestation
  const textRef2 = useRef(null);
  const [textVisible2, setTextVisible2] = useState(false);
  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible2(true);
          textObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (textRef2.current) textObserver.observe(textRef2.current);

    return () => {
      textObserver.disconnect();
    };
  }, []);
  const services = [
    {
      title: "App Installation",
      content:
        "Previously, mobile apps didn't get installed as apps on home screens on platforms like Android or iOS.",
      icon: `${foldername}/mobile-app.webp`,
    },
    {
      title: "Missing Features",
      content:
        "These apps lacked the features we expected from native apps, offering a limited experience.",
      icon: `${foldername}/question_mark.webp`,
    },
    {
      title: "Chrome Support",
      content:
        "Chrome on Android now supports the installation of web apps directly to the home screen.",
      icon: `${foldername}/google-chrome.webp`,
    },
    {
      title: "Manifestation Code",
      content:
        "To inform Chrome that the mobile website can be installed as an app, we create a manifest file.",
      icon: `${foldername}/code.webp`,
    },
  ];
  // Progressive Web App Development
  const imgRef4 = useRef(null);
  const textRef4 = useRef(null);
  const [imgVisible4, setImgVisible4] = useState(false);
  const [textVisible4, setTextVisible4] = useState(false);
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible4(true);
          imgObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible4(true);
          textObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef4.current) imgObserver.observe(imgRef4.current);
    if (textRef4.current) textObserver.observe(textRef4.current);

    return () => {
      imgObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);
  // TRY
  const iconBoxes = [
    {
      title: "Progressive",
      description:
        "Progressive Web Apps combine web and app features for seamless, efficient user experiences.",
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/02/pwa.webp",
      link: "#",
    },
    {
      title: "Responsive",
      description:
        "We craft designs for startups, focusing on UI/UX tailored to their target customers.",
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/01/responsive-2.webp",
      link: "#",
    },
    {
      title: "Connectivity",
      description:
        "Our web apps ensure fast loading on slow networks with lightweight, simple code",
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/02/crm2.webp",
      link: "#",
    },
    {
      title: "App-Life",
      description:
        "Our web app offers app-like interaction and navigation with the app shell model.",
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/01/mobile-app.webp",
      link: "#",
    },
    {
      title: "Fresh",
      description:
        "The app stays up-to-date with automatic updates, no need for manual store updates.",
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/02/update.webp",
      link: "#",
    },
    {
      title: "Safe",
      description:
        "Geektheory ensures security, protecting web apps from vulnerabilities and attacks.",
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/02/auth-payment.webp",
      link: "#",
    },
    {
      title: "Discoverable",
      description:
        "Our experts develop PWAs with server worker registration and W3C manifest for SEO.",
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/02/search.webp",
      link: "#",
    },
    {
      title: "Re-Engageable",
      description:
        "At Geektheory, we ensure the target audience stays engaged, making us stand out.",
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/02/b2b.webp",
      link: "#",
    },
    {
      title: "Installable",
      description:
        "At Geektheory, we ensure the target audience stays engaged, setting us apart.",
      img: `${foldername}/extract-process.webp`,
      link: "#",
    },
  ];
  // Track which item is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [titleColor, setTitleColor] = useState("#000");

  const handleIconMouseEnter = (index) => {
    setHoveredIndex(index);
    // Generate a random color for the title glow
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    setTitleColor(randomColor);
  };

  const handleIconMouseLeave = () => {
    setHoveredIndex(null);
    setTitleColor("#000");
  };

  const title = "Progressive Web Apps";
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
              Progressive Web Apps
            </h1>
          </div>
        </div>
      </div>
      {/* Progressive Web App Development */}
      <section
        className="w-full py-10 sm:py-14 md:py-16 bg-white"
        style={{
          backgroundImage: "", // change if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "", // fallback color
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left: Text */}
          <div className="order-2 md:order-1" ref={textRef4}>
            <div
              className={`text-left space-y-4 transition-all duration-700 ease-out ${
                textVisible4
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h5
                className={`flex gap-3 text-base sm:text-lg md:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <TriangleBullet /> <span>Web App</span>
              </h5>
              <h2
                className={`text-2xl sm:text-4xl md:text-[60px] not-italic normal-case font-extrabold leading-snug transition-all duration-700 delay-200 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Progressive Web App Development
              </h2>
              <p
                className={`text-gray-700 text-base sm:text-lg md:text-[18px] not-italic normal-case font-normal leading-relaxed transition-all duration-700 delay-300 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Sure, I can provide a shorter summary of the text you provided:
                Geektheory , a progressive web app development company in
                Chennai, follows a progressive enhancement approach to create
                web apps that work on all browsers. They focus on App Shell
                architecture, where core functionality is loaded first, and
                content loads as users navigate. This architecture can be cached
                for offline use, reducing data usage. Progressive web apps have
                shown to boost sales, and Geektheory is committed to delivering
                cutting-edge solutions with faster loading, connectivity
                independence, and adaptability to various devices.
              </p>
              <div
                className={`text-gray-700 leading-relaxed text-base sm:text-lg md:text-[18px] transition-all duration-700 delay-300 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <Button title="GET STARTED" />
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div
            id="img-col"
            className="flex justify-center items-center order-1 md:order-2"
          >
            <div
              ref={imgRef4}
              className={`transition-all duration-700 ease-out transform ${
                imgVisible4
                  ? "translate-y-0 translate-x-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="main-img d-block">
                <img
                  src={`${foldername}/pwa.webp`} // change if needed
                  alt="Service"
                  className="rounded-lg w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Installation and App Manifestation */}
      <section className="w-full py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left Column - Swiper Slider */}
          <div className="w-full md:w-1/2">
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
              style={{
                "--swiper-pagination-color": "#FF0000",
                "--swiper-pagination-bullet-size": "10px",
              }}
              className="!pb-8"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-50 h-[300px] p-4 sm:p-6 rounded-lg shadow-md text-center flex flex-col justify-start px-2 sm:px-4">
                    <div className="flex justify-start mb-4">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-left">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-left text-sm sm:text-base font-medium">
                      {service.content}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Column - Text */}
          <div
            ref={textRef2}
            className={`w-full md:w-1/2 flex flex-col justify-center px-2 sm:px-0 transition-all duration-700 ${
              textVisible2
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight mb-4">
              Installation and App Manifestation
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-lg">
              Installation and App Manifestation allows web apps to be installed
              on the home screen, with Chrome supporting this on Android via a
              manifest file.
            </p>
          </div>
        </div>
      </section>
      {/* Progressive Web Applications(COMMPONENT)  */}
      <FeatureSection
      subTitle="Applications"
      title="Progressive Web Applications"
      description1="Our experts ensure your app works across all platforms. We understand your business needs, goals, and target audience to build a website that drives success."
      features={[
        "We use PWA features like service workers & TLS",
        "Users can choose to keep the app on the home screen or app launcher.",
        "On return visits, the browser shows a prompt from manifest details.",
        "Launching from the home screen lets the app work offline, giving users a full app-like experience.",
      ]}
      image={`${foldername}/pwa-1.webp`}
      bgImage=""
      bgColor="#f5f3f0"
    />
      {/* TRY */}
      <section className="w-full py-12 bg-white">
        {/* Heading */}{" "}
        <div className="container mx-auto px-4 text-center text-black">
          {/* Subtitle */}{" "}
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="uppercase flex gap-3 text-[17px] font-black tracking-wider">
              <TriangleBullet /> <span>Design</span>{" "}
            </div>{" "}
          </div>{" "}
          {/* Heading */}{" "}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-extrabold mb-4 leading-tight">
            {" "}
            Creative Design​
          </h2>{" "}
        </div>{" "}
        {/* Description */}{" "}
        <p className="max-w-6xl mx-auto text-center text-black mb-12 text-[18px] font-normal px-4">
          {" "}
          Geektheory creates visually appealing corporate websites, consulting
          with clients to understand their needs, ensuring innovation, and
          delivering the best design service.{" "}
        </p>{" "}
        {/* GRID */}{" "}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {iconBoxes.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gray-100 p-4 rounded-full shadow-md">
                {feature.img}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* GARVIT */}
      <section className="w-full py-10 sm:py-14 md:py-16 md:px-10 bg-neutral-50 relative z-10">
        <div className="text-gray-800 justify-center items-center flex gap-3 text-[19px] font-extrabold mb-2 uppercase animate-fadeInDown">
          <TriangleBullet /> <span>Benefits</span>
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

        <p className="text-gray-600 mt-4 mb-0 text-center text-base sm:text-lg leading-relaxed max-w-7xl mx-auto">
          Redesigning your website can give your business a fresh start. Our top
          website redesign services in Chennai help you revamp outdated elements
          and realign your site with your brand. If you’ve been planning a
          change, our experts are ready to give your website the makeover it
          needs—turning your vision into a powerful new beginning.
        </p>

        <div className="max-w-7xl mx-auto px-8 py-16 cursor-pointer">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-12">
            {iconBoxes.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-8 transition-colors duration-300 group"
              >
                {/* Image Circle */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full shadow-xl flex items-center justify-center bg-white transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-18 h-18 p-1"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className={`text-xl font-extrabold text-gray-900 mb-2 transition-colors duration-300 ${feature.hoverColor}`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgressiveWebApps;
