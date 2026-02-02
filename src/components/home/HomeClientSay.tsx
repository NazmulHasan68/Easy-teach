"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import client1 from "@/assets/img/client1.jpeg";
import client2 from "@/assets/img/client2.jpeg";
import client3 from "@/assets/img/client3.jpeg";
import client4 from "@/assets/img/client4.jpeg";
import client5 from "@/assets/img/client5.jpeg";
import client6 from "@/assets/img/client6.jpeg";
import client7 from "@/assets/img/client7.jpeg";

const testimonials = [
  {
    img: client1,
    name: "Md. Mainul Hasan Dulon",
    role: "Founder & CEO, The Premium City LTD",
    text: "Hiring this digital agency was the best decision for our business. Their strategy, design skills, and execution were excellent. They’re not just developers — they’re partners who truly care about delivering long-term value and success.",
  },
  {
    img: client2,
    name: "MD Riyan Chowdhury",
    role: "Founder & CEO, Bashumoti Group",
    text: "We loved working with this team! They brought our ideas to life with precision, designed a beautiful interface, and provided smart marketing solutions. Their professionalism and communication stood out.",
  },
  {
    img: client3,
    name: "Riaz Hossain",
    role: "Co-founder, Miror Elegance & FashionLtd",
    text: "If you want results, this is the agency. They created a stunning website, developed our digital campaigns, and helped us grow online. The process was stress-free and the outcome was amazing.",
  },
  {
    img: client4,
    name: "Sakib Hasan Shishir",
    role: "Founder & CEO, Amrubazar BD",
    text: "From design to launch, they were detail-oriented and supportive. Their patience, creativity, and expert advice made a huge difference for our brand.",
  },
  {
    img: client5,
    name: "Shariar Bin Enam",
    role: "Co-founder, Bonoful & Co.",
    text: "Branding, development, and marketing — everything was handled professionally. Clear communication and impressive results.",
  },
  {
    img: client6,
    name: "Md Imtias Islam",
    role: "Founder & CEO, Farmer Care",
    text: "They redesigned our website and improved our digital strategy. We’ve seen better traffic, leads, and engagement since working with them.",
  },
  {
    img: client7,
    name: "MD Foridul Islam Tanvir",
    role: "Co-founder, Macherhat",
    text: "A game-changer for our business. They understood our goals and exceeded expectations with creativity and professionalism.",
  },
];

export default function HomeClientSay() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h5 className="text-green-600 font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </h5>
          <h2 className="text-5xl font-bold text-gray-900">
            What Our Clients Are Saying
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="pb-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#f7faf8] rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center">
                
                {/* Image */}
                <div className="w-40 h-40 md:w-56 md:h-56 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                  <img
                    src={item.img}
                    alt={item.name}
                
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    “{item.text}”
                  </p>

                  <h4 className="text-2xl font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <span className="text-green-600 font-medium">
                    {item.role}
                  </span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
