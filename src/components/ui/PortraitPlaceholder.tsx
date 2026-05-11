interface PortraitPlaceholderProps {
  className?: string;
}

export function PortraitPlaceholder({ className = "" }: PortraitPlaceholderProps) {
  return (
    <div
      className={`portrait-ph relative overflow-hidden bg-paper-2 border border-rule ${className}`}
      aria-hidden="true"
    />
  );
}
