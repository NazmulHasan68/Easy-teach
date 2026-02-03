"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { erpProjects } from "../data/erpojectDeta";

export default function ServiceErpProject() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f7faf7] to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#184419] mb-4">
            Our ERP & CRM Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-md">
            Discover ERP solutions we’ve built to streamline business operations, optimize workflows, and increase productivity.
          </p>
        </div>

        {/* ERP Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {erpProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/services/erp/${project.id}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[120px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-[#638531] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {project.category}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="text-xl line-clamp-1 font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[#2E602F] font-medium">
                      View Details
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#98BC62]/10 flex items-center justify-center group-hover:bg-[#98BC62] transition">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
