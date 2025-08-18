import { useRef, useState, useEffect } from "react";
import Button from "../Button";
import Accordion from "./Accordion";
import { Triangle } from "lucide-react";
import TriangleBullet from "./TriangleBullet";
// import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const items = [
  {
    id: 1,
    title: "What services does Geek Theory offer?",
    content: (
      <p>
        "Geek Theory specializes in website development, software development,
        and ecommerce solutions. We create innovative, user-friendly websites
        and custom software that help businesses grow and achieve their goals."
      </p>
    ),
  },
  {
    id: 2,
    title: "How long does it take to complete a project?",
    content:
      "The timeline depends on complexity and scope. Small websites may take weeks, while large custom software can take months. We provide timelines after understanding your needs.",
  },
  {
    id: 3,
    title: "Can Geek Theory assist with ongoing maintenance and support?",
    content:
      "Yes, we offer full maintenance and support post-deployment, including regular updates, bug fixes, and performance optimization.",
  },
  {
    id: 4,
    title: "Do you provide customized software solutions for businesses?",
    content:
      "Absolutely! We specialize in building custom CRM, ERP, billing systems, and other enterprise tools tailored to your business operations.",
  },
  {
    id: 5,
    title: "What industries do you serve?",
    content:
      "We serve industries such as e-commerce, healthcare, finance, education, and more. Our solutions are designed for startups to enterprises.",
  },
];

export default function Faq() {
  return (
    <section className="bg-gradient-to-r from-[#fdf2e4]/50 via-[#fc2310]/25 to-[#dadef5]/75 w-full px-4 py-16 md:px-16 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          <h5 className="text-lg text-black flex gap-2 font-semibold">
            <TriangleBullet /> COMMON QUESTIONS
          </h5>
          <h2 className="text-4xl font-bold leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Explore answers to commonly asked questions, offering quick and
            clear solutions to address your queries effectively.
          </p>
          <Button title="Contact Us" />
        </div>

        {/* Right Section - Accordion */}
        <Accordion items={items} allowMultiple={true} />
      </div>
    </section>
  );
}
