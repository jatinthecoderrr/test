import React, { useEffect, useRef, useState } from "react";
import { FaHeadset } from "react-icons/fa";
import {
  BsUiChecksGrid,
  BsFileCode,
  BsMenuButton,
  BsBarChartSteps,
  BsClipboardCheck,
} from "react-icons/bs";
import TriangleBullet from "./TriangleBullet"; // Assuming you have a TriangleBullet component
// Constants for scroll calculations
const START_POINT_FACTOR = 0.8;
const SCROLL_DISTANCE_OFFSET = -0.2; // Adjust this value based on your design
const ITEM_PROGRESS_STEP = 20; // Adjust this value based on your design
const ACTIVATION_THRESHOLD_MOBILE = 60;
const ACTIVATION_THRESHOLD_DESKTOP = 80;

const timelineData = [
  {
    id: 1,
    title: "REQUIREMENT GATHERING",
    description:
      "Our initial phase of web development involves acknowledging client needs and collecting as much of information in accordance with their business goals",
    icon: BsClipboardCheck,
  },
  {
    id: 2,
    title: "PLANNING",
    description:
      "We tailor our web design process to match client specs & business goals, ensuring effective delivery. Our implementation focuses on customized solutions for optimal results.",
    icon: BsBarChartSteps,
    category: "development",
    status: "completed",
  },
  {
    id: 3,
    title: "DESIGN",
    description:
      "We build wireframes from outlines, then collect info & align on strategy. Our creative process flows naturally, developing ideas that enhance your company’s brand identity.",
    icon: BsMenuButton,
    category: "rest",
    status: "in-progress",
  },
  {
    id: 4,
    title: "DEVELOPMENT",
    description:
      "After design approval, we build a prototype before moving to development. This critical phase transforms designs into code, creating web pages with data & images.",
    icon: BsFileCode,
    category: "iteration",
    status: "planned",
  },
  {
    id: 5,
    title: "TESTING",
    description:
      "We thoroughly test every aspect of the website during our web design service to ensure smooth, bug-free performance and optimal loading speeds.",
    icon: BsUiChecksGrid,
    category: "iteration",
    status: "planned",
  },
  {
    id: 6,
    title: "DELIVERY AND MAINTENANCE",
    description:
      "After testing, we deliver your website, ensuring it meets quality standards. We offer ongoing maintenance services to keep your site updated with any future changes needed.",
    icon: FaHeadset,
    category: "iteration",
    status: "planned",
  },
];

const getCategoryColor = (isActive) => {
  return isActive ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700";
};

const StyledPaper = ({
  children,
  className = "",
  isVisible = false,
  delay = 0,
  isLeft = true,
}) => {
  const paperStyle = { transitionDelay: `${delay}ms` };

  const paperClasses = `
    p-8 sm:py-4
    w-full max-w-[750px] sm:max-w-[950px] md:max-w-[1100px] lg:max-w-[1200px]
    mx-0
    rounded-2xl sm:rounded-3xl
    border 
    border-pink-100 
    bg-white
    backdrop-filter: blur(10px)
    backdrop-blur-sm
    transition-all 
    duration-700 
    ease-out
    shadow-lg
    shadow-red-500/10
    hover:border-red-300
    hover:shadow-2xl
    hover:shadow-red-500/20
    transform
    relative
    overflow-hidden
    ${
      isVisible
        ? "translate-y-0 translate-x-0 opacity-100 scale-100"
        : `${
            isLeft ? "-translate-x-4" : "translate-x-4"
          } translate-y-8 opacity-0 scale-95`
    }
    ${className}
  `;

  return (
    <div className={paperClasses} style={paperStyle}>
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl" />
      <div className="absolute -inset-1 bg-white rounded-2xl sm:rounded-3xl blur opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const TimelineItemComponent = ({
  item,
  index,
  isVisible,
  lineProgress,
  isMobile,
  isActive,
  iconRef,
}) => {
  const Icon = item.icon;
  const isLeft = !isMobile && index % 2 === 0;
  const itemProgress = Math.min(
    Math.max(
      (lineProgress - index * ITEM_PROGRESS_STEP) / ITEM_PROGRESS_STEP,
      0
    ),
    1
  );

  if (!Icon) {
    console.warn(`Icon for item ${item.title} is undefined`);
    return null;
  }

  if (isMobile) {
    return (
      <div className="flex items-start mb-10 relative">
        <div className="flex flex-col items-center relative z-10 mr-2 flex-shrink-0">
          <div
            ref={iconRef}
            className={`
              w-12 h-12  sm:w-14 sm:h-14
              rounded-full 
              flex items-center justify-center 
              shadow-lg 
              transform transition-all duration-500 
              hover:scale-110 
              relative z-20
              icon-container
              ${getCategoryColor(isActive)}
              ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}
            `}
            style={{
              transitionDelay: `${index * 1.5}ms`,
              transform: `scale(${isVisible ? 1 + itemProgress * 0.15 : 0.25})`,
            }}
          >
            <Icon
              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                isActive ? "text-white" : "text-gray-600"
              }`}
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <StyledPaper
            isVisible={isVisible}
            delay={index * 75}
            isLeft={isLeft}
            className="ml-0"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 pulse" />
              <h3 className="text-xl sm:text-[1.35rem] font-bold text-red-600 leading-tight">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700 text-base sm:text-[1.08rem] leading-relaxed ml-5">
              {item.description}
            </p>
          </StyledPaper>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center mb-12 relative ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className={`w-[46%] ${isLeft ? "pr-4" : "pl-4"} relative`}>
        {/* Triangle pointer */}
        <div
          className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${
            isLeft ? "-right-1 rotate-180" : "-left-1 rotate-360"
          }`}
          style={{ zIndex: 15 }}
        >
          <svg width="22" height="26" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,16 24,0 24,32" fill="#fff" stroke="" strokeWidth="1.5" />
          </svg>
        </div>
        <StyledPaper isVisible={isVisible} delay={index * 75} isLeft={isLeft} className={isLeft ? "mr-0" : "ml-0"}>
          <div
            className={`flex items-center gap-3 mb-4 ${
              isLeft ? "justify-end" : "justify-start"
            }`}
          >
            <h3
            className={`text-2xl sm:text-[1.5rem] font-bold text-black ${
              isLeft ? "text-right" : "text-left"
            }`}
            >
              {item.title}
            </h3>
          </div>
          <p
            className={`text-gray-700 text-lg sm:text-[1.08rem] leading-relaxed ${
              isLeft ? "text-right" : "text-left"
            }`}
          >
            {item.description}
          </p>
        </StyledPaper>
      </div>
      <div className="w-[8%] flex flex-col items-center relative z-10">
  {/* Step label */}
  <span
    className={`
      absolute top-1/2 -translate-y-1/2
      text-gray-500 text-base font-medium select-none
      ${index % 2 === 0 ? "-right-12 text-left" : "-left-12 text-right"}
    `}
    style={{ userSelect: 'none', whiteSpace: 'nowrap' }}
  >
    Step {index + 1}
  </span>

  {/* Step icon */}
  <div
    ref={iconRef}
    className={`
      w-12 h-12 lg:w-12 lg:h-12
      rounded-full 
      flex items-center justify-center 
      shadow-2xl 
      transform transition-all duration-500 
      hover:scale-110 
      relative z-20
      ring-4 ring-white
      icon-container
      ${getCategoryColor(isActive)}
      ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-99"}
    `}
    style={{
      transitionDelay: `${index * 125}ms`,
      transform: `scale(${isVisible ? 1 + itemProgress * 0.15 : 0.1})`,
      boxShadow: isVisible
        ? "0 20px 40px rgba(239, 68, 68, 0.3)"
        : "0 10px 20px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Icon
      className={`w-7 h-7 lg:w-5.5 lg:h-5.5 ${
        isActive ? "text-white" : "text-white"
      }`}
    />
  </div>
</div>

      <div className="w-[46%]" />
    </div>
  );
};

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItems, setActiveItems] = useState(new Set());
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const observerRef = useRef(null);
  const iconRefs = useRef(timelineData.map(() => React.createRef()));

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRef.current.offsetHeight;
      const startPoint = windowHeight * START_POINT_FACTOR;
      let progress = 0;

      if (timelineTop <= startPoint) {
        const scrolled = startPoint - timelineTop;
        const totalScrollDistance =
          timelineHeight - windowHeight * SCROLL_DISTANCE_OFFSET;
        progress = Math.min(scrolled / totalScrollDistance, 1);
      }
      const finalProgress = Math.min(progress * 100, 100);
      setScrollProgress(Math.max(0, finalProgress));

      const newActiveItems = new Set();
      iconRefs.current.forEach((iconRef, index) => {
        if (iconRef.current && timelineRef.current) {
          const iconRect = iconRef.current.getBoundingClientRect();
          const iconCenterY =
            iconRect.top - timelineRect.top + iconRect.height / 2;
          const lineCurrentY = (finalProgress / 100) * timelineRect.height;
          const activationThreshold = isMobile
            ? ACTIVATION_THRESHOLD_MOBILE
            : ACTIVATION_THRESHOLD_DESKTOP;
          const isFirstOrLast =
            index === 0 || index === timelineData.length - 1;
          const threshold = isFirstOrLast
            ? activationThreshold * 0.5
            : activationThreshold;
          if (lineCurrentY >= iconCenterY - threshold) {
            newActiveItems.add(index);
          }
        }
      });

      setActiveItems((prevActiveItems) => {
        const prevArray = Array.from(prevActiveItems);
        const newArray = Array.from(newActiveItems);
        if (
          prevArray.length !== newArray.length ||
          prevArray.some((item, idx) => item !== newArray[idx])
        ) {
          return newActiveItems;
        }
        return prevActiveItems;
      });
    };

    const throttledScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", throttledScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [isMobile]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.2,
        rootMargin: isMobile ? "50px" : "100px",
      }
    );

    iconRefs.current.forEach((iconRef) => {
      if (iconRef.current && observerRef.current) {
        observerRef.current.observe(iconRef.current);
      }
    });

    return () => observerRef.current?.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (
      iconRefs.current[0] &&
      iconRefs.current[timelineData.length - 1] &&
      timelineRef.current
    ) {
      const firstIconRect =
        iconRefs.current[0].current?.getBoundingClientRect();
      const lastIconRect =
        iconRefs.current[
          timelineData.length - 1
        ].current?.getBoundingClientRect();
      const timelineRect = timelineRef.current.getBoundingClientRect();
      if (firstIconRect && lastIconRect && timelineRect) {
        const firstItemY =
          firstIconRect.top - timelineRect.top + firstIconRect.height / 2;
        const lastItemY =
          lastIconRect.top - timelineRect.top + lastIconRect.height / 2;
        setTimelineLineHeight({
          height: Math.max(lastItemY - firstItemY, 0),
          top: firstItemY,
        });
      }
    }
  }, [visibleItems, isMobile]);

  const [timelineLineHeight, setTimelineLineHeight] = useState({
    height: 0,
    top: 0,
  });

  const timelineLineStyle = {
    height: `${timelineLineHeight.height}px`,
    top: `${timelineLineHeight.top}px`,
  };

  const progressLineStyle = {
    height: `${scrollProgress}%`,
    boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
  };

 

  return (
    <section
      className="bg-[url('/Bg2.png')] py-8 sm:py-5  px-4 overflow-hidden min-h-screen"
      aria-label="Project timeline"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12 sm:mb-20"
          role="heading"
          aria-level="2"
        >
          <div className="inline-block px-4 py-2 my-4">
            <div className="text-[13px] md:pt-5 sm:text-[16px] text-black font-extrabold md:text-[17px] leading-[16px] sm:leading-[17px]  uppercase tracking-wider flex items-center justify-start md:justify-center gap-2 font-urbanist pb-1 sm:pb-2">
      <TriangleBullet /> WORK PROCESS
      </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-black bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Our Work Process
          </h2>
        </div>
        <div className="relative" ref={timelineRef} role="list">
          <div
            className={`absolute ${
              isMobile
                ? "left-4 sm:left-6"
                : "left-1/2 transform -translate-x-1/2"
            } w-0.5 sm:w-1 bg-gray-200 z-0`}
            style={timelineLineStyle}
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-red-500 to-red-400 transition-all duration-100 ease-linear"
              style={progressLineStyle}
            />
          
          </div>
          <div className="relative  z-10">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                data-index={index}
                ref={iconRefs.current[index]}
                role="listitem"
              >
                <TimelineItemComponent
                  item={item}
                  index={index}
                  isVisible={visibleItems.has(index)}
                  lineProgress={scrollProgress}
                  isMobile={isMobile}
                  isActive={activeItems.has(index)}
                  iconRef={iconRefs.current[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
