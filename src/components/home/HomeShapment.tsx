"use client";

import { motion } from "framer-motion";
import ShipImg from "@/assets/img/70.jpg";

export default function HomeShapment() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-end">

          {/* TEXT FROM BOTTOM */}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Better Ship Faster <br /> Avoid Unauthorized
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-lg">
              Every pleasure is to be welcomed and every pain avoided.
              Certain circumstances and owing to the claims welcomed
              and every pain avoided certain circumstances.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:gap-6 hover:shadow-xl"
            >
              Explore More →
            </a>
          </motion.div>

          {/* IMAGE FROM TOP */}
          <motion.div
            initial={{ y: -120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* soft background glow */}
            <div className="absolute -inset-6 bg-green-50 rounded-[40px] blur-2xl opacity-60" />

            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={ShipImg}
                alt="Shipment"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
