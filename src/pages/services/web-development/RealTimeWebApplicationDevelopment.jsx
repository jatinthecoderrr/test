import React from 'react'
import { Helmet } from "react-helmet";
import BreadcrumbBanner from "../../../components/Services/BreadcrumbBanner";
import ServicesSection from "../../../components/Services/CenterText_ReadMore"
import SectionHeader from '../../../components/Services/Animated_SectionHeader';
import Accordion from '../../../components/Services/accordion';
import ImageTextSectionRev from "../../../components/imageR_TextL"
import ImageTextSection from "../../../components/imageL_TextR"

const RealTimeWebApplicationDevelopment = () => {
const foldername = "Real Time Web Application Development"
  const myServices = [
  {
    title: "Instant Publishing Challenges",
    description:
      "Real-time web app features enable instant publishing, faster actions, and up-to-date data for better user experience.",
    image: `${foldername}/web-hosting.webp`,
    link: "",
  },
  {
    title: "Video/Audio Communication",
    description:
      "Real-time web app development lets users watch live updates on the screen, encouraging extensive use and providing an engaging experience.",
   image: `${foldername}/meeting-software.webp`,
    link: "",
  },
  {
    title: "Messaging / Alert Messages",
    description:
      "Real-time web app development helps send prompt alerts to users, enabling them to control situations effectively and stay informed in real time.",
   image: `${foldername}/chatapp.webp`,
    link: "",
  },
];
  const items = [
    {
      id: 1,
      title: "Social Media",
      content:
        "The social media sites helps in publishing the posts and comments immediately. Be it any social media network, it works better with real time web app."
    },
    {
      id: 2,
      title: "Video/Audio Manipulation",
      content:
        "This helps the browsers to run like other real time app. It has various other usage which is being utilized by different companies and users for their varied needs.",
    },
    {
      id: 3,
      title: "Internet of Things",
      content:
        "With time, the use of internet-based devices has increased to a great extent. This enables interaction in real time app development. With real time application such as IOT, you will be able to show the recent information from one device to another.",
    },
    {
      id: 4,
      title: "Corporate Communication",
      content:
        "Corporate websites have different requirements and this technology helps in fulfilling the requirement. It will help the team members to communicate with each other with the help of audio.",
    },
    {
      id: 5,
      title: "Education And Telemedicine",
      content:
        "The use of real time web app development is beneficial for this sector, too. With the introduction of information technology, the field of healthcare and education has taken a better form.",
    },

  ];

  return (
    <>
      <Helmet>
        <title>Real Time Web Application Development | Geektheory - Website Development And Software Development Company - Make &lt;IT &gt; Different</title>
        <meta name="description" content="This is the about page description" />
      </Helmet>

     <BreadcrumbBanner 
        title="Progressive Web Apps" 
        backgroundImage="/page_bread.webp" 
      />
    
    <ServicesSection
      subTitle="Real Time"
      titleWords="Real Time Web Applications Development"
      description="Real-time web applications are reshaping how businesses operate by delivering instant information and enhanced user engagement—especially on mobile. With rising mobile traffic, businesses can now use real-time web apps to eliminate the need for standalone mobile apps. Geektheory, based in Chennai, offers custom real-time solutions for startups to enterprises, helping them harness this technology for success."
      services={myServices}
    />

       {/* Beginning with Redesign */}
      <section
        className="w-full py-10 px-4 sm:py-10 sm:px-6 md:py-16 md:px-6  "
        style={{
          backgroundImage: "", // set background image if needed
          backgroundColor: "", // fallback color
        }}
      >
        <div className="max-w-[1300px] mx-auto  grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-5">
          {/* Left:  */}
          <SectionHeader
            subTitle="PHP"
            titleWords="PHP Web Experts"
            description=" RedeGeektheory is a top web and PHP development company in Chennai with years of experience. We've served many satisfied clients with tailored solutions. Our expert team collaborates to find the best ideas, using PHP’s full potential to suit each unique project. While PHP is open source, our developers understand its depth and apply it effectively for high-quality results."
            text_align="text-left"
            justify="justify-left"

          />
          {/* accordian right */}
          <Accordion items={items} allowMultiple={false} />
        </div>
      </section>

      <ImageTextSectionRev
        imageSrc={`${foldername}/mob-app.webp`}
        title="Make Plans to Initialize"
        subtitle="Plans"
        description="To ensure a smooth redesign process, it's essential to plan ahead and have a clear vision for the final outcome. Start with a thorough analysis of your website and create a detailed sitemap, outlining the pages and content. This will help you stay focused and avoid distractions throughout the redesign."
        description2="Cross-browser testing is key to verifying the effectiveness of the redesign. We ensure the new website functions seamlessly across different browsers and devices. Any issues identified will be promptly addressed, and we will continue working until the website is fully optimized and meets your expectations."
        animationClass="translate-y-40" // slide from right
        backgroundImage="/body-bg-2-scaled-1.jpg"
      />

       <ImageTextSection
        imageSrc={`${foldername}/socketio.webp`}
        title="socketio"
        subtitle="Socketio"
        description="Socket.IO allows real-time bi-directional communication which is event-based. This works on every browser, platform, and device focusing on speed and reliability. This is a substantial aspect of real time web app development since it serves as a library to similar application. We have been able to strengthen this aspect and have provided the customers with the right solution at the right time. Socket IO has two parts, the server side and the client side. The server side library runs on the Node JS while the client side server runs on regular browsers. Both of them has similar API."
        animationClass="translate-y-40" // slide from right
      
      />
    </>
  )
}

export default RealTimeWebApplicationDevelopment