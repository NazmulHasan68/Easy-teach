import { Link } from "react-router-dom";
import project1 from "@/assets/img/project 1.png";
import project2 from "@/assets/img/project 4.png";
import project3 from "@/assets/img/project 3.png";
import project4 from "@/assets/img/project 4.png";
import project5 from "@/assets/img/project 5.png";

const projects = [
  { id: "01", title: "Ecommerce Website", category: "Web Application", image: project1, link: "/project/ecommerce" },
  { id: "02", title: "CRM Software", category: "Web Application", image: project2, link: "/project/crm" },
  { id: "03", title: "Dvalley Coworking Website", category: "Web Application", image: project3, link: "/project/dvalley" },
  { id: "04", title: "Analytics Dashboard", category: "Marketing", image: project4, link: "/project/analytics" },
  { id: "05", title: "ERP Software", category: "Web Application", image: project5, link: "/project/erp" },
];

export default function ProjectView() {
  return (
    <section className="bg-neutral-100">
      {projects.map((project, index) => (
        <div key={project.id} className="h-screen relative">
          {/* Sticky Paper */}
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-[90%] h-[85vh] rounded-3xl overflow-hidden shadow-2xl group">
              
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Number */}
              <span className="absolute top-10 left-10 text-white text-7xl font-bold opacity-20">
                {project.id}
              </span>

              {/* Content */}
              <div className="absolute bottom-16 left-16 text-white max-w-xl">
                <p className="uppercase tracking-widest text-sm mb-3 opacity-80">
                  {project.category}
                </p>

                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  {project.title}
                </h2>

                <Link
                  to={project.link}
                  className="px-8 py-4 bg-emerald-600 rounded-full font-semibold hover:bg-emerald-700 transition"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
