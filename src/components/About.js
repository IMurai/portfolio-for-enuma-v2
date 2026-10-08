import styles from "./About.module.css";
import Reveal from "./Reveal";
import { about } from "@/data/content";

/* tiny inline icons so the icon boxes stay dependency-free */
const icons = {
  pen: (
    <>
      <path d="M4 16.5 15.5 5l3.5 3.5L7.5 20 3.5 20.5 4 16.5Z" />
      <path d="M13.5 7 17 10.5" />
    </>
  ),
  code: (
    <>
      <path d="M9 7 4 12l5 5" />
      <path d="M15 7l5 5-5 5" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" />
      <path d="M10.5 18h3" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V11" />
      <path d="M10 20V5" />
      <path d="M16 20v-6" />
      <path d="M21 20H3" />
    </>
  ),
};

export default function About() {
  return (
    <section
      id="about"
      className="section"
      aria-labelledby="about-heading"
    >
      <div className="sectionInner">
        <Reveal>
          <p className="label">{about.label}</p>
        </Reveal>

        <div className={styles.top}>
          <Reveal variant="left" className={styles.headingCol}>
            <h2 id="about-heading" className={`heading ${styles.heading}`}>
              {about.heading}
            </h2>
          </Reveal>

          <div className={styles.copyCol}>
            {about.paragraphs.map((text, i) => (
              <Reveal key={i} variant="right" delay={i * 120}>
                <p
                  className={`${styles.paragraph} ${i === 0 ? styles.lead : ""}`}
                >
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <ul className={styles.rows}>
          {about.rows.map((row, i) => (
            <Reveal
              as="li"
              key={row.id}
              className={styles.row}
              delay={i * 90}
            >
              <span className={styles.rowIndex}>{row.id}</span>
              <span className={styles.rowTitle}>{row.title}</span>
              <span className={styles.rowLine}>{row.line}</span>
              <span className={styles.rowIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
                  {icons[row.icon]}
                </svg>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
