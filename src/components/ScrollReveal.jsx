import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  direction = "up",
}) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const getTransform = () => {
    if (direction === "up") return "translateY(50px)";
    if (direction === "left") return "translateX(-50px)";
    if (direction === "right") return "translateX(50px)";
    if (direction === "scale") return "scale(0.85)";
    return "translateY(50px)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : getTransform(),
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
