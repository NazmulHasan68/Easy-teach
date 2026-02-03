// Footer.tsx
import { Button } from "@/components/ui/button";
import { Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo/easy-logo.png";

export default function Footer() {
  const navigate = useNavigate();

  const socialMedia = [
    { name: "Facebook", icon: Facebook, link: "#" },
    { name: "Twitter", icon: Twitter, link: "#" },
    { name: "Instagram", icon: Instagram, link: "#" },
    { name: "YouTube", icon: Youtube, link: "#" },
  ];

  const footerColumns = [
    {
      title: "Services",
      links: ["Email Marketing", "SEO", "Business Strategy", "Print Materials"],
    },
    {
      title: "About",
      links: ["Our Story", "Benefits", "Team", "Careers"],
    },
    {
      title: "Navigation",
      links: ["Campaign", "Branding", "Offline", "Contact"],
    },
    {
      title: "Help",
      links: ["FAQs", "Support"],
    },
  ];

  return (
    <footer className="bg-[#0c0f0d] text-white overflow-hidden">

      {/* ===== CTA HEADER ===== */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#122016] to-[#0c0f0d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4
                        flex  items-center justify-between gap-10">

          <div className="flex items-center gap-3 md:gap-6">
            <img src={Logo} alt="Easy Tech" className="w-28 md:w-36 object-contain" />
        
          </div>

          <Button
            onClick={() => navigate("/project")}
            className="bg-gradient-to-r from-[#2E602F] to-[#98BC62]
                       text-white px-8 md:px-10 py-3 md:py-4 rounded-full
                       text-lg shadow-2xl hover:scale-105 transition"
          >
            Get a Demo →
          </Button>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-5 gap-16">

        {/* Newsletter */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-semibold">Subscribe to our newsletter</h3>
          <p className="text-gray-400 text-sm max-w-md">
            Get the latest insights, strategies, and offers directly in your inbox.
          </p>

          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-md bg-white text-black outline-none"
            />
            <button className="bg-[#2E602F] px-5 rounded-r-md flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-lg font-semibold mb-6">{col.title}</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {col.links.map((name) => (
                  <li key={name}>
                    <a
                      href="#"
                      className="hover:text-[#98BC62] transition"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BOTTOM STRIP ===== */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8
                        flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Social */}
          <div className="flex gap-4">
            {socialMedia.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="w-10 h-10 rounded-md bg-white/5
                           flex items-center justify-center
                           hover:bg-[#2E602F] transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Easy Tech — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
