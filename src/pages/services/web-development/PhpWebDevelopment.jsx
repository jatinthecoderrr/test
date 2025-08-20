import React from "react";
import ImageTextSection from "../../../components/imageL_TextR";
import { useState, useRef, useEffect } from "react";
import TriangleBullet from "../../../components/Home/TriangleBullet";
import CTASection from "../../../components/Animatedbox";
import SocialMediaHeader from "../../../components/SocialMediaHeader"
import "aos/dist/aos.css";
import Accordion from "../../../components/Home/Accordion";
import AnimatedSection from "../../../components/Services/TextL_IconEffectR";
import FeatureSectionRev from "../../../components/Services/ImageR_TickMarkL";
import RotatingStarL_ImgR from "../../../components/Services/RotatingStarL_ImgR";
import ServicesSection from "../../../components/Services/TextCenter_animatedLED";
import TextCenter_animatedCircle from "../../../components/Services/TextCentere_animatedCircle";
import { Helmet } from "react-helmet";

const PhpWebDevelopment = () => {
  const foldername = "/PHP";
  // codeigniter
  const steps = [
    {
      text: "EFFICIENT TEAMWORK",
      color: "bg-orange-100 text-orange-500",
    },
    {
      text: "TEAM MANAGEMENT",
      color: "bg-red-100 text-red-500",
    },
  ];

  // Development
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible3(true);
          imgObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible3(true);
          textObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef3.current) imgObserver.observe(imgRef3.current);
    if (textRef3.current) textObserver.observe(textRef3.current);

    return () => {
      imgObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);
  const dev = [
    {
      img: `${foldername}/easy.webp`,
      title: "Easy To Understand",
      description:
        "PHP is easier to learn, reconfigurable, and achieves more with fewer code lines compared to others.",
      animation: "fade-right", // from left
    },
    {
      img: `${foldername}/speed.webp`,
      title: "High Speed",
      description:
        "PHP reduces server load, speeds up processing, and lowers development time with its memory.",
      animation: "fade-up", // from bottom
    },
    {
      img: `${foldername}/cost-effective.webp`,
      title: "Cost Efficiency",
      description:
        "PHP is open-source, free to use, and reduces costs for building successful websites.",
      animation: "fade-up", // from bottom
    },
    {
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/04/support.webp",
      title: "Access to Support",
      description:
        "Get reliable and prompt access to support for seamless website development and maintenance.",
      animation: "fade-left", // from right
    },
  ];
  // new technologies
  const services = [
    {
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/02/PHP-logo.svg.webp",
      title: "PHP",
    },
    {
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/laravel-1.webp",
      title: "LARAVEL",
    },
    {
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/02/codeigneter.webp",
      title: "CODEIGNITER",
    },
    {
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/html-5123.webp",
      title: "HTML5",
    },
    {
      img: "https://geektheory.tofutrips.com/wp-content/uploads/2024/01/s3-icon-5.webp",
      title: "CSS3",
    },
    {
      img: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/02/jquery.webp",
      title: "JQUERY",
    },
  ];

  // Benefits of PHP
  const servicess = [
    {
      title: "PHP CMS Development",
      description: "Helps businesses manage and update website content easily.",
      features: ["Content Management", "Risk Management", "Traffic Boost"],
    },
    {
      title: "Customized App Development",
      description:
        "Tailored applications to meet specific business needs quickly.",
      features: [
        "Tailored Solutions",
        "Fast Deployment",
        "Improved Collaboration",
      ],
    },
    {
      title: "Custom ERP Development",
      description:
        "Optimizes business operations with integrated management tools.",
      features: [
        "Streamlined Operations",
        "PHP-based Solutions",
        "Boost Efficiency",
      ],
    },
    {
      title: "Ecommerce Development",
      description:
        "PHP powers interactive ecommerce websites for better sales.",
      features: [
        "Engaging Websites",
        "Better Market Presence",
        "User Experience",
      ],
    },
    {
      title: "Hospital Management",
      description: "Digital apps enhance hospital management and patient care.",
      features: [
        "Efficient Scheduling",
        "Patient Data Handling",
        "Optimized Operations",
      ],
    },
    {
      title: "PHP CRM Development",
      description:
        "Improves client relationships and boosts customer retention.",
      features: [
        "Customer Relationship",
        "PHP-based CRM",
        "Improved Retention",
      ],
    },
  ];

  //accodian
  const imgRef3 = useRef(null);
  const textRef3 = useRef(null);
  const [imgVisible3, setImgVisible3] = useState(false);
  const [textVisible3, setTextVisible3] = useState(false);
  const items = [
    {
      id: 1,
      title: "INDUSTRY EXPERTISE",
      content: (
        <p>
          We are experienced in PHP development and one of the most preferred
          services in Chennai when it comes to web design and development. We
          have spent several years in this field and have developed our skills
          and knowledge base through practice and are capable of catering to
          your needs.
        </p>
      ),
    },
    {
      id: 2,
      title: "FULL-CYCLE DEVELOPMENT",
      content:
        "As all aspects of web development are crucial for the effectiveness of the website, we offer full-cycle development. This means that our work begins right from conception of the idea and carries on to the next stages of planning, creating prototypes, launching and maintain.",
    },
    {
      id: 3,
      title: "AGILE METHODOLOGIES",
      content:
        "We are aware of the fast pace of the online world and understand that time is a precious commodity for our clients. Our developers provide fast web solutions so that your business website doesn’t suffer from stagnancy. We believe in incorporating agility and efficiency in our methods",
    },
    {
      id: 4,
      title: "CERTIFIED DEVELOPERS",
      content:
        "All our developers are patrons of the field and have been working in development for several years. Their work reflects their vast experience and practical knowledge related to the intricacies of web development. Most of them have been working with PHP for several years now and always at your service.",
    },
  ];

  {
    /** Initialize AOS (Animate On Scroll) library */
  }
  
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
              Php Web Development
            </h1>
          </div>
        </div>
      </div>
      {/* Benefits of HTML5 Web Designing */}
      <FeatureSectionRev
        subTitle="PHP"
        title="PHP Web Development"
        description1="Geektheory delivers high-quality web development services, with over 82.6% of all websites using PHP as their programming language. PHP powers more than 40 million websites worldwide. Our experienced web developers specialize in Laravel and CodeIgniter, and with over 11 years of expertise, we create scalable and efficient solutions for businesses."
        // description2="Our redesign services refresh your brand and correct past design flaws for   ."
        features={[
          "82.6% Of All Websites Used PHP As Their Programming Language",
          "PHP Is Used By More Than 40 Million Websites",
          "Our Panel Of Web Developers Work With Laravel And codeigniter",
          "We Have More Than 11 Years Of Experience In PHP",
        ]}
        image={`${foldername}/php-dev.webp`}
      />
      {/* PHP Development */}
      <TextCenter_animatedCircle
        bgImage="/s2-bg-img-1.webp"
        subtitle="Development"
        title="PHP Web Development"
        description="Geektheory is a leading PHP web development company in Chennai,
        India. PHP is widely used for dynamic web development, powering over
        80% of websites. Our expert developers cater to both businesses and
        startups."
        features={dev}
      />

      {/* New Technologies */}
      <AnimatedSection
        backgroundImage=""
        backgroundColor="#fffff"
        subtitle="Technologies"
        title="New Technologies and Methods"
        description="Top PHP web development companies in Chennai ensure timely project delivery. Modern websites feature advanced designs and interfaces, enabled by new technologies. Geektheory leverages these methods to integrate advanced features, elevating web development and staying ahead of competitors using outdated interfaces."
        buttonText="GET STARTED"
        services={services}
      />
      {/* Benefits of PHP */}
      <ServicesSection
        subtitle="PHP"
        title="Benefits of PHP"
        paragraph="PHP offers fast, flexible, and cost-effective web development. It's open-source, widely supported, and ensures seamless integration with databases."
        services={servicess}
        bgImage="/body-bg-2-scaled-1.webp"
        justify={"justify-center"}
        // showBullet={false}
      />
      {/* codeigniter */}
      <RotatingStarL_ImgR
        subtitle="Frameworks"
        title="Codeigniter"
        description="This too is an open source web framework that is used for creating dynamic and responsive websites with PHP. Loosely based on the well-known MVC or model view controller development pattern, Codeigniter is a powerful PHP framework which has a very small footprint. It is best suited for developers who are in need of an elegant and simple tool to build full featured applications. Compared to some other PHP frameworks, Codeigniter is known for its higher speed. Best PHP web development company in India have experts of team members to develop website in codeigniter."
        steps={steps}
        imageSrc={`${foldername}/codeigniter.webp`}
      />
      {/* Laravel */}
      <ImageTextSection
        imageSrc={`${foldername}/laravel.webp`}
        title="Laravel"
        subtitle="Frameworks"
        description="This is a PHP web framework which is open source and can be used free of cost. Laravel is known for its elegant and expressive syntax which can make development a creative experience. As it reduces the stress of tedious tasks such as routing, caching and authentication, the developer is free to focus completely on the coding and other important parts. Best PHP web development company in India can build an application in laravel and it is a powerful as well as accessible web framework that is required for robust applications. In simple words, Laravel is often said to combine the best features of other web frameworks."
        // description2="Relying on our HTML5 developers will be the best option to get an effective and innovative design for your website. The competency of our experts to use HTML5 canvas drawing tool enables the designers to develop highly responsive website which will make your website have a dominant online presence. Geektheory offers the best HTML5 web design company in Chennai to our clients for leveraging the potential in various ways."
        animationClass="translate-y-40" // slide from right
        // bgImage="/body-bg-2-scaled-1.jpg"
      />
      {/* PHP Web Experts */}
      <section
        className="w-full py-8 px-4 sm:px-6 md:py-14 md:px-8 lg:px-14"
        style={{
          backgroundImage: `url('/b1-bg-1.webp')`, // change if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "", // fallback color
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left: Text */}
          <div className="order-2 md:order-1" ref={textRef3}>
            <div
              className={`text-left space-y-4 transition-all duration-700 ease-out ${
                textVisible3
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h5
                className={`flex gap-3 text-base sm:text-lg md:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                  textVisible3
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <TriangleBullet /> <span>PHP</span>
              </h5>
              <h2
                className={`text-2xl sm:text-4xl md:text-[60px] not-italic normal-case font-extrabold leading-snug transition-all duration-700 delay-200 ${
                  textVisible3
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                PHP Web Experts
              </h2>
              <p
                className={`text-gray-700 text-base sm:text-lg md:text-[18px] not-italic normal-case font-normal leading-relaxed transition-all duration-700 delay-300 ${
                  textVisible3
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Geektheory has had years of experience in the world of best web
                design and development company in Chennai and also a top PHP web
                development company in Chennai. A number of clients have used
                our services and have been more than satisfied with the results
                they have received. We believe in working as a team and going
                through several ideas before choosing the best one. Although PHP
                is an open source language and can be used by anyone, it is the
                experienced experts alone who can understand its full scope. Our
                developers understand that although PHP offers exciting web
                development solutions, its use varies from one project to
                another. They are aware of the intricacies of how PHP works and
                the best way to use it.
              </p>
              <p
                className={`text-gray-700 leading-relaxed text-base sm:text-lg md:text-[18px] transition-all duration-700 delay-300 ${
                  textVisible3
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              ></p>
            </div>
          </div>

          {/* Right: Image */}
          <div
            id="img-col"
            className="flex justify-center items-center order-1 md:order-2"
          >
            <div
              ref={imgRef3}
              className={`transition-all duration-700 ease-out transform ${
                imgVisible3
                  ? "translate-y-0 translate-x-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <Accordion items={items} allowMultiple={false} />
            </div>
          </div>
        </div>
      </section>
      {/* Php Development Services */}
      <ImageTextSection
        imageSrc={`${foldername}/php-sesrvices.webp`}
        title="Php Development Services"
        subtitle="PHP"
        description="PHP is an open-source, widely used server-side language powering over 80% of websites. At Geektheory, we leverage PHP to build interactive, user-friendly websites. As one of the best PHP development companies in Chennai, we combine design standards with SEO to deliver complete web solutions that drive online growth."
        // description2="Relying on our HTML5 developers will be the best option to get an effective and innovative design for your website. The competency of our experts to use HTML5 canvas drawing tool enables the designers to develop highly responsive website which will make your website have a dominant online presence. Geektheory offers the best HTML5 web design company in Chennai to our clients for leveraging the potential in various ways."
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

export default PhpWebDevelopment;
