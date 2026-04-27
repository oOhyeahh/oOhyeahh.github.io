import { ExperienceEntry } from "../data/profile";

type ExperienceItemProps = {
  item: ExperienceEntry;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="timeline-card">
      <header className="timeline-header">
        <p className="timeline-period">{item.period}</p>
        <h3>
          {item.role} · {item.company}
        </h3>
      </header>

      <ul className="highlights">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <ul className="tag-list" aria-label={`${item.company} technologies`}>
        {item.tech.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
