import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Rehan Khan about AI/ML internships and collaborations.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
