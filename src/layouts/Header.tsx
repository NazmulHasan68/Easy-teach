"use client";

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/img/logo/easy-logo.png";

interface NavItem {
  name: string;
  path?: string;
  dropdown?: { name: string; path: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    dropdown: [
      { name: "Web Development", path: "/services/web" },
      { name: "Digital Marketing", path: "/services/marketing" },
      { name: "ERP / CRM", path: "/services/erp" },
    ],
  },
  {
    name: "Pages",
    dropdown: [
      { name: "Project", path: "/project" },
      { name: "About", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "Our Client", path: "/our-client" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-36 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 font-medium text-[#98BC62] hover:text-[#2E602F] transition">
                  {item.name}
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-10 left-0 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 min-w-[200px]"
                    >
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 rounded-md text-[#0d240d] hover:bg-[#98BC62]/10 hover:text-[#2E602F] transition"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path!}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-[#516632] border-b-2 border-[#7a974a] pb-1"
                      : "text-[#98BC62] hover:text-[#153016]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 bg-[#2E602F] text-white rounded-md"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <img src={Logo} className="w-32" />
              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="flex flex-col">
                    <p className="font-semibold text-[#98BC62] mb-2">
                      {item.name}
                    </p>
                    {item.dropdown.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileOpen(false)}
                        className="pl-3 py-2 text-[#98BC62] hover:text-[#2E602F]"
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.path!}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 font-medium text-[#98BC62] hover:text-[#2E602F]"
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
