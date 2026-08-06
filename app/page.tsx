import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteShell } from "@/components/SiteShell";
import { articles, certification, skillGroups } from "@/data/profile";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <Hero />
        <AboutSection />
        <section id="experience" className="section">
          <div className="container">
            <SectionHeading eyebrow="02 / Experience" title="Work at the intersection of data, systems, and care." />
            <ExperienceTimeline />
          </div>
        </section>
        <section id="projects" className="section section-tint">
          <div className="container">
            <SectionHeading eyebrow="03 / Selected work" title="Machine learning, designed for real-world constraints." />
            <FeaturedProjectCard />
          </div>
        </section>
        <section id="skills" className="section">
          <div className="container">
            <SectionHeading eyebrow="04 / Technical toolkit" title="A practical stack for data products." />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <article className="cert-card">
              <div><span className="mono-label">Certification</span><h3>{certification.title}</h3></div>
              <Link href={certification.url}>View credential <span aria-hidden="true">↗</span></Link>
            </article>
          </div>
        </section>
        <section id="writing" className="section section-tint">
          <div className="container">
            <SectionHeading eyebrow="05 / Writing" title="Notes on responsible, reproducible ML." description="Planned technical articles drawn from current project work." />
            <div className="article-grid">
              {articles.map((article, index) => (
                <article className="article-card" key={article}>
                  <div><span className="mono-label">Planned · 0{index + 1}</span><h3>{article}</h3></div>
                  <span className="coming-soon">Coming soon</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
    </SiteShell>
  );
}
