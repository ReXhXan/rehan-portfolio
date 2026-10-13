"use client";
import { PROFILE } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact-section" className="relative min-h-[80vh] flex flex-col justify-center px-10 md:px-20 pt-24 pb-24">
      <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-12 font-medium">Contact</p>
      <h2 className="font-black tracking-tighter leading-[0.88] mb-10" style={{ fontSize: "clamp(2.6rem, 6vw, 6.5rem)" }}>
        <span className="block text-white">Let's build</span>
        <span className="block text-white">something</span>
        <span className="block ghost-orange">intelligent.</span>
      </h2>
      <p className="text-white/40 text-sm md:text-base font-light max-w-xl mb-10 leading-relaxed">
        Open to AI/ML internships, collaborations and conversations about agentic systems. The fastest way to reach me is email.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Hello Rehan")}`}
          className="px-8 py-4 bg-[#ff6b1a] text-black font-bold rounded-full text-sm uppercase tracking-widest hover:bg-[#ff8c42] transition-colors duration-300">
          Email Me
        </a>
        {PROFILE.socials.filter((s) => s.label !== "Email").map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 border border-white/15 text-white/70 font-bold rounded-full text-sm uppercase tracking-widest hover:border-[#ff6b1a] hover:text-[#ff6b1a] transition-colors duration-300">
            {s.label}
          </a>
        ))}
        <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer"
          className="px-8 py-4 border border-white/15 text-white/70 font-bold rounded-full text-sm uppercase tracking-widest hover:border-[#ff6b1a] hover:text-[#ff6b1a] transition-colors duration-300">
          Resume (PDF)
        </a>
      </div>
      <p className="mt-10 text-white/25 text-sm">{PROFILE.email}</p>
    </section>
  );
}
