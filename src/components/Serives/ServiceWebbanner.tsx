"use client";

import { motion } from "framer-motion";
import image from "@/assets/img/about.jpg";

export default function ServiceWebbanner() {
  return (
    <section
      className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
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
          Home <span className="mx-2">/</span> Web Application
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Web Development
        </h1>

      </motion.div>
    </section>
  );
}
