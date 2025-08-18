import React, { useEffect, useState } from "react";

const Breadcrumb = ({ title }) => {
  const [bgImage, setBgImage] = useState(
    "https://geeknew.sonicboomx.com/wp-content/uploads/2025/04/page_bread.webp"
  );

  useEffect(() => {
    const updateImage = () => {
      setBgImage(
        window.innerWidth < 768
          ? "https://geeknew.sonicboomx.com/wp-content/uploads/2025/05/mob-bread.png"
          : "https://geeknew.sonicboomx.com/wp-content/uploads/2025/04/page_bread.webp"
      );
    };
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div
      className="relative -top-[35px] pt-[159px] pb-[100px] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-4xl font-bold text-black">{title}</h1>
    </div>
  );
};

export default Breadcrumb;
