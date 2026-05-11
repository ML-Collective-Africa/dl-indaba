import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "solid" | "ghost";

interface BaseProps {
  variant?: Variant;
}

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium tracking-wide border transition-all duration-150 no-underline";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper border-ink hover:bg-purple hover:border-purple",
  ghost: "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
};

export function Button(props: ButtonProps) {
  const { variant = "solid", className = "", ...rest } = props;
  const cls = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: Variant };
    return (
      <a href={href} className={cls} {...anchorRest}>
        {anchorRest.children}
      </a>
    );
  }

  const { variant: _v, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };
  return (
    <button className={cls} {...buttonRest}>
      {buttonRest.children}
    </button>
  );
}
