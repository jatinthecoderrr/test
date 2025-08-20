import React from "react";
import { useState, useRef, useEffect } from "react";
import SocialMediaHeader from "../../../components/SocialMediaHeader";
import ImageTextSection from "../../../components/imageL_TextR";
import ImageTextSectionReversed from "../../../components/imageR_TextL";
import { FaCheckCircle } from "react-icons/fa";
import CTASection from "../../../components/Animatedbox";
import Accordion from "../../../components/Services/accordion";
import { MdBuild } from "react-icons/md";
import FeatureSection from "../../../components/services/ImageL_TickMarkR"
import BenefitsSection from '../../../components/Services/HoverTextCards';
import SectionHeader from "../../../components/Services/Animated_SectionHeader";
import { Helmet } from "react-helmet";

const Feature = ({ icon, svg, title, text }) => (
  <div className="flex items-start flex-wrap sm:flex-nowrap">
    {/* Icon Circle */}
    <div
      className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mr-3 sm:mr-5 mt-1 shrink-0
      transition-transform duration-700 ease-in-out hover:rotate-180"
    >
      {icon ? (
        <span className="text-white font-bold text-base sm:text-lg">{icon}</span>
      ) : (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {svg}
        </svg>
      )}
    </div>

    {/* Text Content */}
    <div className="flex-1 min-w-[200px]">
      <strong className="block text-gray-900 text-lg sm:text-xl font-bold">
        {title}
      </strong>
      <p className="text-base sm:text-lg font-medium text-gray-600">
        {text}
      </p>
    </div>
  </div>
);

const WebsiteRedesigning = () => {
  const foldername = "Website Redesigning";
  const imgRef3 = useRef(null)
  const textRef3 = useRef(null);
  const [imgVisible3, setImgVisible3] = useState(false);
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

  const features = [
    {
      title: "Start A New",
      description:
        "Website redesigning offers a fresh start, allowing you to fix past mistakes and build a stronger online presence.",
      img: `${foldername}/update.webp`,
      hoverColor: "",
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

  const items = [
    {
      id: 1,
      title: "What services does Geek Theory offer?",
      content:
        " As the best website redesign company in Chennai, we guide clients to improve their sites. If unsure about changes, ask your target audience. Their feedback is crucial for enhancing user experience. Conduct surveys, implement their suggestions, and create a website that better meets their needs."
    },
    {
      id: 2,
      title: "How long does it take to complete a project?",
      content:
        "Understanding the exact reasons for redesigning your website is key to finding effective solutions. Identify the issues and desired changes, and our designers will bring your vision to life. We'll ensure the new website reflects your business goals with updated features and a refined design.",
    },
    {
      id: 3,
      title: "Can Geek Theory assist with ongoing maintenance and support?",
      content:
        "Analyzing your current website helps identify areas for improvement. Share your specific changes, and our designers will incorporate them, reconfiguring the site to better represent your business. As a top website redesign service in Chennai, we ensure excellent results.",
    },

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

      {/* Website Redesigning */}
      <section>
        <ImageTextSectionReversed

          imageSrc={`${foldername}/redesign.webp`}
          imageAlt="Brand Image"
          title="Website Redesigning"
          subtitle="Services"
          description="Geektheory is the best website redesigning company in Chennai, dedicated to transforming outdated websites into modern, feature-rich platforms. With time, websites can become obsolete, potentially losing their appeal and functionality. Geektheory ensures your site stays relevant and competitive by introducing the latest design trends and technologies to enhance user experience and retain your customer base."
          description2="As a top professional service in Chennai, we understand the importance of timely upgrades to keep up with the fast-evolving digital world. By revamping your website, we help you stay ahead in this competitive era, enabling your business to thrive against modern, tech-savvy competitors."
          animationClass="translate-y-40" // slide from right
        />
      </section>

      {/* Why Go For WebsiteRedesigning? */}
      <FeatureSection
        subTitle="Redesigning"
        title="Why Go For Website Redesigning?"
        description1="At Geektheory, we ensure your new website outshines the old one. As a top website redesign company in Chennai with 11+ years of experience and over 600 satisfied clients, we focus on making your site more responsive, interactive, and aligned with current trends. Our redesign services not only refresh your brand but also help identify and correct past design flaws—giving your business a fresh start."

        features={[
          "Manage Your Content Better",
          "Get An Upper Hand On Competition",
          "Benefit From New Technology",
          "Cost-effective In The Long Run",
        ]}
        image={`${foldername}/brand.webp`}
        bgImage=""
        bgColor="#f5f3ef"
      />

      {/* benifits */}
      <BenefitsSection
        subtitle=" Benefits"
        title="Benefits of Website Redesigning"
        paragraph="Redesigning your website can give your business a fresh start. Our top website redesign services in Chennai help you revamp outdated elements and realign your site with your brand. If you’ve been planning a change, our experts are ready to give your website the makeover it needs—turning your vision into a powerful new beginning."
        features={features}
      />

      {/* Beginning with Redesign */}
      <section
        className="w-full py-10 px-4 sm:py-10 sm:px-6 md:py-16 md:px-6  "
        style={{
          backgroundImage: "", // set background image if needed
          backgroundColor: "#f5f3ef", // fallback color
        }}
      >
        <div className="max-w-[1300px] mx-auto  grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-5">
          {/* Left:  */}
          <SectionHeader
            subTitle="Redesigning"
            titleWords="Beginning with Redesign"
            description=" Redesign your website with our expert services in Chennai to modernize its look, remove outdated elements, and give your business a fresh start."
            text_align="text-left"
            justify="justify-left"

          />
          {/* accordian right */}
          <Accordion items={items} allowMultiple={false} />
        </div>

      </section>

      {/*Content Optimization */}
      <section>
        <ImageTextSectionReversed

          imageSrc={`${foldername}/contentOptimize.webp`}
          imageAlt="Brand Image"
          title="Content Optimization"
          subtitle="Optimization"
          description="Redesigning a website involves more than just updating its interface; content management and optimization are equally crucial. Our experts ensure your website content is clear, engaging, and effectively communicates your business's purpose to both your target audience and potential customers. We focus on creating captivating content that enhances user experience and keeps visitors interested."
          description2="As the best website redesigning company in Chennai, we create aesthetically pleasing and interactive websites. Our team ensures your redesigned website not only looks modern but also provides a seamless user experience, encouraging visitors to return."
          animationClass="translate-y-40" // slide from right
        />
      </section>

      {/* Make Plans to Initialize */}
      <ImageTextSection
        imageSrc={`${foldername}/redesign_plans.webp`}
        title="Make Plans to Initialize"
        subtitle="Plans"
        description="To ensure a smooth redesign process, it's essential to plan ahead and have a clear vision for the final outcome. Start with a thorough analysis of your website and create a detailed sitemap, outlining the pages and content. This will help you stay focused and avoid distractions throughout the redesign."
        description2="Cross-browser testing is key to verifying the effectiveness of the redesign. We ensure the new website functions seamlessly across different browsers and devices. Any issues identified will be promptly addressed, and we will continue working until the website is fully optimized and meets your expectations."
        animationClass="translate-y-40" // slide from right
        bgImage="/body-bg-2-scaled-1.jpg"
      />

      {/* Website Redesigning */}
      <section
        className="w-full py-4 md:py-10  px-4 md:px-4 lg:px-14 bg-[#f5f3ef]"
      >
        <div className="container grid md:grid-cols-2  gap-2 md:gap-6 lg:gap-2">
          {/* Left: text */}
          <div
            ref={textRef4}
            className={` transition-all duration-700 ease-out ${textVisible4 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <SectionHeader
            subTitle="Redesigning"
            titleWords="Website Redesigning"
            description=""
            text_align="text-left"
            justify="justify-left"

          />
          <div className="w-full md:w-full max-w-full ml-3 ">
           <div className="flex justify-cente mb-8">
            <div
              ref={imgRef3}
              className={`transition-transform duration-700 ease-out ${imgVisible3
                ? "translate-y-0 translate-x-0 opacity-100"
                : "translate-y-20 opacity-25"
                }`}
            >
              <img
                src={`${foldername}/brand.webp`} // change if needed
                alt="Sample Alt"
                className="rounded-3xl w-xl  object-contain"
              />
            </div>
          </div>
            </div>
          </div>

          {/* Right:  */}
           <div className="space-y-6 md:px-5">
            <p className="text-gray-600 font-medium leading-7 md:mt-10 md:mb-16 text-sm sm:text-[14px] md:text-[18px] px-2">The website redesign process continues after launch with ongoing monitoring and updates to keep it relevant. Once complete, market the revamped site to your audience to reintroduce your business and drive traffic.</p>
                <Feature
                  icon={<FaCheckCircle className="text-white  w-6 h-6" />}
                  title="Analyzing and Observing"
                  text="Once the website goes live, the redesign process doesn’t end. Regularly monitor its performance, identify what works, and update the site to stay aligned with current trends. Continuous improvement is key to keeping the site relevant and engaging."
                />
                <hr className="border-t border-gray-300" />
                <Feature
                  icon={<MdBuild className="text-white w-6 h-6" />}
                  title="Launching the Re-Designed"
                  text="After redesigning, promote your updated website to your audience. Highlight the new features and improvements to reintroduce your business and attract more traffic, ensuring maximum visibility and engagement."
                />
                <hr className="border-t border-gray-300" />

              </div>
         
        </div>
      </section>


      {/* animationSection */}
      <section className="mt-3" >
        <CTASection
          subtitle="CONTACT US"
          title="Ready To Experience Upstage Yourself ?"
          buttonText="Let's get started"
          buttonLink="https://geektheo.com/about/"
          backgroundImage="/bg.webp"
        />
      </section>

    </>
  )
}




export default WebsiteRedesigning