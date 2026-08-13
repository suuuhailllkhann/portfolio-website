import Link from "next/link";
import { LuChartNoAxesCombined, LuCpu, LuDatabase } from "react-icons/lu";
import { project } from "@/data/profile";

export function FeaturedProjectCard() {
  return (
    <article className="project-feature">
      <div className="project-index">
        <img className="project-data-visual" src="/selected-work-data-flow.png" alt="" aria-hidden="true" />
        <span className="mono-label">Featured project&nbsp; / &nbsp;01</span>
        <div className="system-mark" aria-label="Data to model to insight workflow">
          <div className="system-stage"><span><LuDatabase aria-hidden="true" /></span><div><strong>DATA</strong><small>Patient Records</small></div></div>
          <b aria-hidden="true">→</b>
          <div className="system-stage"><span><LuCpu aria-hidden="true" /></span><div><strong>MODEL</strong><small>Risk Prediction</small></div></div>
          <b aria-hidden="true">→</b>
          <div className="system-stage"><span><LuChartNoAxesCombined aria-hidden="true" /></span><div><strong>INSIGHT</strong><small>Clinical Decision</small></div></div>
        </div>
      </div>
      <div className="project-content">
        <div className="status"><i /> {project.status}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <div className="project-links">
          <Link className="button" href={`/projects/${project.slug}`}>Read case study <span aria-hidden="true">→</span></Link>
          <Link className="text-link" href={`/projects/${project.slug}#workflow`}>View workflow <span aria-hidden="true">↓</span></Link>
        </div>
      </div>
    </article>
  );
}
