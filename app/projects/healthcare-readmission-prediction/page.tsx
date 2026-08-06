import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { project } from "@/data/profile";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: `${project.title} | Suhail`, description: project.description };

const sections = [
  ["01", "Problem definition", "Develop a reproducible classification workflow to investigate the risk of healthcare readmission. The project is an engineering and research demonstration—not a clinical decision tool."],
  ["02", "Healthcare context", "Readmission modeling sits within a complex care environment. Clinical relevance, unequal error costs, workflow fit, and data provenance all matter alongside predictive performance."],
  ["03", "Dataset", "Dataset documentation, cohort definition, source provenance, inclusion criteria, and final sample size will be added after the data audit is complete."],
  ["04", "Data preparation", "The planned pipeline covers schema checks, missingness review, type validation, clinically informed cleaning, repeatable transformations, and documented exclusions."],
  ["05", "Leakage prevention", "Candidate features are reviewed against the prediction timestamp. Variables created after the outcome window—or acting as proxies for the target—are excluded before modeling."],
  ["06", "Patient-level splitting", "Train, validation, and test partitions are created at the patient level so records from one person cannot appear across multiple partitions."],
  ["07", "Exploratory analysis", "Analysis will examine missingness, distributions, class balance, temporal patterns, subgroup behavior, and plausible clinical relationships without using the held-out test set for iteration."],
  ["08", "Feature engineering", "Planned work includes clinically reasoned transformations, careful encoding, robust missing-value handling, and pipeline-contained preprocessing to prevent cross-fold contamination."],
  ["09", "Model development", "Baselines and candidate models include Logistic Regression, Random Forest, XGBoost, and CatBoost, evaluated through consistent pipelines and cross-validation."],
  ["10", "Evaluation strategy", "Evaluation will prioritize discrimination, calibration, threshold behavior, and class-imbalance-aware measures. Results will be published only after validation is complete."],
  ["11", "Explainability", "SHAP and model-specific diagnostics are planned to study model behavior—not to present feature attribution as causal or as clinical explanation."],
  ["12", "Error analysis", "False positives and false negatives will be inspected across relevant cohorts, thresholds, and data-quality conditions to understand failure modes."],
  ["13", "System architecture", "A modular pipeline will separate ingestion, validation, preprocessing, training, evaluation, explainability, and reporting for maintainability and repeatable execution."],
  ["14", "Reproducibility", "Configuration files, fixed seeds, environment documentation, versioned artifacts, structured experiments, and comprehensive project notes are part of the intended workflow."],
  ["15", "Ethical considerations", "The project considers privacy, subgroup performance, representativeness, automation bias, transparency, and the risk of harmful use outside its intended research context."],
  ["16", "Limitations", "The model is not deployed, clinically validated, or approved for clinical use. Dataset, external validity, subgroup, and operational limitations will be documented as evidence becomes available."],
  ["17", "Future work", "Complete the data audit, finalize cohort rules, benchmark pipelines, perform error and subgroup analysis, add reproducible reporting, and seek domain-informed review."],
] as const;

const placeholders = ["Model comparison table", "Evaluation curves", "Confusion matrix", "SHAP summary", "Feature importance", "Error analysis findings"];

export default function ProjectPage() {
  return <SiteShell><main id="main-content"><section className="case-hero"><div className="container"><Link className="back-link" href="/#projects">← Selected work</Link><div className="status"><i /> {project.status}</div><h1>{project.title}</h1><p>{project.description}</p><div className="case-actions"><Link className="button" href={siteConfig.links.projectRepository}>View GitHub repository ↗</Link><Link className="text-link" href="#architecture">View architecture ↓</Link></div><div className="case-meta"><div><span>Domain</span><strong>Healthcare AI</strong></div><div><span>Focus</span><strong>Responsible classification</strong></div><div><span>Stage</span><strong>Research & development</strong></div></div></div></section><section className="case-layout container"><aside><span className="mono-label">On this page</span><nav aria-label="Case study sections">{sections.map(([number, title]) => <Link href={`#section-${number}`} key={number}>{number} {title}</Link>)}</nav></aside><div className="case-content">{sections.map(([number, title, copy]) => <section id={`section-${number}`} key={number} className="case-section"><span className="mono-label">{number}</span><h2>{title}</h2><p>{copy}</p>{number === "09" && <ul className="tag-list">{project.methods.map((method) => <li key={method}>{method}</li>)}</ul>}{number === "10" && <div className="placeholder-grid">{placeholders.map((item) => <div key={item}><span>Pending results</span><strong>{item}</strong><p>This block is ready for validated project output.</p></div>)}</div>}{number === "13" && <div className="architecture" id="architecture"><span>DATA</span><b>→</b><span>VALIDATE</span><b>→</b><span>TRAIN</span><b>→</b><span>EVALUATE</span><b>→</b><span>EXPLAIN</span></div>}</section>)}</div></section><section className="case-cta"><div className="container"><span className="eyebrow">Project status</span><h2>Careful work is still underway.</h2><p>Verified metrics, findings, and artifacts will be added as the project progresses.</p><Link className="button button-light" href={siteConfig.links.projectRepository}>Follow the repository ↗</Link></div></section></main></SiteShell>;
}
