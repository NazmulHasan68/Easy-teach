"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import serices1 from "@/assets/img/services/s1-icon-1.png";
import serices2 from "@/assets/img/services/s1-icon-2.png";
import serices3 from "@/assets/img/services/s1-icon-3.png";
import { useCountUp } from "@/hooks/useCountUp";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable and high-performance websites for your business.",
    items: ["e-Commerce Website", "Portfolio Website", "Custom Website"],
    icon: serices1,
  },
  {
    title: "Digital Marketing",
    desc: "Growth focused marketing strategies that convert visitors to clients.",
    items: [
      "Social Media Marketing",
      "Instagram Marketing",
      "Facebook Marketing",
    ],
    icon: serices2,
  },
  {
    title: "ERP / CRM Solutions",
    desc: "Powerful business automation systems for teams and organizations.",
    items: ["Agency CRM", "Real Estate CRM", "ERP Software"],
    icon: serices3,
  },
];



export default function HomeServices() {
  return (
    <section className="py-20 bg-[#e2f1e8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h5 className="text-green-600 font-semibold uppercase tracking-widest">
            What We Provide
          </h5>
          <h2 className="text-5xl font-bold text-gray-900 mt-2">
            Our Services
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            We build digital experiences that help brands grow and automate.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative rounded-3xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-700"
            >
              {/* Animated Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-green-600 
              translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />

              {/* Card Content */}
              <div className="relative bg-white group-hover:bg-transparent transition-colors duration-700 p-10 h-full">

                {/* Icon */}
                <div className="w-14 h-14 mb-8">
                  <img src={service.icon} alt="" className="w-full h-full" />
                </div>

                {/* Title */}
                <h4 className="text-2xl font-semibold text-gray-900 group-hover:text-white transition">
                  {service.title}
                </h4>

                {/* Desc */}
                <p className="text-gray-600 mt-3 mb-6 group-hover:text-white/90 transition">
                  {service.desc}
                </p>

                {/* List */}
                <ul className="space-y-2 mb-8 text-sm">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-700 group-hover:text-white/90 transition"
                    >
                      <span className="w-2 h-2 bg-green-600 group-hover:bg-white rounded-full transition" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 font-semibold text-green-600 group-hover:text-white transition-all">
                  Learn More <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counter Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="md:mt-16 mt-8 bg-white rounded-[40px] shadow-xl py-10 px-6 grid grid-cols-3 gap-10 text-center"
        >
          {[
            { end: 1000, label: "Trusted Users", suffix: "+" },
            { end: 800, label: "Positive Reviews", suffix: "+" },
            { end: 98, label: "Reply Rate", suffix: "%" },
          ].map((item, i) => {
            const { count, ref } = useCountUp(item.end);

            return (
              <div key={i} ref={ref} className="space-y-2">
                <h3 className="md:text-5xl text-2xl font-bold text-green-600 tracking-tight">
                  {count}
                  {item.suffix}
                </h3>
                <p className="text-gray-500 text-xs md:text-lg">{item.label}</p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
