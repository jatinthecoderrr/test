import React from "react";
// Category Card
const CategoryCard = ({ title, iconSrc }) => {
  return (
    <div className="bg-[#1e1e1e]/95 rounded-xl shadow-lg flex flex-col items-center justify-center text-center text-white font-semibold transition-transform duration-300 hover:scale-105 w-full h-40 sm:h-48 lg:h-52">
      <img
        src={iconSrc}
        alt={title}
        className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-3 object-contain"
      />
      <h3 className="text-sm sm:text-base lg:text-lg">{title}</h3>
    </div>
  );
};

// Categories Grid
const CategoriesGrid = ({ categories, foldername }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-10 sm:px-10">
      {/* Background */}
      <div
      />
      <div  />

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {categories.map((cat, idx) => (
          <CategoryCard key={idx} title={cat.title} iconSrc={cat.iconSrc} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesGrid;

//how to use 
// import CategoriesGrid

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

// <CategoriesGrid categories={categories} />
