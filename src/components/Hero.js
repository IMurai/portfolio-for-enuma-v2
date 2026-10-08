import styles from "./Hero.module.css";
import DotArt from "./DotArt";
import Reveal from "./Reveal";
import { hero, identity } from "@/data/content";

const identityCard = [
  { label: "NAME", value: identity.name },
  { label: "CLASS", value: identity.class },
  { label: "SCHOOL", value: identity.schoolShort },
  { label: "GOAL", value: identity.goal },
];

export default function Hero() {
  return (
    <section id="top" className={`section ${styles.hero}`} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <Reveal>
          <p className="label">{hero.label}</p>
        </Reveal>

        <Reveal delay={90}>
          <h1 id="hero-heading" className={styles.headline}>
            {hero.headline.map((part, i) =>
              part.gradient ? (
                <span key={i} className="gradientText">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className={styles.subtext}>{hero.subtext}</p>
        </Reveal>

        <Reveal delay={260}>
          <div className={styles.actions}>
            <a href={hero.primaryCta.href} className="btn btnPrimary">
              {hero.primaryCta.label} <span className="arrow">→</span>
            </a>
            <a href={hero.secondaryCta.href} className="btn btnSecondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>

      {/* photo replacement: pixel/dot-matrix halftone artwork */}
      <DotArt />

      <Reveal variant="scale" delay={80}>
        <dl className={styles.identity}>
          {identityCard.map((item) => (
            <div key={item.label} className={styles.identityItem}>
              <dt className={styles.identityLabel}>{item.label}</dt>
              <dd className={styles.identityValue}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
