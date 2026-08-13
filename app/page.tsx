import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { LeadershipSection } from "@/components/LeadershipSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteShell } from "@/components/SiteShell";
import { ToolsStrip } from "@/components/ToolsStrip";
import { SelectedWorkCarousel } from "../components/SelectedWorkCarousel";
import { TechnologyStack } from "../components/TechnologyStack";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <Hero />
        <ToolsStrip />
        <AboutSection />
        <section id="experience" className="section section-tint">
          <div className="container">
            <SectionHeading eyebrow="02 / Experience" title="Work at the intersection of data, systems, and care." />
            <ExperienceTimeline />
          </div>
        </section>
        <LeadershipSection />
        <section id="projects" className="section section-tint">
          <div className="container">
            <div className="selected-work-heading">
              <span className="eyebrow">04 / Selected work</span>
              <h2>From complex data<br />{" "}to intelligent systems.</h2>
            </div>
            <SelectedWorkCarousel />
          </div>
        </section>
        <TechnologyStack />
        <section id="writing" className="section writing-section">
          <div className="container writing-layout">
            <div className="writing-intro">
              <span className="eyebrow">06 / Writing</span>
              <h2>Thinking beyond<br />the model.</h2>
              <p>Technical writing on applied machine learning, data science, reproducibility, and the engineering decisions that turn models into reliable systems.</p>
            </div>
            <div className="article-index">
              <article className="article-index-row">
                <span className="article-number">01</span>
                <div><h3>Preventing Data Leakage in Machine Learning</h3><span className="article-category">Machine Learning · Data Quality</span></div>
                <span className="article-status">Planned</span>
              </article>
              <article className="article-index-row">
                <span className="article-number">02</span>
                <div><h3>From Notebook to Production: Building Reproducible ML Pipelines</h3><span className="article-category">MLOps · ML Engineering</span></div>
                <span className="article-status">Planned</span>
              </article>
              <article className="article-index-row">
                <span className="article-number">03</span>
                <div><h3>Forecasting Real-World Demand: What Makes Time-Series ML Different</h3><span className="article-category">Forecasting · Applied ML</span></div>
                <span className="article-status">Planned</span>
              </article>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
    </SiteShell>
  );
}
