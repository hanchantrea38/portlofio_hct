import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const requestRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const isTouchDevice = useRef(false);

  const updateFollower = useCallback(() => {
    if (!followerRef.current || !cursorRef.current) return;

    // Smooth follow for the trailing dot
    followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.12;
    followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.12;

    // Main cursor follows instantly
    cursorRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;

    // Follower trails behind smoothly
    followerRef.current.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`;

    requestRef.current = requestAnimationFrame(updateFollower);
  }, []);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      isTouchDevice.current = true;
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.classList.contains("btn-premium") ||
        target.classList.contains("btn-outline") ||
        target.classList.contains("tag-premium") ||
        target.classList.contains("card-premium") ||
        target.closest(".card-premium") ||
        target.closest(".tag-premium");

      if (isClickable && !isHovering.current) {
        isHovering.current = true;
        cursorRef.current?.classList.add("cursor-hover");
        followerRef.current?.classList.add("follower-hover");
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      
      // Don't un-hover if relatedTarget is still inside the same clickable
      if (relatedTarget && target.closest("a")?.contains(relatedTarget)) {
        return;
      }
      if (relatedTarget && target.closest("button")?.contains(relatedTarget)) {
        return;
      }

      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");

      if (isClickable && isHovering.current) {
        isHovering.current = false;
        cursorRef.current?.classList.remove("cursor-hover");
        followerRef.current?.classList.remove("follower-hover");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    requestRef.current = requestAnimationFrame(updateFollower);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [updateFollower]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          background: "#d4a574",
          transform: "translate(0, 0)",
          transition: "width 0.3s, height 0.3s, background 0.3s",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      {/* Trailing follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full pointer-events-none z-[9999]"
        style={{
          border: "1.5px solid rgba(212, 165, 116, 0.4)",
          background: "rgba(212, 165, 116, 0.04)",
          transform: "translate(0, 0)",
          transition: "width 0.4s, height 0.4s, border-color 0.4s, background 0.4s",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      <style>{`
        .cursor-hover {
          width: 0 !important;
          height: 0 !important;
          opacity: 0 !important;
        }
        .follower-hover {
          width: 48px !important;
          height: 48px !important;
          margin-left: -24px !important;
          margin-top: -24px !important;
          border-color: rgba(212, 165, 116, 0.6) !important;
          background: rgba(212, 165, 116, 0.08) !important;
          backdrop-filter: blur(4px);
        }
        @media (pointer: coarse) {
          .custom-cursor-wrapper { display: none; }
        }
      `}</style>
    </>
  );
}
