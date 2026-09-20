import Image from "next/image";
import Link from "next/link";

type Props = { tone?: "light" | "dark"; className?: string };

// FFCC's own mark (public/brand) beside a type-only wordmark.
// The mark is never redrawn. Swap the file when the church sends a larger one.
export function Logo({ tone = "light", className = "" }: Props) {
  const name = tone === "dark" ? "text-white" : "text-ink";
  const sub = tone === "dark" ? "text-white/70" : "text-ink-muted";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/ffcc-mark.png"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className={`text-[1.0625rem] font-semibold uppercase tracking-[0.08em] sm:text-lg ${name}`}>
          Faith Fellowship
        </span>{" "}
        <span className={`mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.22em] ${sub}`}>
          Community Church
        </span>
        <span className="sr-only">, home page</span>
      </span>
    </Link>
  );
}
