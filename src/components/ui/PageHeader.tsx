interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-16 pb-10 border-b border-rule">
      <div className="container-site grid grid-cols-1 md:grid-cols-[1fr_280px] gap-7 md:gap-14 items-end">
        <div>
          <h1 className="text-[clamp(40px,5.6vw,72px)] tracking-tight leading-none mt-3 font-serif font-normal">
            {title}
          </h1>
          {subtitle && <p className="subtitle mt-[18px] text-[21px] leading-relaxed tracking-tight text-ink-2 max-w-[50ch]">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
