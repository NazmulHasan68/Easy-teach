"use client";

import { Link } from "react-router-dom"; // or next/link
import { ArrowRight } from "lucide-react";

const services = [
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "CRM / ERP Solutions", href: "/services/crm-erp" },
];

export default function AboutSidebar() {
  return (
    <aside className="p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
      
      <h4 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
        Services Category
      </h4>

      <ul className="space-y-4">
        {services.map((service, i) => (
          <li key={i}>
            <Link
              to={service.href}
              className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-gray-200 px-5 py-4"
            >
              {/* Sliding background */}
              <span className="absolute inset-0 bg-green-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

              {/* Text */}
              <span className="relative z-10 font-medium text-gray-800 group-hover:text-white transition">
                {service.name}
              </span>

              {/* Icon */}
              <ArrowRight
                size={18}
                className="relative z-10 text-green-600 group-hover:text-white transition"
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/contact"
        className="block text-center mt-10 bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition"
      >
        Contact Us
      </Link>
    </aside>
  );
}
