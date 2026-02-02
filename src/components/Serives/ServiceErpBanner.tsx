"use client";

import { motion } from "framer-motion";
import erpBanner from "@/assets/img/res.jpg"; // use ERP related image

export default function ServiceErpBanner() {
  return (
    <section
      className="relative h-[85vh] min-h-[620px] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${erpBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        {/* Breadcrumb */}
        <div className="inline-block mb-8 px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm tracking-widest uppercase">
          Home <span className="mx-2">/</span> ERP / CRM Solutions
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Powerful ERP Software <br /> To Control Your Entire Business
        </h1>

        {/* Description */}
        <p className="text-md md:text-xl text-gray-200 leading-relaxed">
          Manage inventory, accounts, HR, sales, customers, and reports in one
          centralized system. Our ERP & CRM solutions automate operations,
          improve productivity, and give you full control of your business data.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                       bg-emerald-600 hover:bg-emerald-700 transition font-semibold"
          >
            Request ERP Demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
