import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import OurServices from '../../components/Home/OurServices'
import ClientExperience from '../../components/Home/ClientExperience'
import TrustedPartnership from '../../components/Home/TrustedPartnership'
import Timeline from '../../components/Home/Work'
import Aboutus from '../../components/Home/Aboutus'
import FAQ from '../../components/Home/FAQ'
import PortfolioCarousel from '../../components/Home/OurPortfolio'
import ContactSection from '../../components/Home/ContactSection'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Geektheory - Website Development And Software Development Company - Make &lt;IT&gt; Different</title>
        <meta name="description" content="This is the about pages" />
      </Helmet>

      <HeroSection />

      <OurServices />
      <Timeline />
      <Aboutus />
      <PortfolioCarousel />
      <TrustedPartnership />
      <ClientExperience />
      <FAQ />
      <ContactSection />


    </>
  )
}

export default Home