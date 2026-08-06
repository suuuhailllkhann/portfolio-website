import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar />{children}<Footer /></>;
}
