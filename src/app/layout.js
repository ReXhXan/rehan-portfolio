import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { PROFILE, SKILLS, SITE_URL } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });

const TITLE = `${PROFILE.name} — AI Systems Architect | Agentic AI & MCP`;
const DESCRIPTION =
  "Portfolio of Rehan Khan, B.Tech CSE (AI/ML) student at Centurion University and Co-Founder of NAVANTA.IO, building AI agents, RAG systems and MCP-style tool registries.";

export const viewport = { themeColor: "#ff6b1a" };

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s — ${PROFILE.name}` },
  description: DESCRIPTION,
  keywords: ["Rehan Khan", "AI/ML", "Agentic AI", "MCP", "RAG", "LLM", "AI Agents", "Python", "FastAPI", "Centurion University", "NAVANTA.IO"],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  openGraph: {
    type: "website", locale: "en_US", url: SITE_URL, siteName: PROFILE.name, title: TITLE, description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  url: SITE_URL,
  email: `mailto:${PROFILE.email}`,
  jobTitle: PROFILE.role,
  description: PROFILE.headline,
  address: { "@type": "PostalAddress", addressLocality: "Bhubaneswar", addressRegion: "Odisha", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Centurion University of Technology and Management" },
  knowsAbout: SKILLS,
  sameAs: PROFILE.socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />
      </head>
      <body>
        <div className="bottom-blur" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
