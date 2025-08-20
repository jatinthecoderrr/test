import React from "react";

const allLogos = [
    { name: "CSS", src: "/Logos/CSS.png" },
  { name: "HTML", src: "/Logos/HTML.png" },
  { name: "React JS", src: "/Logos/React JS.png" },
  { name: "JavaScript", src: "/Logos/JavaScript.png" },
  { name: "PHP", src: "/Logos/PHP.png" },
  { name: "Swift", src: "/Logos/Swift.png" },
  { name: "Cordova", src: "/Logos/Cordova.png" },
  { name: "TypeScript", src: "/Logos/TypeScript.png" },
  { name: "C#", src: "/Logos/CSharpe.png" },
  { name: "Codeigniter", src: "/Logos/Codeigniter.png" },
  { name: "Laravel", src: "/Logos/Laravel.png" },
  { name: "Kotlin", src: "/Logos/Kotlin.png" },
  { name: "Express JS", src: "/Logos/Express JS.png" },
  { name: "Tailwind CSS", src: "/Logos/Tailwind CSS.png" },
  { name: "Bootstrap", src: "/Logos/Bootstrap.png" },
  { name: "MATLAB", src: "/Logos/MATLAB.png" },
  { name: "Unity", src: "/Logos/Unity.png" },
  { name: "Electron", src: "/Logos/Electron.png" },
  { name: "SQLite", src: "/Logos/SQLite.png" },
  { name: "MongoDB", src: "/Logos/MongoDB.png" },
  { name: "Git", src: "/Logos/Git.png" },
  { name: "GitHub", src: "/Logos/GitHub.png" },
  { name: "Postman", src: "/Logos/Postman.png" },
  { name: "NODE JS", src: "/Logos/NODE JS.png" },
  { name: "VUE JS", src: "/Logos/VUE JS.png" },
  { name: "MySQL", src: "/Logos/mysql-original.png" }

];

const divideIntoRows = (array, numRows) => {
  const rows = Array.from({ length: numRows }, () => []);
  array.forEach((item, index) => {
    rows[index % numRows].push(item);
  });
  return rows;
};

export default function ScrollingTechStack() {
  const rows = divideIntoRows(allLogos, 4);

  return (
    <div className="w-full px-0 pb-5 md:pb-10 mt-0 mb-5 md:mb-15 space-y-3 bg-transparent">
      {rows.map((row, index) => (
        <div key={index} className="overflow-hidden whitespace-nowrap">
          <div
  className={`inline-flex gap-25 animate-marquee ${index % 2 !== 0 ? "reverse" : ""}`}
  style={{ "--marquee-duration": "9s" }} // Slow down here
>
  {[...row, ...row].map((logo, i) => (
    <div
      key={i}
      className="flex items-center gap-3 pl-0 pr-3 py-0.5 border-[2px] border-[#8a9ba7] rounded-full shadow min-w-max"
    >
      <img src={logo.src} alt={logo.name} className="h-10 w-10 bg-gray-200 rounded-full p-1.5" />
      <span className="text-base text-gray-700 font-semibold">{logo.name}</span>
    </div>
  ))}
</div>

        </div>
      ))}

      {/* Animation styles */}
      <style>{`
  .animate-marquee {
    animation: marquee var(--marquee-duration, 9s) linear infinite;
  }
  .animate-marquee.reverse {
    animation-direction: reverse;
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`}</style>

    </div>
  );
}
