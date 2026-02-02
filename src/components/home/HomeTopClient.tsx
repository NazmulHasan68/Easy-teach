"use client";

import l1 from "@/assets/img/1.png";
import l2 from "@/assets/img/2.png";
import l3 from "@/assets/img/3.png";
import l4 from "@/assets/img/4.png";
import l5 from "@/assets/img/5.png";
import l6 from "@/assets/img/6.png";
import l7 from "@/assets/img/7.png";
import l8 from "@/assets/img/8.png";
import l9 from "@/assets/img/9.png";
import l10 from "@/assets/img/10.png";
import l11 from "@/assets/img/11.png";
import l12 from "@/assets/img/12.png";

const logos = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12];

export default function HomeTopClient() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#f8fbf9]">
      
      {/* 🔵 Animated Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-200 rounded-full blur-[140px] opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-300 rounded-full blur-[140px] opacity-40 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-lime-200 rounded-full blur-[140px] opacity-30 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold text-blue-600 mb-4">
            Our Top Clients
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every pleasure is to be welcomed and every pain avoided under certain circumstances.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl cursor-pointer bg-white/80 border border-white/40
                         rounded-3xl p-8 flex items-center justify-center
                         shadow-md hover:shadow-2xl hover:-translate-y-3
                         transition duration-500"
            >
              {/* soft inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="relative w-28 h-16">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-contain grayscale 
                             group-hover:grayscale-0 opacity-70 group-hover:opacity-100
                             transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
