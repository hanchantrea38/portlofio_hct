import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, galleryFilters } from "../data/gallery";

const CATEGORY_META = {
  activity: { label: "Activity", icon: "fas fa-camera", color: "#d4a574" },
  achievement: { label: "Achievement", icon: "fas fa-trophy", color: "#34d399" },
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const counts = galleryFilters.reduce((acc, f) => {
    acc[f.value] =
      f.value === "all"
        ? galleryItems.length
        : galleryItems.filter((i) => i.category === f.value).length;
    return acc;
  }, {});

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filteredItems.length));
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;
  const accent = "var(--page-accent)";
  const accentRgb = "var(--page-accent-rgb)";

  return (
    <main id="main" className="page-theme-amber">
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
              style={{ color: accent, opacity: 0.6 }}
            >
              Moments
            </p>
            <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] text-theme mb-4">
              My Gallery
            </h1>
            <p className="text-theme-secondary text-base max-w-[600px] mx-auto leading-relaxed font-light">
              A collection of photos from my activities and achievements along the way
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-14">
            {galleryFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => {
                  setActiveFilter(filter.value);
                  setLightboxIndex(null);
                }}
                className={`px-6 py-3 rounded-xl cursor-pointer font-medium text-xs tracking-wide font-body transition-all duration-500
                  ${activeFilter === filter.value
                    ? "bg-gradient-to-r from-amber-500/20 to-gold-500/10 text-gold-500 border-gold-500/30 shadow-[0_4px_20px_rgba(212,165,116,0.1)]"
                    : "bg-black/5 dark:bg-white/[0.02] border-black/10 dark:border-white/[0.06] text-theme-secondary hover:border-gold-500/20 hover:text-gold-500/60"
                  } border`}
              >
                <i className={`${filter.icon} mr-2 text-xs`} aria-hidden="true" />
                {filter.label}
                <span
                  className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full border border-current opacity-70"
                  aria-hidden="true"
                >
                  {counts[filter.value]}
                </span>
              </button>
            ))}
          </div>

          {/* Grid — bento mosaic: each block of 3 is a large featured tile with two
              photos stacked beside it. The pattern self-completes so any photo count
              (even single photos) fills the grid without holes. Collapses to 2-col / 1-col
              on smaller screens. */}
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:auto-rows-[210px]"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, i) => {
                  const meta = CATEGORY_META[item.category] || CATEGORY_META.activity;
                  const total = filteredItems.length;
                  const remainder = total % 3;
                  // Only feature tiles that can form a complete 3-tile block, so the
                  // grid never ends with an empty cell.
                  const isFeatured = i % 3 === 0 && i < total - remainder;
                  const isTrailingWide = remainder === 1 && i === total - 1;
                  const spanClass = isTrailingWide
                    ? "lg:col-span-12"
                    : isFeatured
                      ? "lg:col-span-7 lg:row-span-2"
                      : "lg:col-span-5";
                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: (i % 6) * 0.04 }}
                      onClick={() => setLightboxIndex(i)}
                      className={`group relative rounded-2xl overflow-hidden border border-theme-subtle cursor-pointer text-left
                                 transition-all duration-700 hover:-translate-y-2 hover:border-gold-500/30
                                 hover:shadow-[var(--shadow-card-hover)] bg-black/20 dark:bg-white/[0.02]
                                 h-64 sm:h-56 lg:h-auto ${spanClass}`}
                      aria-label={`Open photo: ${item.title}`}
                    >
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      </div>

                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{ background: "linear-gradient(180deg, transparent 30%, rgba(5,5,10,0.85) 100%)" }}
                        aria-hidden="true"
                      />

                      {/* Category badge */}
                      <span
                        className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full backdrop-blur-md"
                        style={{ background: "rgba(5,5,10,0.55)", color: meta.color, border: "1px solid rgba(255,255,255,0.1)" }}
                      >
                        <i className={`${meta.icon} text-[10px]`} aria-hidden="true" />
                        {meta.label}
                      </span>

                      {/* Zoom icon */}
                      <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center
                                   opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500
                                   bg-gold-500/20 backdrop-blur-md border border-gold-500/40 text-gold-300"
                        aria-hidden="true"
                      >
                        <i className="fas fa-expand text-sm" />
                      </span>

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 relative z-[1]">
                        <p className="text-[11px] font-semibold tracking-wide mb-1" style={{ color: accent }}>
                          <i className="far fa-calendar-alt mr-1.5 text-[10px]" aria-hidden="true" />
                          {item.date}
                        </p>
                        <h3 className="font-body font-semibold text-white text-base leading-snug mb-1">{item.title}</h3>
                        {/* Description — always visible on featured tiles, revealed on hover otherwise */}
                        <p className={`text-white/70 text-xs leading-relaxed font-light overflow-hidden
                                      transition-all duration-700
                                      ${isFeatured
                                        ? "max-h-16 opacity-100"
                                        : "max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100"}`}>
                          {item.description}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-premium p-16 text-center max-w-[560px] mx-auto"
            >
              <i className="fas fa-images text-4xl gold-gradient-text mb-4" aria-hidden="true" />
              <h3 className="font-body font-semibold text-theme text-lg mb-2">No photos here yet</h3>
              <p className="text-sm text-theme-secondary font-light">
                Add photos with this category in <code className="text-gold-500/80">src/data/gallery.js</code>.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── How to add photos ── */}
      <section className="pb-24">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="glass-premium p-10 max-md:p-6">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-11 h-11 min-w-[44px] rounded-xl flex items-center justify-center text-base"
                style={{ background: `rgba(${accentRgb},0.1)`, color: accent }}
                aria-hidden="true"
              >
                <i className="fas fa-plus" />
              </div>
              <div>
                <h2 className="font-body font-semibold text-theme text-lg">Add your photos</h2>
                <p className="text-sm text-theme-muted font-light">
                  New photos are added as files — no database needed.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-sm:gap-4">
              {[
                { step: "1", title: "Drop the photo in", desc: "Copy your picture into the src/assets/activities/ folder" },
                { step: "2", title: "Import it", desc: "Add one import line at the top of src/data/gallery.js" },
                { step: "3", title: "Add an entry", desc: "Give it a title, category (activity / achievement) and a short description" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span
                    className="w-8 h-8 min-w-[32px] rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{ background: `rgba(${accentRgb},0.12)`, color: accent }}
                    aria-hidden="true"
                  >
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-theme mb-1">{s.title}</h3>
                    <p className="text-xs text-theme-secondary font-light leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
            style={{ background: "rgba(5,5,10,0.94)", backdropFilter: "blur(12px)" }}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                         bg-white/[0.06] border border-white/10 text-white/80 hover:text-gold-300
                         hover:border-gold-500/40 hover:bg-gold-500/10 transition-all duration-500 hover:rotate-90"
              aria-label="Close gallery"
            >
              <i className="fas fa-times" />
            </button>

            {/* Counter */}
            <span className="absolute top-7 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] text-white/50 font-medium">
              {lightboxIndex + 1} / {filteredItems.length}
            </span>

            {/* Prev / Next */}
            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-5 max-sm:left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                             bg-white/[0.06] border border-white/10 text-white/80 hover:text-gold-300
                             hover:border-gold-500/40 hover:bg-gold-500/10 transition-all duration-500 hover:-translate-x-1"
                  aria-label="Previous photo"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-5 max-sm:right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
                             bg-white/[0.06] border border-white/10 text-white/80 hover:text-gold-300
                             hover:border-gold-500/40 hover:bg-gold-500/10 transition-all duration-500 hover:translate-x-1"
                  aria-label="Next photo"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </>
            )}

            {/* Image + caption */}
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[1000px] w-full max-h-[88vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[64vh] w-auto max-w-full object-contain rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
              />
              <div className="text-center mt-6 max-w-[640px]">
                <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full"
                    style={{ color: CATEGORY_META[activeItem.category].color, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <i className={`${CATEGORY_META[activeItem.category].icon} text-[10px]`} aria-hidden="true" />
                    {CATEGORY_META[activeItem.category].label}
                  </span>
                  <span className="text-xs text-white/50 font-medium">
                    <i className="far fa-calendar-alt mr-1.5" aria-hidden="true" />
                    {activeItem.date}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-white text-2xl mb-2">{activeItem.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{activeItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
