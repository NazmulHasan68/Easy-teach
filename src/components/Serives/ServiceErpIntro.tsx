"use client";

import { motion } from "framer-motion";
import erpImg from "@/assets/img/res.jpg"; // use ERP related image

export default function ServiceErpIntro() {
  return (
    <section className="relative py-32 bg-[#f7faf8] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6  gap-24 items-center">
           {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={erpImg}
            alt="ERP Software"
            className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
          />

          {/* Experience badge */}
          <div className="absolute -bottom-8 right-8 bg-white shadow-2xl rounded-2xl px-8 py-6">
            <p className="text-emerald-600 text-sm font-semibold">
              5+ Years Experience
            </p>
            <h4 className="text-2xl font-bold text-gray-900">
              ERP Excellence
            </h4>
          </div>
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-emerald-600 font-semibold uppercase tracking-widest mb-4">
            ERP / CRM Solutions
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Smart ERP Software To Manage Your Entire Business
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            EasyTech Solutions provides powerful ERP and CRM systems designed to
            simplify operations, automate workflows, and centralize your business
            data. From inventory and accounts to HR, sales, and customer
            management — everything is connected in one smart platform.
          </p>

          {/* Feature list */}
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10">
            {[
              "Inventory, Sales & Purchase Management",
              "Accounts, HR & Payroll Automation",
              "CRM, Leads & Client Tracking",
              "Reports, Analytics & Role-based Access",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-3 h-3 mt-2 bg-emerald-500 rounded-full" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

     

      </div>
    </section>
  );
}
