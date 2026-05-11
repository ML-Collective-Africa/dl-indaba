interface EyebrowProps {
  children: React.ReactNode;
  dot?: boolean;
  num?: boolean;
  className?: string;
}

export function Eyebrow({ children, dot, num: isNum, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.14em] uppercase text-muted ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-purple" />}
      {isNum && <span className="text-purple font-mono tracking-normal font-medium">{children}</span>}
      {!isNum && <>{children}</>}
    </span>
  );
}
