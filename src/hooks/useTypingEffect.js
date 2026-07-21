import { useState, useEffect, useCallback } from "react";

export function useTypingEffect(phrases, { typeSpeed = 80, deleteSpeed = 40, pauseDuration = 2000 } = {}) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Respect reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      setText(currentPhrase.substring(0, text.length - 1));
    } else {
      setText(currentPhrase.substring(0, text.length + 1));
    }
  }, [phrases, phraseIndex, isDeleting, text.length]);

  useEffect(() => {
    // If user prefers reduced motion, show the first phrase and stop
    if (prefersReducedMotion) {
      setText(phrases[0] || "");
      return;
    }

    const currentPhrase = phrases[phraseIndex];

    let timeout;

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting, phrases, tick, typeSpeed, deleteSpeed, pauseDuration, prefersReducedMotion]);

  return text;
}
