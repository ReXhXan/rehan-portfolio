import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title: "About",
  description: "About Rehan Khan: B.Tech CSE (AI/ML) at Centurion University (CGPA 8.87), Co-Founder of NAVANTA.IO, based in Bhubaneswar, India.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
