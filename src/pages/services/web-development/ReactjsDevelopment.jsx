import React from 'react'
import { Helmet } from "react-helmet";
import FeatureSectionRev from "../../../components/Services/ImageL_TickMarkR"
import BreadcrumbBanner from "../../../components/Services/BreadcrumbBanner"
const ReactjsDevelopment = () => {
  return (
    <>

      <Helmet>
        <title>Affordable Web Design | Geektheory - Website Development And Software Development Company - Make &lt;IT &gt; Different</title>
        <meta name="description" content="This is the about page description" />
      </Helmet>  
<BreadcrumbBanner 
        title="Progressive Web Apps" 
        backgroundImage="/page_bread.webp" 
      />

       <FeatureSectionRev
        subTitle="PHP"
        title="PHP Web Development"
        description1="Geektheory delivers high-quality web development services, with over 82.6% of all websites using PHP as their programming language. PHP powers more than 40 million websites worldwide. Our experienced web developers specialize in Laravel and CodeIgniter, and with over 11 years of expertise, we create scalable and efficient solutions for businesses."
         description2="Our redesign services refresh your brand and correct past design flaws for   ."
        features={[
          "82.6% Of All Websites Used PHP As Their Programming Language",
          "PHP Is Used By More Than 40 Million Websites",
          "Our Panel Of Web Developers Work With Laravel And codeigniter",
          "We Have More Than 11 Years Of Experience In PHP",
        ]}
        image={`/php-dev.webp`}
      />
      
       </>
  )
}

export default ReactjsDevelopment