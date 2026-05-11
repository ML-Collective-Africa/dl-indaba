import { Button } from "@/components/ui/Button";
import { Countdown } from "./Countdown";

export function HeroSection() {
  return (
    <section>
      <div className="container-site text-center pt-18 pb-24">
        <h1 className="display font-serif font-normal text-[clamp(48px,9vw,132px)] leading-[0.92] tracking-tighter mx-auto max-w-[25ch] m-0">
          Whose <em className="italic text-purple">intelligence?</em>
        </h1>
        <p className="lede mt-8 text-[clamp(32px,4.2vw,52px)] leading-[1.18] max-w-[22ch] tracking-[-0.015em] mx-auto text-ink-2">
          Building Agentic AI in Africa without frontier-model dependency.
        </p>

        <Countdown />

        <div className="flex gap-3 mt-8 flex-wrap justify-center">
          <Button href="#register">
            Register <span className="arrow">→</span>
          </Button>
          <Button href="/schedule" variant="ghost">
            See the agenda
          </Button>
        </div>
      </div>
    </section>
  );
}
