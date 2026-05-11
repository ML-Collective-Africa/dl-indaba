import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SponsorInquiryCard } from "@/components/sponsors/SponsorInquiryCard";

export const metadata: Metadata = {
  title: "Sponsors — Whose Intelligence?",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHeader
        title="Sponsor our workshop"
        subtitle="Sponsors help fund participant travel, materials, and the publication of the post-session preprint as a public artifact of the conversation."
      />

      <section>
        <div className="container-site">
          <SponsorInquiryCard />
        </div>
      </section>
    </>
  );
}
