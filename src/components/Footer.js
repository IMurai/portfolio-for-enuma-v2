import styles from "./Footer.module.css";
import { footer, identity } from "@/data/content";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.mark} aria-hidden="true">
            R
          </span>
          <span className={styles.copyright}>{footer.copyright}</span>
        </div>

        <nav className={styles.meta} aria-label="Footer">
          <a href="#top" className={styles.link}>
            BACK TO TOP <span aria-hidden="true">↑</span>
          </a>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <span className={styles.link}>{footer.builtWith}</span>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <span className={styles.link}>{identity.location}</span>
        </nav>
      </div>
    </footer>
  );
}
