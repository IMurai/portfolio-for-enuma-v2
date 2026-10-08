import styles from "./Projects.module.css";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="sectionInner">
        <Reveal>
          <p className="label">{projects.label}</p>
        </Reveal>

        <Reveal>
          <div className={styles.intro}>
            <h2 id="projects-heading" className={`heading ${styles.heading}`}>
              School projects I&apos;m <span className="gradientText">proud of.</span>
            </h2>
            <p className={styles.note}>
              Built as part of my studies at SMKN 6 Surakarta — more coming
              soon.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {projects.items.map((project, i) => (
            <Reveal key={project.id} variant="up" delay={i * 140}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
