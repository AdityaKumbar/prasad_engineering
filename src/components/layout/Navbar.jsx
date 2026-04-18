import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const aboutLinks = [
  { label: "About Company",     to: "/about/company" },
  { label: "Founders & Leadership", to: "/about/founders" },
  { label: "Certifications",    to: "/about/certifications" },
];

const serviceLinks = [
  { label: "Aluminium Casting",        to: "/services/aluminium-casting" },
  { label: "Rubber Industry Services", to: "/services/rubber" },
];

const navItems = [
  { label: "Home",       to: "/" },
  { label: "About",      dropdown: aboutLinks },
  { label: "Why Us",     to: "/why-us" },
  { label: "Industries", to: "/industries" },
  { label: "Services",   dropdown: serviceLinks },
  { label: "Contact",    to: "/contact" },
];

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 mt-2 w-72 rounded-xl overflow-hidden z-[110]
                     border border-slate-700 bg-surface-2 shadow-2xl shadow-black/60"
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "block px-4 py-3.5 text-[15px] leading-none font-medium transition-colors duration-150",
                  "border-b border-slate-700 last:border-b-0",
                  "hover:bg-surface-3 hover:text-white",
                  isActive ? "text-brand-300 bg-brand-500/15" : "text-slate-100"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  /* scroll effect */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* close on route change */
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  /* close dropdown on outside click */
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[100] transition-all duration-300",
          scrolled
            ? "bg-surface/90 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20"
            : "bg-transparent"
        )}
      >
        <nav className="container-max section-padding flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Prasad Engineering Logo"
              className="h-10 w-auto drop-shadow-lg"
              width={459}
              height={453}
              loading="lazy"
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <div className="leading-tight">
              <span className="block text-lg font-display font-700 tracking-wide text-white
                               group-hover:text-brand-400 transition-colors duration-200">
                PRASAD
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-steel-300 uppercase">
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium",
                      "text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-150"
                    )}
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        openDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                        isActive
                          ? "text-brand-400 bg-brand-500/10"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
                {item.dropdown && (
                  <DropdownMenu
                    items={item.dropdown}
                    isOpen={openDropdown === item.label}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary text-sm">
                Get Quote
              </Link>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white
                         hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-0 z-30 pt-16 bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                        className="flex items-center justify-between w-full px-4 py-3 rounded-xl
                                   text-slate-200 font-medium hover:bg-white/5"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-200",
                            openDropdown === item.label ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-4 border-l border-white/10"
                          >
                            {item.dropdown.map((sub) => (
                              <NavLink
                                key={sub.to}
                                to={sub.to}
                                className={({ isActive }) =>
                                  cn(
                                    "block px-4 py-2.5 text-sm font-medium",
                                    isActive ? "text-brand-400" : "text-slate-400 hover:text-slate-200"
                                  )
                                }
                              >
                                {sub.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "block px-4 py-3 rounded-xl font-medium",
                          isActive
                            ? "text-brand-400 bg-brand-500/10"
                            : "text-slate-200 hover:bg-white/5"
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
