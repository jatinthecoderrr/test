import React from "react";
import SocialMediaHeader from "../../../components/SocialMediaHeader";
import ImageTextSection from "../../../components/imageL_TextR";
import ImageTextSectionReversed from "../../../components/imageR_TextL";
import Timeline from "../../../components/Services/Boost-Sales-Growth";
import FeatureSection from "../../../components/services/ImageL_TickMarkR"
import CTASection from "../../../components/Animatedbox";
import { Helmet } from "react-helmet";
const ResponsiveWebDesign = () => {
  const foldername = "Responsive Web Design – Geektheory – Website Development And Software Development Company - 8_15_2025 6-33-18 PM"
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
              Responsive Web Design
            </h1>
          </div>
        </div>
      </div>
      {/* Company in Chennai */}
      <section>
        <ImageTextSection
          imageSrc={`${foldername}/responsive-1.webp`}
          imageAlt="Plan Image"
          title="Responsive Web Design
          Company in Chennai"
          subtitle="Web Design"
          description="Geektheory is a trusted name in responsive web design in Chennai, delivering efficient and user-friendly websites. With the rise of mobile usage, seamless navigation and customer satisfaction are our priorities. Google's data confirms that mobile-friendly sites are the future of online business."
          description2="Nearly 50% of smartphone users access the web primarily through search engines, followed by brand-specific mobile apps. This trend has driven businesses to enhance their websites and apps for better engagement and user experience."
          animationClass="translate-y-40" // slide from right
        />
      </section>

      {/* Boost Leads */}
      <section>
        <ImageTextSectionReversed

          imageSrc={`${foldername}/corporate.webp`}
          imageAlt="Brand Image"
          title="Boost Leads with
          Responsive Design"
          subtitle="Web Designing"
          description="Responsive web design involves planning, structuring, and building a website with text, images, graphics, and interactive elements like CTAs and testimonials. Each site is unique, combining various elements for functionality and appeal."
          description2="Effective web design attracts more leads by ensuring fast loading, easy navigation, appealing visuals, and mobile-friendliness. Geektheory enhances audience reach with expert responsive web design in Chennai."
          animationClass="translate-y-40" // slide from right
          backgroundImage="/body-bg-2-scaled-1.jpg"
        />
      </section>

      {/* Benefits of ResponsiveWeb Design */}
      <FeatureSection
      subTitle="Web Designing"
      title="Benefits of Responsive Web Design"
      description1="As mobile usage rises, ensuring a seamless browsing experience is crucial. We optimize your website for fast-loading graphics, smooth navigation, and well-structured content for readability. As the best responsive web design company in Chennai, we make your website adaptable across all devices for a flawless user experience."
      
      features={[
            "Make your website search engine friendly",
            "Get an easy to manage website",
            "Efficient web design can boost sales",
            "It saves you both time and cost",
            "Efficient websites have a lower bounce rates",
      ]}
      image={`${foldername}/benifit_responsive.webp`}
      bgImage=""
      bgColor=""
    />

      {/* Key Features os R D */}
      <section>
        <ImageTextSectionReversed

          imageSrc={`${foldername}/features.webp`}
          imageAlt="Brand Image"
          title="Key Features of Responsive Design"
          subtitle="Web Designing"
          description="The best responsive web design company in India ensures cross-browser compatibility. With mobile internet users surging from 800 million in 2015 to 1.9 billion, businesses are racing to optimize their websites for seamless mobile experiences.
"
          description2="Don’t lose potential customers due to poor design. A well-optimized, responsive website enhances user experience, boosts engagement, and drives more leads. If you're seeking top responsive web design services in Chennai, Geektheory is here to help."

          animationClass="translate-y-40" // slide from right
          backgroundColor="#f5f3ef"
        />
      </section>

      {/* How Responsive Design Boosts Sales & Growth */}
      <Timeline />

      {/* animationSection */}
      <section className="mt-3" >
        <CTASection
          subtitle="CONTACT US"
          title="Looking For a WebDevelopment Company?"
          buttonText="TALK TO US"
          buttonLink="https://geektheo.com/about/"
          backgroundImage="/bg.webp"
        />
      </section>
               
    </>
  )
}
export default ResponsiveWebDesign