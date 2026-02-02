// Footer.tsx
import { Button } from "@/components/ui/button";
import { Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Logo from "../assets/img/logo/easy-logo.png";

export default function Footer() {
  const socialMedia = [
    { name: "Facebook", icon: Facebook, link: "#" },
    { name: "Twitter", icon: Twitter, link: "#" },
    { name: "Instagram", icon: Instagram, link: "#" },
    { name: "YouTube", icon: Youtube, link: "#" },
  ];

  // Footer columns with name + link
  const footerColumns = [
    {
      title: "Services",
      links: [
        { name: "Email Marketing", link: "#" },
        { name: "SEO", link: "#" },
        { name: "Business Strategy", link: "#" },
        { name: "Print Materials", link: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Story", link: "#" },
        { name: "Benefits", link: "#" },
        { name: "Team", link: "#" },
        { name: "Careers", link: "#" },
      ],
    },
    {
      title: "Navigation",
      links: [
        { name: "Email Marketing", link: "#" },
        { name: "Campaign", link: "#" },
        { name: "Branding", link: "#" },
        { name: "Offline", link: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "FAQs", link: "#" },
        { name: "Contact Us", link: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0f0f10] text-white">
      {/* CTA STRIP */}
      <div className="border-b border-white/10 px-6 lg:px-12 py-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        {/* Logo */}
        <img
          src={Logo}
          alt="Easy Tech"
          width={140}
          height={40}
          className="object-contain"
        />

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center md:text-left">
            Ready To Get Started
          </h2>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
            Get a Demo →
          </Button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* NEWSLETTER */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-semibold mb-3">Subscribe To Our Newsletter</h3>
          <p className="text-gray-400 text-sm">
            Stay updated with the latest news, offers, and insights from Easy Tech.
          </p>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-black rounded-l-md outline-none focus:ring-1 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 px-4 rounded-r-md flex items-center justify-center transition-transform duration-200 hover:scale-105">
              <Mail className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* FOOTER COLUMNS */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xl font-semibold mb-5">{col.title}</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {col.links.map(({ name, link }) => (
                  <li key={name}>
                    <a
                      href={link}
                      className="hover:text-green-500 cursor-pointer transition-colors duration-200"
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

      {/* BOTTOM STRIP */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex gap-4">
            {socialMedia.map(({ name, icon: Icon, link }) => (
              <a
                key={name}
                href={link}
                aria-label={name}
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/5 hover:bg-green-600 transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>

          <p className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Easy Tech | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
