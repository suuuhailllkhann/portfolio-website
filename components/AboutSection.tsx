import { education } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return <section id="about" className="section"><div className="container"><SectionHeading eyebrow="01 / About" title="Data fluency, engineering discipline." /><div className="about-grid"><div className="about-copy"><p>I’m a Data Scientist and Machine Learning Engineer with experience spanning healthcare data analytics, Python development, SQL and PostgreSQL, ETL pipelines, REST APIs, AWS infrastructure, and backend systems.</p><p>My focus is production-oriented machine learning: building reliable data foundations, evaluating models responsibly, and translating complex technical work into systems teams can trust.</p></div><div className="education"><span className="mono-label">Education</span>{education.map((item) => <article key={item.degree}><h3>{item.degree}</h3><p>{item.school}</p><small>{item.detail}</small></article>)}</div></div></div></section>;
}
