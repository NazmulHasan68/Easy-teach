import { Link } from "react-router-dom";
import banner from "@/assets/img/pm.jpg"

export default function ProjectHero() {
  return (
    <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={banner}
        alt="Projects"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-up">
          Our Projects
        </h1>

        <div className="flex items-center justify-center gap-3 text-lg opacity-90 animate-fade-up delay-150">
          <Link
            to="/"
            className="hover:text-emerald-400 transition-colors duration-300"
          >
            Home
          </Link>
          <span className="opacity-60">/</span>
          <span className="text-emerald-400">Our Projects</span>
        </div>
      </div>
    </section>
  );
}
