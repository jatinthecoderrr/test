import React, { useEffect, useRef, useState } from "react";

const ScrollTimeline = ({ steps }) => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const stepElements = containerRef.current.querySelectorAll(".step-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    stepElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lineRef.current) {
      const percentage = ((activeStep + 1) / steps.length) * 100;
      lineRef.current.style.height = `${percentage}%`;
    }
  }, [activeStep, steps.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-20 px-4">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300">
        <div
          ref={lineRef}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-red-500 transition-all duration-1000 ease-in-out"
          style={{ height: "0%" }}
        />
      </div>

      <div ref={containerRef} className="relative flex flex-col gap-24">
        {steps.map((step, index) => {
          const isRight = index % 2 === 0;
          const isActive = index <= activeStep;

          return (
            <div
              key={index}
              data-index={index}
              className={`step-item relative flex items-center justify-between gap-12`}
            >
              {isRight ? (
                <>
                  <div className="w-5/12 bg-white rounded-xl shadow-md p-6 ml-auto">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  <div className="w-1/12 relative flex flex-col items-center">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-300
                      ${
                        isActive
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-white text-red-500 border-gray-300"
                      }`}
                    >
                      {step.icon || "⬤"}
                    </div>
                    <div className="absolute left-full mt-2 text-sm text-gray-500">
                      Step {index + 1}
                    </div>
                  </div>
                  <div className="w-5/12" />
                </>
              ) : (
                <>
                  <div className="w-5/12" />
                  <div className="w-1/12 relative flex flex-col items-center">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-300
                      ${
                        isActive
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-white text-red-500 border-gray-300"
                      }`}
                    >
                      {step.icon || "⬤"}
                    </div>
                    <div className="absolute right-full mt-2 text-sm text-gray-500 text-right">
                      Step {index + 1}
                    </div>
                  </div>
                  <div className="w-5/12 bg-white rounded-xl shadow-md p-6 mr-auto">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollTimeline;
