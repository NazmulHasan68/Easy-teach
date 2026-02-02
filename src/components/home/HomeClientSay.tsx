"use client";

import { useEffect, useState } from "react";

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
    text:
      "Hiring this digital agency was the best decision for our business. Their strategy and execution were excellent.",
  },
  {
    img: client2,
    name: "MD Riyan Chowdhury",
    role: "Founder & CEO, Bashumoti Group",
    text:
      "They brought our ideas to life with precision and smart digital solutions.",
  },
  {
    img: client3,
    name: "Riaz Hossain",
    role: "Co-founder, Miror Elegance & FashionLtd",
    text:
      "The process was smooth, stress-free, and the result was outstanding.",
  },
  {
    img: client4,
    name: "Sakib Hasan Shishir",
    role: "Founder & CEO, Amrubazar BD",
    text:
      "Detail-oriented, creative, and very professional throughout the project.",
  },
  {
    img: client5,
    name: "Shariar Bin Enam",
    role: "Co-founder, Bonoful & Co.",
    text:
      "Branding, development, and marketing — everything handled perfectly.",
  },
  {
    img: client6,
    name: "Md Imtias Islam",
    role: "Founder & CEO, Farmer Care",
    text:
      "We saw clear improvement in traffic and engagement after working with them.",
  },
  {
    img: client7,
    name: "MD Foridul Islam Tanvir",
    role: "Co-founder, Macherhat",
    text:
      "They exceeded expectations with creativity and professionalism.",
  },
];

export default function HomeClientSay() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const item = testimonials[active];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h5 className="text-green-600 font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </h5>
          <h2 className="text-5xl font-bold text-gray-900">
            Meet Our Happy Clients
          </h2>
        </div>

        {/* Slider Card */}
        <div className="bg-[#f7faf8] rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center transition-all duration-700">
          {/* Image */}
          <div className="w-40 h-40 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
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

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                active === index
                  ? "bg-green-600 scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
