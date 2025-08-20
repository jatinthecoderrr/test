import React from 'react'
import ServicesSection from "../../../components/Services/CenterText_ReadMore"
import SocialMediaHeader from "../../../components/SocialMediaHeader"
import ServicesSlider from "../../../components/Services/SlidingCards_NavigationButton"
import BenefitsSection from "../../../components/Services/HoverTextCards"
import ImageTextSection from "../../../components/imageL_TextR"
import CTASection from "../../../components/Animatedbox"
import TriangleBullet from "../../../components/Home/TriangleBullet"
import Categoriesinside from "../../../components/Services/cardAnimation_Inside"

const MagentoHosting = () => {
  const foldername = "Magento Hosting";
  const title = "Check out Magento Web Hosts"
  const myServices = [
    {
      title: "Powerful Plateform",
      description:
        "Magento, an open-source platform, powers stores with catalog management, SEO, and shopping cart.",
      image: `${foldername}/service-user.webp`, // adjust path if needed
      link: "/powerful-platform",
    },
    {
      title: "Website Usage",
      description:
        "Magento offers many benefits, but careful management is essential. Ensure a reliable host.",
      image: `${foldername}/plugin-development.webp`, // adjust path if needed
      link: "/website-usage",
    },
    {
      title: "Profitable Packages",
      description:
        "Startups need at least 10 website pages to establish strong connections, emphasizing seamless navigation.",
      image: `${foldername}/fixed-rate-300x300.webp`, // adjust path if needed
      link: "/profitable-packages",
    },
  ];

  const servicesData = [
    {
      icon: `${foldername}/ssl.webp`,
      title: "SSL Protection",
      description:
        "An SSL certificate ensures secure online transactions and protects sensitive data, safeguarding user activity, searches, and personal information against theft and misuse. Geektheory leads in Magento hosting in Chennai.",
    },
    {
      icon: `${foldername}/hosting-package.webp`,
      title: "Hosting Packages",
      description:
        "Choose a hosting package based on your Magento store's current and future needs. Consider bandwidth, disk storage, and scalability to accommodate your growth. Geektheory offers premium Magento hosting in Chennai.",
    },
    {
      icon: `${foldername}/server-reliable.webp`,
      title: "Server Reliability",
      description:
        "Reliable hosting ensures minimal downtime and stable server connections, vital for maintaining customer trust. Look for web hosting with strong uptime guarantees and robust server performance to support your eCommerce website.",
    },
    {
      icon: `${foldername}/emv.webp`,
      title: "Backend Security",
      description:
        "Backend security is crucial for protecting your eCommerce site and user data. Secure systems build customer trust and safeguard your website against cyber-attacks and data breaches, ensuring continuous business operation.",
    },
    {
      icon: `${foldername}/money.webp`,
      title: "Refund Policies",
      description:
        "Understand the hosting provider’s cancellation and refund policies. Ensure no hidden charges, and inquire about full refunds during the trial period or post-cancellation. Geektheory offers transparent Magento hosting solutions.",
    },
    {
      icon: `${foldername}/web-hosting.webp`,
      title: "Web Hosting",
      description:
        "Some web hosts offer shopping cart applications and unlimited email accounts, improving your site’s functionality. Look for features like automated responses, spam filters, and scalable solutions for future growth.",
    },
  ];

  const benefitsData = [
    {
      title: "Reasonable Cost",
      description:
        "A reliable host offers well-defined packages with fair pricing and features clearly outlined.",
      img: `${foldername}/fixed-rate-300x300.webp`,
      hoverColor: "group-hover:text-[#d3635c]",
    },
    {
      title: "Reliable Hardware",
      description:
        "Top web hosts use high-quality hardware to ensure regular backups, safeguarding data.",
      img: `${foldername}/server-reliable.webp`,    // or server-reliable.png if existed
      hoverColor: "group-hover:text-[#0d6efd]",
    },
    {
      title: "Data Back-Up",
      description:
        "Backup is crucial to recover lost or damaged data in case of an emergency.",
      img: `${foldername}/pre-production-300x300.webp`,
      hoverColor: "group-hover:text-[#7e77a2]",
    },
    {
      title: "Loading Speed",
      description:
        "Fast loading speed ensures a smooth, efficient user experience on eCommerce websites.",
      img: `${foldername}/work-300x300.webp`,
      hoverColor: "group-hover:text-[#64c574]",
    },
    {
      title: "Tech Support",
      description:
        "An eCommerce site with high traffic needs quick resolution of technical faults for smooth operations.",
      img: `${foldername}/crm2-300x300.webp`,
      hoverColor: "group-hover:text-[#8160a8]",
    },
    {
      title: "Safe Payments",
      description:
        "A web host's handling of payments must ensure encryption and security for safe transactions.",
      img: `${foldername}/auth-payment-300x300.webp`,
      hoverColor: "group-hover:text-[#15b82c]",
    },
  ];

  const categories = [
    { title: "HostGater", iconSrc: `${foldername}/hostgater.webp`, paragraph: "This dedicated web hosting company, based in Houston with operations in Austin, Texas, offers shared, VPS, and dedicated hosting. HostGator is popular for its unique feature allowing users to resell hosting plans on HostGator servers.", animation:"fade-right" },
    { title: "Nexcess", iconSrc: `${foldername}/nexcess.webp`, paragraph: "Nexcess Hosting specializes in Magento websites, offering impeccable service and high uptime. Though considered pricey, their optimized hosting environment has made them a pioneer in the field since 2000, ensuring reliable functionality for users.", animation: "fade-left" },
    { title: "BlueHost", iconSrc: `${foldername}/bluehost.webp`, paragraph: "Owned by Endurance International Group, BlueHost is among the top 20 web hosts, with over 1.9 million domains hosted. Trusted by millions, it offers unlimited bandwidth, hosting space, and email accounts with several packages to choose from.", animation: "fade-right" },
    { title: "SiteGround", iconSrc: `${foldername}/sitegground.webp`, paragraph: "Founded in 2004, SiteGround hosts over 500,000 domains globally, offering cloud, shared, and dedicated hosting. With data centers in the Netherlands, Singapore, and the U.S., it's rapidly becoming one of the best-known hosting providers worldwide.", animation: "fade-left" },
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
              Magento Hosting
            </h1>
          </div>
        </div>
      </div>

      {/* why do you need Magento*/}
      <ServicesSection
        subTitle="Magento"
        titleWords="Why do you need Magento Web Hosts ?"
        description="Choosing the right web host is crucial for your eCommerce success. A reliable provider ensures smooth operations, credibility, and increased sales. Poor hosting can lead to downtime, impacting revenue. We offer the best Magento hosting in Chennai for seamless performance."
        services={myServices}
      />

      {/* Ecommerce Verticals to Choose */}
      <ServicesSlider
        subTitle="Ecommerce"
        title="Ecommerce Verticals to Choose"
        discription="If you find the number of people visiting your store is falling or if you plan to increase your sales then you should get the help of an e-commerce website development company. However, developing an e-commerce platform is not enough. It needs to be of a good quality and has to work effectively. We, at Geektheory are here to make sure of that best e-commerce web development company in Chennai will guide our clients in business to reach next level. If you an appealing e-commerce website, you will be able to have a competitive edge over your customers. Our expert developers offer web solutions which are user-friendly and easy to navigate."
        services={servicesData}
        bgColor="#f5f3f0"
      />


      {/* Ideal Web Hosting Service  */}
      <BenefitsSection
        subtitle=" Service"
        title="Ideal Web Hosting Service"
        paragraph="Many business owners believe the hosting server is the foundation of their eCommerce success. With 10+ years of Magento hosting experience in Chennai, Geektheory ensures reliable performance. We also manage emails, responses, and the Control Panel, offering complete hosting solutions. Here's what makes an ideal web host."
        features={benefitsData}
      />

      {/* Why us */}
      <section>
        <ImageTextSection
          imageSrc={`${foldername}/Geek-logo_webp-e1745647573961.webp`}
          title="Why Geektheory"
          subtitle="Why Us"
          description="We at Geektheory have an expert team of Magento professionals who will help in developing customized Magento websites which will fit business of every size. We make it a point to offer good solutions for the existing websites which will be effective for your business. No matter, what is the location of your business Geektheory, the experienced web development company, will offer your Magento services that will help you stand apart from your competitors."

          description2="We provide tailored solutions with an integrated backend, enhancing features like cart, payments, shipping, and product displays. As a leading web design company in Chennai, we deliver on-time, innovative, and appealing web solutions for client satisfaction."
          animationClass="translate-y-40" // slide from right
          showButton={true}
          buttonTitle="CONTACT US NOW"
          buttonLink="https://geektheo.com/contact/"
        />
      </section>

      {/* Check out Magento Web Hosts */}
      <section
        className=" bg-cover bg-center bg-no-repeat py-5 sm:py-8 md:py-14 px-4 sm:8 md:px-10"
        style={{ backgroundColor: "#f5f3ef" }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="uppercase flex gap-3 text-sm sm:text-[17px] font-white tex tracking-wider">
            <TriangleBullet /> <span className='text-gray-600 font-bold'>Web Host</span>
          </div>
        </div>

        {/* Split-letter Title */}
        <h2 className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-center text-black flex justify-center flex-wrap leading-snug">
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

        {/* Description */}
        <p className="max-w-7xl mx-auto text-center text-gray-600 font-medium mb-12 text-base sm:text-lg md:text-[18px]  leading-relaxed px-2">
          As you must have gathered, the choice of the web hosting service providers for your ecommerce website depends largely on specific demands and requirements. It is only after careful deliberation that the right host provider can be chosen. To make this decision easier, let’s take a look at some of the best web hosting providers that you must take a look at before making the final decision.
        </p>
        <Categoriesinside categories={categories} />
      </section>

      {/* Animated Section */}
      <section>
        <CTASection
          subtitle="CONTACT US"
          title="Are You Looking For Web Development Company in Chennai?"
          buttonText="Let's get started"
          buttonLink="https://geektheo.com/about/"
          backgroundImage="/bg.webp"
        />
      </section>
    </>
  )
}

export default MagentoHosting