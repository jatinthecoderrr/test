import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const TrustedStatsSection = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const countersRef = useRef([]);
  const progressBarRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);
  const [counts, setCounts] = useState({ traffic: 0 });

  // Observe section and trigger content animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisible(true);
          setTimeout(() => setBgVisible(true), 150); // delay for background fade-in
        } else {
          setContentVisible(false);
          setBgVisible(false);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Animate count and progress bar every time bg is visible
  useEffect(() => {
    if (bgVisible) {
      animateCount("traffic", 3.0, 15.4, 1000, true);
      if (progressBarRef.current) {
        progressBarRef.current.style.width = "80%";
      }
    } else {
      setCounts({ traffic: 0 });
      if (progressBarRef.current) {
        progressBarRef.current.style.width = "0%";
      }
    }
  }, [bgVisible]);

  const animateCount = (key, start, end, duration, isFloat = false) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = isFloat
        ? (start + (end - start) * progress).toFixed(1)
        : Math.floor(start + (end - start) * progress);
      setCounts((prev) => ({ ...prev, [key]: value }));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // return (
  // //   <section
  // //     ref={sectionRef}
  // //     className="px-4 py-0 flex justify-center items-center bg-transparent relative min-h-[260px]"
  // //     style={{ overflow: "visible" }}
  // //   >
  // //     {/* Content (always visible, animates in first) */}
  // //     <div
  // //       className={`w-full max-w-7xl px-4 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white z-10
  // //   transition-all duration-700
  // //       ${
  // //         contentVisible
  // //           ? "opacity-100 translate-y-0"
  // //           : "opacity-0 translate-y-8"
  // //       }
  // //       `}
  // //       style={{ position: "relative" }}
  // //     >
  // //       {/* Trusted By */}
  // //       <div className="text-center md:text-left flex-1 min-w-[200px]">
  // //         <h3 className="text-xl md:text-2xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-1">
  // //           Trusted By
  // //           <img
  // //             src="https://geektheory.tofutrips.com/wp-content/uploads/2023/12/t1-world-1.webp"
  // //             className="w-5 h-5 animate-spin"
  // //           />
  // //           <img
  // //             src="https://geektheory.tofutrips.com/wp-content/uploads/2023/12/t1-world-4.webp"
  // //             className="w-5 h-5 animate-spin"
  // //           />
  // //         </h3>
  // //         <h2 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-2">
  // //           800+ Business
  // //           <img
  // //             src="https://geektheory.tofutrips.com/wp-content/uploads/2023/12/t1-world-3.webp"
  // //             className="w-5 h-5 animate-spin"
  // //           />
  // //           <img
  // //             src="https://geektheory.tofutrips.com/wp-content/uploads/2023/12/t1-world-2.webp"
  // //             className="w-5 h-5 animate-spin"
  // //           />
  // //         </h2>
  // //       </div>
  // //       {/* Center Image */}
  // //       <div className="flex-1 min-w-[200px] max-w-[240px]">
  // //         <img
  // //           src="https://geektheory.tofutrips.com/wp-content/uploads/2025/01/banner-ele.webp"
  // //           alt="Group"
  // //           className="w-full h-auto object-cover grayscale rounded-tl-full rounded-bl-full rounded-tr-2xl rounded-br-2xl shadow-lg"
  // //         />
  // //       </div>
  // //       {/* Rating Box */}
  // //       <div className="flex-1 min-w-[180px] max-w-[220px] bg-white text-black rounded-2xl p-5 flex flex-col justify-between min-h-[170px]">
  // //         <div className="flex gap-1 text-yellow-400 text-lg mt-15 mb-2">
  // //           {[...Array(5)].map((_, i) => (
  // //             <FaStar key={i} />
  // //           ))}
  // //         </div>
  // //         <div className="w-10 h-[2px] bg-black mb-2" />
  // //         <h4 className="text-xl font-semibold">Rated 4.9/5</h4>
  // //       </div>
  // //       {/* Traffic Box */}
  // //       <div
  // //         className="rounded-tl-2xl rounded-br-full rounded-tr-full flex-1 min-w-[180px] max-w-[220px] bg-white text-black  p-5 flex flex-col justify-between min-h-[170px]"
  // //         ref={(el) => (countersRef.current[0] = el)}
  // //       >
  // //         <div>
  // //           <h4 className="text-lg font-bold">Monthly Traffic</h4>
  // //           <div className="w-10 h-[2px] bg-black my-2" />
  // //           <h3 className="text-3xl font-bold mb-2">{counts.traffic} K</h3>
  // //         </div>
  // //         <div>
  // //           <h5 className="text-sm font-semibold mb-1">Monthly Traffic</h5>
  // //           <div className=" w-40 bg-gray-300 h-2 rounded">
  // //             <div
  // //               ref={progressBarRef}
  // //               className="bg-[#e62013]  h-2 rounded transition-all duration-1000"
  // //               style={{ width: "0%" }}
  // //             ></div>
  // //           </div>
  // //         </div>
  // //       </div>
  // //     </div>
  // //     {/* Background pill (fades in after delay) */}
  // //     <div
  // //       ref={bgRef}
  // //       className={`absolute inset-0 w-full max-w-7xl mx-auto rounded-full bg-[#191918] transition-all duration-700
  // //   ${bgVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
  // // `}
  // //       style={{
  // //         zIndex: 0,
  // //         pointerEvents: "none",
  // //       }}
  // //     ></div>
  // //   </section>
  // );
  // ...existing code...
  return (
    <section
      ref={sectionRef}
      className="px-2 md:px-4 py-6 md:py-0 flex justify-center items-center bg-transparent relative min-h-[260px]"
      style={{ overflow: "visible" }}
    >
      {/* Content (always visible, animates in first) */}
      <div
        className={`w-full max-w-full md:max-w-7xl px-2 md:px-10 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-white z-10
    transition-all duration-700
        ${
          contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }
        `}
        style={{ position: "relative" }}
      >
        {/* Trusted By */}
        <div className="text-center md:text-left flex-1 min-w-[160px] md:min-w-[200px]">
          <h3 className="text-lg md:text-2xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-1">
            Trusted By
            <img
              src="https://geektheory.tofutrips.com/wp-content/uploads/2023/12/t1-world-1.webp"
              className="w-5 h-5 animate-spin"
            />
            <img
              src="https://geektheory.tofutrips.com/wp-content/uploads/2023/12/t1-world-4.webp"
              className="w-5 h-5 animate-spin"
            />
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center md:justify-start gap-2">
            800+ Business
            <img
              src="https://geektheory.tofutrips.com/wp-content/uploads/2023/12/t1-world-3.webp"
              className="w-5 h-5 animate-spin"
            />
            <img
              src="https://geektheory.tofutrips.com/wp-content/uploads/2023/12/t1-world-2.webp"
              className="w-5 h-5 animate-spin"
            />
          </h2>
        </div>
        {/* Center Image */}
        <div className="flex-1 min-w-[120px] md:min-w-[200px] max-w-[180px] md:max-w-[240px]">
          <img
            src="https://geektheory.tofutrips.com/wp-content/uploads/2025/01/banner-ele.webp"
            alt="Group"
            className="w-full h-auto object-cover grayscale rounded-tl-3xl md:rounded-tl-full rounded-bl-3xl md:rounded-bl-full rounded-tr-2xl rounded-br-2xl shadow-lg"
          />
        </div>
        {/* Rating Box */}
        <div className="flex-1 min-w-[120px] md:min-w-[180px] max-w-[160px] md:max-w-[220px] bg-white text-black rounded-2xl p-4 md:p-5 flex flex-col justify-between min-h-[120px] md:min-h-[170px]">
          <div className="flex gap-1 text-yellow-400 text-base md:text-lg mt-15 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div className="w-8 md:w-10 h-[2px] bg-black mb-2" />
          <h4 className="text-lg md:text-xl font-semibold">Rated 4.9/5</h4>
        </div>
        {/* Traffic Box */}
        <div
          className="rounded-tl-2xl rounded-br-3xl md:rounded-br-full rounded-tr-3xl md:rounded-tr-full flex-1 min-w-[120px] md:min-w-[180px] max-w-[160px] md:max-w-[220px] bg-white text-black p-4 md:p-5 flex flex-col justify-between min-h-[120px] md:min-h-[170px]"
          ref={(el) => (countersRef.current[0] = el)}
        >
          <div>
            <h4 className="text-base md:text-lg font-bold">Monthly Traffic</h4>
            <div className="w-8 md:w-10 h-[2px] bg-black my-2" />
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {counts.traffic} K
            </h3>
          </div>
          <div>
            <h5 className="text-xs md:text-sm font-semibold mb-1">
              Monthly Traffic
            </h5>
            <div className="w-28 md:w-40 bg-gray-300 h-2 rounded">
              <div
                ref={progressBarRef}
                className="bg-[#e62013] h-2 rounded transition-all duration-1000"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* Background pill (fades in after delay) */}
      <div
        ref={bgRef}
        className={`absolute inset-0 w-full max-w-full md:max-w-7xl mx-auto rounded-3xl md:rounded-full bg-[#191918] transition-all duration-700
    ${bgVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
  `}
        style={{
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>
    </section>
  );
  // ...existing code...
};

export default TrustedStatsSection;
