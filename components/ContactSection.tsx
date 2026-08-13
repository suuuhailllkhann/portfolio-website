"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuFileText, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Portfolio inquiry");
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return <section id="contact" className="contact-section"><div className="contact-container"><div className="contact-left">
    <span className="eyebrow">07 / Contact</span><h2>Let’s build<br />something<br /><em>that matters.</em></h2><i aria-hidden="true" />
    <p>Have an opportunity, a question,<br />or just want to say hello?<br />I’d love to hear from you.</p>
    <address><a href={`mailto:${siteConfig.links.email}`}><LuMail />{siteConfig.links.email}</a><a href="tel:+19293503989"><LuPhone />+1 (929) 350-3989</a><span><LuMapPin />New York, NY, United States</span></address>
  </div><div className="contact-right">
    <p className="contact-interest">I’m interested in full-time roles across data science,<br />machine learning engineering, healthcare AI, cloud AI,<br />and product technology teams in the United States.</p>
    <div className="contact-socials"><Link href={siteConfig.links.linkedin}><span><FaLinkedinIn /></span>LinkedIn <b>↗</b></Link><Link href={siteConfig.links.github}><span><FaGithub /></span>GitHub <b>↗</b></Link><Link href={siteConfig.links.resume}><span><LuFileText /></span>Resume <b>↗</b></Link></div>
    <form className="contact-form" onSubmit={submitMessage}><label>Full name<input required name="name" placeholder="Your name" /></label><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label className="field-wide">Subject<input required name="subject" placeholder="What’s this about?" /></label><label className="field-wide">Message<textarea required name="message" placeholder="Tell me more..." /></label><button type="submit">Send message <span>↗</span></button></form>
  </div></div></section>;
}
