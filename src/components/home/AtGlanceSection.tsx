import { WORKSHOP_EVENT } from "@/lib/data";

const items: { key: string; value: string }[] = [
  { key: "Format", value: WORKSHOP_EVENT.format },
  { key: "Length", value: WORKSHOP_EVENT.length },
  { key: "Venue", value: WORKSHOP_EVENT.venue },
  { key: "Hosted by", value: WORKSHOP_EVENT.hostedBy },
  { key: "Workshop output", value: WORKSHOP_EVENT.output },
];

export function AtGlanceSection() {
  return (
    <section>
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-b border-t-ink border-b-rule">
          {items.map((item) => (
            <div
              key={item.key}
              className="py-[22px] px-5 border-r border-rule last:border-r-0 max-md:border-b max-md:border-rule max-md:[&:nth-child(2n)]:border-r-0 flex flex-col gap-2"
            >
              <span className="font-mono text-xs tracking-[0.12em] uppercase text-muted">{item.key}</span>
              <span className="font-serif text-lg leading-snug tracking-[-0.01em]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
