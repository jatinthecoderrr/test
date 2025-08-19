// import React from "react";

// // Category Card Component
// const CategoryCard = ({ title, iconSrc }) => {
//   return (
//     <div className="bg-[#282828]/90 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center text-white font-medium transition-transform duration-300 hover:scale-105 aspect-square w-full max-w-[180px]">
//       <img
//         src={iconSrc}
//         alt={title}
//         className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-3 object-contain"
//       />
//       <h3 className="text-sm sm:text-base lg:text-lg">{title}</h3>
//     </div>
//   );
// };

// // Categories Grid with Background Image
// const CategoriesGrid = ({ categories, foldername }) => {
//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center justify-center px-6 py-10 sm:px-10"
//     >
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url('/t2-bg-img-1.webp')` }}
//       />

//       {/* Optional dark overlay for better readability */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Content */}
//       <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
//         {categories.map((cat, idx) => (
//           <CategoryCard key={idx} title={cat.title} iconSrc={cat.iconSrc} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesGrid;


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
