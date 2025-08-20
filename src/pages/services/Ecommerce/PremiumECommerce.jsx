import React from 'react'
import SocialMediaHeader from "../../../components/SocialMediaHeader"
import ImageTextSectionReversed from '../../../components/imageR_TextL'
import ImageTextSection from "../../../components/imageL_TextR"
import CTASection from "../../../components/Animatedbox"
import FeatureGridSection from "../../../components/Services/TickMark_3Column"
import CategoriesGrid from "../../../components/Services/CategoryCard"
import TriangleBullet from '../../../components/Home/TriangleBullet'
import { Helmet } from "react-helmet";
const PremiumECommerce = () => {
  const foldername = "/Premium E Commerce"
  const title = "Ecommerce Verticals You Can Choose"
  const categories = [
  { title: "Grocery", iconSrc: `${foldername}/grocery.webp` },
  { title: "Mobile", iconSrc: `${foldername}/custom-business-solution.webp` },
  { title: "Jewellery", iconSrc: `${foldername}/jwellery.webp` },
  { title: "Pet Goods", iconSrc: `${foldername}/pet_goods.webp` },
  { title: "Flowers And Plants", iconSrc: `${foldername}/flower.webp` },
  { title: "Cosmetics", iconSrc: `${foldername}/cosmetics.webp` },
  { title: "Computing", iconSrc: `${foldername}/web-design.webp` },
  { title: "Clothing", iconSrc: `${foldername}/clothing.webp` },
  { title: "Household", iconSrc: `${foldername}/lease_paymet.webp` },
  { title: "Glasses", iconSrc: `${foldername}/glasses-1.webp` },
  { title: "Gift Items", iconSrc: `${foldername}/gift.webp` },
  { title: "Footwear", iconSrc: `${foldername}/footwear.webp` },
  { title: "Chemicals", iconSrc: `${foldername}/chemicles.webp` },
  { title: "Books", iconSrc: `${foldername}/books.webp` },
  { title: "Bike And Car", iconSrc: `${foldername}/bike.webp` },
  { title: "B2B Equipments", iconSrc: `${foldername}/b2b.webp` },
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
              Premium E Commerce
            </h1>
          </div>
        </div>
      </div>


      {/* Boost Your Online Business */}
      <section>
        <ImageTextSectionReversed

          imageSrc={`${foldername}/ecommercew.webp`}
          imageAlt="Brand Image"
          title="Boost Your Online Business"
          subtitle="premium"
          description="Geektheory, a top e-commerce web development company in Chennai, offers affordable yet high-quality web solutions tailored to your business needs. With a team of expert developers, we specialize in building custom e-commerce platforms that reflect your brand identity and drive customer engagement."
          animationClass="translate-y-40" // slide from right
        />
      </section>

      {/*Creative Ecommerce Website to Boost Sales! */}
      <section>
        <ImageTextSectionReversed

          imageSrc={`${foldername}/corporate.webp`}
          imageAlt="Brand Image"
          title="Creative Ecommerce Website to Boost Sales!"
          subtitle="Ecommerce"
          description="Geektheory, a top e-commerce web development company in Chennai, offers affordable yet high-quality web solutions tailored to your business needs. With a team of expert developers, we specialize in building custom e-commerce platforms that reflect your brand identity and drive customer engagement."
          backgroundColor="#f5f3ef"
          animationClass="translate-y-40" // slide from right
        />
      </section>

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

        {/* Ecommerce Verticals You Can Choose*/}
      <section
         className=" bg-cover bg-center bg-no-repeat py-5 sm:py-8 md:py-14 px-4 sm:8 md:px-10"
        style={{ backgroundImage: `url('/t2-bg-img-1.webp')` }}
        >
         <div className="flex items-center justify-center gap-2 mb-2">
          <div className="uppercase flex gap-3 text-sm sm:text-[17px] font-white tex tracking-wider">
            <TriangleBullet /> <span className='text-gray-100 font-bold'>Ecommerce</span>
          </div>
        </div>

      {/* Split-letter Title */}
          <h2 className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-100 flex justify-center flex-wrap leading-snug">
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
        <p className="max-w-7xl mx-auto text-center text-gray-100 font-medium mb-12 text-base sm:text-lg md:text-[18px]  leading-relaxed px-2">
          If your store traffic is dropping or you want to boost sales, Geektheory—the top e-commerce web development company in Chennai—can help. We build high-quality, user-friendly e-commerce sites that give your business a competitive edge.
        </p>
          <CategoriesGrid categories={categories} />
      </section>

      { /* Requires real time*/}
      <section className="w-full z-10">
        <FeatureGridSection
          subTitle="Ecommerce"
          title="Who Requires the Real Time App?"
          description1="Boost your business with a seamless shopping experience! If you have a physical store, an online presence will increase profits. At Geektheory, we use the latest tools to set you apart from competitors. Our expert team delivers premium e-commerce solutions tailored to your needs, ensuring global reach and timely delivery. As a top e-commerce web development company in Chennai, we provide user-friendly, cost-effective, and high-quality services to help your business grow. Let's discuss your project today! "
          features={[
            // Row 1
            "It needs to be search engine friendly",
            "Provide gift coupon",
            "An user-friendly design",

            // Row 2
            "The option of customized product filters",
            "Having custom product filters",
            "The feature to track the orders",

            // Row 3
            "The inclusion of loyalty programs",
            "Provide discounted price on some products",
            "Having unlimited categories of products",

            // Row 4
            "A system of sending emails in bulk",
            "Having shipping integration",
            "The feature to check the order details",

            // Row 5
            "A mobile app",
            "The option to add a product to wish list",
            "Verify the pin-code for delivery",

            // Row 6
            "An HTTPS implementation",
            "Being cross-browser compatible",
            "The payment gateway",

            // Row 7
            "The feature of live chat",
            "Having Tax customization",
            "The option to check relevant products",

            // Row 8
            "The inclusion of unlimited products",
            "The option of love chat",
            "Include offer for specific products",

            // Row 9
            "The feature of bulk export and import",
            "The feature to zoom the products",
            "An on-page SEO",
          ]}
          bgImage="/images/bg-pattern.png"
          bgColor="#f9fafb"
        />
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

export default PremiumECommerce