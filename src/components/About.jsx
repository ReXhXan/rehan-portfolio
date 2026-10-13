"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "./BlurText";
import { PROFILE, SKILLS, INTERESTS, EXPERIENCE, EDUCATION, ACHIEVEMENTS, ACTIVITIES } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

function Label({ children }) {
  return (
    <p className="about-p text-[10px] tracking-[0.4em] uppercase mb-5">
      <span className="border-b border-white/30 pb-2 inline-block text-white/50">{children}</span>
    </p>
  );
}

export default function About({ standalone = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: standalone ? undefined : { trigger: ref.current, start: "top bottom", once: true },
        delay: standalone ? 0.4 : 0,
      });
      tl.from(".about-label", { y: 14, opacity: 0, duration: 0.3, ease: "power3.out" })
        .from(".about-h", { y: 35, opacity: 0, duration: 0.4, ease: "power4.out" }, 0.05)
        .from(".about-p", { y: 20, opacity: 0, duration: 0.35, ease: "power3.out" }, 0.15)
        .from(".about-skill", { x: -10, opacity: 0, stagger: 0.03, duration: 0.25, ease: "power2.out" }, 0.22);
      setTimeout(() => ScrollTrigger.refresh(), 300);
    }, ref);
    return () => ctx.revert();
  }, [standalone]);

  return (
    <section id="about-section" ref={ref} className="relative w-full min-h-screen px-10 md:px-20 z-20">
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 py-32">
        <div className="w-full lg:w-[55%] max-w-2xl flex flex-col items-start">
          <p className="about-label text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-6 font-medium">About Me</p>

          <div className="about-p flex items-center gap-5 mb-8">
            
            <img src={PROFILE.avatar} alt={PROFILE.name} width={88} height={88} className="w-[88px] h-[88px] rounded-full object-cover" />
            <div>
              <p className="text-white font-bold text-lg">{PROFILE.name}</p>
              <p className="text-white/40 text-xs">{PROFILE.location}</p>
            </div>
          </div>

          <h2 className="about-h font-black tracking-tighter leading-[0.88] mb-8" style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}>
            <span className="block text-white">Building</span>
            <span className="block text-white">agentic</span>
            <span className="block ghost">systems.</span>
          </h2>

          <p className="about-p text-xs md:text-sm text-[#ff8c42]/80 mb-6 max-w-lg leading-relaxed">{PROFILE.headline}</p>

          {PROFILE.bio.map((text, i) => (
            <BlurText key={i} text={text} delay={25} animateBy="words" direction="bottom" stepDuration={0.22}
              className="about-p text-sm md:text-base text-white/50 max-w-lg mb-5 font-light leading-relaxed" />
          ))}

          <div className="about-p mt-4">
            <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#ff6b1a]/30 text-[#ff6b1a] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#ff6b1a] hover:text-black transition-colors duration-300">
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[40%] max-w-md flex flex-col gap-10">
          <div>
            <Label>Skills</Label>
            <div className="flex gap-2 flex-wrap">
              {SKILLS.map((s) => (
                <span key={s} className="about-skill px-4 py-2 border border-white/12 rounded-full text-[10px] text-white/45 tracking-widest uppercase hover:bg-white hover:text-[#ff6b1a] transition-colors duration-300 cursor-default">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <Label>Experience</Label>
            {EXPERIENCE.map((e) => (
              <p key={e.org} className="about-p text-white/70 text-sm"><span className="text-white font-semibold">{e.role}</span> · {e.org}</p>
            ))}
          </div>

          <div>
            <Label>Education</Label>
            <div className="flex flex-col gap-4">
              {EDUCATION.map((e) => (
                <div key={e.school} className="about-p">
                  <p className="text-white text-sm font-semibold">{e.school}</p>
                  <p className="text-white/50 text-xs">{e.degree}</p>
                  <p className="text-white/35 text-xs">{e.period} · {e.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {standalone && (
            <>
              <div>
                <Label>Exploring</Label>
                <p className="about-p text-white/50 text-sm">{INTERESTS.join(" · ")}</p>
              </div>
              <div>
                <Label>Achievements</Label>
                {ACHIEVEMENTS.map((a) => <p key={a} className="about-p text-white/50 text-sm">{a}</p>)}
              </div>
              <div>
                <Label>Clubs & Activities</Label>
                <p className="about-p text-white/50 text-sm">{ACTIVITIES.join(" · ")}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
