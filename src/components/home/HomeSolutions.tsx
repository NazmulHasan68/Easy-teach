"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import Solutions55 from "@/assets/img/55.jpg";
import Solutions56 from "@/assets/img/56.jpg";
import Solutions70 from "@/assets/img/70.jpg";

export default function HomeSolutions() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h5 className="text-green-600 font-semibold uppercase tracking-widest mb-4">
              Consulting Solutions
            </h5>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Skillset to Improve <br /> Your Company Brand
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-lg">
              Every pleasure is to be welcomed and every pain avoided.
            </p>

            {/* Small Images */}
            <div className="flex gap-6 mb-10">
              {[Solutions56, Solutions70].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden w-40 h-28 shadow-lg"
                >
                  <img
                    src={img}
                    alt="solution"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-7 py-3 rounded-full font-semibold transition-all"
            >
              Explore More →
            </motion.a>
          </motion.div>

          {/* RIGHT IMAGE + FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img
                src={Solutions55}
                alt="main-solution"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Floating Goals Card */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 bg-white rounded-3xl shadow-xl p-8 w-72"
            >
              <h5 className="text-gray-900 font-semibold mb-6">Goals</h5>

              {/* Goal 1 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  %
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900">
                    <CountUp end={64} duration={2} />%
                  </h4>
                  <p className="text-gray-500 text-sm">Cover Marketing</p>
                </div>
              </div>

              {/* Goal 2 */}
              <div className="flex items-center gap-4 bg-green-50 p-4 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center font-bold">
                  %
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900">
                    <CountUp end={94} duration={2} delay={0.3} />%
                  </h4>
                  <p className="text-gray-500 text-sm">SMS Marketing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
