"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import cs5 from "@/assets/img/cs5.jpg";
import cs8 from "@/assets/img/cs8.jpg";
import cs1 from "@/assets/img/cs1.jpg";
import cs6 from "@/assets/img/cs6.jpg";
import cln5 from "@/assets/img/cln5.jpg";
import cln6 from "@/assets/img/cln6.jpg";
import cs3 from "@/assets/img/cs3.jpg";
import cs2 from "@/assets/img/cs2.jpg";
import cs4 from "@/assets/img/cs4.jpg";
import cs7 from "@/assets/img/cs7.jpg";
import cs9 from "@/assets/img/cs9.jpg";
import cs11 from "@/assets/img/cs11.jpg";

export default function HomeProject() {
  const [active, setActive] = useState<number | null>(null);

  const projects = [
    cs5, cs8, cs1, cs6, cln5, cln6,
    cs3, cs2, cs4, cs7, cs9, cs11,
  ];

  return (
    <section className="py-28 bg-[#f7faf8] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h5 className="text-green-600 font-semibold uppercase tracking-widest mb-4">
            Consulting Projects
          </h5>
          <h2 className="text-5xl font-bold text-gray-900">
            Our Success Projects That Inspire
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
            className="flex gap-8 w-max"
          >
            {[...projects, ...projects].map((img, i) => (
              <motion.div
                key={i}
                layoutId={`card-${i}`}
                onClick={() => setActive(i)}
                className="group relative w-[320px] h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              >
                {/* Image */}
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Text */}
                <div className="absolute bottom-6 left-6 text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <p className="text-xs uppercase tracking-[3px]">
                    Our Happy Client
                  </p>
                  <h4 className="text-2xl font-semibold">
                    Successfully Completed
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* EXPAND MODAL */}
      <AnimatePresence>
        {active !== null && (
          <>
            {/* Blur BG */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            />

            {/* Expanded Card */}
            <motion.div
              layoutId={`card-${active}`}
              className="fixed z-50 inset-0 flex items-center justify-center p-10"
            >
              <motion.div className="relative w-full max-w-5xl h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={projects[active]}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Close */}
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-6 right-6 bg-white/90 px-4 py-2 rounded-full font-semibold"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
