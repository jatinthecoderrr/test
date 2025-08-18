import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 w-[100%]  rounded-lg my-5 overflow-hidden transition-all duration-300 relative z-10">
      <button
        type="button" // prevents form submission
        onClick={onToggle}
        className="w-full px-5 py-4 text-left cursor-pointer bg-white hover:bg-gray-100 transition-colors flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-expanded={isOpen}
      >
        <div className="flex justify-items-start items-center gap-2">
          <MdKeyboardDoubleArrowDown className="text-[#D5430E] sm:size-[20px] md:size-[35px] " />
          <span className={`font-bold  text-xl bg-clip-text ${isOpen ? "text-transparent bg-gradient-to-r from-[#e62013] to-[#5e0d04]" : "text-gray-900"
            }`}>{title}</span>
        </div>
        <span
          className={`text-2xl px-[9px] rounded-4xl ${isOpen
              ? "bg-gradient-to-r from-[#e62013] to-[#5e0d04] text-white " // when open: red background, white text
              : "bg-[#d4d1da] text-[#6934E9]" // when closed: default style
            }`}
        >
          {isOpen ? "−" : "+"}
        </span>

      </button>

      <div
        className="transition-all duration-300 ease-in-out overflow-hidden bg-gray-50"
        style={{
          maxHeight: height,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="px-5 py-4 text-gray-700 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Accordion = ({ items, allowMultiple = true }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        const newOpen = new Set(prev);
        newOpen.has(index) ? newOpen.delete(index) : newOpen.add(index);
        return newOpen;
      } else {
        return prev.has(index) ? new Set() : new Set([index]);
      }
    });
  };

  return (
    <div className="w-full relative z-10 my-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  ); s
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  allowMultiple: PropTypes.bool,
};

export default Accordion;
