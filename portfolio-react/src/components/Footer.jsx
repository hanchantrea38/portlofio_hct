import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  { url: "https://github.com/hanchantrea38", icon: "fab fa-github", label: "GitHub" },
  { url: "https://www.linkedin.com/in/chantrea-han/", icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { url: "https://www.facebook.com/chantrea.han.33", icon: "fab fa-facebook", label: "Facebook" },
  { url: "https://www.youtube.com/@HanChantrea-dd8ce", icon: "fab fa-youtube", label: "YouTube" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgGradient = isDark
    ? "linear-gradient(180deg, rgba(5,5,10,1) 0%, rgba(10,10,26,1) 100%)"
    : "linear-gradient(180deg, rgba(248,244,240,1) 0%, rgba(240,236,232,1) 100%)";
  const socialBg = "bg-black/[0.02] dark:bg-white/[0.03] border-black/[0.06] dark:border-white/[0.06] text-theme-muted hover:bg-gradient-to-br hover:from-royal-500/20 hover:to-gold-500/10 hover:text-[var(--page-accent)] hover:border-gold-500/20";

  return (
    <footer className="relative pt-24 pb-8 mt-20 overflow-hidden transition-colors duration-700"
      style={{ background: bgGradient }}>
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,165,116,0.15), rgba(124,58,237,0.15), transparent)" }}
        aria-hidden="true" />

      <motion.div
        className="max-w-[1200px] mx-auto px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16
                        max-lg:grid-cols-2 max-md:grid-cols-1 max-md:text-center max-md:gap-10">
          {/* Brand */}
          <motion.div variants={itemVariants} className="max-md:flex max-md:flex-col max-md:items-center">
            <Link to="/" className="inline-flex items-center gap-1.5 no-underline mb-4 group" aria-label="CHANTREA HAN Home">
              <span className="font-heading text-2xl font-extrabold tracking-[-0.03em] transition-all duration-500 text-theme">
                CHANTREA
              </span>
              <span className="font-heading text-2xl font-extrabold tracking-[-0.03em] gold-gradient-text">HAN</span>
              <span className="w-0 h-[1.5px] bg-gradient-to-r from-gold-500 to-royal-500 transition-all duration-500 group-hover:w-full" />
            </Link>
            <p className="text-sm max-w-[300px] leading-relaxed font-light max-md:mx-auto text-theme-secondary">
              Web developer passionate about creating modern and professional websites with clean design and thoughtful interactions.
            </p>
            <div className="flex gap-3 mt-6 max-md:justify-center">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.url}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center no-underline transition-all duration-500 text-base ${socialBg}`}
                  target="_blank" rel="noopener" aria-label={link.label}>
                  <i className={link.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold-500/50 mb-6 font-semibold">Quick Links</h3>
            <ul className="list-none space-y-3">
              {[{ to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/projects", label: "Projects" }].map((link) => (
                <li key={link.to}>
                  <Link to={link.to}
                    className="text-theme-secondary text-sm no-underline transition-all duration-300 hover:text-gold-500/70 hover:pl-2 group flex items-center gap-2 max-md:justify-center">
                    <span className="w-0 h-[1px] bg-gold-500/50 transition-all duration-300 group-hover:w-3" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold-500/50 mb-6 font-semibold">Resources</h3>
            <ul className="list-none space-y-3">
              {[{ to: "/education", label: "Education" }, { to: "/contact", label: "Contact" }].map((link) => (
                <li key={link.to}>
                  <Link to={link.to}
                    className="text-theme-secondary text-sm no-underline transition-all duration-300 hover:text-gold-500/70 hover:pl-2 group flex items-center gap-2 max-md:justify-center">
                    <span className="w-0 h-[1px] bg-gold-500/50 transition-all duration-300 group-hover:w-3" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold-500/50 mb-6 font-semibold">Get in Touch</h3>
            <ul className="list-none space-y-4">
              <li>
                <a href="mailto:hanchantrea38@gmail.com"
                  className="text-theme-secondary text-sm no-underline transition-all duration-300 hover:text-gold-500/70 flex items-center gap-3 max-md:justify-center">
                  <i className="fas fa-envelope text-gold-500/40 text-xs w-4" />
                  hanchantrea38@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+85581906064"
                  className="text-theme-secondary text-sm no-underline transition-all duration-300 hover:text-gold-500/70 flex items-center gap-3 max-md:justify-center">
                  <i className="fas fa-phone text-gold-500/40 text-xs w-4" />
                  (+855) 819 060 64
                </a>
              </li>
              <li>
                <span className="text-theme-secondary text-sm flex items-center gap-3 max-md:justify-center">
                  <i className="fas fa-map-marker-alt text-gold-500/40 text-xs w-4" />
                  Phnom Penh, Cambodia
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="divider-premium mb-8" />

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-theme-muted text-xs font-light">
            &copy; {currentYear} CHANTREA HAN. All rights reserved.
          </p>
          <p className="text-theme-muted text-xs font-light">
            Built with <span className="text-gold-500/50" aria-label="love">&hearts;</span> and code
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
