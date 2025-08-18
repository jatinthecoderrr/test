// import React from "react";

// const StatsGrid = ({ counts }) => {
//   return (
//     <div className="pb-8 mt-5 px-4 md:px-12">
//       <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/30 border-b border-l border-r border-black/70">
//         {/* Project Completed */}
//         <div className="flex flex-row items-center justify-center py-12 px-2 md:px-8">
//           <span className="text-6xl md:text-7xl font-extrabold mr-2">
//             {counts.completed}
//           </span>
//           <span className="text-4xl md:text-5xl font-extrabold mr-2">+</span>
//           <div className="flex flex-col text-left ml-2">
//             <span className="text-2xl md:text-3xl font-semibold leading-tight">
//               Project
//             </span>
//             <span className="text-2xl md:text-3xl font-semibold leading-tight">
//               Completed
//             </span>
//           </div>
//         </div>

//         {/* Expert Support */}
//         <div className="flex flex-row items-center justify-center py-12 px-2 md:px-8">
//           <span className="text-6xl md:text-7xl font-extrabold mr-2">
//             {counts.support}
//           </span>
//           <div className="flex flex-col text-left ml-2">
//             <span className="text-2xl md:text-3xl font-semibold leading-tight">
//               Expert
//             </span>
//             <span className="text-2xl md:text-3xl font-semibold leading-tight">
//               Support
//             </span>
//           </div>
//         </div>

//         {/* Clients Worldwide */}
//         <div className="flex flex-row items-center justify-center py-12 px-2 md:px-8">
//           <span className="text-6xl md:text-7xl font-extrabold mr-2">
//             {counts.clients}
//           </span>
//           <span className="text-4xl md:text-5xl font-extrabold mr-2">+</span>
//           <div className="flex flex-col text-left ml-2">
//             <span className="text-2xl md:text-3xl font-semibold leading-tight">
//               Client
//             </span>
//             <span className="text-2xl md:text-3xl font-semibold leading-tight">
//               Worldwide
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsGrid;
import React, { useState } from "react";
import CountUp from "react-countup";

const StatsGrid = ({ counts }) => {
  const [showK, setShowK] = useState(false);

  return (
    <div className="pb-8 mt-5 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/30 border-b border-l border-r border-black/70">
        {/* Project Completed */}
        <div className="flex flex-row items-center justify-center py-12 px-2 md:px-8">
          <span className="text-6xl md:text-7xl font-extrabold mr-2">
            {showK ? (
              "2k"
            ) : (
              <CountUp
                end={counts.completed}
                duration={10}
                onEnd={() => setShowK(true)}
              />
            )}
          </span>
          <span className="text-4xl md:text-5xl font-extrabold mr-2">+</span>
          <div className="flex flex-col text-left ml-2">
            <span className="text-2xl md:text-3xl font-semibold leading-tight">
              Project
            </span>
            <span className="text-2xl md:text-3xl font-semibold leading-tight">
              Completed
            </span>
          </div>
        </div>

        {/* Expert Support */}
        <div className="flex flex-row items-center justify-center py-12 px-2 md:px-8">
          <span className="text-6xl md:text-7xl font-extrabold mr-2">
            {counts.support}
          </span>
          <div className="flex flex-col text-left ml-2">
            <span className="text-2xl md:text-3xl font-semibold leading-tight">
              Expert
            </span>
            <span className="text-2xl md:text-3xl font-semibold leading-tight">
              Support
            </span>
          </div>
        </div>

        {/* Clients Worldwide */}
        <div className="flex flex-row items-center justify-center py-12 px-2 md:px-8">
          <span className="text-6xl md:text-7xl font-extrabold mr-2">
            <CountUp end={counts.clients} duration={10} />
          </span>
          <span className="text-4xl md:text-5xl font-extrabold mr-2">+</span>
          <div className="flex flex-col text-left ml-2">
            <span className="text-2xl md:text-3xl font-semibold leading-tight">
              Client
            </span>
            <span className="text-2xl md:text-3xl font-semibold leading-tight">
              Worldwide
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
