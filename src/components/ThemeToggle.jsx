import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.85 }}
      className={`relative w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer flex-shrink-0
                 overflow-hidden transition-all duration-500 ml-1.5
                 text-theme-muted hover:text-gold-500
                 bg-black/[0.02] dark:bg-white/[0.03]
                 border border-black/[0.06] dark:border-white/[0.06]
                 hover:border-gold-500/20
                 hover:bg-gradient-to-br hover:from-royal-500/10 hover:to-gold-500/5`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          background: isDark
            ? "radial-gradient(circle at center, rgba(212,165,116,0.08) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Animated icon */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.i
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fas fa-sun relative z-[1] text-sm gold-gradient-text"
            aria-hidden="true"
          />
        ) : (
          <motion.i
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fas fa-moon relative z-[1] text-sm gold-gradient-text"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
