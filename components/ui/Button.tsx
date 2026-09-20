import Link from "next/link";
import type { TrackEvent } from "@/lib/track";

type Variant = "primary" | "secondary" | "onDark" | "ghostOnDark";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-btn px-6 py-3 text-[0.9375rem] font-semibold tracking-wide transition-[background-color,border-color,color,transform] duration-micro ease-standard active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-copper-700 text-white hover:bg-copper-800",
  secondary:
    "border-2 border-ink/80 text-ink hover:border-copper-700 hover:text-copper-800",
  onDark: "bg-white text-ink hover:bg-copper-100",
  ghostOnDark: "border-2 border-white/80 text-white hover:bg-white hover:text-ink",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  track?: TrackEvent;
  trackLabel?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  track,
  trackLabel,
  ariaLabel,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const data = track ? { "data-track": track, "data-track-label": trackLabel } : {};
  const external = /^(https?:|tel:|mailto:)/.test(href);

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...data}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel} {...data}>
      {children}
    </Link>
  );
}
