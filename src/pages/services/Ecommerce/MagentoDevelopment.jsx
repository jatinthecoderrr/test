import React from 'react'
import SocialMediaHeader from "../../../components/SocialMediaHeader"
import ImageTextSectionReversed from '../../../components/imageR_TextL'
import BenefitsSection from "../../../components/Services/HoverTextCards"
import ServicesSlider from "../../../components/Services/SlidingCards_NavigationButton"
import MissionVision from "../../../components/Services/TextL_AutoSliderR"
import ImageTextSection from "../../../components/imageL_TextR"
import SectionHeader from "../../../components/Services/Animated_SectionHeader"
import Accordion from "../../../components/Services/Accordion"
import CTASection from "../../../components/Animatedbox"
import TextCenter_animatedCircle from "../../../components/Services/TextCentere_animatedCircle"

const MagentoDevelopment = () => {
  const foldername = "Magento Development"
  const benefitsData = [
    {
      title: "Marketing Tools",
      description:
        "Effective promotion and marketing tools to enhance visibility and drive sales for your business.",
      img: `${foldername}/Classified-Ads-Solutions.webp`,
      hoverColor: "group-hover:text-[#0d6efd]",
    },
    {
      title: "Customer Accounts",
      description:
        "Manage customer accounts easily to provide a personalized and seamless shopping experience.",
      img: `${foldername}/custom-requirement-1.webp`,
      hoverColor: "group-hover:text-[#8160a8]",
    },
    {
      title: "Product Browsing",
      description:
        "Effortless product browsing with user-friendly navigation to enhance the shopping experience.",
      img: `${foldername}/ecommerce-1.webp`,
      hoverColor: "group-hover:text-[#64c574]",
    },
    {
      title: "SEO",
      description:
        "Optimized search engine options to help customers find products quickly and efficiently.",
      img: `${foldername}/seo.webp`,
      hoverColor: "group-hover:text-[#15b82c]",
    },
    {
      title: "International Support",
      description:
        "Global support to cater to customers across different regions and ensure seamless transactions.",
      img: `${foldername}/crm2.webp`,
      hoverColor: "group-hover:text-[#7e77a2]",
    },
    {
      title: "Catalog Browsing",
      description:
        "Easy catalog browsing for customers to explore and discover products effortlessly.",
      img: `${foldername}/ecommerce_creative.webp`,
      hoverColor: "group-hover:text-[#d3635c]",
    },

    {
      title: "Reporting And Analytics",
      description:
        "Comprehensive reporting and analytics to track performance and make informed business decisions.",
      img: `${foldername}/lease_report.webp`,
      hoverColor: "group-hover:text-[#e74c3c]",
    },
    {
      title: "Order Management",
      description:
        "Efficient order management to streamline processing, tracking, and fulfillment of customer orders.",
      img: `${foldername}/word-order-management.webp`,
      hoverColor: "group-hover:text-[#0d6efd]",
    },

  ];

  const servicesData = [
    // 1st row
    {
      icon: `${foldername}/work.webp`,
      title: "ENVIRONMENT OPTIMIZATION",
      description: "The world of online markets depends mainly on the contents of the market.",
    },
    {
      icon: `${foldername}/configure-optimization.webp`,
      title: "CONFIGURE OPTIMIZATION",
      description: "Maintaining a presence on social media platforms is essential.",
    },
    {
      icon: `${foldername}/code-optimize.webp`,
      title: "CODE OPTIMIZATION",
      description: "Code optimization helps in managing various social media sites effectively.",
    },

    // 2nd row
    {
      icon: `${foldername}/seo.webp`,
      title: "SEARCH ENGINE OPTIMIZATION",
      description: "Maintaining a website requires the help of search engine optimization.",
    },

    {
      icon: `${foldername}/web-design.webp`,
      title: "FRONT-END PRODUCT",
      description: "You and your agent can submit property listings via the website's login.",
    },
    {
      icon: `${foldername}/membershp.webp`,
      title: "MEMBERSHIP SYSTEM",
      description: "You can offer agents custom subscriptions by adjusting listing options.",
    },
    {
      icon: `${foldername}/paypal.webp`,
      title: "PAYPAL INTEGRATION",
      description: "Customers can connect to payments easily and receive money hassle-free.",
    },

    // 3rd row
    {
      icon: `${foldername}/email.webp`,
      title: "EMAIL ALERTS",
      description: "Allow visitors to filter searches and get notified of matching results.",
    },
    {
      icon: `${foldername}/chatapp.webp`,
      title: "SOCIALIZATION",
      description: "Allow members to use accounts to log in and subscribe to the website.",
    },

    // 4th row
    {
      icon: `${foldername}/lease_document.webp`,
      title: "BILLING AND INVOICES",
      description: "Create invoices, bill members, track finances, and maintain bookkeeping easily.",
    },
    {
      icon: `${foldername}/startup_ecommerce.webp`,
      title: "YOUR OWN MARKETPLACE",
      description: "Create a professional realty market and manage it via the website backend.",
    },
    {
      icon: `${foldername}/configure-optimization.webp`,
      title: "ADVANCED SEARCH",
      description: "Let visitors filter search results and get automatic match notifications.",
    }
  ];

  const missionSlides = [
    {
      img: `${foldername}/product_showcase.webp`,
      title: "PAYMENT",
      description:
        "Magento is a powerful ecommerce platform. We ensure the best theme, reflecting your business impression.",
    },
    {
      img: `${foldername}/payment.webp`,
      title: "PRODUCTS",
      description:
        "Since Magento is a prominent ecommerce platform, this is used by all kinds of business like B2B and B2C.",
    },
        {
      img: `${foldername}/special-order.webp`,
      title: "SHIPPING",
      description:
        "Shipping is the backbone of ecommerce, especially when you provide exact solution at one place.",
    },
  ];

  const items = [
    {
      id: 1,
      title: "Design And Frame The Visual Hierarchyal Media",
      content:
        " Website design plays a key role in profits by guiding users with clear actions on each page. Visual hierarchy is essential in effective ecommerce design, ensuring clear communication."
    },
    {
      id: 2,
      title: "Increase Your Marketing",
      content:
        "Boost sales by enhancing your marketing strategy. We research your target audience, test messages, and ensure the best approach. Geektheory offers top Magento development services in Chennai.",
    },
    {
      id: 3,
      title: "Increasing The Conversion Rate",
      content:
        "Conversion rate reflects visitors willing to proceed further. A well-designed website effectively markets your business, attracting customers and boosting conversion rates.",
    },
    {
      id: 4,
      title: "Building Online Optimization",
      content:
        "Your brand is defined by Google’s ranking, not just your message. SEO helps you get noticed, increasing product sales and customer base. Geektheory is the top Magento agency in Chennai.",
    },

  ];

  const devFeatures = [
  {
    img: `${foldername}/magentomagento.webp`,
    title: "Custom Solutions",
    description: "Tailored PHP solutions for your business needs.",
    animation: "fade-right",
  },
  {
    img: `${foldername}/redesigning.webp`,
    title: "Scalable Apps",
    description: "Build scalable and robust applications.",
    animation: "fade-up",
  },
  {
    img : `${foldername}/magentomagento.webp`,
    title: "Custom Solutions",
    description: "Tailored PHP solutions for your business needs.",
    animation: "fade-up",
  },
  {
    img: `${foldername}/webdesign.webp`,
    title: "Scalable Apps",
    description: "Build scalable and robust applications.",
    animation: "fade-left",
  },
  // ...more features
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
              Magento Development
            </h1>
          </div>
        </div>
      </div>


      {/* Magento Ecommerce Experts */}
      <section>
        <ImageTextSectionReversed

          imageSrc={`${foldername}/magento.webp`}
          imageAlt="Brand Image"
          title="Magento Ecommerce Experts"
          subtitle="Magento"
          description="Geektheory , a leading Magento ecommerce development company in Chennai, offers top-tier services for online businesses. Our expert team specializes in Magento, providing flexible shopping cart solutions, effective catalogue management, and search engine optimization. We prioritize customization, ensuring your specific needs, from shipping to payments, are met. With our experienced developers, we guarantee on-time delivery and satisfaction. Choose Geektheory for a competitive edge in the ecommerce landscape."
          animationClass="translate-y-40" // slide from right
        />
      </section>


      {/* Features of a Magento Website  */}
      <BenefitsSection
        subtitle=" Features"
        title="Features of a Magento Website"
        paragraph="Magento is an omnichannel ecommerce platform that helps sellers create websites to showcase products to a broad audience. At Geektheory, we develop Magento sites that bridge digital and physical shopping, offering scalable, high-performing solutions for large businesses. Our cost-effective services ensure high ROI, optimized for top search rankings and improved conversion rates. With years of experience and diverse clientele, we provide reliable Magento development tailored to your goals."
        features={benefitsData}
      />

      {/* what we provide  */}
      <ServicesSlider
        subTitle="Provide"
        title="What We Provide?"
        discription="Magento, an open-source CMS powered by PHP and MySQL, is gaining popularity for ecommerce websites. It allows businesses to stand out with customized features, offering an interactive user base and SEO benefits for better Google rankings. Magento also serves as a powerful marketing tool, enabling easy website customization to meet business needs. As the leading Magento development agency in Chennai, we ensure the best solutions for your ecommerce growth."
        services={servicesData}
        bgColor="#f5f3f0"
      />

      {/* Creating a megento  */}
      <MissionVision
        subTitle="Company Goals"
        title="Creating a Magento Website"
        description="Create a powerful Magento website with us in Chennai. Magento offers efficiency and flexibility, giving you full control over your store. Our expert developers provide design, development, and support, ensuring a profitable, competitive ecommerce site."
        slides={missionSlides}
      />

      {/* Animated Circle Section */}
      
        <TextCenter_animatedCircle
      bgImage="s2-bg-img-1.webp"
      subtitle="Development"
      title="PHP Web Development"
      description="Geektheory is a leading PHP web development company in Chennai,
        India. PHP is widely used for dynamic web development, powering over
        80% of websites. Our expert developers cater to both businesses and
        startups."
      features={devFeatures}
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


      {/* Beginning with Redesign */}
      <section
        className="w-full py-10 px-4 sm:py-10 sm:px-6 md:py-16 md:px-6   "
        style={{ backgroundImage: `url('body-bg-2-scaled-1.jpg')` }}
      >
        <div className="max-w-[1300px] mx-auto  grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-5">
          {/* Left:  */}
          <SectionHeader
            subTitle="Business"
            titleWords="Boost Your Business Sales"
            description=" Boost your business sales with effective strategies and optimized ecommerce solutions."
            text_align="text-left"
            justify="justify-left"

          />
          {/* accordian right */}
          <Accordion items={items} allowMultiple={false} />
        </div>

      </section>

      {/* Animated Section */}
      <section>
        <CTASection
          subtitle="CONTACT US"
          title="Seeking a Web Development Company in Chennai?"
          buttonText="Let's get started"
          buttonLink="https://geektheo.com/about/"
          backgroundImage="/bg.webp"
        />
      </section>
    </>
  )
}

export default MagentoDevelopment