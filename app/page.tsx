import { ExperienceItem } from "../components/ExperienceItem";
import { ProfileRail } from "../components/ProfileRail";
import { Section } from "../components/Section";
import {
  aboutParagraphs,
  certifications,
  education,
  experiences,
  navItems,
  profile,
  skills,
} from "../data/profile";

export default function Home() {
  return (
    <main className="layout">
      <ProfileRail navItems={navItems} />

      <div className="content-column">
        <Section id="about" title="About 🧑‍💻">
          <div className="paragraph-stack">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience 💼">
          <div className="timeline">
            {experiences.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.period}`}
                item={experience}
              />
            ))}
          </div>
        </Section>

        <Section id="certification" title="Certifications & Education 🎓">
          <div className="timeline">
            {certifications.map((cert) => (
              <article className="timeline-card" key={cert.name}>
                <header className="timeline-header">
                  <p className="timeline-period">{cert.period}</p>
                  <h3>{cert.name}</h3>
                </header>
                <p className="card-subtitle">{cert.issuer}</p>
                <p>{cert.summary}</p>
              </article>
            ))}
            {education.map((item) => (
              <article
                className="timeline-card"
                key={`${item.degree}-${item.period}`}
              >
                <header className="timeline-header">
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.degree}</h3>
                </header>
                <p className="card-subtitle">{item.institution}</p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills 💻">
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact 📧">
          <p>
            Open to backend, platform, and full-stack engineering opportunities.
            The fastest way to reach me is via{" "}
            <a href="mailto:oliverye9606@gmail.com">email</a>.
          </p>
          <p>
            You can also find me on{" "}
            <a
              href="https://github.com/oOhyeahh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/qiming-oliver-ye-7a6a46121/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </Section>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </main>
  );
}
