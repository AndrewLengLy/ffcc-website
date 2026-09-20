import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { giving } from "@/content/giving";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = pageMeta({
  title: "Give Online or by Mail",
  description:
    "Give tithes and offerings to Faith Fellowship Community Church online through Givelify, by mail to 5937 Watt Avenue, in person, or by QR code at service.",
  path: "/give",
});

export default function GivePage() {
  return (
    <>
      <PageHeader eyebrow="Give" title="Online Giving" />

      <section className="py-16 sm:py-20">
        <Container width="narrow" className="text-center">
          <p className="text-xl leading-relaxed text-ink">{giving.blurb}</p>
          <figure className="mt-8 border-l-4 border-copper-500 bg-copper-50 p-6 text-left sm:p-8">
            <blockquote className="font-accent text-xl italic leading-relaxed text-ink sm:text-2xl">
              {giving.scripture.text}
            </blockquote>
            <figcaption className="mt-3 font-semibold text-copper-800">{giving.scripture.reference}</figcaption>
          </figure>
          <div className="mt-10 flex flex-col items-center gap-3">
            <ButtonLink href={giving.givelify} track="give_click" trackLabel="give_page_top">
              Give Online With Givelify
            </ButtonLink>
            <p className="text-sm text-ink-muted">Givelify opens in a new tab.</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="ways-title" className="bg-mist py-16 sm:py-20">
        <Container>
          <h2 id="ways-title" className="text-center font-display text-h2 font-medium uppercase text-ink">
            Ways to Give
          </h2>
          <div aria-hidden="true" className="mx-auto mt-4 h-[5px] w-24 bg-copper-500" />

          <Reveal as="ul" mode="group" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {giving.ways.map((w) => (
              <li key={w.title} className="flex flex-col border border-line bg-paper p-6 sm:p-7">
                <h3 className="font-display text-h3 font-medium text-ink">{w.title}</h3>
                <p className="mt-3 flex-1 text-ink-soft">{w.body}</p>
                {w.action === "givelify" ? (
                  <a
                    href={giving.givelify}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="give_click"
                    data-track-label="give_page_ways"
                    className="link-copper mt-4 inline-flex min-h-11 items-center"
                  >
                    Open Givelify
                  </a>
                ) : null}
                {w.action === "mail" ? (
                  <address className="mt-4 border-l-4 border-copper-500 pl-4 not-italic text-ink">
                    {site.name}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.city}, California {site.address.zip}
                  </address>
                ) : null}
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="funds-title" className="py-16 sm:py-20">
        <Container width="narrow">
          <h2 id="funds-title" className="font-display text-h2 font-medium uppercase text-ink">
            What the Giving Options Mean
          </h2>
          <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
          <div className="mt-8">
            {giving.funds.map((f) => (
              <article key={f.name} className="border-b border-line py-7 first:pt-0 last:border-b-0">
                <h3 className="font-display text-h3 font-medium text-ink">{f.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{f.body}</p>
              </article>
            ))}
          </div>

          {giving.ein.approved ? (
            <p className="mt-8 border border-line bg-mist p-5 text-[0.9375rem] text-ink-soft">
              {site.name} is recognized by the IRS as a church. EIN {giving.ein.value}.
            </p>
          ) : null}

          <div className="mt-10">
            <ButtonLink href={giving.givelify} track="give_click" trackLabel="give_page_bottom">
              Give Online With Givelify
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
