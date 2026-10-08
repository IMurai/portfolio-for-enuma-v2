import Image from "next/image";
import styles from "./ProjectCard.module.css";

function BrowserFrame({ project }) {
  const { media } = project;

  return (
    <div className={styles.browser}>
      <div className={styles.browserBar}>
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.urlBar}>{media.url}</span>
      </div>

      <div className={styles.browserBody}>
        {media.screenshot ? (
          <Image
            src={media.screenshot}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={styles.shot}
          />
        ) : (
          <div className={styles.pending}>
            <span className={styles.pendingBox} aria-hidden="true" />
            <span className={styles.pendingText}>SCREENSHOT PENDING</span>
          </div>
        )}
      </div>
    </div>
  );
}

function PhoneFrame({ project }) {
  const { media } = project;

  return (
    <div className={styles.phoneStage}>
      <div className={styles.phone}>
        <span className={styles.notch} aria-hidden="true" />
        <div className={styles.phoneBody}>
          {media.screenshot ? (
            <Image
              src={media.screenshot}
              alt={`Screenshot of ${project.title}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={styles.shot}
            />
          ) : (
            <div className={styles.pending}>
              <span className={styles.pendingBox} aria-hidden="true" />
              <span className={styles.pendingText}>SCREENSHOT PENDING</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { links } = project;
  const hasGithub = Boolean(links.github);
  const hasDemo = Boolean(links.demo?.href);

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <span className={styles.category}>{project.category}</span>
        <span className={styles.headRule} aria-hidden="true" />
      </div>

      <div className={styles.media}>
        {project.media.type === "phone" ? (
          <PhoneFrame project={project} />
        ) : (
          <BrowserFrame project={project} />
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.badge}>{project.status}</span>
        </div>

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {hasGithub ? (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnGhost"
            >
              GITHUB <span className="arrow">↗</span>
            </a>
          ) : (
            <button type="button" className="btn btnDisabled" disabled>
              GITHUB <span className="arrow">↗</span>
            </button>
          )}

          {hasDemo ? (
            <a
              href={links.demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnGhost"
            >
              {links.demo.label} <span className="arrow">↗</span>
            </a>
          ) : (
            <button type="button" className="btn btnDisabled" disabled>
              {links.demo?.label || "LINK"} <span className="arrow">↗</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
