import { Database, Users, Building2, ArrowRight } from "lucide-react";

const demos = [
  {
    title: "Easy ERP System",
    subtitle: "Complete business & inventory management",
    icon: Database,
    url: "https://easytechsolutions.xyz/easy_data/easy_erp/",
  },
  {
    title: "Easy CRM Software",
    subtitle: "Lead, client & sales management system",
    icon: Users,
    url: "https://easytechsolutions.xyz/easy_data/easy_lead_management/login.php",
  },
  {
    title: "Easy Rental / ERM",
    subtitle: "Rental property & asset management",
    icon: Building2,
    url: "https://easytechsolutions.xyz/easy_data/easy_rental_management/login.php",
  },
];

export default function ServiceErpDemo() {
  return (
    <section className="relative py-20 mt-4 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-10 text-gray-800">
          Live Software Demo
        </h3>

        {/* Demo Cards */}
        <div className="space-y-4">
          {demos.map((demo, i) => {
            const Icon = demo.icon;

            return (
              <a
                key={i}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between
                           overflow-hidden rounded-2xl border border-gray-200
                           px-6 py-5 transition-all duration-500"
              >
                {/* Sliding bg */}
                <span
                  className="absolute inset-0 bg-emerald-600
                             translate-x-[-100%] group-hover:translate-x-0
                             transition-transform duration-500"
                />

                {/* Left */}
                <div className="relative z-10 flex items-center gap-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl
                               bg-emerald-50 group-hover:bg-white/20 transition"
                  >
                    <Icon className="text-emerald-600 group-hover:text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 group-hover:text-white transition">
                      {demo.title}
                    </h4>
                    <p className="text-sm text-gray-500 group-hover:text-white/80 transition">
                      {demo.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className="relative z-10 text-gray-400 group-hover:text-white transition" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
