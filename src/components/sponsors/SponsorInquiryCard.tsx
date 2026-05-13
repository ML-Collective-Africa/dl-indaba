import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function SponsorInquiryCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 md:gap-14 p-8 md:p-12 border border-rule bg-paper-2 items-start">
      <div>
        <Eyebrow num>Get in touch</Eyebrow>
        <h2 className="mt-[14px] max-w-[22ch] leading-tight tracking-tight font-serif text-[clamp(28px,3.4vw,44px)] m-0 font-normal">
          Interested in sponsoring? Contact us.
        </h2>
        <p className="muted text-[15px] max-w-[46ch] mt-4 text-muted">
          For sponsorship inquiries, partnerships and conversations about supporting the workshop&apos;s outputs, get in
          touch with our workshop chair.
        </p>
      </div>
      <div className="flex items-center justify-center min-h-full">
        <div className="flex flex-col gap-3 items-stretch w-[220px] max-w-full">
          <Button href="mailto:abraham.owodunni@mlcollective.org" className="justify-between w-full">
            Email us <span className="arrow">→</span>
          </Button>
          <Button href="https://docs.google.com/presentation/d/15X7TlXGTHCv78WAerM_sXMICZ3JSpYO3qjlaiV_XCgs/edit?usp=sharing" variant="ghost" className="justify-between w-full" target="_blank" rel="noopener">
            View slide deck <span className="arrow">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
