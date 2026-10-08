"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["about", "skills", "projects", "contact"];

/**
 * Returns the id of the section currently in view so the header
 * can highlight the matching nav link.
 */
export default function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting);
        });

        // pick the first section (in document order) that is visible
        const found = SECTION_IDS.find((id) => visible.get(id));
        setActive(found || "");
      },
      {
        // band that roughly matches the sticky header area
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
