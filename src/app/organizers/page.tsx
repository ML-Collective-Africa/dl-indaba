import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PersonCard } from "@/components/organizers/PersonCard";
import { ORGANIZER_GROUPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Organizers — Whose Intelligence?",
};

export default function OrganizersPage() {
  return (
    <>
      <PageHeader title="Organizers" />

      {ORGANIZER_GROUPS.map((group) => (
        <section
          key={group.title}
          className={group.background ? "bg-paper-2" : ""}
        >
          <div className="container-site">
            <div className="mb-9">
              <h2 className="font-serif text-[clamp(28px,3.4vw,44px)] leading-snug tracking-[-0.015em] text-center m-0 font-normal">
                {group.title}
              </h2>
            </div>
            <div
              className={`grid gap-12 lg:gap-x-8 lg:gap-y-12 ${
                group.columns === 2
                  ? "grid-cols-1 sm:grid-cols-2 max-w-[720px] mx-auto"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {group.members.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
