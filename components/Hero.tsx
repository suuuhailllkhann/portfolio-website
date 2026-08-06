import Link from "next/link";
import { profile } from "@/data/profile";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="hero" id="main-content">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="availability"><span /> Open to full-time opportunities in the United States</div>
        <span className="hero-kicker">Data · Intelligence · Impact</span>
        <h1>Building machine learning<br />for <em>real-world decisions.</em></h1>
        <p className="hero-title">{profile.name} — {profile.title}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions"><Link className="button" href="#projects">View selected work ↓</Link><Link className="text-link" href={siteConfig.links.resume}>Download resume ↗</Link></div>
        <div className="hero-meta"><span>Based in the United States</span><div><Link href={siteConfig.links.github}>GitHub ↗</Link><Link href={siteConfig.links.linkedin}>LinkedIn ↗</Link></div></div>
      </div>
    </section>
  );
}
