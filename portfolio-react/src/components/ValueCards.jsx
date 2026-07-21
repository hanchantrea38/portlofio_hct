import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: "fas fa-wand-magic-sparkles",
    title: "Modern UI",
    description: "Clean layouts, thoughtful spacing, and consistent visuals that make your website feel polished.",
    gradient: "from-royal-500/20 to-gold-500/10",
  },
  {
    icon: "fas fa-bolt",
    title: "Fast & Responsive",
    description: "Websites that feel smooth on every device and load with a clean, reliable experience.",
    gradient: "from-gold-500/20 to-royal-500/10",
  },
  {
    icon: "fas fa-chart-line",
    title: "Thoughtful UX",
    description: "Interfaces designed around real users, with clear content, simple navigation, and strong flow.",
    gradient: "from-royal-500/20 to-gold-500/10",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ValueCards() {
  return (
    <section className="relative py-32 overflow-hidden" aria-label="What I offer">
      {/* Divider */}
      <div className="divider-premium" />

      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-500/50 mb-4 font-medium">Value Proposition</p>
            <h2 className="section-heading text-center text-[clamp(2rem,4vw,3rem)] text-theme">
              What I bring to your project
            </h2>
            <p className="text-theme-secondary text-base max-w-[560px] mx-auto mt-6 leading-relaxed font-light">
              I focus on clarity, usability, and polished results that feel modern from the first click.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-premium p-10 group"
            >
              {/* Icon */}
              <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center text-xl
                              bg-gradient-to-br from-royal-500/10 to-gold-500/10 border border-royal-500/10
                              group-hover:border-gold-500/20 transition-all duration-500">
                <i className={`${item.icon} gold-gradient-text`} aria-hidden="true" />
              </div>

              <h3 className="font-body text-lg font-semibold text-theme mb-3 group-hover:text-gray transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-sm text-theme-secondary leading-relaxed mb-0 font-light">
                {item.description}
              </p>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
