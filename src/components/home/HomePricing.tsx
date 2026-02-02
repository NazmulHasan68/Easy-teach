"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import img1 from "@/assets/img/cln.jpg"
import img2 from "@/assets/img/cln2.jpg"
import img3 from "@/assets/img/cln3.jpg"
import img4 from "@/assets/img/cln4.jpg"

const slides = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
];

// Premium easing curve (no TS error)
const ease = [0.22, 1, 0.36, 1] as const;

/* IMAGE — book page fold from top */
const imageVariants: Variants = {
  initial: {
    y: -160,
    rotateX: 40,
    opacity: 0,
    transformPerspective: 2000,
  },
  animate: {
    y: 0,
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.9, ease },
  },
  exit: {
    y: -160,
    rotateX: 40,
    opacity: 0,
    transition: { duration: 0.6, ease },
  },
};

/* TEXT — rise from bottom */
const textVariants: Variants = {
  initial: {
    y: 160,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.15, ease },
  },
  exit: {
    y: 160,
    opacity: 0,
    transition: { duration: 0.6, ease },
  },
};

export default function HomePricing() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="py-24 bg-[#f5f8f2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative h-[500px] rounded-[40px] overflow-hidden  bg-white border border-green-100">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="grid md:grid-cols-2 h-full"
            >
              {/* IMAGE */}
              <motion.div
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={slides[index].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* TEXT */}
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col justify-center p-14"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  We’ll Help You Get Started
                </h2>

                <p className="text-gray-600 mb-8">
                  Every pleasure is to be welcomed and every pain avoided.
                  Certain circumstances and owing to the claims welcomed.
                </p>

                <div className="flex items-end gap-6 mb-10">
                  <h3 className="text-5xl font-bold text-green-600">৳1500</h3>
                  <span className="text-gray-500 leading-tight">
                    Starting <br /> Price
                  </span>
                </div>

                <button className="bg-green-600 text-white px-8 py-4 rounded-full w-fit hover:bg-green-700 transition">
                  Explore More →
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
