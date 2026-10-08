"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wrapper that fades/slides its child into view once it enters the viewport.
 * Respects prefers-reduced-motion (content is shown immediately).
 *
 * variant: "up" | "left" | "right" | "scale"
 * delay:   milliseconds of stagger for siblings
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "revealFromLeft"
      : variant === "right"
        ? "revealFromRight"
        : variant === "scale"
          ? "revealScale"
          : "";

  return (
    <Tag
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={`reveal ${variantClass} ${revealed ? "isRevealed" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
