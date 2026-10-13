import PageShell from "@/components/PageShell";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects",
  description: "Projects by Rehan Khan: RAG Docs Chat, Smart NFC Card, Self-Testing Code Assistant and Jarvis personal AI agent.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return (
    <PageShell>
      <ProjectsSection standalone />
      <Footer />
    </PageShell>
  );
}
