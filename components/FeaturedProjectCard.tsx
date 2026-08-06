import Link from "next/link";
import { project } from "@/data/profile";
import { siteConfig } from "@/config/site";

export function FeaturedProjectCard() {
  return <article className="project-feature"><div className="project-index"><span className="mono-label">Featured project / 01</span><div className="system-mark"><span>DATA</span><b>→</b><span>MODEL</span><b>→</b><span>INSIGHT</span></div></div><div className="project-content"><div className="status"><i /> {project.status}</div><h3>{project.title}</h3><p>{project.description}</p><ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><div className="project-links"><Link className="button" href={`/projects/${project.slug}`}>Read case study →</Link><Link className="text-link" href={siteConfig.links.projectRepository}>View GitHub ↗</Link><Link className="text-link" href={`/projects/${project.slug}#architecture`}>Architecture ↓</Link></div></div></article>;
}
