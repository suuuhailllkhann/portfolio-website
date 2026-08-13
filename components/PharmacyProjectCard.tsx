export function PharmacyProjectCard() {
  const tags = ["Python", "PostgreSQL", "MLflow", "FastAPI", "Docker", "AWS"];

  return (
    <article className="project-feature pharmacy-project">
      <div className="pharmacy-project-visual">
        <img src="/pharmacy-demand-project.png" alt="Pharmacy demand history, forecast curve, and production workflow" />
      </div>
      <div className="project-content">
        <div className="status"><i /> Production ML system</div>
        <h3>Pharmacy Demand Forecasting &amp; MLOps Pipeline - NYRX</h3>
        <ul className="tag-list">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <ul className="pharmacy-summary">
          <li>Engineered temporal, lag, rolling, and calendar features from pharmacy billing and ordering history and compared forecasting approaches using time-aware validation and baseline-relative evaluation.</li>
          <li>Built a reproducible ML lifecycle covering experiment tracking, model versioning, automated testing, containerized inference, prediction logging, and monitoring for integration with existing application workflows.</li>
        </ul>
        <div className="project-links">
          <span className="button is-disabled" aria-disabled="true" title="Project details link is not configured">View project details <span aria-hidden="true">→</span></span>
          <span className="text-link is-disabled" aria-disabled="true" title="GitHub link is not configured">View code on GitHub <span aria-hidden="true">↗</span></span>
        </div>
      </div>
    </article>
  );
}
