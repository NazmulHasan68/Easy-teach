"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Megaphone,
  Lightbulb,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    title: "Process Development",
    text: "With over a decade of experience, we refine workflows to deliver consistent and scalable digital solutions.",
    icon: Settings,
  },
  {
    title: "Digital Marketing",
    text: "We integrate SEO strategies and marketing intelligence directly into development for maximum reach.",
    icon: Megaphone,
  },
  {
    title: "Strategy",
    text: "Before writing a single line of code, we strategize to align your digital presence with business goals.",
    icon: Lightbulb,
  },
  {
    title: "Website Design",
    text: "We craft modern, user-friendly interfaces that provide seamless experiences across all devices.",
    icon: MonitorSmartphone,
  },
];

export default function AboutFeatures() {
  return (
    <section className="relative py-8 bg-[#f7faf8] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h5 className="text-green-600 font-semibold uppercase tracking-widest mb-3">
            Our Strength
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Makes Us Different
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative flex gap-6 p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 to-green-200/40 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6 group-hover:scale-110 transition">
                  <Icon size={28} />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    {f.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {f.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
