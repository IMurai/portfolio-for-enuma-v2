import styles from "./Skills.module.css";
import Reveal from "./Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="sectionInner">
        <Reveal>
          <p className="label">{skills.label}</p>
        </Reveal>

        <Reveal>
          <h2 id="skills-heading" className={`heading ${styles.heading}`}>
            The stack I <span className="gradientText">enjoy working with.</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {skills.cards.map((card, i) => (
            <Reveal
              key={card.title}
              className={styles.card}
              variant="scale"
              delay={(i % 2) * 100 + Math.floor(i / 2) * 60}
            >
              <div className={styles.cardHead}>
                <span className={styles.cardIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>

              <ul className={styles.tags}>
                {card.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
