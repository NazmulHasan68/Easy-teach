import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
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
                <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-green-600 transition">
                  {item.name}
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-3 min-w-[200px]"
                    >
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600"
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
                  `relative font-medium transition ${
                    isActive ? "text-green-600" : "text-gray-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-600"
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}

          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md">
            Get Started
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 bg-green-600 text-white rounded-md"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-72 h-full bg-white shadow-xl p-6 z-50 lg:hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <img src={Logo} className="w-32" />
              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name}>
                      <p className="font-semibold mb-2">{item.name}</p>
                      <div className="flex flex-col gap-2 pl-3">
                        {item.dropdown.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-600 hover:text-green-600"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path!}
                    onClick={() => setMobileOpen(false)}
                    className="font-medium text-gray-800 hover:text-green-600"
                  >
                    {item.name}
                  </NavLink>
                );
              })}

              <Button className="mt-4 bg-green-600 text-white">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
