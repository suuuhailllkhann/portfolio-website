import Link from "next/link";
import { profile } from "@/data/profile";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="hero" id="main-content">
      <svg className="hero-scatter" aria-hidden="true" preserveAspectRatio="none">
        <circle className="cluster-a" cx="58%" cy="18%" r="9" /><circle className="cluster-a" cx="64%" cy="12%" r="7" /><circle className="cluster-a" cx="70%" cy="22%" r="11" /><circle className="cluster-a" cx="62%" cy="30%" r="7" /><circle className="cluster-a" cx="72%" cy="10%" r="9" /><circle className="cluster-a" cx="78%" cy="28%" r="7" />
        <circle className="cluster-b" cx="80%" cy="65%" r="12" /><circle className="cluster-b" cx="88%" cy="72%" r="8" /><circle className="cluster-b" cx="92%" cy="58%" r="10" /><circle className="cluster-b" cx="84%" cy="82%" r="8" /><circle className="cluster-b" cx="96%" cy="78%" r="12" /><circle className="cluster-b" cx="76%" cy="78%" r="8" />
        <line className="boundary" x1="55%" y1="55%" x2="100%" y2="42%" />
      </svg>
      <div className="container hero-inner">
        <div className="availability"><span /> Open to full-time opportunities in the United States</div>
        <span className="hero-kicker">Data · Intelligence · Impact</span>
        <h1>Machine learning built to run,<br /><em>not just to be benchmarked.</em></h1>
        <p className="hero-name">{profile.name}</p>
        <div className="role-chips">{profile.roles.map((role) => <span className="role-chip" key={role}>{role}</span>)}<span className="role-chip role-chip-next">{profile.nextRole} — next</span></div>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions"><Link className="button" href="#projects">View selected work ↓</Link><Link className="text-link" href={siteConfig.links.resume}>Download resume ↗</Link></div>
        <div className="hero-meta"><span>Based in the United States</span><div><Link href={siteConfig.links.github}>GitHub ↗</Link><Link href={siteConfig.links.linkedin}>LinkedIn ↗</Link></div></div>
      </div>
    </section>
  );
}
