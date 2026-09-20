import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { identity } from "@/content/identity";
import { faqById } from "@/content/faq";
import { photos } from "@/content/media";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { FaqAnswer } from "@/components/ui/FaqAnswer";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = pageMeta({
  title: "What to Expect on Sunday",
  description:
    "Plan your first visit to Faith Fellowship Community Church in North Highlands. Sunday worship is at 10:00 AM. There is no dress code and guests are welcome.",
  path: "/about/what-to-expect",
});

// FAQ answers below are FFCC's published wording.
const topics = [
  { id: "services", heading: "When and where we meet" },
  { id: "dress", heading: "What to wear" },
  { id: "children", heading: "Children’s Church" },
  { id: "location", heading: "Finding the church" },
] as const;

export default function WhatToExpectPage() {
  const membership = faqById("membership");

  return (
    <>
      <PageHeader eyebrow="About" title="What to Expect" intro="Guests are welcome at every service." />

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-h2 font-medium uppercase text-ink">You Are Welcome Here</h2>
            <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{identity.welcome}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/about/times-directions">Join Us Sunday</ButtonLink>
              <ButtonLink href={site.maps.directions} variant="secondary" track="directions_click" trackLabel="what_to_expect">
                Get Directions
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal>
            <Photo slot={photos.whatToExpect} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 560px, 100vw" />
          </Reveal>
        </Container>
      </section>

      <section aria-label="Common questions from guests" className="bg-mist py-16 sm:py-20">
        <Container>
          <Reveal as="div" mode="group" className="grid gap-6 md:grid-cols-2">
            {topics.map((t) => {
              const faq = faqById(t.id);
              if (!faq) return null;
              return (
                <article key={t.id} className="border border-line bg-paper p-7 sm:p-8">
                  <h2 className="font-display text-h3 font-medium text-ink">{t.heading}</h2>
                  <FaqAnswer faq={faq} className="mt-4 text-ink-soft" />
                </article>
              );
            })}

            <article className="border border-line bg-paper p-7 sm:p-8">
              <h2 className="font-display text-h3 font-medium text-ink">Worship style</h2>
              <p className="mt-4 text-ink-soft">
                Worship at FFCC includes contemporary music and traditional hymns, along with praise and worship.
              </p>
            </article>

            {membership ? (
              <article className="border border-line bg-paper p-7 sm:p-8">
                <h2 className="font-display text-h3 font-medium text-ink">The call to discipleship</h2>
                <FaqAnswer faq={{ ...membership, answer: membership.answer.slice(0, 1) }} className="mt-4 text-ink-soft" />
                <p className="mt-4">
                  <a href="/next-steps" className="link-copper">
                    See the next steps for new disciples
                  </a>
                </p>
              </article>
            ) : null}
          </Reveal>
        </Container>
      </section>

      <section className="py-16 text-center sm:py-20">
        <Container width="narrow">
          <h2 className="font-display text-h2 font-medium uppercase text-ink">Join Us This Sunday</h2>
          <p className="mt-4 text-lg text-ink-soft">
            {site.sundayWorship.day} at {site.sundayWorship.time} at {site.address.street}, {site.address.city}.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/about/times-directions">Join Us Sunday</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
