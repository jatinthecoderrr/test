import React from 'react'
import SocialMediaHeader from "../../../components/SocialMediaHeader"
import ImageTextSectionReversed from '../../../components/imageR_TextL'
import FeatureSection from "../../../components/Services/ImageL_TickMarkR"
import FeatureSectionRev from "../../../components/Services/ImageR_TickMarkL"
import ImageTextSection from "../../../components/imageL_TextR"
import ServicesSlider from "../../../components/Services/SlidingCards_NavigationButton"
import CTASection from "../../../components/Animatedbox"

const StartupECommerce = () => {

  const foldername = "Startup E-Commerce";
  const servicesData = [
{
    icon: `${foldername}/custom-business-solution.webp`,
    title: "Business Domain",
    description: "Choose a catchy domain name for your eCommerce site that reflects your products and business goals, attracting customers and encouraging purchases.",
  },
  {
    icon: `${foldername}/web-design.webp`,
    title: "Minimalist Design",
    description: "For startup eCommerce sites, use simple designs aligned with your theme. Ensure call-to-action buttons are visible to avoid hurting your business with poor placement.",
  },
  {
    icon: `${foldername}/menu_bar.webp`,
    title: "Menu Bar",
    description: "Keep the menu bar simple and minimalist for a clean, user-friendly website, ensuring smooth navigation and clarity, following the MVP model for simplicity.",
  },
  {
    icon: `${foldername}/special-order.webp`,
    title: "Shipping Integration",
    description: "Target local areas for product delivery, offering free or low-cost shipping to attract customers without needing a large shipping operation.",
  },
  {
    icon: `${foldername}/extract-email.webp`,
    title: "New Product Email Alert",
    description: "Notify customers about new products via email alerts tailored to their purchase history, keeping them engaged and informed.",
  },
  {
    icon: `${foldername}/payment.webp`,
    title: "Online Payment Gateway",
    description: "Customers expect online bill payment options. 40% of eCommerce customers are regular buyers, with 15% converting, as most prefer online payment methods.",
  },
  {
    icon: `${foldername}/fixed-rate.webp`,
    title: "Cash On Delivery",
    description: "Many customers prefer cash on delivery (COD). Ignoring the 45% who prefer COD is unwise, so include it to cater to all customer preferences on your eCommerce site.",
  },
  {
    icon: `${foldername}/pre-production.webp`,
    title: "Stock Availability Alerts",
    description: "Be transparent about stock levels, showing exact numbers by category. This helps customers decide and improves inventory management for better efficiency.",
  },
  {
    icon: `${foldername}/chatapp.webp`,
    title: "SMS Integration",
    description: "Integrate SMS functionality to engage customers with updates on new arrivals, offers, discounts, and exclusive products, driving repeat visits and sales.",
  },
  {
    icon: `${foldername}/no.webp`,
    title: "Don't Stock Much",
    description: "Maintain minimal inventory by analyzing customer buying patterns and creating a plan to avoid overstocking, ensuring efficient availability and reducing costs.",
  },
  {
    icon: `${foldername}/meeting-software.webp`,
    title: "Live Chat",
    description: "A great startup eCommerce site uses FAQs and live chat to address customer queries, offering real-time solutions for a smooth shopping experience and satisfaction.",
  },
  {
    icon: `${foldername}/email.webp`,
    title: "Email Integration",
    description: "For subscription or loyalty programs, use email to inform customers about offers, rewards, and updates, boosting engagement and retention on your eCommerce site.",
  },
  {
    icon: `${foldername}/lean.webp`,
    title: "ENVIRONMENT OPTIMIZATION",
    description: "The world of online markets depends mainly on the contents of the market.",
  }
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
              Startup E-Commerce
            </h1>
          </div>
        </div>
      </div>


      {/* Ecommerce for Startups */}
      <section>
        <ImageTextSectionReversed

          imageSrc={`${foldername}/startup.webp`}
          imageAlt="Brand Image"
          title="Ecommerce for Startups"
          subtitle="Ecommerce"
          description="Starting a boutique or sneaker store? Looking to grow your business and provide lasting products/services? You need an eCommerce website to drive exponential growth.hancing the overall user experience."
          description2="With 80% of customers influenced by online purchases, partnering with an experienced eCommerce company in Chennai is key to success."
          animationClass="translate-y-40" // slide from right
        />
      </section>


      {/* Future of Indian Ecommerce */}
      <section>
        <FeatureSection
          subTitle="Future"
          title="Future of Indian Ecommerce"
          description1="At Geektheory, we ensure your new website outshines the old one."
          description2="Our redesign services refresh your brand and correct past design flaws."
          features={[
            "The Indian ecommerce market value will reach a landmark of USD 200 billion by 2027.",
            "The number of ecommerce shoppers in India was 120 million by 2018 and it is expected to grow upto 220 million by 2025.",
            "The rise in internet use and smartphone users are key drivers of India's ecommerce success.",
            "By 2022, India will have 476 million smartphone users, driving a 120% growth in ecommerce.",
          ]}
          image={`${foldername}/ecommercew.webp`}
          bgImage=""
          bgColor="#f9fafb"
        />
      </section>


      {/* Indian E-commerce Industry */}
      <section>
        <FeatureSectionRev
          subTitle="Ecommerce"
          title="Indian E-commerce Industry"
          description1="The Indian ecommerce industry has been in its up-face since its inception and there is no looking back in terms of downfall at any cost"
          features={[
            "Apparel",
            "Books",
            "Grocery",
            "Pharmacy",
            "Food Delivery",
            "Jwellery",
            "Sports & Fitness",
          ]}
          image={`${foldername}/ecommerce.webp`}
          bgImage=""
          bgColor="#f9fafb"
        />
      </section>

      {/* Why you shouldn't follow Amazon? */}
      <section>
        <ImageTextSection

          imageSrc={`${foldername}/amazon.webp`}
          imageAlt="Brand Image"
          title="Why you shouldn't follow Amazon?"
          subtitle=" Amazon"
          description="Startups often aim to replicate giants like Amazon, but it's impractical for them to operate on the same scale. Amazon and Flipkart use advanced, customized functionalities focused on customer interaction and driving sales. For startups, a tailored eCommerce website is essential to achieve exponential growth and meet customer needs effectively."
          description2="Startup E-Commerce companies can't afford high-cost functionalities like Amazon, which covers a vast product range to meet diverse customer needs. For startups, focusing on core features tailored to their target audience is a more cost-effective approach."
          animationClass="translate-y-40" // slide from right
          backgroundImage="/body-bg-2-scaled-1.jpg"
        />
      </section>

      {/*MVP Implementation*/}
      <section>
        <FeatureSectionRev
          subTitle="Future"
          title="MVP Implementation"
          description1="How to implement MVP successfully on your Ecommerce website?"
          features={[
            " Full Touch Support",
            "Native Popup Windows",
            "Responsive Designs",
            "Powerful Persistence",
          ]}
          image={`${foldername}/mvp.webp`}
          bgImage="/images/bg-pattern.png"
          bgColor="#f9fafb"
        />
      </section>


      {/* checklist  */}
      <ServicesSlider
        subTitle="Ecommerce"
        title="Startup Ecommerce Checklist"
        services={servicesData}
        bgColor="#f5f3f0"
      />

      {/* Go MVP / Lean Model */}
      <section>
        <ImageTextSection

          imageSrc={`${foldername}/lean.webp`}
          imageAlt="Lean Model"
          title="Go MVP / Lean Model"
          subtitle="Web Designing"
          description="You would have imagined a lot about building your ecommerce website, and the way it should be portrayed online with multiple product categories that target’s the specific end-user. What if the entire plan goes wrong? Your invested time and money would certainly gets wasted and the worst part is it requires an entirely new plan to implement."
          description2="You should not opt out for two extremes, especially if you are a startup ecommerce company you must take a center stage here. Taking a center stage, and going with the minimal products that would generate more sales is known as “Minimum Viable Product”."
          animationClass="translate-y-40" // slide from right
          backgroundImage="/body-bg-2-scaled-1.jpg"
        />
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

export default StartupECommerce