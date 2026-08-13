"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { siteConfig } from "@/config/site";

const links = ["About", "Experience", "Projects", "Skills", "Writing"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.32, 250);
      let current = "";
      for (const link of links) {
        const section = document.getElementById(link.toLowerCase());
        if (section && section.offsetTop <= marker) current = link.toLowerCase();
      }
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => { window.removeEventListener("scroll", updateActiveSection); window.removeEventListener("resize", updateActiveSection); };
  }, []);

  return <header className="site-header"><nav className="container navbar" aria-label="Primary navigation"><Link className="wordmark" href="/" aria-label="Suhail, home">Suhail</Link><div className="nav-links">{links.map((link) => { const id = link.toLowerCase(); return <Link className={activeSection === id ? "is-active" : ""} aria-current={activeSection === id ? "location" : undefined} onClick={() => setActiveSection(id)} key={link} href={`/#${id}`}>{link}</Link>; })}<Link href={siteConfig.links.resume}>Resume</Link></div><div className="nav-actions"><Link className="nav-contact" href="/#contact">Get In Touch</Link><button className="menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}</button></div></nav>{open && <div id="mobile-navigation" className="mobile-menu">{links.map((link, index) => { const id = link.toLowerCase(); return <Link className={activeSection === id ? "is-active" : ""} aria-current={activeSection === id ? "location" : undefined} onClick={() => { setOpen(false); setActiveSection(id); }} key={link} href={`/#${id}`}><span>0{index + 1}</span>{link}</Link>; })}<Link onClick={() => setOpen(false)} href={siteConfig.links.resume}><span>↗</span>Resume</Link><Link className="mobile-contact" onClick={() => setOpen(false)} href="/#contact">Get In Touch <span>→</span></Link></div>}</header>;
}
