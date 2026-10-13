import Link from "next/link";
import { PROFILE } from "@/data/profile";

const LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "About",    href: "/about"    },
  { label: "Contact",  href: "/contact"  },
];

export default function Footer() {
  return (
    <footer className="relative px-10 md:px-20 pt-24 pb-10 bg-[#060606] border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
        <div>
          <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">{PROFILE.role}</p>
          <h2 className="font-black tracking-tighter leading-[0.85]" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            <span className="block text-white">{PROFILE.name}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-8 md:items-end">
          <nav className="flex gap-8 text-[11px] uppercase tracking-[0.3em] font-medium">
            {LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className="text-white/40 hover:text-[#ff6b1a] transition-colors duration-300">{label}</Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-8 text-[11px] uppercase tracking-[0.3em] font-medium">
            {PROFILE.socials.map(({ label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="text-white/25 hover:text-white/70 transition-colors duration-300">{label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-white/8 mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <a href={`mailto:${PROFILE.email}`} className="text-[10px] text-white/25 tracking-widest hover:text-white/60"
          style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: "italic" }}>{PROFILE.email}</a>
        <p className="text-[10px] text-white/20 tracking-[0.2em]">
          Design based on{" "}
          <a href="https://github.com/5araang/nextjs-cinematic-portfolio" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">Nextjs-cinematic-portfolio</a>{" "}
          by Sarang (MIT)
        </p>
        <p className="text-[10px] text-white/15 tracking-[0.3em] uppercase">© {new Date().getFullYear()} {PROFILE.name}</p>
      </div>
    </footer>
  );
}
