import { PROJECTS, SITE_URL } from "@/data/profile";

export default function sitemap() {
  const pages = ["", "/projects", "/about", "/contact"].map((p) => ({ url: `${SITE_URL}${p}`, lastModified: new Date() }));
  return [...pages, ...PROJECTS.map((p) => ({ url: `${SITE_URL}/project/${p.id}`, lastModified: new Date() }))];
}
