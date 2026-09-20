import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = pageMeta({
  title: "Leadership",
  description:
    "Leadership at Faith Fellowship Community Church in North Highlands, CA. This page is being updated. Call the church office at 916.339.9156 with any question.",
  path: "/about/leadership",
});

// Placeholder cards only. Names, titles and photos are added after the church
// confirms its current leadership (see CONTENT_TODO.md). Do not invent any.
const slots = [
  { role: "Pastor", alt: "Photo needed: portrait of the pastor" },
  { role: "Ministry Leader", alt: "Photo needed: portrait of a ministry leader" },
  { role: "Ministry Leader", alt: "Photo needed: portrait of a ministry leader" },
  { role: "Ministry Leader", alt: "Photo needed: portrait of a ministry leader" },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Leadership" intro="This page is being updated." />

      <section className="py-16 sm:py-20">
        <Container>
          <p className="mx-auto max-w-2xl text-center text-lg text-ink-soft">
            Names and photos of the pastor and ministry leaders will appear here once the church confirms them.
          </p>
          <Reveal as="ul" mode="group" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {slots.map((s, i) => (
              <li key={i} className="border border-line bg-paper">
                <div role="img" aria-label={s.alt} className="aspect-[4/5] w-full bg-slot" />
                <div className="p-5">
                  <div aria-hidden="true" className="h-5 w-3/4 bg-slot" />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink-muted">{s.role}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-16 text-center sm:py-20">
        <Container width="narrow">
          <h2 className="font-display text-h2 font-medium uppercase text-ink">Questions for the Church Office</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Call {site.phone.display} or send a message. The office is open {site.officeHours}.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact">Contact Us</ButtonLink>
            <ButtonLink href={site.phone.href} variant="secondary" track="phone_click" trackLabel="leadership">
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
