// BreadcrumbBanner.jsx
import React from "react";

const BreadcrumbBanner = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 lg:py-40"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0"></div> {/* breadcrumb overlay */}
      <div className="relative container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-black font-extrabold text-4xl md:text-6xl lg:text-7xl mb-0">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbBanner;
