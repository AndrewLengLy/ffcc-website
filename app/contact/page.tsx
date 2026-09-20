import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { faqById } from "@/content/faq";
import { photos } from "@/content/media";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { FaqAnswer } from "@/components/ui/FaqAnswer";
import { ContactForm } from "@/components/forms/ContactForm";
import { LazyMap } from "@/components/maps/LazyMap";
import { FacebookIcon, MailIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/ui/Icons";

export const metadata = pageMeta({
  title: "Contact the Church Office",
  description:
    "Contact Faith Fellowship Community Church at 5937 Watt Avenue, North Highlands, CA 95660. Call 916.339.9156, email the office, or ask about renting a room.",
  path: "/contact",
});

export default function ContactPage() {
  const rentals = faqById("rentals");

  const row = "flex items-start gap-4";
  const icon = "mt-1 h-6 w-6 shrink-0 text-copper-700";
  const term = "text-sm font-semibold uppercase tracking-[0.1em] text-ink-muted";

  return (
    <>
      <PageHeader eyebrow="Contact" title="Contact Us" intro="Call, write or send a message to the church office." />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="font-display text-h2 font-medium uppercase text-ink">Reach the Church Office</h2>
            <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />

            <div className="mt-8 grid gap-6">
              <div className={row}>
                <PinIcon className={icon} />
                <div>
                  <h3 className={term}>Write us</h3>
                  <div>
                    <address className="not-italic text-ink">
                      {site.name}
                      <br />
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </address>
                  </div>
                </div>
              </div>
              <div className={row}>
                <PhoneIcon className={icon} />
                <div>
                  <h3 className={term}>Call us</h3>
                  <div>
                    <a href={site.phone.href} data-track="phone_click" data-track-label="contact" className="link-copper text-lg">
                      {site.phone.display}
                    </a>
                  </div>
                  <h3 className={`${term} mt-3`}>Fax</h3>
                  <div className="text-ink">{site.fax}</div>
                </div>
              </div>
              <div className={row}>
                <MailIcon className={icon} />
                <div>
                  <h3 className={term}>Email us</h3>
                  <div>
                    <a
                      href={`mailto:${site.email}`}
                      data-track="email_click"
                      data-track-label="contact"
                      className="link-copper break-all"
                    >
                      {site.email}
                    </a>
                  </div>
                  <h3 className={`${term} mt-3`}>New disciples</h3>
                  <div>
                    <a
                      href={`mailto:${site.newDisciplesEmail}`}
                      data-track="email_click"
                      data-track-label="contact_new_disciples"
                      className="link-copper break-all"
                    >
                      {site.newDisciplesEmail}
                    </a>
                  </div>
                </div>
              </div>
              <div className={row}>
                <ClockIcon className={icon} />
                <div>
                  <h3 className={term}>Church office</h3>
                  <div className="text-ink">{site.officeHours}</div>
                  <h3 className={`${term} mt-3`}>Listed hours</h3>
                  <div className="text-ink">
                    {site.listedHours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}, {h.hours}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={row}>
                <FacebookIcon className={icon} />
                <div>
                  <h3 className={term}>Facebook</h3>
                  <div>
                    <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="link-copper">
                      facebook.com/faithfellowshiplive
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-line bg-mist p-6 sm:p-9">
            <h2 className="font-display text-h3 font-semibold text-ink">Send a Message</h2>
            <p className="mb-7 mt-2 text-ink-soft">Tell us what you need and the office will follow up.</p>
            <ContactForm />
          </div>
        </Container>
      </section>

      <section aria-labelledby="map-title" className="bg-mist py-16 sm:py-20">
        <Container>
          <h2 id="map-title" className="font-display text-h2 font-medium uppercase text-ink">
            Find Us on Watt Avenue
          </h2>
          <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
          <p className="mb-8 mt-5 max-w-2xl text-lg text-ink-soft">{site.directions}</p>
          <LazyMap />
        </Container>
      </section>

      <section id="rentals" aria-labelledby="rentals-title" className="scroll-mt-28 py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Photo slot={photos.rentals} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 560px, 100vw" />
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">Facility Rentals</p>
            <h2 id="rentals-title" className="font-display text-h2 font-medium uppercase text-ink">
              Rent a Room or the Sanctuary
            </h2>
            <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
            {rentals ? <FaqAnswer faq={rentals} className="mt-6 text-lg leading-relaxed text-ink-soft" /> : null}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={site.phone.href} track="phone_click" trackLabel="contact_rentals">
                Call {site.phone.display}
              </ButtonLink>
              <ButtonLink href="/contact?reason=rental" variant="secondary">
                Send a Rental Request
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
