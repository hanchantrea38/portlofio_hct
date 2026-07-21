import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <main id="main" className="page-theme-purple">
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
              style={{ color: "var(--page-accent)", opacity: "0.6" }}>About</p>
            <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] text-theme mb-4">About Me</h1>
            <p className="text-theme-secondary text-base max-w-[600px] mx-auto leading-relaxed font-light">
              Get to know my journey, skills, and passion for web development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1">
            <ScrollReveal>
              <div className="glass-premium p-10">
                <h2 className="section-heading text-3xl text-theme mb-8">My Journey</h2>
                <div className="space-y-5 text-theme-secondary text-sm leading-relaxed font-light">
                  <p>Hello! I'm CHANTREA HAN, a second-year web development student at Passerelles Numériques Cambodia, driven by the idea of building useful and beautiful digital experiences.</p>
                  <p>My interest in web development began when I saw how a simple website could solve real problems and create value. That curiosity turned into a passion for designing and building things that people can actually enjoy using.</p>
                  <p>I enjoy creating clean, responsive interfaces and turning ideas into websites that feel intuitive and polished. I care about both the visual experience and the structure behind it.</p>
                  <p>When I'm not coding, I like reading, exploring new tools, and learning from real projects. I'm always excited to grow, collaborate, and build something meaningful.</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    { icon: "fas fa-map-marker-alt", text: "Phnom Penh, Cambodia" },
                    { icon: "fas fa-graduation-cap", text: "Second Year Student" },
                    { icon: "fas fa-code", text: "10+ Projects" },
                  ].map((item) => (
                    <div key={item.text} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm transition-all duration-500
                                                    bg-black/5 dark:bg-white/[0.02] border-black/10 dark:border-white/[0.06] text-theme-secondary
                                                    hover:border-gold-500/20 hover:text-gold-500/80 hover:bg-gold-500/5">
                      <i className={`${item.icon} text-gold-500/60 text-xs`}></i>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <h2 className="section-heading text-3xl text-theme mb-8">What I Do</h2>
                <div className="space-y-5">
                  {[
                    { title: "Frontend Development", desc: "Creating a website with good responsive, interactive user interfaces with modern frameworks." },
                    { title: "Backend Development", desc: "Building website with backend applications, APIs, and database systems with My SQL and Python to store data." },
                    { title: "Scrum Master & Team Leadership", desc: "Leading agile development teams and facilitating effective collaboration." },
                    { title: "UI/UX Design", desc: "Designing user-interfaces with Figma and focusing on usability and accessibility." },
                    { title: "Deployment", desc: "Deploying websites and applications to production environments." },
                    { title: "Problem Solving", desc: "Analyzing complex problems and developing efficient, solutions through code." },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 0.05}>
                      <div className="card-premium p-6 group">
                        <h3 className="font-body font-semibold text-gold-500/80 text-base mb-2">{item.title}</h3>
                        <p className="text-sm text-theme-secondary leading-relaxed mb-0 font-light">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="divider-premium" />
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-gold-500/50 mb-4 font-medium">Expertise</p>
              <h2 className="section-heading text-[clamp(2rem,4vw,3rem)] text-theme">Skills &amp; Expertise</h2>
              <p className="text-theme-secondary text-base max-w-[600px] mx-auto mt-4 font-light">Technical languages and soft skills.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">
            {/* Hard Skills */}
            <ScrollReveal>
              <div className="card-premium p-8 group h-full">
                <h3 className="font-body font-semibold text-gold-500/80 text-lg mb-5">Hard Skills</h3>
                <ul className="list-none space-y-3">
                  {["HTML/ JavaScript", "CSS / Tailwind CSS", "Python / Flask", "PHP", "Node.js / Laravel", "Vue.js / React.js", "Database: MySQL", "Git / GitHub", "Rest APIs", "Postman / Swagger", "UI Framework: Figma"].map((item) => (
                    <li key={item} className="pl-5 relative text-sm text-theme-secondary transition-all duration-300 hover:text-gold-500/80 hover:translate-x-1 font-light">
                      <span className="absolute left-0 text-gold-500/50 font-bold" aria-hidden="true">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Soft Skills */}
            <ScrollReveal delay={0.1}>
              <div className="card-premium p-8 group h-full">
                <h3 className="font-body font-semibold text-gold-500/80 text-lg mb-5">Soft Skills</h3>
                <ul className="list-none space-y-3">
                  {["Time/Task Management", "Adaptability", "Creativity", "Problem-solving & Critical Thinking", "Communication & Presentation", "Team Collaboration & Leadership", "Mentoring & Teaching", "Public Speaking"].map((item) => (
                    <li key={item} className="pl-5 relative text-sm text-theme-secondary transition-all duration-300 hover:text-gold-500/80 hover:translate-x-1 font-light">
                      <span className="absolute left-0 text-gold-500/50 font-bold" aria-hidden="true">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Tools */}
            <ScrollReveal delay={0.2}>
              <div className="card-premium p-8 group h-full">
                <h3 className="font-body font-semibold text-gold-500/80 text-lg mb-5">Tools I Use</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: "fas fa-code", name: "VS Code" },
                    { icon: "fab fa-figma", name: "Figma" },
                    { icon: "fab fa-github", name: "Git / GitHub" },
                    { icon: "fab fa-aws", name: "Postman / Swagger" },
                    { icon: "fab fa-aws", name: "Jira / Agile" },
                    { icon: "fab fa-aws", name: "Vercel / Netlify" },
                    { icon: "fab fa-docker", name: "Docker / AWS" },
                  ].map((tool) => (
                    <div key={tool.name} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm transition-all duration-500
                                                    bg-black/5 dark:bg-white/[0.02] border-black/10 dark:border-white/[0.06] text-theme-secondary
                                                    hover:border-gold-500/20 hover:text-gold-500/80 hover:bg-gold-500/5 hover:-translate-y-0.5">
                      <i className={`${tool.icon} text-gold-500/60`}></i>
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-gold-500/50 mb-4 font-medium">Philosophy</p>
              <h2 className="section-heading text-[clamp(2rem,4vw,3rem)] text-theme">My Development Approach</h2>
              <p className="text-theme-secondary text-base max-w-[600px] mx-auto mt-4 font-light">How I approach projects and problem-solving</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1">
            <div className="space-y-8">
              {[
                { title: "Planning & Research", desc: "I start every project with thorough research and planning. Understanding the problem, target audience, and project requirements from teacher for success." },
                { title: "Collaborative Design", desc: "I believe in working closely with stakeholders and team members throughout the design process to ensure alignment and gather valuable feedback." },
                { title: "Clean Code Practices", desc: "Writing maintainable, well-documented code is a priority. I follow coding standards and implement best practices for scalability and performance." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.05}>
                  <div className="card-premium p-6">
                    <h3 className="font-body font-semibold text-gold-500/80 text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-theme-secondary leading-relaxed font-light mb-0">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="space-y-8">
              {[
                { title: "Testing & Quality", desc: "Quality assurance is integrated throughout the development process. I implement various testing strategies to ensure reliable, bug-free applications." },
                { title: "Continuous Learning", desc: "The tech landscape is always evolving. I dedicate time to learning new technologies, attending workshops, and contributing to the developer community." },
                { title: "User-Centered Focus", desc: "Every decision is made with the end-user in mind. I prioritize accessibility, usability, and creating intuitive, enjoyable experiences." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.05 + 0.15}>
                  <div className="card-premium p-6">
                    <h3 className="font-body font-semibold text-gold-500/80 text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-theme-secondary leading-relaxed font-light mb-0">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
