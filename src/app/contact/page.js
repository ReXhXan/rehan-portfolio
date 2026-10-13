import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Rehan Khan about AI/ML internships and collaborations.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <PageShell>
      <div className="pt-16"><Contact /></div>
      <Footer />
    </PageShell>
  );
}
