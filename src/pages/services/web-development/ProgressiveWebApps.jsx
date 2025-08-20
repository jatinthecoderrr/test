import React from "react";
import ImageTextSection from "../../../components/imageL_TextR";
import { useState, useRef, useEffect } from "react";
import TriangleBullet from "../../../components/Home/TriangleBullet";
import { FaCheckCircle, FaArrowRight, FaRegStar } from "react-icons/fa";
import CTASection from "../../../components/Animatedbox";
import Button from "../../../components/Button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import FeatureSection from "../../../components/services/ImageR_TickMarkL";
import TextR_AutoSliderL from "../../../components/Services/textR_AutoSliderL";
import BenefitsSection from "../../../components/Services/HoverTextCards";
import ServicesSection from "../../../components/Services/CenterText_ReadMore";
import { Helmet } from "react-helmet";

const ProgressiveWebApps = () => {
  const foldername = "/Progressive_Web_Apps";
  const myServices = [
    {
      title: "Services Workers",
      description:
        "At Geektheory, we deliver top Progressive Web App services with a tailored approach for the best solutions.",
      image: `${foldername}/users.webp`,
      link: "#",
    },
    {
      title: "Application Shell",
      description:
        "At Geektheory, our team provides top Progressive Web App services with a tailored approach for guaranteed success",
      image: `${foldername}/web-dev.webp`,
      link: "#",
    },
    {
      title: "The Mobile Push",
      description:
        "Most websites use Chrome web push notifications, yet many don't utilize their full potential. Check the hype cycle.",
      image: `${foldername}/mobile-configuration-5400824-4521549-1.webp`,
      link: "#",
    },
  ];
  const iconBoxes = [
    {
      title: "Progressive",
      description:
        "Progressive Web Apps combine web and app features for seamless, efficient user experiences.",
      img: `${foldername}/pwa.webp`,
      hoverColor: "group-hover:text-[#ff0000]",
    },
    {
      title: "Responsive",
      description:
        "We craft designs for startups, focusing on UI/UX tailored to their target customers.",
      img: `${foldername}/responsive-2.webp`,
      hoverColor: "group-hover:text-[#00ff00]",
    },
    {
      title: "Connectivity",
      description:
        "Our web apps ensure fast loading on slow networks with lightweight, simple code",
      img: `${foldername}/crm2.webp`,
      hoverColor: "group-hover:text-[#8a8aff]",
    },
    {
      title: "App-Life",
      description:
        "Our web app offers app-like interaction and navigation with the app shell model.",
      img: `${foldername}/mobile-app.webp`,
      hoverColor: "group-hover:text-[#41e0d0]",
    },
    {
      title: "Fresh",
      description:
        "The app stays up-to-date with automatic updates, no need for manual store updates.",
      img: `${foldername}/update.webp`,
      hoverColor: "group-hover:text-[#ffae17]",
    },
    {
      title: "Safe",
      description:
        "Geektheory ensures security, protecting web apps from vulnerabilities and attacks.",
      img: `${foldername}/auth-payment.webp`,
      hoverColor: "group-hover:text-[#800080]",
    },
    {
      title: "Discoverable",
      description:
        "Our experts develop PWAs with server worker registration and W3C manifest for SEO.",
      img: `${foldername}/search.webp`,
      hoverColor: "group-hover:text-[#b04343]",
    },
    {
      title: "Re-Engageable",
      description:
        "At Geektheory, we ensure the target audience stays engaged, making us stand out.",
      img: `${foldername}/b2b.webp`,
      hoverColor: "group-hover:text-[#00ffff]",
    },
    {
      title: "Installable",
      description:
        "At Geektheory, we ensure the target audience stays engaged, setting us apart.",
      img: `${foldername}/extract-process.webp`,
      hoverColor: "group-hover:text-[#ff00ff]",
    },
  ];
  const services = [
    {
      title: "App Installation",
      description:
        "Previously, mobile apps didn't get installed as apps on home screens on platforms like Android or iOS.",
      img: `${foldername}/mobile-app.webp`,
    },
    {
      title: "Missing Features",
      description:
        "These apps lacked the features we expected from native apps, offering a limited experience.",
      img: `${foldername}/question_mark.webp`,
    },
    {
      title: "Chrome Support",
      description:
        "Chrome on Android now supports the installation of web apps directly to the home screen.",
      img: `${foldername}/google-chrome.webp`,
    },
    {
      title: "Manifestation Code",
      description:
        "To inform Chrome that the mobile website can be installed as an app, we create a manifest file.",
      img: `${foldername}/code.webp`,
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
      {/* TRY */}
      <ServicesSection
        subTitle="Web App"
        titleWords="Things needed to Develop a PWA"
        description="At Geektheory, Progressive apps are built to allow the user to install the app directly from the website. We develop apps which are suited to be adaptive across all devices and can blend seamlessly into native app-like interface and design. We are the future of web application. We make sure that our top Progressive web app development Chennai takes your mobile performance up by a notch for making the platform independent."
        services={myServices}
        columns={{ sm: 1, md: 2, lg: 4 }}
        justify="justify-center"
      />
      {/* Installation and App Manifestation */}
      <TextR_AutoSliderL
        // subtitle="Company Goals"
        title="Installation and App Manifestation"
        paragraph="Installation and App Manifestation allows web apps to be installed on the home screen, with Chrome supporting this on Android via a manifest file."
        slides={services}
        text_align="text-left"
        showBullet={false}
      />

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
      {/* Creative Design */}
      <BenefitsSection
        subtitle="Design​"
        title="Creative Design"
        paragraph="Geektheory creates visually appealing corporate websites, consulting with clients to understand their needs, ensuring innovation, and delivering the best design service."
        features={iconBoxes}
      />
    </>
  );
};

export default ProgressiveWebApps;
