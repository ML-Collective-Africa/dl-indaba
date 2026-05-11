import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import type { Speaker } from "@/lib/data";

interface SpeakerCardProps {
  speaker: Speaker;
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <article className="flex flex-col items-center text-center">
      {speaker.image ? (
        <img
          src={speaker.image}
          alt={speaker.name}
          className="mb-[18px] w-[200px] max-w-full aspect-square rounded-full object-cover"
        />
      ) : (
        <PortraitPlaceholder className="mb-[18px] w-[200px] max-w-full aspect-square rounded-full" />
      )}
      <h3 className="font-serif text-[22px] leading-tight tracking-[-0.01em] m-1 mb-1.5 font-normal">{speaker.name}</h3>
      <p className="m-0 text-sm text-muted leading-relaxed">{speaker.affiliation}</p>
    </article>
  );
}
