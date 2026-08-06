"use client";

export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next; localStorage.setItem("theme", next);
  }
  return <button className="theme-toggle" onClick={toggle} aria-label="Toggle color theme"><span aria-hidden="true">◐</span></button>;
}
