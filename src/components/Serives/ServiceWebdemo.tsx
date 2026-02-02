import { ExternalLink, Play } from "lucide-react";

const demos = [
  {
    title: "Easy Ecommerce",
    url: "https://easytechsolutions.xyz/easy_data/easy_commerce/",
  },
  {
    title: "Easy Multivendor",
    url: "https://easytechsolutions.xyz/easy_data/easy_multivendor/",
  },
  {
    title: "Easy ERP Dashboard",
    url: "https://easytechsolutions.xyz/easy_data/easy_erp/",
  },
];

export default function ServiceWebdemo() {
  return (
    <div className="bg-white rounded-3xl mt-4 shadow-xl p-8 border border-gray-100">
      {/* Title */}
      <h3 className="text-2xl font-bold mb-8">Live Demo</h3>

      {/* Demo List */}
      <div className="space-y-4">
        {demos.map((demo, i) => (
          <a
            key={i}
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between overflow-hidden
                       bg-gray-50 hover:bg-emerald-600
                       rounded-2xl px-6 py-5
                       transition-all duration-500"
          >
            {/* Left Icon */}
            <div className="flex items-center gap-4 z-10">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl
                           bg-white group-hover:bg-white/20
                           transition"
              >
                <ExternalLink className="w-5 h-5 text-emerald-600 group-hover:text-white" />
              </div>

              <span className="font-semibold text-gray-800 group-hover:text-white text-lg">
                {demo.title}
              </span>
            </div>

            {/* Right Icon */}
            <Play className="w-5 h-5 text-gray-500 group-hover:text-white z-10" />

            {/* Sliding background effect */}
            <span
              className="absolute inset-0 translate-x-[-100%] 
                         group-hover:translate-x-0
                         bg-emerald-600 transition-transform duration-500"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
