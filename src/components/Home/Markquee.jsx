import React from "react";

const allLogos = [
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "React JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "JAVA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Swift", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Cordova", src: "https://www.svgrepo.com/show/305716/apache-cordova.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Codeigniter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
  { name: "Laravel", src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
  { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Express JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Tailwind CSS", src: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "MATLAB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
  { name: "Unity", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
  { name: "Electron", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" },
  { name: "Cordova", src: "https://www.svgrepo.com/show/305716/apache-cordova.svg" },
  { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "NODE JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "VUE JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
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
  style={{ "--marquee-duration": "90s" }} // Slow down here
>
  {[...row, ...row].map((logo, i) => (
    <div
      key={i}
      className="flex items-center gap-3 pl-0 pr-3 py-0.5 border-[2px] border-[#8a9ba7] rounded-full shadow min-w-max"
    >
      <img src={logo.src} alt={logo.name} className="h-9 w-9 bg-gray-200 rounded-full p-1.5" />
      <span className="text-base text-gray-700 font-semibold">{logo.name}</span>
    </div>
  ))}
</div>

        </div>
      ))}

      {/* Animation styles */}
      <style>{`
  .animate-marquee {
    animation: marquee var(--marquee-duration, 90s) linear infinite;
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
