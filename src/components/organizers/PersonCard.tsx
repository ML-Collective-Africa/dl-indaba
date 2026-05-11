import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import type { Person } from "@/lib/data";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <article className="flex flex-col items-center text-center">
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          className="mb-4 w-[180px] max-w-full aspect-square rounded-full object-cover"
        />
      ) : (
        <PortraitPlaceholder className="mb-4 w-[180px] max-w-full aspect-square rounded-full" />
      )}
      <h3 className="font-serif text-xl tracking-[-0.01em] leading-snug m-1 mb-1.5 font-normal">{person.name}</h3>
      <p className="m-0 text-[13px] text-muted leading-relaxed">{person.affiliation}</p>
    </article>
  );
}
