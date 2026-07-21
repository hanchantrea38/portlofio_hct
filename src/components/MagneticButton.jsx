import { useRef, useCallback } from "react";

export default function MagneticButton({ children, className = "", as: Tag = "div", strength = 0.3, ...props }) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, []);

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
