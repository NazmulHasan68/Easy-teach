"use client";

import { motion } from "framer-motion";
import image from "@/assets/img/seo.jpg"; // use a marketing related image

export default function ServiceDigitalBanner() {
  return (
    <section
      className="relative h-[85vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        {/* Breadcrumb */}
        <div className="inline-block mb-8 px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm tracking-widest uppercase">
          Home <span className="mx-2">/</span> Digital Marketing
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Digital Marketing That <br /> Brings Real Customers
        </h1>

        {/* Description */}
        <p className="text-md md:text-xl text-gray-200 leading-relaxed">
          We help businesses grow with powerful SEO strategies, targeted ads,
          social media campaigns, and data-driven marketing that turns visitors
          into loyal customers.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                       bg-emerald-600 hover:bg-emerald-700 transition font-semibold"
          >
            Get Free Marketing Plan
          </a>
        </div>
      </motion.div>
    </section>
  );
}
