import Link from "next/link";
import Image from "next/image";

export function Masthead() {
  return (
    <header className="border-b border-rule py-[22px] bg-paper">
      <div className="container-site flex items-center justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/assets/mlc-logo.png"
              alt="ML Collective"
              width={0}
              height={0}
              sizes="100vw"
              className="h-9 w-auto"
              priority
            />
          </Link>
          <span className="text-muted-2 font-mono text-sm">×</span>
          <a href="https://deeplearningindaba.com" target="_blank" rel="noopener">
            <Image
              src="/assets/indaba-logo.png"
              alt="Deep Learning Indaba"
              width={0}
              height={0}
              sizes="100vw"
              className="h-11 w-auto indaba-logo"
              priority
            />
          </a>
          <span className="hidden min-[880px]:block font-mono text-xs tracking-[0.12em] uppercase text-muted pl-4 border-l border-rule leading-relaxed">
            Indaba 2026
          </span>
        </div>
        <a
          href="mailto:contact@mlcollective.org"
          className="font-mono text-xs tracking-[.06em] uppercase text-muted no-underline"
        >
          Contact →
        </a>
      </div>
    </header>
  );
}
