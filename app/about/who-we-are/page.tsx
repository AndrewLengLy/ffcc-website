import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { identity } from "@/content/identity";
import { photos } from "@/content/media";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = pageMeta({
  title: "Who We Are",
  description:
    "Faith Fellowship Community Church is a contemporary creative church in North Highlands, CA. Read our mission, our vision and the statement that defines us.",
  path: "/about/who-we-are",
});

export default function WhoWeArePage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Who We Are" intro={`“${site.tagline}”`} />

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-h2 font-medium uppercase text-ink">Our Identity</h2>
            <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{identity.identity}</p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{identity.commitment}</p>
          </Reveal>
          <Reveal>
            <Photo slot={photos.whoWeAre} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 560px, 100vw" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <Reveal mode="group" className="grid gap-6 md:grid-cols-2">
            <article className="border border-line bg-paper p-7 sm:p-9">
              <h2 className="font-display text-h3 font-medium uppercase text-ink">Mission Statement</h2>
              <div aria-hidden="true" className="mt-3 h-1 w-16 bg-copper-500" />
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{identity.mission}</p>
            </article>
            <article className="border border-line bg-paper p-7 sm:p-9">
              <h2 className="font-display text-h3 font-medium uppercase text-ink">Vision Statement</h2>
              <div aria-hidden="true" className="mt-3 h-1 w-16 bg-copper-500" />
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{identity.vision}</p>
            </article>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 text-center sm:py-20">
        <Container width="narrow">
          <h2 className="font-display text-h2 font-medium uppercase text-ink">Read What We Believe</h2>
          <p className="mt-4 text-lg text-ink-soft">Our Statement of Faith covers eight topics, each with scripture references.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/about/times-directions">Join Us Sunday</ButtonLink>
            <ButtonLink href="/about/what-we-believe" variant="secondary">
              What We Believe
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
