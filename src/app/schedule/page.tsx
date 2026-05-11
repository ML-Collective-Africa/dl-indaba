import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Schedule — Whose Intelligence?",
};

export default function SchedulePage() {
  return (
    <>
      <PageHeader title="Schedule" />

      <section>
        <div className="container-site">
          <div className="text-center py-20 px-6 border border-rule bg-paper-2">
            <h2 className="font-serif text-[clamp(28px,3.4vw,44px)] leading-snug tracking-[-0.015em] mx-auto max-w-[18ch] m-0 mb-4 font-normal">
              Coming soon!!!
            </h2>
            <p className="text-muted max-w-[42ch] mx-auto text-[15px]">
              To be updated soon. Join ML Collective community for feedback.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
