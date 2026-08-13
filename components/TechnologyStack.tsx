import { LuActivity, LuBox, LuBrain, LuChartColumn, LuChartNoAxesCombined, LuCloud, LuCodeXml, LuCog, LuCrosshair, LuDatabase, LuMonitor, LuShieldCheck, LuTable2 } from "react-icons/lu";

const groups = [
  { number: "01", title: "Programming", icon: LuCodeXml, tags: ["Python", "SQL", "JavaScript"] },
  { number: "02", title: "Machine Learning & Data Science", icon: LuBrain, tags: ["pandas", "NumPy", "scikit-learn", "XGBoost", "SciPy", "statsmodels", "SHAP"], details: ["Feature Engineering", "Predictive Modeling", "Time-Series Forecasting", "Model Evaluation"] },
  { number: "03", title: "MLOps & ML Engineering", icon: LuCog, tags: ["MLflow", "FastAPI", "Docker", "GitHub Actions"], details: ["Experiment Tracking", "Model Versioning", "Model Serving", "Monitoring"] },
  { number: "04", title: "Data & Visualization", icon: LuChartColumn, tags: ["PostgreSQL", "Redis", "Excel", "Power BI", "Tableau", "Matplotlib"] },
  { number: "05", title: "Cloud & Production", icon: LuCloud, tags: ["AWS", "REST APIs", "Node.js", "Express.js", "Nginx", "Linux", "Git / GitHub"], footer: "EC2  ·  S3  ·  RDS  ·  IAM" },
] as const;

const lifecycle = [
  { title: "Data Sources", text: "Collect & Ingest", icon: LuDatabase }, { title: "Prepare", text: "Clean & Transform", icon: LuTable2 },
  { title: "Model", text: "Train & Validate", icon: LuChartNoAxesCombined }, { title: "Deploy", text: "Serve & Scale", icon: LuBox },
] as const;

export function TechnologyStack() {
  return <section id="skills" className="section technology-stack"><div className="technology-container">
    <span className="eyebrow">05 / Technology Stack</span>
    <div className="technology-layout">
      <div className="technology-intro"><h2>From modeling<br />to production.</h2><i aria-hidden="true" /><p>A connected stack of technologies and practices I use across the machine learning lifecycle.</p>
        <div className="systems-card"><h3>Built for real-world systems</h3>
          <div><LuCrosshair /><p><strong>End-to-end coverage</strong><span>From data to deployment</span></p></div>
          <div><LuShieldCheck /><p><strong>Production ready</strong><span>Scalable, reliable, and monitored</span></p></div>
          <div><LuChartColumn /><p><strong>Continuous improvement</strong><span>Track, evaluate, and iterate</span></p></div>
        </div>
      </div>
      <div className="technology-groups">{groups.map(({ number, title, icon: Icon, tags, ...group }) => <article className="technology-group" key={title}>
        <div className="technology-node"><b>{number}</b><span><Icon /></span><i /></div>
        <div className="technology-group-body"><h3>{title}</h3><ul className="technology-tags">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          {"details" in group && group.details && <ul className="technology-details">{group.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}
          {"footer" in group && group.footer && <p className="technology-footer">{group.footer}</p>}
        </div></article>)}</div>
    </div>
    <div className="stack-lifecycle"><h3>The stack in action</h3><div className="lifecycle-flow">{lifecycle.map(({ title, text, icon: Icon }, index) => <div className="lifecycle-step" key={title}><Icon /><p><strong>{title}</strong><span>{text}</span></p><b>→</b></div>)}<div className="lifecycle-step lifecycle-monitor"><span className="monitor-icon"><LuMonitor /><LuActivity /></span><p><strong>Monitor</strong><span>Track &amp; Improve</span></p></div></div></div>
  </div></section>;
}
