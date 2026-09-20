import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { faqById } from "@/content/faq";
import { photos } from "@/content/media";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { FaqAnswer } from "@/components/ui/FaqAnswer";
import { LazyMap } from "@/components/maps/LazyMap";
import { Reveal } from "@/components/motion/Reveal";
import { ClockIcon, PinIcon } from "@/components/ui/Icons";

export const metadata = pageMeta({
  title: "Service Times and Directions",
  description:
    "Sunday worship at Faith Fellowship Community Church is at 10:00 AM at 5937 Watt Avenue, North Highlands, CA 95660. Take the Watt Avenue exit from I-80 or Business 80.",
  path: "/about/times-directions",
});

export default function TimesDirectionsPage() {
  const location = faqById("location");

  return (
    <>
      <PageHeader eyebrow="About" title="Times and Directions" intro={`Sundays at ${site.sundayWorship.time} in North Highlands`} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-h2 font-medium uppercase text-ink">Join Us Sunday</h2>
            <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />

            <div className="mt-8 flex items-start gap-4">
              <ClockIcon className="mt-1 h-6 w-6 shrink-0 text-copper-700" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-muted">Sunday Worship</h3>
                <p className="text-xl font-medium text-ink">
                  {site.sundayWorship.day} at {site.sundayWorship.time}
                </p>
                <p className="text-ink-soft">“{site.worshipPhrase}” in the {site.sundayWorship.place}</p>
                <p className="mt-2 text-ink-soft">Children’s Church meets on the 2nd and 3rd Sundays for ages 3 and up.</p>
                <Link href="/events" className="link-copper mt-2 inline-flex min-h-11 items-center">
                  See the full weekly schedule
                </Link>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4">
              <PinIcon className="mt-1 h-6 w-6 shrink-0 text-copper-700" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-muted">Address</h3>
                <address className="text-xl font-medium not-italic text-ink">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
                <p className="mt-1 text-ink-soft">
                  {site.address.crossStreets}. {site.address.freeways}.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={site.maps.directions} track="directions_click" trackLabel="times_directions">
                Get Directions
              </ButtonLink>
              <ButtonLink href="/about/what-to-expect" variant="secondary">
                What to Expect
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal>
            <Photo slot={photos.timesDirections} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 560px, 100vw" />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="directions-title" className="bg-mist py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="directions-title" className="font-display text-h2 font-medium uppercase text-ink">
              Directions From the Freeway
            </h2>
            <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
            {location ? <FaqAnswer faq={location} className="mt-6 text-lg leading-relaxed text-ink-soft" /> : null}

            <h3 className="mt-10 font-display text-xl font-medium text-ink">Church office</h3>
            <p className="mt-2 text-ink-soft">{site.officeHours}</p>
            <p className="text-ink-soft">
              <a href={site.phone.href} data-track="phone_click" data-track-label="times_directions" className="link-copper">
                {site.phone.display}
              </a>
            </p>

            <h3 className="mt-8 font-display text-xl font-medium text-ink">Listed hours</h3>
            <table className="mt-2 w-full max-w-sm text-left text-ink-soft">
              <caption className="sr-only">Hours listed for the church building</caption>
              <tbody>
                {site.listedHours.map((h) => (
                  <tr key={h.days} className="border-b border-line">
                    <th scope="row" className="py-2.5 pr-4 font-medium text-ink">
                      {h.days}
                    </th>
                    <td className="py-2.5">{h.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-ink-muted">Hours can change. Call the office before a weekday visit.</p>
          </div>

          <LazyMap />
        </Container>
      </section>
    </>
  );
}
