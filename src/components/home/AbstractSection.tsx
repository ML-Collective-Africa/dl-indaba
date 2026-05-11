"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AbstractSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section>
      <div className="container-site">
        <div className="prose abstract max-w-[64ch] mx-auto">
          <Eyebrow>Abstract</Eyebrow>
          <p className="mt-[18px]">
            The promise of Agentic AI is seductive: autonomous systems that perceive, plan, and act, thereby reducing the
            friction between human intent and outcome. However, Agentic AI is arriving in Africa on someone else&apos;s
            terms.
          </p>
          <p>
            Building agentic systems today almost inevitably means building on frontier models trained predominantly on
            Western data, optimized for Western languages, and aligned to Western values; yet deployed to negotiate,
            decide, and act on behalf of African users. Every API call, every default behavior, every quietly embedded
            assumption carries a worldview that was not built with Africa in mind.
          </p>
          {!expanded ? (
            <>
              <p>This session takes a positional stance — through a startup pitch, four positional talks and a structured fishbowl dialogue, we pressure-test four tensions: cultural alignment, infrastructure dependency, value extraction, and the capability trap — working toward a community-driven position on sovereign agentic AI for Africa. Outputs will be compiled into an open preprint.</p>
              <button
                onClick={() => setExpanded(true)}
                className="read-more-btn bg-none border-0 p-0 font-inherit text-muted cursor-pointer tracking-[0.01em] hover:text-purple"
              >
                Read more…
              </button>
            </>
          ) : (
            <>
              <p>
                This session takes a positional stance — through a startup pitch, four positional talks and a structured
                fishbowl dialogue, we pressure-test four tensions: cultural alignment, infrastructure dependency, value
                extraction, and the capability trap — working toward a community-driven position on sovereign agentic AI
                for Africa. Outputs will be compiled into an open preprint.
              </p>
              <button
                onClick={() => setExpanded(false)}
                className="read-more-btn bg-none border-0 p-0 font-inherit text-muted cursor-pointer tracking-[0.01em] hover:text-purple"
              >
                Read less
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
