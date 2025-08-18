import { FiArrowRight } from "react-icons/fi";

export default function Button({ title }) {
  return (
    <button className="relative flex items-center rounded-full overflow-hidden bg-[#141515] text-white group transition-all duration-500 ">
      <div className="absolute left-0 top-0 h-full bg-[#800000] rounded-full  rounded-tr-none transition-all duration-500 ease-in-out w-[78%] group-hover:w-full z-0 "></div>

      <div className="relative z-10 px-6 py-4 font-bold text-white transition-all duration-500">
        {title}
      </div>

      <div className="relative z-10 pr-4 py-4 transition-all duration-300 group-hover:-translate-x-2">
        <FiArrowRight className="text-gray-400 group-hover:text-white transition-all duration-300" />
      </div>
    </button>
  );
}
