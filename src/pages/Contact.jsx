import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", newsletter: true });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "", newsletter: true });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main id="main" className="page-theme-rose">
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
              style={{ color: "var(--page-accent)", opacity: "0.6" }}>Connect</p>
            <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] text-theme mb-4">Get In Touch</h1>
            <p className="text-theme-secondary text-base max-w-[600px] mx-auto leading-relaxed font-light">
              Let's discuss your next project, collaborate, or just say hello
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-[1.2fr_1.5fr] gap-16 max-lg:grid-cols-1">
            {/* Contact Info */}
            <div className="space-y-8">
              <ScrollReveal>
                <div>
                  <h2 className="section-heading text-3xl text-theme mb-6">Contact Information</h2>
                  <p className="text-sm text-theme-secondary leading-relaxed font-light">
                    I'm open to new opportunities, thoughtful collaborations, and meaningful projects that need a clean and modern web presence.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  {[
                    { icon: "fas fa-envelope", title: "Email", value: "hanchantrea38@gmail.com", sub: "Response within 24 hours" },
                    { icon: "fas fa-phone", title: "Phone", value: "(+855) 819 060 64", sub: "Mon-Fri, 7 AM - 9 PM" },
                    { icon: "fas fa-map-marker-alt", title: "Location", value: "Phnom Penh, Cambodia", sub: "Open to remote work worldwide" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-5 card-premium group">
                      <div className="w-12 h-12 min-w-[12px] rounded-xl flex items-center justify-center text-sm
                                      bg-gradient-to-br from-royal-500/10 to-gold-500/10 border border-royal-500/10
                                      group-hover:border-gold-500/20 transition-all duration-500">
                        <i className={`${item.icon} gold-gradient-text`} />
                      </div>
                      <div>
                        <h3 className="font-body text-sm font-semibold text-theme mb-0.5">{item.title}</h3>
                        <p className="text-sm text-theme-secondary mb-0">{item.value}</p>
                        <p className="text-xs text-theme-muted mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div>
                  <h3 className="font-body text-sm font-semibold text-gold-500/80 mb-3">Connect With Me</h3>
                  <p className="text-xs text-theme-muted mb-4 font-light">Follow my work and connect on social platforms</p>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      { icon: "fab fa-github", url: "https://github.com/hanchantrea38", label: "GitHub" },
                      { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/chantrea-han/", label: "LinkedIn" },
                      { icon: "fab fa-facebook", url: "https://www.facebook.com/chantrea.han.33", label: "Facebook" },
                      { icon: "fab fa-youtube", url: "https://www.youtube.com/@HanChantrea-dd8ce", label: "YouTube" },
                    ].map((social) => (
                      <a key={social.label} href={social.url}
                        className="w-11 h-11 rounded-xl flex items-center justify-center no-underline transition-all duration-500 text-base
                                   bg-black/5 dark:bg-white/[0.02] border border-black/10 dark:border-white/[0.06] text-theme-muted
                                   hover:bg-gradient-to-br hover:from-royal-500/20 hover:to-gold-500/10 hover:text-gold-500 hover:border-gold-500/20 hover:-translate-y-1.5"
                        target="_blank" rel="noopener" title={social.label} aria-label={social.label}>
                        <i className={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal delay={0.15}>
              <div className="glass-premium p-10 max-md:p-6">
                <h2 className="section-heading text-3xl text-theme mb-2">Send a Message</h2>
                <p className="text-sm text-theme-muted mb-8 font-light">Share a few details about your idea and I'll get back to you as soon as possible.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 bg-gradient-to-br from-royal-500/5 to-gold-500/5 border border-gold-500/10 rounded-2xl"
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4
                                    bg-gradient-to-br from-royal-500/20 to-gold-500/20">
                      <i className="fas fa-check-circle text-3xl gold-gradient-text" />
                    </div>
                    <h3 className="font-body text-lg text-gold-500/80 mb-1">Message Sent!</h3>
                    <p className="text-sm text-theme-secondary mb-0 font-light">Thank you! I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-5">
                      <label htmlFor="name" className="block mb-2.5 font-semibold text-xs tracking-wide text-theme-secondary uppercase">
                        Full Name <span className="text-gold-500/60">*</span>
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                        placeholder="Your Name" required className="form-input" />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="email" className="block mb-2.5 font-semibold text-xs tracking-wide text-theme-secondary uppercase">
                        Email Address <span className="text-gold-500/60">*</span>
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="your.email@example.com" required className="form-input" />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="subject" className="block mb-2.5 font-semibold text-xs tracking-wide text-theme-secondary uppercase">
                        Subject
                      </label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-input">
                        <option value="">Select a subject</option>
                        <option value="project">Project Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="job">Job Opportunity</option>
                        <option value="freelance">Freelance Work</option>
                        <option value="question">Technical Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="message" className="block mb-2.5 font-semibold text-xs tracking-wide text-theme-secondary uppercase">
                        Message <span className="text-gold-500/60">*</span>
                      </label>
                      <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange}
                        placeholder="Tell me about your project, idea, or question..." required
                        className="form-input min-h-[120px] resize-y" />
                    </div>

                    <div className="mb-7">
                      <label className="flex items-center gap-3 cursor-pointer text-sm text-theme-secondary">
                        <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange}
                          className="w-4 h-4 accent-gold-500 cursor-pointer rounded" />
                        Subscribe to my newsletter for updates
                      </label>
                    </div>

                    <button type="submit" className="btn-premium w-full justify-center group">
                      <i className="fas fa-paper-plane text-xs transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Map Placeholder */}
          <ScrollReveal delay={0.3}>
            <div className="card-premium p-14 text-center mt-16 transition-all duration-500">
              <i className="fas fa-map-marked-alt text-5xl gold-gradient-text mb-5"></i>
              <h3 className="font-body text-xl font-semibold text-theme mb-2">Phnom Penh, Cambodia</h3>
              <p className="text-sm text-theme-secondary mb-5 font-light">Serving clients worldwide remotely</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Remote Work Available", "Flexible Hours", "Global Collaboration"].map((tag) => (
                  <span key={tag} className="tag-premium text-[11px]">{tag}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
