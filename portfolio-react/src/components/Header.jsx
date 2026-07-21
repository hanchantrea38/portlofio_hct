import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import LogoImage from "../assets/CT.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/education", label: "Education" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 30);
      setHidden(current > lastScroll && current > 250);
      lastScroll = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove("nav-open");
  }, [location]);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      document.body.classList.toggle("nav-open", !prev);
      return !prev;
    });
  };

  const navText = isDark ? "text-theme-secondary hover:text-theme" : "text-theme-secondary hover:text-theme";
  const navActiveText = isDark ? "text-theme" : "text-theme";
  const mobileNavText = isDark ? "text-theme-secondary hover:text-theme" : "text-theme-secondary hover:text-theme";
  const mobileBg = isDark ? "bg-[rgba(5,5,10,0.98)]" : "bg-[rgba(250,248,245,0.98)]";
  const scrolledBg = isDark
    ? "bg-[rgba(5,5,10,0.92)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
    : "bg-[rgba(250,248,245,0.92)] shadow-[0_4px_30px_rgba(0,0,0,0.06)]";
  const headerBorder = isDark ? "border-[rgba(124,58,237,0.06)]" : "border-[rgba(124,58,237,0.04)]";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-out
        ${scrolled ? `py-3 backdrop-blur-2xl ${scrolledBg}` : "py-5 bg-transparent"}
        border-b ${headerBorder}`}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="relative group flex items-center gap-3 no-underline"
          aria-label="CHANTREA HAN Home"
        >
          <img
            src={LogoImage}
            alt="CHANTREA HAN logo"
            className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-lg"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-xl font-extrabold tracking-[-0.03em] transition-all duration-500 text-theme">
              CHANTREA
            </span>
            <span className="font-heading text-xl font-extrabold tracking-[-0.03em] gold-gradient-text">
              HAN
            </span>
          </div>
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-500 to-royal-500 transition-all duration-500 group-hover:w-full" />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="hidden max-md:flex items-center justify-center w-10 h-10 rounded-full cursor-pointer z-[1001]
                     transition-all duration-500
                     bg-black/[0.03] dark:bg-white/[0.03]
                     border border-black/[0.08] dark:border-white/[0.08]
                     hover:border-gold-500/30
                     hover:bg-gradient-to-br hover:from-royal-500/20 hover:to-gold-500/10
                     hover:-translate-y-0.5"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          type="button"
        >
          <motion.i
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`${isOpen ? "fas fa-times" : "fas fa-bars"} text-gold-500 text-lg transition-all duration-500 hover:scale-110`}
            aria-hidden="true"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-1 max-md:hidden" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 text-sm font-medium tracking-wide no-underline rounded-full transition-all duration-500 group
                  ${isActive ? navActiveText : navText}`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(212,165,116,0.08))",
                      border: `1px solid ${isDark ? "rgba(212,165,116,0.15)" : "rgba(124,58,237,0.12)"}`,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-[1]">{link.label}</span>
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 z-[1000] backdrop-blur-2xl flex flex-col items-center justify-center gap-8 ${mobileBg}`}
            >
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => { setIsOpen(false); document.body.classList.remove("nav-open"); }}
                      className={`text-2xl font-medium no-underline transition-all duration-300
                        ${isActive ? "gold-gradient-text" : mobileNavText}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4"
              >
                <ThemeToggle />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
