import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-7 right-7 w-11 h-11 rounded-xl flex items-center justify-center
                 text-white border-none cursor-pointer text-sm z-10
                 transition-all duration-500 ease-out
                 bg-gradient-to-br from-royal-500/80 to-gold-500/20
                 backdrop-blur-xl border border-gold-500/20
                 shadow-[0_4px_20px_rgba(124,58,237,0.2)]
                 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(212,165,116,0.2)]
                 active:-translate-y-0.5 active:scale-95
                 max-sm:w-10 max-sm:h-10 max-sm:text-xs max-sm:bottom-5 max-sm:right-5
                 ${visible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-5"}`}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
