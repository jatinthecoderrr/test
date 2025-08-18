import React from "react";
import HeroSection from "../../components/HeroSection";
import Timeline from "../../components/Home/Work";
import Aboutus from "../../components/Home/Aboutus";
import FAQ from "../../components/Home/faq";
import "../../index.css";
import ContactSection from "../../components/Home/ContactSection";
import TrustedStatsSection from "../../components/Home/Trusted";
import StatsGrid from "../../components/Home/StatsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustedStatsSection />
      <StatsGrid counts={{ completed: 2000, support: "24/7", clients: 500 }} />
      <Timeline />
      <Aboutus />
      <FAQ />
      <ContactSection />
    </>
  );
};

export default Home;
