"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection({ standalone = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-item").forEach((item) => {
        gsap.from(item, { scrollTrigger: { trigger: item, start: "top 92%" }, y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work-section" ref={ref} className={`relative px-10 md:px-20 ${standalone ? "pt-40" : "pt-20"} pb-24`}>
      <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-6 font-medium">Selected Projects</p>
      <h2 className="font-black tracking-tighter leading-[0.88] mb-16" style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}>
        <span className="block text-white">Things I've</span>
        <span className="block ghost-orange">built.</span>
      </h2>
      <div className="flex flex-col border-t border-white/10">
        {PROJECTS.map((p, i) => (
          <div key={p.id} className="work-item group grid md:grid-cols-[80px_1fr_auto] gap-6 items-start py-10 border-b border-white/10">
            <span className="text-white/20 text-sm font-mono">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="text-[10px] text-[#ff6b1a] tracking-[0.35em] uppercase mb-2">{p.category}</p>
              <Link href={`/project/${p.id}`} className="block text-2xl md:text-4xl font-black tracking-tight text-white group-hover:text-[#ff6b1a] transition-colors duration-300">{p.title}</Link>
              <p className="text-white/45 text-sm md:text-base font-light mt-3 max-w-2xl">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => <span key={t} className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-white/40 tracking-widest uppercase">{t}</span>)}
              </div>
            </div>
            <div className="flex md:flex-col gap-3 text-[11px] uppercase tracking-[0.25em] font-medium">
              <Link href={`/project/${p.id}`} className="text-white/60 hover:text-[#ff6b1a] transition-colors">Details →</Link>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#ff6b1a] transition-colors">GitHub ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
