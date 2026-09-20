import { pageMeta } from "@/lib/seo";
import { history } from "@/content/history";
import { photos } from "@/content/media";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";

export const metadata = pageMeta({
  title: "Our History",
  description:
    "The history of Faith Fellowship Community Church, from its first Order of Worship on November 5, 2000 to its home at 5937 Watt Avenue in North Highlands.",
  path: "/about/our-history",
});

export default function OurHistoryPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Our History" intro="We have come this far by faith." />

      <section className="py-16 sm:py-20">
        <Container width="narrow">
          <Photo slot={photos.history} aspect="aspect-[16/9]" sizes="(min-width: 768px) 768px, 100vw" className="mb-12" />

          <h2 className="font-display text-h3 font-medium uppercase text-ink">{history.heading}</h2>
          <div aria-hidden="true" className="mt-3 h-1 w-16 bg-copper-500" />
          <p className="mt-5 border-l-4 border-copper-500 bg-copper-50 p-4 text-[0.9375rem] text-ink-soft">
            This is the history as published by Faith Fellowship Community Church. It covers the years 2000 to 2016.
          </p>

          <div className="prose-ffcc mt-8 text-lg leading-relaxed text-ink-soft">
            {history.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 text-center sm:py-20">
        <Container width="narrow">
          <h2 className="font-display text-h2 font-medium uppercase text-ink">Be Part of the Story</h2>
          <p className="mt-4 text-lg text-ink-soft">The Faith Fellowship Family meets every Sunday at 10:00 AM.</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/about/times-directions">Join Us Sunday</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
