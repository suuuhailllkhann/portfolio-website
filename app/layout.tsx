import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Suhail | Data Scientist & Machine Learning Engineer",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true },
  openGraph: { title: "Suhail | Data Scientist & Machine Learning Engineer", description: siteConfig.description, url: siteConfig.url, siteName: "Suhail — Portfolio", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Suhail — Data Scientist and Machine Learning Engineer" }] },
  twitter: { card: "summary_large_image", title: "Suhail | Data Scientist & Machine Learning Engineer", description: siteConfig.description, images: ["/og.png"] },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "Person", name: "Suhail", url: siteConfig.url,
  jobTitle: "Data Scientist and Machine Learning Engineer", sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "St. Francis College" }, { "@type": "CollegeOrUniversity", name: "Osmania University" }],
  knowsAbout: ["Data Science", "Machine Learning", "Healthcare AI", "Python", "SQL", "AWS"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.theme=localStorage.getItem('theme')||'light'` }} />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
