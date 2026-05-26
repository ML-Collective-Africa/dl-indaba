// "use client";

// import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AbstractSection() {
  // const [expanded, setExpanded] = useState(false);

  return (
    <section>
      <div className="container-site">
        <div className="prose abstract max-w-[64ch] mx-auto text-justify">
          <Eyebrow>Abstract</Eyebrow>
          <p className="mt-[18px] text-muted">
            Watch this space, more details will be updated soon.
          </p>

          {/* <p className="mt-[18px]">
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
          <p>
            This session takes a positional stance — through a startup pitch, four positional talks and a structured
            fishbowl dialogue, we pressure-test four tensions: cultural alignment, infrastructure dependency, value
            extraction, and the capability trap — working toward a community-driven position on sovereign agentic AI
            for Africa. Outputs will be compiled into an open preprint.
          </p>

          {expanded && (
            <>
              <p>
                Today, building agentic AI almost inevitably means building on top of frontier models like GPT, Gemini,
                Claude, and their successors. These systems were trained predominantly on Western data, optimized for
                Western languages, and aligned to Western values and assumptions about how the world works, what a
                &ldquo;task&rdquo; is, and what a &ldquo;good outcome&rdquo; looks like. When we deploy agents whose
                foundational models rely on less African data but negotiate and decide on behalf of African users, we are
                not just plugging into an API. We are embedding a particular worldview — one that does not entirely
                capture our nuance and context — into the infrastructure of African lives.
              </p>
              <p>
                This session takes a positional stance: the current default approach to building Agentic AI solely around
                frontier models is insufficient in Africa, and in some cases harmful. We are not arguing against using
                frontier models. We are arguing that we have not been honest enough about what we are trading away when
                we do.
              </p>

              <h3 className="font-serif font-normal text-xl mt-8 mb-2 tracking-tight">Tension 1: The Cultural Alignment Problem</h3>
              <p>
                Frontier models are not culturally neutral, and the gaps they carry across language, context, and
                epistemic tradition do not disappear when you fine-tune on a small Yoruba or Amharic dataset. The
                cultural assumptions baked into these systems — about what constitutes a valid question, a good answer,
                a trustworthy source — reflect the communities that produced the training data and shaped the RLHF
                feedback. Whose intelligence are we building on?
              </p>

              <h3 className="font-serif font-normal text-xl mt-8 mb-2 tracking-tight">Tension 2: The Infrastructure Paradox</h3>
              <p>
                Africa faces real compute and data constraints, and the most feasible path to Agentic AI currently leads
                straight to dependency on the very systems that do not fully capture our nuances and context. The
                infrastructure required to train frontier-scale models from scratch is unavailable to most African
                institutions. Yet the alternative — permanent reliance on external APIs — carries its own risks. How do
                we pursue agentic capability in a constrained setting without deepening dependency on systems built
                elsewhere?
              </p>

              <h3 className="font-serif font-normal text-xl mt-8 mb-2 tracking-tight">Tension 3: The Value Extraction Loop</h3>
              <p>
                When African developers and users interact with frontier models, they generate data and feedback that
                flows back to improve those models — for the benefit of labs elsewhere. We are, in effect, subsidizing
                the refinement of systems that were not built for us. The more African users adopt these systems, the
                more valuable they become to their creators, while the structural gap between African AI capacity and
                frontier AI capacity widens.
              </p>

              <h3 className="font-serif font-normal text-xl mt-8 mb-2 tracking-tight">Tension 4: The Capability Trap</h3>
              <p>
                Every time we default to a frontier model API instead of investing in local capacity, we make it harder
                to ever not need that API. The shortcut today becomes the ceiling tomorrow. Agentic AI built solely on
                frontier model dependency decides, quietly, that Africa will always be a consumer of intelligence rather
                than a builder of it. Does this make or mar Africa&apos;s sovereign intelligence?
              </p>

              <p className="mt-6">
                This session does not pretend to resolve these tensions. It convenes researchers, practitioners, and
                policymakers to pressure-test them; to argue openly, rigorously, and without deference to the hype. The
                question is not whether Africa should build Agentic AI. The question is whether we are being clear-eyed
                about what we are building, for whom, and on whose terms.
              </p>

              <h3 className="font-serif font-normal text-xl mt-8 mb-3 tracking-tight">References</h3>
              <ol className="text-[14px] text-muted space-y-2 pl-5">
                <li>Toward an African Agenda for AI Safety (2025). <a href="https://arxiv.org/pdf/2508.13179" target="_blank" rel="noopener" className="text-inherit underline">arxiv.org/pdf/2508.13179</a></li>
                <li>How Agentic AI Is Transforming African Banking — Oliver Wyman (2025). <a href="https://www.oliverwyman.com/our-expertise/insights/2025/apr/agentic-ai-transforming-african-banking-html" target="_blank" rel="noopener" className="text-inherit underline">oliverwyman.com</a></li>
                <li>Decolonizing African NLP: A Survey on Power Dynamics and Data Colonialism — AfricaNLP @ ICLR 2024. <a href="https://openreview.net/pdf?id=D698BEfwgv" target="_blank" rel="noopener" className="text-inherit underline">openreview.net</a></li>
                <li>Decolonizing LLMs: An Ethnographic Framework for AI in African Contexts (2025). <a href="https://www.researchgate.net/publication/388916215" target="_blank" rel="noopener" className="text-inherit underline">researchgate.net</a></li>
                <li>Toward a Decolonial Framework for Communicating AI in African Public Service — Ooko (2025). <a href="https://journals.sagepub.com/doi/10.1177/27523543251374174" target="_blank" rel="noopener" className="text-inherit underline">journals.sagepub.com</a></li>
                <li>AI Investment in Resource-Constrained African Economies — MDPI (2025). <a href="https://www.mdpi.com/2673-4060/6/2/70" target="_blank" rel="noopener" className="text-inherit underline">mdpi.com</a></li>
                <li>Foresight Africa 2025–2030: AI and Emerging Technologies — Brookings. <a href="https://www.brookings.edu/wp-content/uploads/2025/01/Foresight-Africa-2025-2030-Chapter-5.pdf" target="_blank" rel="noopener" className="text-inherit underline">brookings.edu</a></li>
                <li>Masakhane — community position on data sovereignty. <a href="https://www.masakhane.io" target="_blank" rel="noopener" className="text-inherit underline">masakhane.io</a></li>
              </ol>
            </>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="read-more-btn bg-none border-0 p-0 font-inherit text-muted cursor-pointer tracking-[0.01em] hover:text-purple mt-4 block"
          >
            {expanded ? "Read less" : "Read more…"}
          </button> */}
        </div>
      </div>
    </section>
  );
}
