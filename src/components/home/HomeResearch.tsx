

import { motion } from "framer-motion";

import dgt from "@/assets/img/dgt.jpg";
import seo from "@/assets/img/seo.jpg";
import res from "@/assets/img/res.jpg";
import wb from "@/assets/img/wb.jpg";

import icon1 from "@/assets/img/research/r1-icon-1.png";
import icon2 from "@/assets/img/research/r1-icon-2.png";
import icon3 from "@/assets/img/research/r1-icon-3.png";
import icon4 from "@/assets/img/research/r1-icon-4.png";

const items = [
  { title: "Digital Marketing", img: dgt, icon: icon1 },
  { title: "SEO Optimization", img: seo, icon: icon2 },
  { title: "Product Research", img: res, icon: icon3 },
  { title: "Web Development", img: wb, icon: icon4 },
];

export default function HomeResearch() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#5fa62a] via-[#6dbd32] to-[#4d8f22] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-white mb-20"
        >
          <h5 className="uppercase tracking-widest font-semibold opacity-80 mb-4">
            Consulting Services
          </h5>
          <h2 className="text-5xl font-bold mb-6">Potential Research</h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Smart strategies and research that help your brand grow faster and
            perform better in the digital world.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Wrapper */}
              <div className="relative h-52 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Floating Icon */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center"
                >
                  <img src={item.icon} alt="" className="w-7 h-7" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Every pleasure is to be welcomed and every pain avoided in
                  business strategy.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
