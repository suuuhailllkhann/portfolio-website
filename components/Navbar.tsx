"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";

const links = ["About", "Experience", "Projects", "Skills", "Writing", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Suhail Khan, home">Suhail Khan</Link>
        <div className="nav-links">{links.map((link) => <Link key={link} href={`/#${link.toLowerCase()}`}>{link}</Link>)}</div>
        <div className="nav-actions"><ThemeToggle /><Link className="nav-resume-link" href={siteConfig.links.resume}>Resume ↗</Link><button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button></div>
      </nav>
      {open && <div className="mobile-menu">{links.map((link) => <Link onClick={() => setOpen(false)} key={link} href={`/#${link.toLowerCase()}`}>{link}</Link>)}<Link href={siteConfig.links.resume}>Download resume ↗</Link></div>}
    </header>
  );
}
