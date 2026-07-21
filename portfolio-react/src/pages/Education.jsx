import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const workshops = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development Bootcamp",
    org: "Passerelles Numériques Cambodia",
    year: "2025",
    description: "Intensive full-stack web development bootcamp covering HTML, CSS, JavaScript, PHP, Python, and database management with hands-on project work.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX Design Workshop",
    org: "PNC Design Lab",
    year: "2025",
    description: "Learned user-centered design principles, wireframing, prototyping with Figma, and usability testing methodologies.",
  },
  {
    icon: "fas fa-people-arrows",
    title: "Agile & Scrum Methodology",
    org: "PNC Professional Development",
    year: "2025",
    description: "Trained in Agile project management, Scrum ceremonies, sprint planning, and collaborative team workflows using Jira.",
  },
  {
    icon: "fas fa-code-branch",
    title: "Git & GitHub Workshop",
    org: "PNC Developer Club",
    year: "2024",
    description: "Version control best practices, branching strategies, pull requests, and open-source collaboration workflows.",
  },
  {
    icon: "fas fa-chalkboard-user",
    title: "Public Speaking & Leadership",
    org: "PNC Soft Skills Program",
    year: "2024",
    description: "Developed presentation skills, team leadership, conflict resolution, and effective communication for professional environments.",
  },
  {
    icon: "fas fa-database",
    title: "Database Design & SQL",
    org: "PNC Technical Training",
    year: "2024",
    description: "Structured query language, database normalization, ER diagrams, and building efficient data models for web applications.",
  },
];

const achievements = [
  {
    icon: "fas fa-trophy",
    title: "Top Performer in Web Development",
    year: "2025",
    description: "Recognized as the top-performing student in the web development track for outstanding project work and technical skills.",
  },
  {
    icon: "fas fa-award",
    title: "Best UI/UX Design Project",
    year: "2025",
    description: "Awarded Best UI/UX Design for the Komroung Trip Booking Application — praised for clean interface and user-centered approach.",
  },
  {
    icon: "fas fa-users",
    title: "Active Member — PNC Developer Club",
    year: "2024 — Present",
    description: "Regular participant in coding challenges, hackathons, and peer programming sessions. Contributed to club website and community events.",
  },
  {
    icon: "fas fa-rocket",
    title: "10+ Completed Projects",
    year: "2024 — Present",
    description: "Built and deployed over 10 web projects including e-commerce platforms, management systems, and responsive brand websites.",
  },
  {
    icon: "fas fa-hand-holding-heart",
    title: "Volunteer Mentor for Juniors",
    year: "2025",
    description: "Mentored first-year students in HTML, CSS, and basic JavaScript — helping them build their first web pages and debug code.",
  },
  {
    icon: "fas fa-globe-asia",
    title: "Multi-Stack Developer",
    year: "2024 — Present",
    description: "Proficient across frontend (React, Vue.js), backend (Laravel, Node.js), and database (MySQL) technologies for full-stack development.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function CardIcon({ icon, accent }) {
  return (
    <div
      className="w-11 h-11 min-w-[44px] rounded-xl flex items-center justify-center text-sm border transition-all duration-500 group-hover:scale-110 group-hover:border-gold-500/20"
      style={{
        background: `linear-gradient(135deg, ${accent}15, ${accent}08)`,
        borderColor: `${accent}20`,
        color: accent,
      }}
      aria-hidden="true"
    >
      <i className={icon} />
    </div>
  );
}

function YearBadge({ year, accent }) {
  return (
    <span
      className="text-[11px] font-semibold whitespace-nowrap px-2.5 py-1 rounded-md tracking-wide"
      style={{
        color: accent,
        background: `${accent}12`,
      }}
    >
      {year}
    </span>
  );
}

export default function Education() {
  const teal = "var(--page-accent)";
  const tealRgb = "var(--page-accent-rgb)";

  return (
    <main id="main" className="page-theme-teal">
      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 animate-mesh-shift pointer-events-none"
          aria-hidden="true"
          style={{ background: "var(--page-mesh)" }}
        />
        <div className="max-w-[1200px] mx-auto px-8 relative z-[1]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p
              className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
              style={{ color: teal, opacity: 0.6 }}
            >
              Learning
            </p>
            <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] text-theme mb-4">
              Education
            </h1>
            <p className="text-theme-secondary text-base max-w-[600px] mx-auto leading-relaxed font-light">
              Formal education, workshops, and personal achievements that shape
              my journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Education Background ── */}
      <section className="py-28 max-md:py-20">
        <div className="max-w-[1000px] mx-auto px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p
                className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
                style={{ color: teal, opacity: 0.6 }}
              >
                Background
              </p>
              <h2 className="section-heading text-center text-3xl text-theme">
                Education Background
              </h2>
              <p className="text-theme-secondary text-base max-w-[600px] mx-auto mt-6 font-light">
                My academic journey from high school through university
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {/* PNC */}
            <ScrollReveal>
              <div className="card-premium p-0 overflow-hidden group">
                <div
                  className="h-1 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--page-accent), var(--page-accent-2))",
                  }}
                  aria-hidden="true"
                />
                <div className="p-8 max-sm:p-6">
                  <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-base"
                        style={{
                          background: `rgba(${tealRgb},0.1)`,
                          color: teal,
                        }}
                        aria-hidden="true"
                      >
                        <i className="fas fa-university" />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold mb-0"
                          style={{ color: teal }}
                        >
                          2025 — Present
                        </p>
                        <p className="text-xs text-theme-muted mt-0">
                          University (PNC)
                        </p>
                      </div>
                    </div>
                    <YearBadge year="Associate Degree" accent={teal} />
                  </div>

                  <h3 className="font-body font-semibold text-theme text-lg mb-3">
                    Web Development — Associate Degree
                  </h3>
                  <p className="text-sm text-theme-secondary leading-relaxed mb-5 font-light">
                    Studying Web Development at Passerelles Numériques Cambodia
                    (PNC), expected graduation 2026.
                  </p>

                  <div className="divider-premium mb-5" />

                  <p
                    className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3"
                    style={{ color: teal, opacity: 0.75 }}
                  >
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML & Responsive Design",
                      "CSS & Tailwind CSS",
                      "JavaScript & React",
                      "Python & PHP",
                      "Figma & UI/UX",
                      "Git & GitHub",
                      "Database & MySQL",
                      "Agile & Jira",
                    ].map((course) => (
                      <span
                        key={course}
                        className="tag-premium text-[11px]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* High School */}
            <ScrollReveal delay={0.1}>
              <div className="card-premium p-0 overflow-hidden group">
                <div
                  className="h-1 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--page-accent-2), var(--page-accent))",
                  }}
                  aria-hidden="true"
                />
                <div className="p-8 max-sm:p-6">
                  <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-base"
                        style={{
                          background: `rgba(${tealRgb},0.1)`,
                          color: teal,
                        }}
                        aria-hidden="true"
                      >
                        <i className="fas fa-school" />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold mb-0"
                          style={{ color: teal }}
                        >
                          2018 — 2025
                        </p>
                        <p className="text-xs text-theme-muted mt-0">
                          Secondary — High School
                        </p>
                      </div>
                    </div>
                    <YearBadge year="Completed" accent={teal} />
                  </div>

                  <h3 className="font-body font-semibold text-theme text-lg mb-3">
                    Takeo Province, Cambodia
                  </h3>
                  <p className="text-sm text-theme-secondary leading-relaxed mb-5 font-light">
                    Completed secondary and high school education with a strong
                    foundation in general sciences, languages, and professional
                    skills development.
                  </p>

                  <div className="divider-premium mb-5" />

                  <p
                    className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3"
                    style={{ color: teal, opacity: 0.75 }}
                  >
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "General English",
                      "Chemistry",
                      "Physics",
                      "Geography",
                      "History",
                      "Khmer Languages",
                    ].map((course) => (
                      <span
                        key={course}
                        className="tag-premium text-[11px]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="divider-premium" />
      </div>

      {/* ── Workshops & Training ── */}
      <section className="py-28 max-md:py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p
                className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
                style={{ color: teal, opacity: 0.6 }}
              >
                Growth
              </p>
              <h2 className="section-heading text-center text-3xl text-theme">
                Workshops &amp; Training
              </h2>
              <p className="text-theme-secondary text-base max-w-[600px] mx-auto mt-6 font-light">
                Beyond the classroom — hands-on workshops and professional
                training that expanded my skills
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {workshops.map((w) => (
              <motion.div
                key={w.title}
                variants={cardVariants}
                className="card-premium p-6 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--page-accent), var(--page-accent-2))",
                  }}
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <CardIcon icon={w.icon} accent={teal} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-body font-semibold text-sm text-theme leading-snug">
                        {w.title}
                      </h3>
                      <YearBadge year={w.year} accent={teal} />
                    </div>
                    <p
                      className="text-[12px] mb-2 font-medium"
                      style={{ color: teal, opacity: 0.7 }}
                    >
                      {w.org}
                    </p>
                    <p className="text-xs text-theme-secondary leading-relaxed font-light">
                      {w.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Personal Achievements ── */}
      <section className="py-28 max-md:py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p
                className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
                style={{ color: teal, opacity: 0.6 }}
              >
                Milestones
              </p>
              <h2 className="section-heading text-center text-3xl text-theme">
                Personal Achievements
              </h2>
              <p className="text-theme-secondary text-base max-w-[600px] mx-auto mt-6 font-light">
                Highlights and recognition from my learning journey so far
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {achievements.map((a) => (
              <motion.div
                key={a.title}
                variants={cardVariants}
                className="card-premium p-6 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--page-accent-2), var(--page-accent))",
                  }}
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <CardIcon icon={a.icon} accent={teal} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-body font-semibold text-sm text-theme leading-snug">
                        {a.title}
                      </h3>
                      <YearBadge year={a.year} accent={teal} />
                    </div>
                    <p className="text-xs text-theme-secondary leading-relaxed font-light">
                      {a.description}
                    </p>
                    <div
                      className="h-px w-0 group-hover:w-full transition-all duration-700 mt-3"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--page-accent), transparent)",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-28">
        <div className="max-w-[1000px] mx-auto px-8">
          <ScrollReveal>
            <div className="glass-premium p-12 max-md:p-8">
              <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8 text-center">
                {[
                  { value: "2", label: "Years of Study", icon: "fas fa-graduation-cap" },
                  { value: "6+", label: "Workshops Completed", icon: "fas fa-certificate" },
                  { value: "10+", label: "Projects Built", icon: "fas fa-code" },
                  { value: "5+", label: "Skills Mastered", icon: "fas fa-star" },
                ].map((stat) => (
                  <div key={stat.label} className="group">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-lg
                                  transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                      style={{
                        background: `rgba(${tealRgb},0.08)`,
                        color: teal,
                      }}
                    >
                      <i className={stat.icon} aria-hidden="true" />
                    </div>
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: teal }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-theme-secondary font-light tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <ScrollReveal>
            <Link to="/contact" className="btn-premium">
              <i className="fas fa-paper-plane" />
              <span>Let's Connect — I'd love to hear from you</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
