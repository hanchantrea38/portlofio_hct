import { useTypingEffect } from "../hooks/useTypingEffect";

export default function TypingEffect({ phrases, className = "" }) {
  const text = useTypingEffect(phrases);

  return (
    <span
      className={`border-r-3 border-primary-300 pr-1.5 animate-cursor ${className}`}
      aria-label="Typing animation showing roles"
    >
      {text}
    </span>
  );
}
