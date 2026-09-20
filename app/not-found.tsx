import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page could not be found on the Faith Fellowship Community Church website.",
  robots: { index: false },
};

const links = [
  { label: "What to Expect", href: "/about/what-to-expect" },
  { label: "Times and Directions", href: "/about/times-directions" },
  { label: "Events", href: "/events" },
  { label: "Watch", href: "/watch" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="on-dark bg-ink py-24 text-center text-white sm:py-32">
      <Container width="narrow">
        <p className="animate-hero-in font-display text-7xl font-semibold text-copper-500 sm:text-8xl">404</p>
        <h1 className="animate-hero-in mt-4 font-display text-h1 font-semibold uppercase [animation-delay:80ms]">
          We Could Not Find That Page
        </h1>
        <div aria-hidden="true" className="mx-auto mt-5 h-[5px] w-24 bg-copper-500" />
        <p className="animate-hero-in mt-6 text-lg text-white/85 [animation-delay:160ms]">
          The link may be old or the page may have moved. You are still welcome here. Sunday worship is at{" "}
          {site.sundayWorship.time}.
        </p>
        <div className="animate-hero-in mt-9 flex flex-col justify-center gap-4 sm:flex-row [animation-delay:240ms]">
          <ButtonLink href="/" variant="onDark">
            Go to the Home Page
          </ButtonLink>
          <ButtonLink href="/about/times-directions" variant="ghostOnDark">
            Join Us Sunday
          </ButtonLink>
        </div>
        <nav aria-label="Helpful links" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-11 items-center text-white/85 underline underline-offset-4 transition-colors duration-micro ease-standard hover:text-copper-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
