import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SpeakerCard } from "@/components/speakers/SpeakerCard";
import { SPEAKERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Speakers — Whose Intelligence?",
};

export default function SpeakersPage() {
  return (
    <>
      <PageHeader
        title="Speakers"
        subtitle="Here is the list of speakers who will share their insights on agentic AI in Africa."
      />

      <section>
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-8 lg:gap-y-12">
            {SPEAKERS.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-rule">
            <span className="inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.14em] uppercase text-muted justify-center w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-purple" />
              More speakers coming soon
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
