import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/data/profile";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/project/${p.id}` } };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <PageShell>
      <div className="min-h-screen bg-[#080808] text-white">
        <div className="relative w-full pt-40 pb-16 px-6 md:px-16 overflow-hidden" style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(255,107,26,0.25), transparent 60%)" }}>
          <span className="inline-block text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase font-medium mb-4 border border-[#ff6b1a]/30 px-3 py-1 rounded-full">{project.category}</span>
          <h1 className="font-black tracking-tighter leading-[0.88] text-white" style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}>{project.title}</h1>
          <p className="text-white/50 text-base md:text-lg font-light mt-6 max-w-2xl">{project.summary}</p>
        </div>

        <div className="px-6 md:px-16 py-16 max-w-7xl mx-auto grid md:grid-cols-[1fr_280px] gap-12 md:gap-20">
          <div>
            <h2 className="font-black text-xl text-white mb-5 tracking-tight">Overview</h2>
            <p className="text-white/55 text-base md:text-lg font-light leading-relaxed mb-12">{project.description}</p>
            <h2 className="font-black text-xl text-white mb-5 tracking-tight">Highlights</h2>
            <ul className="flex flex-col gap-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-white/55 text-sm md:text-base leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-[#ff6b1a] shrink-0" />{h}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 md:sticky md:top-28 h-fit flex flex-col gap-6">
            <h3 className="font-bold text-white text-base tracking-tight">Tech Stack</h3>
            <ul className="flex flex-col gap-1.5">
              {project.tech.map((s) => (
                <li key={s} className="flex items-center gap-2 text-white/60 text-sm"><span className="w-1 h-1 rounded-full bg-[#ff6b1a] shrink-0" />{s}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#ff6b1a] text-black font-bold py-3 rounded-xl text-[11px] uppercase tracking-widest hover:bg-[#ff8c42] transition-colors duration-300">
              View on GitHub ↗
            </a>
            <Link href="/projects" className="text-center text-white/40 text-[11px] uppercase tracking-widest hover:text-[#ff6b1a]">All projects</Link>
          </div>
        </div>
      </div>
      <Footer />
    </PageShell>
  );
}
