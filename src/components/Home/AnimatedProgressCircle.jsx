import React, { useEffect, useState } from "react";

const AnimatedProgressCircle = ({ targetPercent = 100, label }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000; // ms
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = targetPercent / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetPercent) {
        start = targetPercent;
        clearInterval(timer);
      }
      setPercent(Math.round(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetPercent]);

  // SVG circle settings
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-[110px] h-[110px]">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="rotate-[-90deg] absolute top-0 left-0"
        >
          <circle
            stroke="#f97316"
            fill="transparent"
            width={stroke}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-black font-extrabold text-lg md:text-xl">
          {percent}%
        </div>
      </div>
      <h5 className="font-extrabold text-base md:text-lg">{label}</h5>
    </div>
  );
};

export default AnimatedProgressCircle;