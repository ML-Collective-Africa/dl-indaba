import Link from "next/link";

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <>
      <section className="bg-ink text-paper py-14 px-(--gutter)">
        <div className="container-site grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-[clamp(24px,2.4vw,32px)] leading-snug m-0 font-serif font-normal text-paper max-w-[22ch]">
              Join <em className="italic text-purple-bright">ML Collective</em> to get started with your research career.
            </h2>
            <a
              href="https://mlcollective.org"
              className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium tracking-wide border border-paper bg-paper text-ink no-underline transition-all duration-150 hover:bg-purple-bright hover:border-purple-bright hover:text-ink"
              target="_blank"
              rel="noopener"
            >
              Join the community <span className="arrow">→</span>
            </a>
          </div>
          <div className="md:border-l md:border-white/22 md:pl-12 md:border-0 md:pt-0 pt-7 border-t border-white/22">
            <p className="font-mono text-xs tracking-[0.14em] uppercase text-white/65 m-0 mb-4">
              Follow us on our socials
            </p>
            <div className="flex gap-3">
              <a
                href="https://x.com/ml_collective"
                target="_blank"
                rel="noopener"
                aria-label="X (Twitter)"
                className="w-11 h-11 inline-flex items-center justify-center border border-white/26 text-paper transition-all duration-150 hover:bg-purple-bright hover:text-ink hover:border-purple-bright"
              >
                <XIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/ml-collective"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="w-11 h-11 inline-flex items-center justify-center border border-white/26 text-paper transition-all duration-150 hover:bg-purple-bright hover:text-ink hover:border-purple-bright"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site border-t border-rule bg-paper py-7">
        <div className="container-site flex justify-between gap-6 flex-wrap font-mono text-xs uppercase text-muted tracking-[0.08em]">
          <span>Whose Intelligence? · A workshop · Deep Learning Indaba 2026</span>
          <span>Hosted by ML Collective</span>
        </div>
      </footer>
    </>
  );
}
