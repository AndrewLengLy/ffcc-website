import { pageMeta } from "@/lib/seo";
import { ministries } from "@/content/ministries";
import { directives } from "@/content/identity";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = pageMeta({
  title: "Ministries for Children, Youth and Adults",
  description:
    "Ministries at Faith Fellowship Community Church in North Highlands. Children’s Church, the Youth Training Class, adult Bible study, plus Inreach and Outreach.",
  path: "/ministries",
});

export default function MinistriesPage() {
  return (
    <>
      <PageHeader eyebrow="Ministries" title="Ministries" intro="A place to learn for every age." />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-16">
          {ministries.map((m, i) => (
            <Reveal key={m.id}>
              <article id={m.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Photo
                  slot={m.photo}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className={i % 2 ? "lg:order-2" : ""}
                />
                <div>
                  <h2 className="font-display text-h2 font-medium uppercase text-ink">{m.name}</h2>
                  <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
                  <div className="prose-ffcc mt-6 text-lg leading-relaxed text-ink-soft">
                    {m.details.map((d) => (
                      <p key={d}>{d}</p>
                    ))}
                  </div>
                  <div className="mt-7">
                    <ButtonLink href="/events" variant="secondary">
                      See the Schedule
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <section aria-labelledby="directives-title" className="bg-mist py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">Our Directives</p>
            <h2 id="directives-title" className="font-display text-h2 font-medium uppercase text-ink">
              Inreach and Outreach
            </h2>
            <div aria-hidden="true" className="mx-auto mt-4 h-[5px] w-24 bg-copper-500" />
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{directives.aim}</p>
          </div>

          <Reveal mode="group" className="mt-12 grid gap-6 lg:grid-cols-2">
            {[directives.inreach, directives.outreach].map((d) => (
              <article key={d.title} className="border border-line bg-paper p-7 sm:p-9">
                <h3 className="font-display text-h3 font-medium text-ink">{d.title}</h3>
                <div aria-hidden="true" className="mt-3 h-1 w-16 bg-copper-500" />
                <p className="mt-5 leading-relaxed text-ink-soft">{d.body}</p>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-16 text-center sm:py-20">
        <Container width="narrow">
          <h2 className="font-display text-h2 font-medium uppercase text-ink">Ready to Serve at FFCC</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Serving in a ministry starts with New Disciples Orientation on the 2nd Saturday of each month.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/next-steps">See Your Next Steps</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
