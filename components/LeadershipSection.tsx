import { leadership } from "@/data/profile";

export function LeadershipSection() {
  return <section id="leadership" className="section leadership-section"><div className="container"><div className="leadership-heading"><span className="eyebrow">03 / Leadership</span><h2>Leadership beyond the role.</h2></div><article className="leadership-profile"><div><span className="mono-label">Organization leadership</span><h3>{leadership.role}</h3></div><div className="leadership-detail"><h4>{leadership.organization}</h4><p>{leadership.institution}</p><time>{leadership.dates}</time><p className="leadership-copy">{leadership.description}</p></div></article></div></section>;
}
