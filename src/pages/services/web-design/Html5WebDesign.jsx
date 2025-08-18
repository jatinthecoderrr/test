import React from "react";
import ImageTextSection from "../../../components/imageL_TextR";
import ImageTextSectionReversed from "../../../components/imageR_TextL";
import { useState, useRef, useEffect } from "react";
import TriangleBullet from "../../../components/Home/TriangleBullet";
import { FaCheckCircle } from "react-icons/fa";
import CTASection from "../../../components/Animatedbox";
const Html5WebDesign = () => {
  const foldername = "/HTML5";
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [imgVisible, setImgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible(true);
          imgObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          textObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) imgObserver.observe(imgRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      imgObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);
  const features = [
    "Compatible with all modern browsers.",
    "Supports both desktop and mobile websites.",
    "Enables rich media content for top-tier designs.",
    "‘Canvas’ feature enhances interactive elements.",
    "Loads faster than older HTML versions.",
  ];

  const imgRef3 = useRef(null);
  const textRef3 = useRef(null);
  const [imgVisible3, setImgVisible3] = useState(false);
  const [textVisible3, setTextVisible3] = useState(false);
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible3(true);
          imgObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible3(true);
          textObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef3.current) imgObserver.observe(imgRef3.current);
    if (textRef3.current) textObserver.observe(textRef3.current);

    return () => {
      imgObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);

  const imgRef4 = useRef(null);
  const textRef4 = useRef(null);
  const [imgVisible4, setImgVisible4] = useState(false);
  const [textVisible4, setTextVisible4] = useState(false);
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible4(true);
          imgObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible4(true);
          textObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef4.current) imgObserver.observe(imgRef4.current);
    if (textRef4.current) textObserver.observe(textRef4.current);

    return () => {
      imgObserver.disconnect();
      textObserver.disconnect();
    };
  }, []);
  const wordpress = [
    "80% of HTML Web App Chrome Compatible",
    "77% of HTML Web App Firefox Compatible",
    "72% of HTML Web App Opera Compatible",
    "26% of HTML Web App IE Compatible",
  ];

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-32 lg:py-40"
        style={{
          backgroundImage: "url('/page_bread.webp')",
        }}
      >
        <div className="absolute inset-0"></div> {/* breadcrumb overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-black font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-0">
              HTML5 Web Design
            </h1>
          </div>
        </div>
      </div>
      {/* HTML5 Web Design Company in Chennai */}
      <section
        className="w-full py-10 sm:py-14 md:py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "", // set background image if needed
          backgroundColor: "white",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left: Image */}
          <div className="flex justify-center items-center">
            <div
              ref={imgRef3}
              className={`transition-transform duration-700 ease-out ${
                imgVisible3
                  ? "translate-y-0 translate-x-0 opacity-100"
                  : "translate-y-20 opacity-25"
              }`}
            >
              <img
                src={`${foldername}/html5.webp`} // change if needed
                alt="Sample Alt"
                className="rounded-3xl w-full h-48 sm:h-64 md:h-[450px] max-w-xs sm:max-w-sm md:max-w-md object-contain"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div
            ref={textRef3}
            className={`transition-all duration-700 ease-out ${
              textVisible3
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-left space-y-4">
              <h5
                className={`flex gap-3 text-base sm:text-lg md:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                  textVisible3
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <TriangleBullet /> <span>HTML 5</span>
              </h5>
              <h2
                className={`text-2xl sm:text-4xl md:text-[60px] not-italic normal-case font-extrabold leading-snug transition-all duration-700 delay-200 ${
                  textVisible3
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                HTML5 Web Design Company in Chennai
              </h2>
              <p
                className={`text-gray-700 text-base sm:text-lg md:text-[18px] not-italic normal-case font-normal leading-relaxed transition-all duration-700 delay-300 ${
                  textVisible3
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                As the best HTML5 web design company in Chennai, Geektheory
                creates structured, scalable, and secure websites for all
                devices. Our tech-savvy HTML5 solutions enhance user experience,
                ensuring easy maintenance and seamless API integration.
              </p>
              <p
                className={`text-gray-700 text-base sm:text-lg md:text-[18px] not-italic normal-case font-normal leading-relaxed transition-all duration-700 delay-300 ${
                  textVisible3
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                As the best HTML5 web design company in Chennai, Geektheory
                leverages HTML5 for cross-platform applications with great
                functionality. We transform data into responsive, user-friendly
                designs for all mobile devices.
              </p>

              {/* Button */}
              {/* <div className="pt-4">
                <Button title="Get Started" link="#" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Benefits of HTML5 Web Designing */}
      <section
        className="w-full py-10 sm:py-14 md:py-16 bg-[#f5f3f0]"
        style={{
          backgroundImage: "", // change if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "", // fallback color
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left: Text */}
          <div className="order-2 md:order-1" ref={textRef}>
            <div
              className={`text-left space-y-4 transition-all duration-700 ease-out ${
                textVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h5
                className={`flex gap-3 text-base sm:text-lg md:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <TriangleBullet /> <span>HTML 5</span>
              </h5>
              <h2
                className={`text-2xl sm:text-4xl md:text-[60px] not-italic normal-case font-extrabold leading-snug transition-all duration-700 delay-200 ${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Benefits of HTML5 Web Designing
              </h2>
              <p
                className={`text-gray-700 text-base sm:text-lg md:text-[18px] not-italic normal-case font-normal leading-relaxed transition-all duration-700 delay-300 ${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Geektheory , based in the Indian capital of Chennai, should be
                your obvious choice for any top HTML5 web designing company in
                Chennai activity. While there are numerous players in the field
                of web designing, Geektheory simply offers a lot more!.
              </p>
              <p
                className={`text-gray-700 leading-relaxed text-base sm:text-lg md:text-[18px] transition-all duration-700 delay-300 ${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              ></p>
              <div
                className={`${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <ul className="space-y-2 sm:space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="group flex items-start gap-2 text-gray-800 text-base cursor-pointer transition-all duration-300 hover:text-[#fc2512]"
                    >
                      <span className="text-black mt-1 transition-colors duration-300 group-hover:text-[#fc2512]">
                        <FaCheckCircle size={20} />
                      </span>
                      <span className="transition-colors text-[20px] duration-300 group-hover:text-black">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div
            id="img-col"
            className="flex justify-center items-center order-1 md:order-2"
          >
            <div
              ref={imgRef}
              className={`transition-all duration-700 ease-out transform ${
                imgVisible
                  ? "translate-y-0 translate-x-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="main-img d-block">
                <img
                  src={`${foldername}/benifit.webp`} // change if needed
                  alt="Service"
                  className="rounded-3xl w-full h-48 sm:h-64 md:h-[450px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Web Design Using HTML5 */}
      <section>
        <ImageTextSection
          imageSrc={`${foldername}/html5design.webp`}
          title="Web Design Using HTML5"
          subtitle="HTML 5"
          description="HTML5 is lean yet powerful language. New tags that are common for document structures offer browsers, authors, and the search engine more knowledge about the content. New form specifies addresses, dates, emails, and telephone numbers for facilitating more useful input and client-side validation. With our pixel perfect result and our on time delivery makes us one of the best HTML5 web design companies in Chennai."
          description2="Relying on our HTML5 developers will be the best option to get an effective and innovative design for your website. The competency of our experts to use HTML5 canvas drawing tool enables the designers to develop highly responsive website which will make your website have a dominant online presence. Geektheory offers the best HTML5 web design company in Chennai to our clients for leveraging the potential in various ways."
          animationClass="translate-y-40" // slide from right
          // bgImage="/body-bg-2-scaled-1.jpg"
        />
      </section>
      {/* Why us*/}
      <section>
        <ImageTextSectionReversed
          imageSrc={`${foldername}/Geek-logo_webp-e1745647573961.webp`}
          imageAlt="Brand Image"
          title="Why Geektheory"
          subtitle="Why Us"
          description="Geektheory is a top web design company in Chennai, known for delivering high-quality app solutions and expert HTML5 web design. Our skilled developers and designers follow a structured development process to create innovative, user-friendly websites."
          description2="We specialize in utilizing CSS3 and HTML5 to offer seamless mobile app development and an optimized user experience, ensuring your website stands out on all devices."
          animationClass="translate-y-40" // slide from right
          // extraImgClass="h-[800px]"
          backgroundImage="/body-bg-2-scaled-1.jpg"
        />
      </section>
      {/* Web App Compatibility */}
      <section
        className="w-full py-10 sm:py-14 md:py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "", // set background image if needed
          backgroundColor: "#f5f3f0", // fallback color
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left: Image */}
          <div className="flex justify-center items-center">
            <div
              ref={imgRef4}
              className={`transition-transform duration-700 ease-out ${
                imgVisible4
                  ? "translate-y-0 translate-x-0 opacity-100"
                  : "translate-y-20 opacity-25"
              }`}
            >
              <img
                src={`${foldername}/web-portal.webp`} // change if needed
                alt="Sample Alt"
                className="w-full h-40 sm:h-56 md:h-[400px] object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div
            ref={textRef4}
            className={`transition-all duration-700 ease-out ${
              textVisible4
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-left space-y-4">
              <h5
                className={`flex gap-3 text-base sm:text-lg md:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <TriangleBullet /> <span>Compatibility</span>
              </h5>
              <h2
                className={`text-2xl sm:text-4xl md:text-[60px] not-italic normal-case font-extrabold leading-snug transition-all duration-700 delay-200 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                HTML Web App Compatibility
              </h2>
              <p
                className={`text-gray-700 text-base sm:text-lg md:text-[18px] not-italic normal-case font-normal leading-relaxed transition-all duration-700 delay-300 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                HTML5 ensures modern browser compatibility, better content
                structure, and improved SEO. It helps build dynamic, responsive,
                and user-friendly websites.
                <br />
                <br />
                With over 9 years of experience, we are a leading HTML5 web
                design company in Chennai, specializing in building
                high-performance web applications. Our expertise ensures
                cross-browser accessibility, advanced functionality, and a
                superior user experience.
              </p>
              <div
                className={`${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <ul className="space-y-2 sm:space-y-3">
                  {wordpress.map((feature, index) => (
                    <li
                      key={index}
                      className="group flex items-start gap-2 text-gray-800 text-base cursor-pointer transition-all duration-300 hover:text-[#fc2512]"
                    >
                      <span className="text-black mt-1 transition-colors duration-300 group-hover:text-[#fc2512]">
                        <FaCheckCircle size={20} />
                      </span>
                      <span className="transition-colors text-[20px] duration-300 group-hover:text-black">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              {/* <div className="pt-4">
                <Button title="Get Started" link="#" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Interface of Mobile Application */}
      <section>
        <ImageTextSectionReversed
          imageSrc={`${foldername}/mobile.webp`}
          title="Interface of Mobile Application"
          subtitle="Mobile Application"
          description="We craft interactive mobile app interfaces using JavaScript frameworks like Ionic, AngularJS, and PolymerJS. Our team delivers tailored UI/UX solutions to meet client needs. As one of the top HTML5 web design companies in Chennai, we implement structured data to boost search rankings and have deep expertise in various HTML5 frameworks."
          description2="UI/UX design can be the difference between user dismay and user delight. This is the reason we have a team of experienced professionals who choose the pixels seriously. Behind every mobile app, there is a story about an amazing design. We have a design-first and build-second approach and this directs everything that we do."
          animationClass="translate-y-40" // slide from right
          // bgImage="/body-bg-2-scaled-1.jpg"
        />
      </section>
      {/* Interface of Web Application */}
      <section>
        <ImageTextSection
          imageSrc={`${foldername}/portal.webp`}
          title="Interface of Web Application"
          subtitle="Web Application"
          description="With more applications shifting to the web, UI design has become crucial for user experience. Web applications eliminate installation constraints and offer easy access. At Geektheory, we create unique HTML5 components to ensure your website is easily accessible to your target audience. Our experts optimize navigation to ensure customers can find what they need in two clicks."
          description2="Our creative professionals design interactive UI/UX elements to deliver exceptional results. We provide optimized code that ensures your application runs smoothly, unaffected by JavaScript or other frameworks. Geektheory is the best HTML5 web design company in Chennai, known for creating innovative websites with our expert team."
          animationClass="translate-y-40" // slide from right
          bgImage="/body-bg-2-scaled-1.jpg"
        />
      </section>
      {/* Wearable Device */}
      <section>
        <ImageTextSectionReversed
          imageSrc={`${foldername}/wearable.webp`}
          title="Interface of Wearable Device Application"
          subtitle="Wearable Device"
          description="Geektheory is a leading wearable application designing service in Chennai. We continue to be the pioneer in creating the best technical application combining functionality and world-class mobile experience. We ensure that the apps that we develop are flawlessly delivered and are customer-centric. We formulate the best wearable tech applications for our customers."
          description2="With innovative designs and satisfied clients, we stand out as the best HTML5 web design company in Chennai. Our skilled professionals ensure consistency, agility, and top-tier wearable app solutions to elevate your business."
          animationClass="translate-y-40" // slide from right
          // bgImage="/body-bg-2-scaled-1.jpg"
        />
      </section>
      {/* Animated Section */}
      <section>
        <CTASection
          subtitle="CONTACT US"
          title="Looking For A Web Development Company?"
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="https://geektheo.com/about/"
          backgroundImage="/bg.webp"
        />
      </section>
    </>
  );
};

export default Html5WebDesign;
