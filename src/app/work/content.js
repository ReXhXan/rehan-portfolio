// WORK SECTION — Rehan Khan's projects
import { PROJECTS } from "@/data/profile";

export const SECTION = { label: "Selected Work", heading: "Projects." };

export const FALLBACK_PROJECTS = PROJECTS.map((p, i) => ({
  id: p.id,
  num: String(i + 1).padStart(2, "0"),
  category: p.category,
  title: p.title,
  description: p.summary,
  tech: p.tech.slice(0, 4).join(" · "),
  link: p.link,
  review: null,
}));
