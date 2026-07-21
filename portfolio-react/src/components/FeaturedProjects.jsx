import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const featured = [
  {
    icon: "fas fa-book",
    title: "BOOKSTORE SHOP",
    description: "The book store that have a lot of famous book for who are the read lover.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Personal Project"],
    gradient: "from-royal-500/20 via-gold-80/10 to-transparent",
  },
  {
    icon: "fas fa-robot",
    title: "FACE ATTENDANCE SYSTEM",
    description: "Real-Attendance Face Detection with the Webcam to register their face.",
    tags: ["HTML", "Rest APIs", "Python (Flask)", "Tailwind", "CSS", "School Project"],
    gradient: "from-gold-500/20 via-royal-500/10 to-transparent",
  },
  {
    icon: "fas fa-shopping-cart",
    title: "MOON COFFEE SHOP",
    description: "Sell the coffee in website to save the time for the coffee lover.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Personal Project"],
    gradient: "from-royal-500/20 via-gold-500/10 to-transparent",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FeaturedProjects() {
  return (
    <section aria-label="Featured projects" className="relative py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-500/50 mb-4 font-medium">Portfolio</p>
            <h2 className="section-heading text-center text-[clamp(2rem,4vw,3rem)] text-theme">
              Featured Projects
            </h2>
            <p className="text-theme-secondary text-base max-w-[560px] mx-auto mt-6 leading-relaxed font-light">
              A selection of recent work that reflects my growth as a developer and designer.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 max-sm:grid-cols-1">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-premium overflow-hidden group"
            >
              {/* Image Area */}
              <div className="h-52 flex items-center justify-center relative overflow-hidden
                              bg-gradient-to-br from-midnight-300 to-midnight-400">
                <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-60`} aria-hidden="true" />
                <i className={`${project.icon} text-6xl text-black/10 dark:text-white/10 z-[1] transition-all duration-700
                              group-hover:scale-125 group-hover:-rotate-6 gold-gradient-text`} aria-hidden="true" />
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                                bg-gradient-to-t from-royal-500/10 to-transparent pointer-events-none" aria-hidden="true" />
              </div>

              <div className="p-8 relative z-[1]">
                <h3 className="font-body font-semibold mb-3 text-lg text-theme group-hover:text-white transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-sm text-theme-secondary mb-5 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-premium text-[11px]">{tag}</span>
                  ))}
                </div>
                <Link to="/projects" className="btn-premium text-xs px-5 py-3 group/link">
                  <span>View Details</span>
                  <i className="fas fa-arrow-right text-[10px] transition-transform duration-500 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
