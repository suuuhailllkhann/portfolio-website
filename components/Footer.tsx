import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} Suhail</span><span>Data Scientist · ML Engineer</span><div><Link href={siteConfig.links.github}>GH</Link><Link href={siteConfig.links.linkedin}>LI</Link><Link href={`mailto:${siteConfig.links.email}`}>EM</Link></div></div></footer>;
}
