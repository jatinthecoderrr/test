// import React from "react";
// import { useEffect, useRef, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";
// // Category Card
// const CategoryCard = ({ title, iconSrc, paragraph }) => {
//       useEffect(() => {
//         AOS.init({
//           once: true, // animation runs only once
//           duration: 800, // speed of animation
//           easing: "ease-out-cubic",
//         });
//       }, []);
//       useEffect(() => {
//         AOS.init({ duration: 500, once: true, easing: "ease-out" });
//       }, []);

//   return (
//     <div className=" rounded-4xl px-8 bg-white shadow-lg flex flex-col items-center justify-center text-center text-black gap-2 font-semibold  w-full h-40 sm:h-58 lg:h-92">
//       <img
//         src={iconSrc}
//         alt={title}
//         className="w-14 h-14 sm:w-16 sm:h-16 lg:w-28 lg:h-28 mb-3 object-contain"
//       />
//       <h3 className="text-sm sm:text-base lg:text-2xl font-extrabold">{title}</h3>
//       <p className="font-medium text-base md:text-lg text-gray-600">{paragraph}</p>
//     </div>
//   );
// };

// // Categories Grid
// const Categoriesinside = ({ categories }) => {
//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center px-6 pb-10 ">
//       {/* Background */}
//       <div
//       />
//       <div  />

//       {/* Grid */}
//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-6xl">
//         {categories.map((cat, idx) => (

//             <div
//               key={idx}
//               data-aos={cat.animation} // AOS animation type
//               className="text-center"
//             >
//                  <motion.div
//                     key={idx}
//                     className="flex flex-col items-center text-center"
//                   >
//                     <div
//                       className="flex flex-col items-center justify-center gap-3  bg-transparent cursor-pointer relative overflow-hidden"
//                       style={{
//                         minWidth: "120px",
//                       }}
//                       onMouseMove={(e) => {
//                         const rect = e.currentTarget.getBoundingClientRect();
//                         const x = e.clientX - rect.left;
//                         const y = e.clientY - rect.top;

//                         // stronger tilt (-20° to 20°)
//                         const offsetX = (x / rect.width - 0.5) * 60;
//                         const offsetY = (y / rect.height - 0.5) * 60;

//                         const icon = e.currentTarget.querySelector("img");
//                         if (icon) {
//                           icon.style.transform = `rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`; // ⬅ no scale
//                           icon.style.transition = "transform 0.1s ease-out";
//                         }

//                       }}
//                       onMouseLeave={(e) => {
//                         const icon = e.currentTarget.querySelector("img");
//                         if (icon) {
//                           icon.style.transform = `rotateX(0deg) rotateY(0deg)`; // ⬅ reset without scale
//                           icon.style.transition = "transform 0.3s ease-in-out";
//                         }
//                       }}
//                     >
//                       {/* Icon (no hover scale) */}
//                       <CategoryCard key={idx} title={cat.title} iconSrc={cat.iconSrc} paragraph={cat.paragraph}/>
//                     </div>
//                   </motion.div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Categoriesinside;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";


// Category Card
const CategoryCard = ({ title, iconSrc, paragraph }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);
  useEffect(() => {
    AOS.init({ duration: 500, once: true, easing: "ease-out" });
  }, []);

  return ( 
    <div className="rounded-3xl px-6 sm:px-8 flex flex-col items-center justify-start py-5 md:pt-8 text-center text-black gap-2 font-semibold w-full 
      min-h-[220px] sm:min-h-[350px] md:min-h-[370px] lg:min-h-[360px] 
      h-auto transition-transform duration-300">
      
      <img
        src={iconSrc}
        alt={title}
        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-28 lg:h-28  object-contain"
      />
      <h3 className="text-sm sm:text-base lg:text-2xl font-extrabold">
        {title}
      </h3>
      <p className="font-medium text-sm sm:text-base md:text-lg text-gray-600">
        {paragraph}
      </p>
    </div>
  );
};

// Categories Grid
const Categoriesinside = ({ categories }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center px-6 pb-5">
            {/* Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-6xl">
                {categories.map((cat, idx) => (
                     <div
              key={idx}
              data-aos={cat.animation} // AOS animation type
              className="text-center"
            >
                    <div className="bg-white rounded-3xl shadow-xl">
                        <motion.div
                            key={idx}
                            data-aos={cat.animation} // 🔥 AOS on whole card
                            className="flex items-center justify-center"
                        >
                            <div
                                className="cursor-pointer relative overflow-hidden"
                                style={{ minWidth: "220px" }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;

                                    // Map mouse position → translate (-20px to +20px)
                                    const offsetX = (x / rect.width - 0.5) * 30;  // left ↔ right
                                    const offsetY = (y / rect.height - 0.5) * 30; // top ↔ bottom

                                    const card = e.currentTarget.querySelector(".card");
                                    if (card) {
                                        card.style.transform = `
                                            translateX(${offsetX}px)
                                            translateY(${offsetY}px)
                                            `;
                                        card.style.transition = "transform 0.1s ease-out";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const card = e.currentTarget.querySelector(".card");
                                    if (card) {
                                        card.style.transform = `translateX(0px) translateY(0px)`;
                                        card.style.transition = "transform 0.3s ease-in-out";
                                    }
                                }}
                            >
                                <div className="card will-change-transform transform-gpu">
                                    <CategoryCard
                                        title={cat.title}
                                        iconSrc={cat.iconSrc}
                                        paragraph={cat.paragraph}
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                    </div>


                ))}
            </div>
        </section>
    );
};

export default Categoriesinside;


//how to use
// import Categoriesinside

// const categories = [
//   { title: "Grocery", iconSrc: `${foldername}/grocery.webp` },
//   { title: "Mobile", iconSrc: `${foldername}/custom-business-solution.webp` },
//   { title: "Jewellery", iconSrc: `${foldername}/jwellery.webp` },
//   { title: "Pet Goods", iconSrc: `${foldername}/pet_goods.webp` },
//   { title: "Flowers And Plants", iconSrc: `${foldername}/flower.webp` },
//   { title: "Cosmetics", iconSrc: `${foldername}/cosmetics.webp` },
//   { title: "Computing", iconSrc: `${foldername}/web-design.webp` },
//   { title: "Clothing", iconSrc: `${foldername}/clothing.webp` },
//   { title: "Household", iconSrc: `${foldername}/lease_paymet.webp` },
//   { title: "Glasses", iconSrc: `${foldername}/glasses-1.webp` },
//   { title: "Gift Items", iconSrc: `${foldername}/gift.webp` },
//   { title: "Footwear", iconSrc: `${foldername}/footwear.webp` },
//   { title: "Chemicals", iconSrc: `${foldername}/chemicles.webp` },
//   { title: "Books", iconSrc: `${foldername}/books.webp` },
//   { title: "Bike And Car", iconSrc: `${foldername}/bike.webp` },
//   { title: "B2B Equipments", iconSrc: `${foldername}/b2b.webp` },
// ];

// <Categoriesinside categories={categories} />