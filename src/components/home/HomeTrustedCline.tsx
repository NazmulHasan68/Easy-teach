"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TrustedImg from "../../assets/img/56.jpg";

export default function HomeTrustedClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.section
      animate={{ backgroundColor: scrolled ? "#f5faf6" : "#ffffff" }}
      transition={{ duration: 0.6 }}
      className="py-28"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* TITLE */}
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-gray-900 mb-16"
        >
          Trusted by <span className="text-green-600">1000+ Businesses</span>
        </motion.h3>

        {/* CARD BAND */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.08)] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={TrustedImg}
                alt="Trusted"
                className="w-full h-[160px] object-cover"
              />
            </motion.div>

            {/* RATING */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
              <p className="text-gray-600 text-sm">
                Rated{" "}
                <span className="font-semibold text-gray-900">4.9/5</span> from
                over 600 reviews
              </p>
            </motion.div>

            {/* TRAFFIC */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm text-gray-500 uppercase mb-2">
                Monthly Traffic
              </h4>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                33.4k
              </h3>

              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-green-600"
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
