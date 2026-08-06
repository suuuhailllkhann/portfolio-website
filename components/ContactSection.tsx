import Link from "next/link";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return <section id="contact" className="contact-section"><div className="container contact-grid"><div><span className="eyebrow">06 / Contact</span><h2>Let’s build something<br /><em>that matters.</em></h2></div><div className="contact-copy"><p>I’m interested in full-time roles across data science, machine learning engineering, healthcare AI, cloud AI, and product technology teams in the United States.</p><Link className="button button-light" href={`mailto:${siteConfig.links.email}`}>Start a conversation ↗</Link><div className="contact-links"><Link href={siteConfig.links.linkedin}>LinkedIn ↗</Link><Link href={siteConfig.links.github}>GitHub ↗</Link><Link href={siteConfig.links.resume}>Resume ↗</Link></div></div></div></section>;
}
