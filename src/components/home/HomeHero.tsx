"use client";

import { motion, useMotionValue } from "framer-motion";
import HeroMain from "../../assets/img/12.jpg";
import HeroCard from "../../assets/img/2hm2.jpg";
import idea from "../../assets/img/hero/_idea.png";

export default function HomeHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-300/20 blur-[150px] rounded-full" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-green-200/20 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center gap-16">
        
        <div className=" absolute -top-[5%] left-[25%]">
            <img src={idea} title="idea"/>
        </div>
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:w-1/2 space-y-8"
        >
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
            Digital Solutions
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            Building <br />
            <span className="text-green-600">A Better You</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">
            Innovative strategies and data-driven insights that showcase your
            agency’s expertise in digital marketing.
          </p>

          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="/about"
            className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
          >
            Explore More →
          </motion.a>
        </motion.div>

        {/* RIGHT VISUAL */}
        <div
          className="lg:w-1/2 relative h-[560px] flex items-center justify-center"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            mouseX.set((x - rect.width / 2) / 30);
            mouseY.set((y - rect.height / 2) / 30);
          }}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          {/* Soft plate behind */}
          <div className="absolute w-[85%] h-[85%] bg-gradient-to-br from-green-100 to-green-50 rounded-[50px] blur-2xl opacity-60" />

          {/* Back image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute w-[68%] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src={HeroMain} className="w-full h-full object-cover" />
          </motion.div>

          {/* Front image card with parallax + float */}
          <motion.div
            style={{ x: mouseX, y: mouseY }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative z-10 w-[58%] rounded-3xl overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.25)]"
          >
            <motion.img
              src={HeroCard}
              className="w-full h-full object-cover"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -right-6 top-14 bg-white rounded-xl shadow-xl p-4 w-40"
          >
            <p className="text-sm text-gray-500">Profile Views</p>
            <h4 className="text-2xl font-bold text-gray-900">45M+</h4>
          </motion.div>

          {/* Floating growth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-8 left-10 bg-white rounded-xl shadow-xl p-4 w-44"
          >
            <p className="text-sm text-gray-500">Growth</p>
            <div className="h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-md mt-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
