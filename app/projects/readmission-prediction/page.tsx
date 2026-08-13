import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { project } from "@/data/profile";

export const metadata: Metadata = { title: `${project.title} | Suhail`, description: project.description };

const workflow = [
  ["01", "Raw data", "100K+ encounters"], ["02", "Eligibility + target", "Define 30-day readmission label"],
  ["03", "Patient-level split", "Zero patient overlap"], ["04", "Feature engineering", "ICD-9 grouping · administrative mappings · semantic missing handling"],
  ["05", "Model development", "Dummy · Logistic Regression · Random Forest · XGBoost · CatBoost"], ["06", "Grouped CV + tuning", "5-fold patient-aware CV · PR-AUC optimization"],
  ["07", "Threshold + selection", "Validation-based operating point · XGBoost selected"], ["08", "Locked test evaluation", "Final untouched test assessment"],
  ["09", "Explainability + errors", "TreeSHAP · TP / TN / FP / FN analysis"],
] as const;
const models = [["CatBoost", "0.222551", "99.8%"], ["Random Forest", "0.221958", "99.5%"], ["XGBoost", "0.221426", "99.5%"], ["Logistic Regression", "0.212923", "95.5%"]] as const;
const nav = [["results", "Results"], ["problem", "Problem"], ["workflow", "Workflow"], ["models", "Models"], ["evaluation", "Test evaluation"], ["explainability", "Explainability"], ["errors", "Error analysis"], ["workflow-fit", "Workflow fit"], ["limitations", "Limitations"]] as const;
const features = ["Discharge disposition", "Prior inpatient utilization", "Primary diagnosis group", "Medical specialty", "Payer information", "Secondary diagnosis group", "Number of diagnoses", "Diabetes medication status", "Insulin status", "Age"];

function SectionTitle({ label, children }: { label: string; children: React.ReactNode }) {
  return <><span className="mono-label">{label}</span><h2>{children}</h2></>;
}

export default function ReadmissionProjectPage() {
  return <SiteShell><main id="main-content">
    <section className="case-hero"><div className="container">
      <Link className="back-link" href="/#projects">← Selected work</Link><div className="status"><i /> Completed retrospective ML study</div>
      <h1>{project.title}</h1><p>{project.description}</p><ul className="tag-list case-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      <div className="case-actions"><Link className="button button-light" href="#results">Explore results ↓</Link><span className="repository-note">Repository link pending verification</span></div>
      <div className="case-meta"><div><span>Domain</span><strong>Healthcare analytics</strong></div><div><span>Primary metric</span><strong>PR-AUC</strong></div><div><span>Evaluation</span><strong>Locked, unseen test set</strong></div></div>
    </div></section>
    <div className="case-layout container"><aside><span className="mono-label">On this page</span><nav aria-label="Case study sections">{nav.map(([id, label], index) => <Link href={`#${id}`} key={id}>{String(index + 1).padStart(2, "0")} {label}</Link>)}</nav></aside>
      <div className="case-content">
        <section id="results" className="case-section"><SectionTitle label="01 / Key results">A recall-first operating point, evaluated once.</SectionTitle>
          <div className="metric-grid"><article><strong>71.2%</strong><span>Recall</span></article><article><strong>0.232</strong><span>PR-AUC</span></article><article><strong>0.680</strong><span>ROC-AUC</span></article><article><strong>10,004</strong><span>Unseen test encounters</span></article></div>
          <p className="result-statement"><strong>799 of 1,122</strong> actual 30-day readmissions identified on the locked test set.</p><p className="case-note">The selected operating point intentionally prioritized recall and therefore produced a substantial false-positive burden.</p>
        </section>
        <section id="problem" className="case-section"><SectionTitle label="02 / Problem + scope">Prioritizing limited follow-up resources.</SectionTitle>
          <p>Hospitals have limited resources for post-discharge follow-up. This retrospective project explores whether machine learning can help prioritize hospital encounters involving patients with diabetes that appear at elevated risk of 30-day readmission.</p>
          <div className="callout"><strong>Role of the model:</strong> risk prioritization, not autonomous clinical decision-making.</div>
          <div className="scope-grid"><article><span className="mono-label">Dataset</span><h3>Diabetes 130-US Hospitals</h3><p>More than 100,000 encounters across 130 U.S. hospitals from 1999–2008.</p></article><article><span className="mono-label">Population</span><h3>Encounters involving diabetes</h3><p>Results should not be generalized to all patients or hospital populations.</p></article></div>
        </section>
        <section id="workflow" className="case-section"><SectionTitle label="03 / ML workflow">From raw encounters to an untouched test.</SectionTitle><div className="split-badge">✓ Zero patient overlap across train, validation, and test sets</div>
          <ol className="workflow-grid">{workflow.map(([number, title, detail]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol>
        </section>
        <section id="models" className="case-section"><SectionTitle label="04 / Model development">Comparison before selection.</SectionTitle>
          <p>DummyClassifier, Logistic Regression, Random Forest, XGBoost, and CatBoost were evaluated. PR-AUC was the primary selection metric because only approximately 11% of encounters were positive.</p>
          <div className="model-table" role="region" aria-label="Tuned validation PR-AUC comparison" tabIndex={0}><table><caption>Tuned validation performance</caption><thead><tr><th scope="col">Model</th><th scope="col">PR-AUC</th><th scope="col">Relative bar</th></tr></thead><tbody>{models.map(([name, value, width]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td><td><span className="bar-track"><i style={{ width }} /></span></td></tr>)}</tbody></table></div>
          <div className="selection-card"><span className="mono-label">Why XGBoost?</span><p>CatBoost achieved slightly higher validation PR-AUC, but XGBoost was selected because it provided comparable predictive performance, slightly better precision and fewer false-positive alerts around the selected ~70% recall operating point, with substantially lower computational cost.</p></div>
        </section>
        <section id="evaluation" className="case-section"><SectionTitle label="05 / Final test evaluation">The false positives stay visible.</SectionTitle><p>The operating threshold was locked before test evaluation and intentionally prioritized recall over precision.</p>
          <div className="evaluation-grid"><dl className="results-list"><div><dt>Test encounters</dt><dd>10,004</dd></div><div><dt>Actual positives</dt><dd>1,122</dd></div><div><dt>PR-AUC</dt><dd>0.232455</dd></div><div><dt>ROC-AUC</dt><dd>0.680048</dd></div><div><dt>Precision</dt><dd>16.35%</dd></div><div><dt>Recall</dt><dd>71.21%</dd></div><div><dt>F1</dt><dd>0.265979</dd></div><div><dt>Flagged</dt><dd>48.84%</dd></div></dl>
            <div className="confusion-wrap"><h3>Confusion matrix</h3><p className="matrix-axis">Predicted outcome →</p><div className="confusion-matrix" aria-label="Confusion matrix: 4,795 true negatives, 4,087 false positives, 323 false negatives, and 799 true positives"><div className="matrix-corner"/><div className="matrix-heading">Not flagged</div><div className="matrix-heading">Flagged</div><div className="matrix-heading">Not readmitted</div><div><strong>4,795</strong><span>True negatives</span></div><div><strong>4,087</strong><span>False positives</span></div><div className="matrix-heading">Readmitted</div><div><strong>323</strong><span>False negatives</span></div><div><strong>799</strong><span>True positives</span></div></div><p className="matrix-axis">↑ Actual outcome</p></div>
          </div>
        </section>
        <section id="explainability" className="case-section"><SectionTitle label="06 / Explainability">What shaped model behavior.</SectionTitle><p>TreeSHAP analysis highlighted the following grouped features. The portfolio includes the final ranked findings here; the source image will be added when a verified export is available.</p>
          <ul className="feature-list">{features.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul><div className="callout"><strong>Interpretation boundary:</strong> SHAP explains model behavior and association, not medical causality.</div>
        </section>
        <section id="errors" className="case-section"><SectionTitle label="07 / Error analysis">Where the classifier struggled.</SectionTitle><div className="error-grid"><article><span className="mono-label">Missed readmissions</span><strong>323 false negatives</strong><p>Missed readmissions generally had weaker historical utilization signals than correctly identified readmissions, including fewer prior inpatient and emergency encounters, and were more frequently discharged home.</p></article><article><span className="mono-label">False alerts</span><strong>4,087 false positives</strong><p>False-positive encounters often showed stronger risk-like patterns, including greater prior utilization, longer stays, more medications, more diagnoses, and more laboratory procedures.</p></article></div></section>
        <section id="workflow-fit" className="case-section"><SectionTitle label="08 / Real-world workflow">A flag prompts review—not a decision.</SectionTitle><ol className="care-flow"><li>Patient discharge</li><li>Risk score</li><li>Elevated-risk flag</li><li>Care-team review</li><li>Possible follow-up</li></ol><div className="followup-list"><span>Medication review</span><span>Earlier follow-up appointment</span><span>Discharge-plan review</span><span>Care coordination</span></div><p className="case-note"><strong>Clinical decisions remain with healthcare professionals.</strong></p></section>
        <section id="limitations" className="case-section"><SectionTitle label="09 / Limitations">Evidence boundaries matter.</SectionTitle><div className="limitation-grid"><article><h3>Historical data</h3><p>1999–2008 encounters may not reflect modern clinical practice.</p></article><article><h3>False-positive burden</h3><p>Higher recall required flagging many encounters that were not readmitted.</p></article><article><h3>No prospective clinical validation</h3><p>The model was evaluated retrospectively and has not been validated for clinical deployment.</p></article><article><h3>Population scope</h3><p>Results apply to this diabetic hospital-encounter dataset and should not be generalized to all patients.</p></article></div><p className="fine-print">Further work should investigate subgroup disparities. Results are associative, not causal, and deployment would require prospective validation plus a clinically validated threshold.</p></section>
      </div>
    </div>
    <section className="case-cta"><div className="container"><span className="eyebrow">Technical implementation</span><h2>Want the technical details?</h2><p>The repository contains the preprocessing pipeline, tests, tuning, SHAP analysis, and error-analysis artifacts. A verified public repository link will appear here once configured.</p><Link className="button button-light" href="/#projects">Back to selected work</Link></div></section>
  </main></SiteShell>;
}
