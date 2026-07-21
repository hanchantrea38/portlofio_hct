import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TypingEffect from "./TypingEffect";
import AnimatedCounter from "./AnimatedCounter";
import MagneticButton from "./MagneticButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const phrases = ["Web Developer", "UI/UX Designer", "Problem Solver", "Book Lover"];
  const imageRef = useRef(null);

  // 3D tilt for profile image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* Fluid Mesh Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-60 animate-mesh-shift"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%237c3aed' stop-opacity='0.08'/%3E%3Cstop offset='50%25' stop-color='%23d4a574' stop-opacity='0.04'/%3E%3Cstop offset='100%25' stop-color='%23a855f7' stop-opacity='0.06'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23g)'/%3E%3C/svg%3E\")" }}
        />
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-mesh-purple animate-mesh-shift" style={{ animationDelay: "-5s" }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-mesh-gold animate-mesh-shift" style={{ animationDelay: "-10s" }} />
      </div>

      {/* Decorative floating orbs */}
      <div className="absolute top-[15%] right-[20%] w-1 h-1 bg-gold-500/30 rounded-full blur-[1px] animate-float" aria-hidden="true" style={{ animationDuration: "7s" }} />
      <div className="absolute top-[40%] left-[10%] w-1.5 h-1.5 bg-royal-400/20 rounded-full blur-[2px] animate-float-slow" aria-hidden="true" style={{ animationDuration: "9s" }} />
      <div className="absolute bottom-[30%] right-[30%] w-1 h-1 bg-gold-500/25 rounded-full blur-[1px] animate-float" aria-hidden="true" style={{ animationDuration: "6s", animationDelay: "-2s" }} />

      <div className="max-w-[1200px] mx-auto px-8 w-full relative z-[1]">
        <motion.div
          className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Column */}
          <div className="max-lg:order-2 max-lg:text-center">
            <motion.p variants={itemVariants} className="text-xs tracking-[0.25em] uppercase text-gold-500/70 mb-3 font-medium">
              Hello, I'm
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-[clamp(3rem,7vw,5.5rem)] leading-[1.0] tracking-[-0.04em] mb-2">
              <span className="gradient-text">CHANTREA</span>
              <br />
              <span className="gradient-text">HAN</span>
            </motion.h1>

            <motion.div variants={itemVariants}>
              <div className="h-10 flex items-center max-lg:justify-center">
                <span className="text-xl md:text-2xl font-semibold gold-gradient-text">
                  <TypingEffect phrases={phrases} />
                </span>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base text-theme-secondary leading-relaxed max-w-[480px] max-lg:mx-auto mt-2 font-light tracking-wide">
              Second-Year Web Developer &middot;Backend &amp; Frontend Student
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-6 max-lg:justify-center">
              {["Responsive Design", "Modern Web Apps", "User-Centered UX"].map((badge) => (
                <span key={badge} className="tag-premium text-[11px] px-3 py-1.5">{badge}</span>
              ))}
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm text-theme-secondary leading-relaxed max-w-[480px] max-lg:mx-auto mt-6">
              I design and build fast, modern websites with clean structure, thoughtful interactions,
              and a strong focus on the user experience.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 mt-10 flex-wrap max-lg:justify-center max-sm:flex-col max-sm:items-center">
              <MagneticButton strength={0.2}>
                <Link to="/projects" className="btn-premium group">
                  <span>View My Work</span>
                  <i className="fas fa-arrow-right text-xs transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link to="/contact" className="btn-outline group">
                  <span>Contact Me</span>
                  <i className="fas fa-paper-plane text-xs transition-transform duration-500 group-hover:-translate-y-1" />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Stat row */}
            <motion.div variants={itemVariants} className="flex gap-10 mt-14 max-lg:justify-center">
              {[
                { value: 10, suffix: "+", label: "Projects" },
                { value: 12, suffix: "+", label: "Technologies" },
                { value: 2, label: "Years Learning" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gold-gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-theme-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div variants={itemVariants} className="flex justify-center items-center max-lg:order-1">
            <div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative perspective-1000"
            >
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full opacity-40 animate-pulse-glow"
                style={{ background: "radial-gradient(circle, rgba(212,165,116,0.15) 0%, transparent 70%)" }} aria-hidden="true" />
              <div className="absolute -inset-8 rounded-full opacity-20 animate-float-slow"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 60%)" }} aria-hidden="true" />

              {/* 3D Tilt Image */}
              <motion.div
                style={{ rotateX, rotateY }}
                className="preserve-3d"
              >
                <img
                  src="/CT.png"
                  alt="CHANTREA HAN profile portrait"
                  className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] object-cover rounded-full relative z-[1]
                             shadow-[0_0_80px_rgba(124,58,237,0.15),0_0_160px_rgba(212,165,116,0.05)]
                             transition-shadow duration-700"
                  loading="eager"
                />

                {/* Gold ring */}
                <div className="absolute -inset-2 rounded-full z-0 pointer-events-none"
                  style={{
                    border: "1.5px solid rgba(212,165,116,0.15)",
                    background: "linear-gradient(135deg, rgba(124,58,237,0.05), rgba(212,165,116,0.05))",
                  }} aria-hidden="true" />

                {/* Orbiting dot */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full z-[2] animate-float"
                  style={{
                    background: "radial-gradient(circle, #d4a574, #7c3aed)",
                    boxShadow: "0 0 20px rgba(212,165,116,0.4)",
                  }} aria-hidden="true" />
              </motion.div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-8 bottom-8 max-w-[200px] p-4 rounded-2xl z-[2] animate-float-slow
                           backdrop-blur-2xl border border-gold-500/10
                           bg-[rgba(5,5,10,0.85)]
                           max-lg:-left-4 max-lg:right-auto max-lg:bottom-4
                           max-sm:hidden"
              >
                <p className="text-[10px] tracking-[0.15em] uppercase text-gold-500/60 mb-1 font-medium">Available for</p>
                <p className="text-xs text-theme-secondary leading-relaxed">
                  Web projects, UI improvements &amp; collaborations
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator max-md:hidden">
        <div className="mouse">
          <div className="mouse-dot" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
