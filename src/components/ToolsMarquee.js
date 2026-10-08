import styles from "./ToolsMarquee.module.css";
import { marquee } from "@/data/content";

function Group({ tools, hidden }) {
  return (
    <span
      className={styles.group}
      aria-hidden={hidden ? "true" : undefined}
    >
      {tools.map((tool) => (
        <span key={tool} className={styles.item}>
          <span className={styles.dot} aria-hidden="true" />
          {tool}
        </span>
      ))}
    </span>
  );
}

export default function ToolsMarquee() {
  return (
    <section className={styles.section} aria-label={marquee.label}>
      <div className={styles.labelRow}>
        <span className={styles.label}>{marquee.label}</span>
        <span className={styles.rule} aria-hidden="true" />
      </div>

      <div className={styles.trackWrap} tabIndex={0}>
        <div className={styles.track}>
          <Group tools={marquee.tools} />
          {/* duplicated copy keeps the loop seamless; hidden from screen readers */}
          <Group tools={marquee.tools} hidden />
        </div>
      </div>
    </section>
  );
}
