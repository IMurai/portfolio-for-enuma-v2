"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { nav, identity, contact } from "@/data/content";
import useActiveSection from "@/hooks/useActiveSection";

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} onClick={close}>
          <span className={styles.mark} aria-hidden="true">
            R
          </span>
          <span className={styles.wordmark}>{identity.name}</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {nav.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className={`btn btnPrimary ${styles.cta}`}>
            CONTACT ME <span className="arrow">→</span>
          </a>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? styles.burgerOpen : ""} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        hidden={!open}
      >
        <ul className={styles.mobileList}>
          {nav.map((item, i) => (
            <li key={item.href} style={{ "--i": i }}>
              <a href={item.href} onClick={close} className={styles.mobileLink}>
                <span className={styles.mobileIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
                <span className={styles.mobileArrow} aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${contact.email}`}
          onClick={close}
          className={`btn btnPrimary ${styles.mobileCta}`}
        >
          CONTACT ME <span className="arrow">→</span>
        </a>
      </div>
    </header>
  );
}
