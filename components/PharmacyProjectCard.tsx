import Link from "next/link";

export function PharmacyProjectCard() {
  const tags = ["Python", "scikit-learn", "MLflow", "FastAPI", "PostgreSQL", "Docker"];

  return (
    <article className="project-feature pharmacy-project">
      <div className="pharmacy-project-visual">
        <img src="/pharmacy-project.webp" alt="Pharmacy data workflow from operational records to model-assisted follow-up" loading="lazy" decoding="async" fetchPriority="low" />
      </div>
      <div className="project-content">
        <div className="status"><i /> Applied ML platform · synthetic data</div>
        <h3>Pharmacy Reconciliation &amp; Prescription Renewal ML Platform</h3>
        <ul className="tag-list">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <p>Built an end-to-end Applied ML system for leakage-safe prescription-renewal prediction, operational follow-up workflows, and containerized deployment using entirely synthetic pharmacy data.</p>
        <div className="project-links">
          <Link className="button" href="/projects/pharmacy-reconciliation-ml">Read Project <span aria-hidden="true">→</span></Link>
          <a className="text-link" href="https://github.com/suuuhailllkhann/pharmacy-reconciliation-ml" target="_blank" rel="noreferrer">View code on GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}
