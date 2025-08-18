import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules'; // ✅ Import FreeMode
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import SectionHeader from "./HeaderComponent"; // Adjust path if needed


const testimonials = [
    {
        name: "Swetha Swetha",
        role: "Billing Software",
        image:
            "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/swetha.webp",
        text:
            "We’ve been using Geek Theory’s billing software for over a year now, and it has truly transformed the way we manage our finances. The interface is intuitive, and it covers all aspects of invoicing and expense tracking. Our accounting processes are streamlined, and we’ve gained a new level of control over our financial data. Highly recommended!",
    },
    {
        name: "Surya Dhakar",
        role: "Website Development",
        image:
            "https://geeknew.sonicboomx.com/wp-content/uploads/2025/01/dhakar.png",
        text:
            "Bhupendra designed our 3 Dental office websites in the US. He did a fantastic job working with us and what we wanted... Geek Theory as a whole were very detailed and thorough. Any website we need next time we will be contacting them again. Highly Recommend them.",
    },
    {
        name: "Yuvi Priya",
        role: "Billing Software",
        image: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/01/Yuvi-Priya.png",
        text: "As a small business owner, finding the right billing software was crucial. I’m thrilled with the solution GEEK THEORY provided. It’s user-friendly, customizable, and fits perfectly with my brand. Generating invoices, tracking payments, and staying on top of my finances has never been easier. Thank you for simplifying my business operations!",
    },
    {
        name: "Sabitha Kathirvel",
        role: "CRM Software",
        image:
            "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/sabitha.webp",
        text:
            "Our search for the perfect CRM software ended with Geek theory. This platform has simplified our customer management processes, allowing us to focus on what matters most – building relationships. The software’s reporting and forecasting features have given us newfound visibility into our sales pipeline, enabling us to allocate resources strategically. The customer support team’s responsiveness is commendable, ensuring that. thank you so much geek theory",
    },
    {
        name: "Swetha Swetha",
        role: "Billing Software",
        image:
            "https://geeknew.sonicboomx.com/wp-content/uploads/2025/06/swetha.webp",
        text:
            "We’ve been using Geek Theory’s billing software for over a year now, and it has truly transformed the way we manage our finances. The interface is intuitive, and it covers all aspects of invoicing and expense tracking. Our accounting processes are streamlined, and we’ve gained a new level of control over our financial data. Highly recommended!",
    },
    {
        name: "Surya Dhakar",
        role: "Website Development",
        image:
            "https://geeknew.sonicboomx.com/wp-content/uploads/2025/01/dhakar.png",
        text:
            "Bhupendra designed our 3 Dental office websites in the US. He did a fantastic job working with us and what we wanted... Geek Theory as a whole were very detailed and thorough. Any website we need next time we will be contacting them again. Highly Recommend them.",
    },
    {
        name: "Yuvi Priya",
        role: "Billing Software",
        image: "https://geeknew.sonicboomx.com/wp-content/uploads/2025/01/Yuvi-Priya.png",
        text: "As a small business owner, finding the right billing software was crucial. I’m thrilled with the solution GEEK THEORY provided. It’s user-friendly, customizable, and fits perfectly with my brand. Generating invoices, tracking payments, and staying on top of my finances has never been easier. Thank you for simplifying my business operations!",
    }
];

const TestimonialCard = ({ name, role, image, text }) => (
    <div className="bg-white rounded-xl mb-14 shadow-md p-6 flex flex-col justify-between h-full w-full cursor-pointer">
        {/* Header */}
        <div className="flex justify-between items-start">
            <ul className="flex space-x-1 text-[#D5430E] ">
                {[...Array(5)].map((_, i) => (
                    <li key={i}>
                        <svg
                            className="w-5 h-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                    </li>
                ))}
            </ul>
            <div className="text-gray-400 text-2xl ">
                <i className="icon icon-quote"></i>
            </div>
        </div>

        {/* Content */}
        <div className="mt-4 text-left font-medium text-black text-base leading-relaxed">
            <p>{text}</p>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center">
            <img
                src={image}
                alt={name}
                className="w-14 h-14 rounded-full object-cover mr-4"
            />
            <div>
                <strong className="block text-gray-900 font-semibold">{name}</strong>
                <span className="text-sm text-gray-500">{role}</span>
                <br /><br />

            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#dbdff6]/50 via-[#f9ebf8] to-[#e4d9f2] md:py-14 text-left md:text-center overflow-hidden">
            {/* Background blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-200 via-white to-blue-200 rounded-full blur-3xl opacity-30 z-[-1]" />

            {/* Subtitle */}
            <SectionHeader
                subTitle="Testimonials"
                titleWords={["Client", "Experiences"]}
                description=" Discover what our clients have to say about their experiences with our
                services and the value we deliver."
            />

            {/* Swiper Testimonial Cards */}
            <div className="mt-10 w-full  px-4">

                <Swiper
                className="testimonial-swiper"
                    modules={[Pagination, FreeMode]} // 
                    spaceBetween={20}
                    slidesPerView={1.2}
                    freeMode={true} // 
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1.4 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2.5 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <style >{`
             /* Make dots round */
.testimonial-swiper .swiper-pagination-bullet {
  background-color: #000000; 
  opacity: 0.5;
  transition: all 0.3s ease;
  width: 8px;
  height: 8px;
}

/* Active dot is bigger and fully opaque */
.testimonial-swiper .swiper-pagination-bullet-active {
  width: 12px;
  height: 12px;
  opacity: 1;
  background-color: #d5430e;
}

             `}</style>
        </div>
    );
};

export default TestimonialsSection;
