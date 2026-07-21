import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Hard Skills",
    items: [
      { name: "HTML5 / CSS3", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Database / MySQL", level: 75 },
      { name: "Python / Flask", level: 70 },
      { name: "Laravel / Node.js", level: 70 },
      { name: "Vue.js / React.js", level: 65 },
    ],
  },
  {
    title: "Technical Tools",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Postman / APIs", level: 80 },
      { name: "Docker / AWS", level: 70 },
      { name: "Jira / Agile", level: 80 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "Swagger", level: 50},
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Problem Solving", level: 80 },
      { name: "Communication", level: 85 },
      { name: "Team Leadership", level: 78 },
      { name: "Time Management", level: 82 },
      { name: "Adaptability", level: 85 },
      { name: "Critical Thinking ", level: 85 },
      { name: "Attention to Detail", level: 80 },
    ],
  },
];

export default function SkillsPreview() {
  return (
    <section className="relative py-32 overflow-hidden" aria-label="Skills overview">
      <div className="divider-premium" />

      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-500/50 mb-4 font-medium">Expertise</p>
            <h2 className="section-heading text-center text-[clamp(2rem,4vw,3rem)] text-theme">
              Skills &amp; Tools
            </h2>
            <p className="text-theme-secondary text-base max-w-[560px] mx-auto mt-6 leading-relaxed font-light">
              A practical mix of front-end, back-end, and collaboration skills that helps me build complete experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-8">
          {skillCategories.map((cat, catIdx) => (
            <ScrollReveal key={cat.title} delay={catIdx * 0.1}>
              <div className="card-premium p-8 group">
                <h3 className="font-body font-semibold text-gold-500/80 text-lg mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-gradient-to-r from-gold-500/50 to-transparent" aria-hidden="true" />
                  {cat.title}
                </h3>

                <div className="space-y-5">
                  {cat.items.map((skill, i) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-theme">{skill.name}</span>
                        <span className="text-xs text-theme-muted font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full"
                          style={{
                            background: "linear-gradient(90deg, #7c3aed, #d4a574)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-14">
            <Link to="/about" className="btn-premium">
              Learn More About Me
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
