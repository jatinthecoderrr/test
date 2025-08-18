import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full ">
          <Navbar />
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
