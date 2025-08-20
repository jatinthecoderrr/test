import React from "react";
import ImageTextSection from "../../../components/imageL_TextR";
import ImageTextSectionReversed from "../../../components/imageR_TextL";
import FeatureSectionRev from "../../../components/services/ImageR_TickMarkL";
import FeatureSection from "../../../components/Services/ImageL_TickMarkR";
import RotatingStarL_ImgR from "../../../components/Services/RotatingStarL_ImgR";
import RotatingStarR_ImgL from "../../../components/services/RotatingStarR_ImgL";
import SliderL_TickR from "../../../components/services/AutoSliderL_TickR";
import { useState, useRef, useEffect } from "react";
import TriangleBullet from "../../../components/Home/TriangleBullet";
import { FaCheckCircle, FaRegStar } from "react-icons/fa";
import CTASection from "../../../components/Animatedbox";
import { Helmet } from "react-helmet";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
const ContentManagementSystem = () => {
  const tiltRefs = useRef([]);
  const textRef5 = useRef(null);
  const [textVisible5, setTextVisible5] = useState(false);
  const imgRef6 = useRef(null);
  const textRef6 = useRef(null);
  const [imgVisible6, setImgVisible6] = useState(false);
  const [textVisible6, setTextVisible6] = useState(false);

  const foldername = "/Content Management System";
  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible5(true);
          textObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    // if (imgRef3.current) imgObserver.observe(imgRef3.current);
    if (textRef5.current) textObserver.observe(textRef5.current);

    return () => {
      // imgObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    tiltRefs.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });
  }, []);
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible6(true);
          imgObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible6(true);
          textObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef6.current) imgObserver.observe(imgRef6.current);
    if (textRef6.current) textObserver.observe(textRef6.current);

    return () => {
      imgObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);
  const features2 = [
    "Open source enterprise",
    "Unlimited extendibility and user-friendly.",
    "Editing workflows and integrated development.",
    "A scalable web app framework.",
    "Proficient project planning.",
    "Understand the requisites such as user stories, product owner, and product backlog.",
    "Large and active global community",
  ];
  const steps = [
    {
      text: "Requirements Examination",
      color: "bg-orange-100 text-orange-500",
    },
    {
      text: "Mock Up Design",
      color: "bg-red-100 text-red-500",
    },
    {
      text: "Development",
      color: "bg-blue-100 text-blue-500",
    },
    {
      text: "Testing",
      color: "bg-green-100 text-green-500",
    },
  ];
  const services = [
    {
      title: "Sports, Fitness, Gym Website",
      description:
        "Custom web design for sports, fitness, and gym websites with features like class schedules, membership management, workout plans, and interactive fitness tracking.",
      img: `${foldername}/sports.webp`,
    },
    {
      title: "Professional and Corporate Website",
      description:
        "Tailored professional and corporate websites with sleek designs, functionality for team showcases, service listings, client testimonials, and business solutions.",
      img: `${foldername}/web-dev.webp`,
    },
    {
      title: "Healthcare and Medical Websites",
      description:
        "Custom healthcare and medical websites designed for easy navigation, appointment booking, service information, and patient engagement.",
      img: `${foldername}/healthcare2.webp`,
    },
    {
      title: "Small and Medium Scale Company Sites",
      description:
        "Best web design company for small and medium scale businesses specializes in creating affordable, functional websites that boost online presence.",
      img: `${foldername}/ecommerce-1.webp`,
    },
    {
      title: "Charity and NGO",
      description:
        "Top web design company for charity and NGO sites focuses on creating impactful, user-friendly websites that support social causes and enhance engagement.",
      img: `${foldername}/charity.webp`,
    },
    {
      title: "Tours and Travels",
      description:
        "Expert web design for tours and travel sites, offering visually appealing, user-friendly platforms to showcase destinations, packages, and bookings.",
      img: `${foldername}/travel-desk.webp`,
    },
    {
      title: "Property and Real Estate Website",
      description:
        "Custom web design for property and real estate sites, featuring property listings, advanced search options, and seamless user experience for potential buyers.",
      img: `${foldername}/lease_paymet.webp`,
    },
    {
      title: "Community Website",
      description:
        "Tailored web design for community websites, offering features like member profiles, forums, event calendars, and easy interaction for a connected experience.",
      img: `${foldername}/users.webp`,
    },
    {
      title: "Healthcare and Medical Websites",
      description:
        "Custom healthcare and medical websites designed for easy navigation, appointment booking, service information, and patient engagement.",
      img: `${foldername}/healthcare2.webp`,
    },
  ];
  const servicess = [
    {
      img: `${foldername}/cms-1.webp`,
      title: "Typo3 CMS Development",
      link: "https://geektheo.com/content-management-system/",
    },
    {
      img: `${foldername}/web-design.webp`,
      title: "Typo3 theming & customization",
      link: "https://geektheo.com/content-management-system/",
    },
    {
      img: `${foldername}/users.webp`,
      title: "Community Site Making",
      link: "https://geektheo.com/content-management-system/",
    },
    {
      img: `${foldername}/ecommerce_creative.webp`,
      title: "Online Store Development",
      link: "https://geektheo.com/content-management-system/",
    },
  ];
  const CMS = [
    "PayPal IPN Is Ready",
    "Responsive",
    "Fast",
    "Video Embedding",
    "Polls And Tickets",
  ];
  const Kentico = [
    {
      text: "Kentico Website Design",
      color: "bg-orange-100 text-orange-500",
    },
    {
      text: "Responsive Kentico Design",
      color: "bg-red-100 text-red-500",
    },
  ];

  return (
    <>
    <Helmet>
            <title>Affordable Web Design | Geektheory - Website Development And Software Development Company - Make &lt;IT &gt; Different</title>
            <meta name="description" content="This is the about page description" />
          </Helmet>
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
              Content Management System
            </h1>
          </div>
        </div>
      </div>
      {/*CMS Development*/}
      <section>
        <ImageTextSection
          imageSrc={`${foldername}/cms.webp`}
          title="CMS Development"
          subtitle="CMS"
          description="Geektheory offers affordable CMS website solutions for easy content management, SEO, and unlimited pages. Our expert designs save time, boost rankings, and enhance visibility. As a leading CMS web design company in Chennai, we ensure top-quality services."
          animationClass="translate-y-40" // slide from right
        />
      </section>
      {/* Smart CMS Solution (Component) */}
      <FeatureSectionRev
        subTitle="CMS"
        title="Smart CMS Solutions"
        description1="This will work well for smaller sites or the sites which have a short lifespan. A static website is easier to create and host. As a Top web design company in Chennai and static website design Company in Chennai offers creative and appealing designs to our clients. A static website will allow you to explain the objectives and goals of your company. We aim to ensure your online presence with the help of a static website design. If your company has a static website, it will load and launch at a faster rate. Our spool of technical experts discovers new horizons to make you happy with the design."
        // description2="Our redesign services refresh your brand and correct past design flaws for   ."
        features={[
          "Intuitive GUI For Easy Use By Non-Tech Users.",
          "Custom Front-End For A Unique Design.",
          "Optimized For SEO, Speed, And Stability.",
          "Extensive Modular And Plug-In Support.",
          "Strong Community Support And Documentation.",
          "Adding, Editing, Or Deleting Albums.",
          "Admin Management",
        ]}
        image={`${foldername}/web-portal.webp`}
        bgImage="body-bg-2-scaled-1.jpg"
        // bgColor=""
      />
      {/* WORDPRESS google(Compoment) */}
      <RotatingStarL_ImgR
        subtitle="WORDPRESS"
        title="WordPress Google Amp Implementation"
        description="Google AMP enhances website speed and SEO, drawing more traffic while retaining your design. Our experts deliver unique, high-performing sites tailored to your business. As a leading CMS web design company in Chennai, we ensure client satisfaction through expert services and a proven workflow."
        steps={steps}
        // foldername="/images"
        imageSrc={`${foldername}/google-amp.webp`}
      />
      {/* WORDPRESS(COMPONENT) */}
      <FeatureSection
        subTitle="WordPress"
        title="WordPress"
        description1="Template is important for increasing the sales conversion in the website. This is done by creating a good impression on the search engine crawlers. We understand that your website needs to look uncluttered. Our developers have enough experience in handling this. We have WordPress experts, who will work wonders on the website. The site will surely impress the viewers. Geektheory provided you the best cms web design service in India."
        // description2="Our redesign services refresh your brand and correct past design flaws for   ."
        features={[
          "Simplifies Content Publishing, Editing, And Deletion, Boosting Website Efficiency.",
          "Keeps Content Fresh, Improving Search Engine Rankings.",
          "Enhances Workflow For Better Business Control Over CMS.",
          "Enables Easy Indexing And Discovery, Aiding Customer Retention.",
        ]}
        image={`${foldername}/wordpress2.webp`}
        bgImage="/body-bg-2-scaled-1.jpg"
        bgColor="#f9fafb"
      />
      {/* Why us*/}
        <ImageTextSectionReversed
          imageSrc={`${foldername}/Geek-logo_webp-e1745647573961.webp`}
          imageAlt="Brand Image"
          title="Why Geektheory"
          subtitle="Why Us"
          description="Geektheory , an Top CMS web development company in India, we showcase ultimate craftsmanship in our work. We offer on time delivery, If you are looking for a flourishing and innovative business website then Geektheory is the best choice."
          description2="Stay ahead in competition with digital marketing. When searching for products online, people trust the top search results. Digital marketing boosts visibility and trust. Choose Geektheory, one of the best CMS web design companies in Chennai, to leverage your online presence."
          animationClass="translate-y-40" // slide from right
          // extraImgClass="h-[800px]"
        />
      {/* Joomla*/}
        <ImageTextSectionReversed
          imageSrc={`${foldername}/joomla.webp`}
          imageAlt="Brand Image"
          title="Joomla"
          subtitle="Joomla"
          description="For a dynamic CMS solution, Joomla offers highly interactive, multilingual websites with unmatched modules. Our expert Joomla developers customize solutions, create add-ons, and optimize for high conversions. We carefully plan each page to maximize functionality and meet business goals. As the best CMS web design service in Chennai, we ensure top-quality results."
          animationClass="translate-y-40" // slide from right
          // extraImgClass="h-[800px]"
          backgroundImage="/body-bg-2-scaled-1.jpg"
        />
      {/* Swiper (Compoment) */}
      <SliderL_TickR
        features={[
          "We create scalable, robust Joomla websites for better user engagement.",
          "Custom component development transforms your site into something exceptional.",
          "Share your requirements, and our experts will develop your custom site.",
          "Custom module development helps attract more users to your website.",
          "Custom module development helps attract more users to your website.",
          "We build robust applications to enhance your business visibility.",
        ]}
        slides={services}
      />
      {/* typo3 CMS */}
      <section className="w-full bg-[#f5f3f0] py-10 md:py-16 md:px-14">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 px-4">
          {/* Left Column (Text) */}
          <div className="w-full lg:w-1/2" ref={textRef5}>
            <div
              className={`text-left space-y-4 transition-all duration-700 ease-out ${
                textVisible5
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h5
                className={`flex gap-3 text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                  textVisible5
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <TriangleBullet /> <span>CMS</span>
              </h5>
              <h2
                className={`text-4xl font-bold leading-snug transition-all duration-700 delay-200 ${
                  textVisible5
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Typo3 CMS
              </h2>
              <p
                className={`text-gray-700 leading-relaxed text-base transition-all duration-700 delay-300 ${
                  textVisible5
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Typo3 is a leading open-source CMS renowned for its scalability,
                active community, and user-friendly interface. It ensures high
                security, with no attack history compared to other CMS
                platforms. Built with HTML5, Typo3 is mobile-compatible and
                provides excellent flexibility for businesses, magazines, and
                publishers. It supports multi-site management, making it an
                ideal choice for managing complex websites and diverse content
                needs.
              </p>

              {/* Features */}
              <div
                className={`${
                  textVisible5
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <ul className="space-y-3">
                  {features2.map((feature, index) => (
                    <li
                      key={index}
                      className="group flex items-start gap-2 text-gray-800 text-base cursor-pointer transition-all duration-300 hover:text-[#fc2512]"
                    >
                      <span className="text-black mt-1 transition-colors duration-300 group-hover:text-[#fc2512]">
                        <FaCheckCircle size={20} />
                      </span>
                      <span className="transition-colors text-[20px] duration-300 group-hover:text-black">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column (Cards) */}
          <motion.div
            className="w-full  lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Rotating Star */}
            <FaRegStar className="absolute -top-10 -left-10 w-16 h-16 animate-[spin_10s_linear_infinite]" />

            {/* Service Cards */}
            <div className="grid grid-cols-1 h-full sm:grid-cols-2 gap-6">
              {servicess.map((service, idx) => {
                const bgColors = ["bg-white", "bg-gray-50"];
                const colorClass =
                  bgColors[Math.floor(idx / 2) % bgColors.length];

                return (
                  <div
                    key={idx}
                    ref={(el) => (tiltRefs.current[idx] = el)}
                    className={`${colorClass} p-6 rounded-2xl shadow-lg flex flex-col  items-center text-center transition cursor-pointer`}
                  >
                    <div className="w-20 h-20 flex mt-10 items-center justify-center mb-4">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h5 className="text-lg font-semibold hover:text-red-700 transition">
                      <a href={service.link}>{service.title}</a>
                    </h5>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
      {/* DOT NET CMS */}
      <section
        className="w-full py-10 bg-white md:py-16 md:px-14"
        style={{
          backgroundImage: "", // change if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#ffffff", // fallback color
        }}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="order-2 md:order-1" ref={textRef6}>
            <div
              className={`text-left space-y-4 transition-all duration-700 ease-out ${
                textVisible6
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h5
                className={`flex gap-3 text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                  textVisible6
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <TriangleBullet /> <span>CMS</span>
              </h5>
              <h2
                className={`text-4xl font-bold leading-snug transition-all duration-700 delay-200 ${
                  textVisible6
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Dot Net Nuke CMS
              </h2>
              <p
                className={`text-gray-700 leading-relaxed text-base transition-all duration-700 delay-300 ${
                  textVisible6
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Geektheory helps build a strong online presence by aligning with
                your digital goals. Our skilled team specializes in custom web
                development for both desktop and mobile platforms. With years of
                experience and countless satisfied clients, we offer expert
                solutions that deliver results. Our design expertise makes us a
                top CMS web design company in Chennai.
              </p>
              <p
                className={`text-gray-700 leading-relaxed text-[18px] text-base transition-all duration-700 delay-300 ${
                  textVisible6
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              ></p>
              <div
                className={`${
                  textVisible6
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div className="space-y-3">
                  {CMS.map((feature, idx) => (
                    <div
                      key={idx}
                      className="relative flex items-center justify-between cursor-pointer pb-2
                     after:content-[''] after:absolute after:bottom-0 after:left-1/2
                     after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300
                     hover:after:left-0 hover:after:w-full"
                    >
                      <span className="text-gray-700">{feature}</span>
                      <FaRegStar className="text-gray-400 w-4 h-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div id="img-col" className="flex justify-center order-1 md:order-2">
            <div
              ref={imgRef6}
              className={`transition-all duration-700 ease-out transform ${
                imgVisible6
                  ? "translate-y-0 translate-x-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="main-img d-block">
                <img
                  src={`${foldername}/dotnetdukewebp.webp`} // change if needed
                  alt="Service"
                  className="rounded-lg w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Kentico CMS (Components) */}
      <RotatingStarR_ImgL
        subtitle="Kentico"
        title="Kentico CMS"
        description="Content is the king of a website. We strive to offer you with efficient and speedier CMS website design so that you can spend more time on the other aspects of your business rather than adding, editing, or deleting the contents on the sites. The CMS web design we offer facilitate enhanced workflow, higher productivity, and improved workflow.In today’s business landscape, it is important to ensure that the organization is responsive and agile to change the growing IT needs. You can partner with us for empowering the business by adopting reliable and cutting edge IT service. With our dedicated work we being counted in the one of the leading cms web design companies in Chennai."
        steps={Kentico}
        imageSrc={`${foldername}/kentico.webp`}
        bgImage="/body-bg-2-scaled-1.jpg"
      />
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
export default ContentManagementSystem;
