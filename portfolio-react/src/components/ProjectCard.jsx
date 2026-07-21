import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ProjectCard({ project, delay = 0 }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <ScrollReveal delay={delay}>
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="card-premium overflow-hidden cursor-pointer group preserve-3d"
      >
        {/* Image Area */}
        <div className="h-48 flex items-center justify-center relative overflow-hidden
                        bg-gradient-to-br from-midnight-300 to-midnight-400">
          <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700
                          bg-gradient-to-b from-royal-500/10 via-transparent to-transparent" aria-hidden="true" />
          <i className={`${project.icon} text-5xl text-black/10 dark:text-white/10 z-[1] transition-all duration-700
                        group-hover:scale-125 group-hover:-rotate-6 gold-gradient-text`} aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="p-7 relative z-[1]">
          <h3 className="font-body font-semibold mb-3 text-lg text-theme group-hover:text-white transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-sm text-theme-secondary mb-4 leading-relaxed font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-premium text-[11px]">{tag}</span>
            ))}
          </div>

          <div className="flex gap-3 mt-5">
            {project.links.details && (
              <a href={project.links.details} className="btn-premium text-xs px-4 py-2.5" target="_blank" rel="noopener">
                View Details
              </a>
            )}
            {project.links.code && (
              <a href={project.links.code} className="btn-outline text-xs px-4 py-2.5" target="_blank" rel="noopener">
                <i className="fab fa-github"></i> Code
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}
