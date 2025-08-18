import React from "react";
import TriangleBullet from "../Home/TriangleBullet";

const TextCenter_animatedCircle = ({
  bgImage,
  bgColor, // background image
  subtitle, // subtitle text
  title, // main heading
  description, // description paragraph
  features = [], // features array [{ img, title, description, animation }]
}) => {
  return (
    <section
      className={`w-full bg-center bg-cover bg-no-repeat py-8 px-4 sm:px-6 md:py-14 md:px-8 lg:px-14`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
        backgroundColor: bgColor,
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        {/* Subtitle */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="uppercase flex gap-3 text-sm sm:text-[17px] font-black tracking-wider">
            <TriangleBullet /> <span>{subtitle}</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-tight mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-200 mb-12 text-base sm:text-lg md:text-[18px] font-normal leading-relaxed px-2">
          {description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos={feature.animation} // AOS animation type
              className="text-center"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white transform transition duration-300 ease-out hover:scale-105 hover:rotate-6 hover:shadow-xl">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-lg sm:text-xl font-bold mb-3">
                {feature.title}
              </h5>
              <p className="text-gray-300 text-sm sm:text-base max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextCenter_animatedCircle;

// How to use
// import TextCenter_animatedCircle from "./components/TextCenter_animatedCircle";

// const devFeatures = [
//   {
//     img: "/images/feature1.webp",
//     title: "Custom Solutions",
//     description: "Tailored PHP solutions for your business needs.",
//     animation: "fade-up",
//   },
//   {
//     img: "/images/feature2.webp",
//     title: "Scalable Apps",
//     description: "Build scalable and robust applications.",
//     animation: "zoom-in",
//   },
//   // ...more features
// ];

// export default function HomePage() {
//   return (
//     <TextCenter_animatedCircle
//       bgImage="PHP/s2-bg-img-1.webp"
//       subtitle="Development"
//       title="PHP Web Development"
//       description="Geektheory is a leading PHP web development company in Chennai,
//         India. PHP is widely used for dynamic web development, powering over
//         80% of websites. Our expert developers cater to both businesses and
//         startups."
//       features={devFeatures}
//     />
//   );
// }
