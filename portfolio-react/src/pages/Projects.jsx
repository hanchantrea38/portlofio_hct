import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, filters } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main id="main" className="page-theme-emerald">
      {/* Page Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 animate-mesh-shift pointer-events-none" aria-hidden="true"
          style={{ background: "var(--page-mesh)" }} />
        <div className="max-w-[1200px] mx-auto px-8 relative z-[1]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
              style={{ color: "var(--page-accent)", opacity: "0.6" }}>Work</p>
            <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] text-theme mb-4">My Projects</h1>
            <p className="text-theme-secondary text-base max-w-[600px] mx-auto leading-relaxed font-light">
              Explore my portfolio of web development projects, from frontend designs to full-stack applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-14">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-xl cursor-pointer font-medium text-xs tracking-wide font-body transition-all duration-500
                  ${activeFilter === filter.value
                    ? "bg-gradient-to-r from-royal-500/20 to-gold-500/10 text-gold-500 border-gold-500/30 shadow-[0_4px_20px_rgba(212,165,116,0.1)]"
                    : "bg-black/5 dark:bg-white/[0.02] border-black/10 dark:border-white/[0.06] text-theme-secondary hover:border-gold-500/20 hover:text-gold-500/60"
                  } border`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 max-sm:grid-cols-1">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} delay={(i % 6) * 0.05} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link to="/contact" className="btn-premium">
              <i className="fas fa-rocket" />
              <span>Have a Project in Mind? Let's Talk</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
