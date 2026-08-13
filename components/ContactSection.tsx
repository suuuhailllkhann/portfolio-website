"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuFileText, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setFeedback("Sending your message…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "Your message could not be sent.");
      form.reset();
      setStatus("success");
      setFeedback("Thanks — your message has been sent.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
    }
  };

  return <section id="contact" className="contact-section"><div className="contact-container"><div className="contact-left">
    <span className="eyebrow">07 / Contact</span><h2>Let’s build<br />something<br /><em>that matters.</em></h2><i aria-hidden="true" />
    <p>Have an opportunity, a question,<br />or just want to say hello?<br />I’d love to hear from you.</p>
    <address><a href={`mailto:${siteConfig.links.email}`}><LuMail />{siteConfig.links.email}</a><a href="tel:+19293503989"><LuPhone />+1 (929) 350-3989</a><span><LuMapPin />New York, NY, United States</span></address>
  </div><div className="contact-right">
    <p className="contact-interest">I’m interested in full-time roles across data science,<br />machine learning engineering, healthcare AI, cloud AI,<br />and product technology teams in the United States.</p>
    <div className="contact-socials"><Link href={siteConfig.links.linkedin}><span><FaLinkedinIn /></span>LinkedIn <b>↗</b></Link><Link href={siteConfig.links.github}><span><FaGithub /></span>GitHub <b>↗</b></Link><Link href={siteConfig.links.resume}><span><LuFileText /></span>Resume <b>↗</b></Link></div>
    <form className="contact-form" onSubmit={submitMessage}><label>Full name<input required maxLength={100} autoComplete="name" name="name" placeholder="Your name" /></label><label>Email address<input required maxLength={254} autoComplete="email" type="email" name="email" placeholder="you@example.com" /></label><label className="field-wide">Subject<input required maxLength={160} name="subject" placeholder="What’s this about?" /></label><label className="field-wide">Message<textarea required maxLength={5000} name="message" placeholder="Tell me more..." /></label><label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"} <span>↗</span></button><p className={`contact-feedback ${status}`} role="status" aria-live="polite">{feedback}</p></form>
  </div></div></section>;
}
