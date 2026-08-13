import { experience } from "@/data/profile";

export function ExperienceTimeline() {
  return <div className="career-timeline">{experience.map((item, index) => <article className="career-entry" key={item.company}><div className="career-number">{String(index + 1).padStart(2, "0")}</div><div className="career-body"><header><h3>{item.company}</h3><p>{item.location}</p></header><div className="career-roles">{item.roles.map((role) => <section className={`career-role${role.current ? " is-current" : ""}`} key={role.title}><div className="role-marker" aria-hidden="true"><i/></div><div className="role-content"><div className="role-heading"><h4>{role.title}</h4><div><time>{role.dates}</time>{role.current && <span className="current-label">Current</span>}</div></div><ul>{role.contributions.map((point) => <li key={point}>{point}</li>)}</ul></div></section>)}</div></div></article>)}</div>;
}
