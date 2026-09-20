import { pageMeta } from "@/lib/seo";
import { beliefs } from "@/content/beliefs";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = pageMeta({
  title: "What We Believe",
  description:
    "The Statement of Faith of Faith Fellowship Community Church, North Highlands, CA. Eight belief statements with their scripture references.",
  path: "/about/what-we-believe",
});

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function WhatWeBelievePage() {
  return (
    <>
      <PageHeader eyebrow="About" title="What We Believe" intro="Our Statement of Faith" />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <nav aria-label="Statement of Faith topics" className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">Topics</h2>
            <ul className="mt-3 border-l-2 border-line">
              {beliefs.map((b) => (
                <li key={b.topic}>
                  <a
                    href={`#${slug(b.topic)}`}
                    className="-ml-0.5 flex min-h-11 items-center border-l-2 border-transparent pl-4 text-[0.9375rem] text-ink-soft transition-colors duration-micro ease-standard hover:border-copper-600 hover:text-copper-800"
                  >
                    {b.topic}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-3xl">
            {beliefs.map((b) => (
              <article
                key={b.topic}
                id={slug(b.topic)}
                className="border-b border-line py-9 first:pt-0 last:border-b-0 last:pb-0"
              >
                <h2 className="font-display text-h3 font-medium text-ink">{b.topic}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{b.statement}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 text-center sm:py-20">
        <Container width="narrow">
          <h2 className="font-display text-h2 font-medium uppercase text-ink">Worship With Us Sunday</h2>
          <p className="mt-4 text-lg text-ink-soft">New disciples learn more about these beliefs at New Disciples Orientation.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/about/times-directions">Join Us Sunday</ButtonLink>
            <ButtonLink href="/next-steps" variant="secondary">
              See Next Steps
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
