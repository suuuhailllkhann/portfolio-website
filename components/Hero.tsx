import Link from "next/link";
import { FaAws, FaBrain, FaDatabase } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import { SiPython } from "react-icons/si";
import { siteConfig } from "@/config/site";
import { HeroVisualization } from "./HeroVisualization";

export function Hero() {
  return <section className="hero" id="main-content"><div className="container hero-inner"><div className="hero-copy"><p className="hero-name">Suhail</p><h1>{"Building intelligent "}<br/>{"systems from data."}</h1><p className="hero-positioning">Data Scientist <span aria-hidden="true">·</span> Applied ML Engineer</p><p className="hero-summary">I build data-driven and machine learning solutions that turn complex data into measurable impact, with a focus on healthcare AI.</p><ul className="hero-skills" aria-label="Core skills"><li><SiPython aria-hidden="true"/>Python</li><li><FaDatabase aria-hidden="true"/>SQL</li><li><FaBrain aria-hidden="true"/>Machine Learning</li><li><FaAws aria-hidden="true"/>AWS</li><li><LuHeartPulse aria-hidden="true"/>Healthcare AI</li></ul><div className="hero-actions"><Link className="button" href="#projects">View Projects <span aria-hidden="true">→</span></Link><Link className="button button-outline" href={siteConfig.links.resume}>View Resume <span aria-hidden="true">↓</span></Link></div></div><HeroVisualization/></div></section>;
}
