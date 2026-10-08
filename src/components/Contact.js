import styles from "./Contact.module.css";
import Reveal from "./Reveal";
import { contact } from "@/data/content";

const icons = {
  GitHub: (
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.47.09.65-.2.65-.45v-1.6c-2.65.58-3.2-1.28-3.2-1.28-.43-1.1-1.06-1.4-1.06-1.4-.87-.6.07-.58.07-.58.96.07 1.47 1 1.47 1 .85 1.47 2.24 1.05 2.79.8.08-.62.33-1.05.6-1.29-2.11-.24-4.33-1.06-4.33-4.7 0-1.04.37-1.89.98-2.55-.1-.24-.42-1.2.09-2.51 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.77 0c1.82-1.24 2.62-.98 2.62-.98.51 1.31.19 2.27.09 2.51.61.66.98 1.51.98 2.55 0 3.65-2.23 4.46-4.35 4.7.34.3.65.88.65 1.78v2.63c0 .25.17.55.65.45A9.5 9.5 0 0 0 12 2.5Z" />
  ),
  LinkedIn: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.76-1.75-2.76-1.75 0-2.02 1.31-2.02 2.67v5.14h-4v-11Z" />
  ),
  Instagram: (
    <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm5.1-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
  ),
};

const highlightContact = (heading, highlight) => {
  if (!highlight || !heading.includes(highlight)) return heading;
  const [before, ...rest] = heading.split(highlight);
  return (
    <>
      {before}
      <span className="gradientText">{highlight}</span>
      {rest.join(highlight)}
    </>
  );
};

export default function Contact() {
  return (
    <section
      id="contact"
      className={`section ${styles.section}`}
      aria-labelledby="contact-heading"
    >
      <div className="sectionInner">
        <Reveal>
          <p className="label">{contact.label}</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 id="contact-heading" className={`heading ${styles.heading}`}>
            {highlightContact(contact.heading, contact.headingHighlight)}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className={styles.subtext}>{contact.subtext}</p>
        </Reveal>

        <Reveal delay={220}>
          <div className={styles.actions}>
            <a href={`mailto:${contact.email}`} className={`btn btnPrimary ${styles.email}`}>
              {contact.emailButton} <span className="arrow">→</span>
            </a>

            <div className={styles.socials}>
              {contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <span className={styles.socialIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      {icons[social.name]}
                    </svg>
                  </span>
                  <span className={styles.socialText}>
                    <span className={styles.socialName}>{social.name}</span>
                    <span className={styles.socialHandle}>{social.handle}</span>
                  </span>
                  <span className={styles.socialArrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className={styles.emailLine}>
            OR REACH ME AT{" "}
            <a href={`mailto:${contact.email}`} className={styles.emailLink}>
              {contact.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
