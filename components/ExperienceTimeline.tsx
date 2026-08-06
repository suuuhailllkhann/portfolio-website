import { experience } from "@/data/profile";

export function ExperienceTimeline() {
  return <div className="timeline">{experience.map((item, index) => <article className="experience-card" key={`${item.role}-${item.company}`}><div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="experience-main"><div className="experience-top"><div><h3>{item.role}</h3><p>{item.company}</p></div><div><time>{item.dates}</time>{item.current && <span className="status"><i /> Current</span>}</div></div>{item.context && <span className="context">{item.context}</span>}<p className="experience-description">{item.description}</p>{item.contributions.length > 0 && <ul>{item.contributions.map((point) => <li key={point}>{point}</li>)}</ul>}</div></article>)}</div>;
}
