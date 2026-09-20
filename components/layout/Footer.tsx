import Link from "next/link";
import { site } from "@/content/site";
import { footerQuickLinks } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FacebookIcon, YouTubeIcon } from "@/components/ui/Icons";

const heading = "mb-4 text-lg font-medium text-ink";
const link =
  "inline-flex min-h-11 items-center text-ink-soft underline-offset-4 transition-colors duration-micro ease-standard hover:text-copper-800 hover:underline sm:min-h-9";

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <Container className="grid gap-x-10 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-[1fr_0.9fr_1fr_1.3fr]">
        <section aria-labelledby="footer-times">
          <h2 id="footer-times" className={heading}>
            Service Times
          </h2>
          <p className="font-medium text-ink">Sunday Worship</p>
          <p className="text-ink-soft">
            {site.sundayWorship.day} at {site.sundayWorship.time}
          </p>
          <p className="text-ink-soft">{site.sundayWorship.place}</p>
          <p className="mt-4 text-[0.9375rem] text-ink-soft">
            Children’s Church meets on the 2nd and 3rd Sundays for ages 3 and up.
          </p>
          <Link href="/events" className="link-copper mt-3 inline-flex min-h-11 items-center text-[0.9375rem]">
            See the weekly schedule
          </Link>
        </section>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" className={heading}>
            Quick Links
          </h2>
          <ul>
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-give">
          <h2 id="footer-give" className={heading}>
            Give and Follow
          </h2>
          <p className="mb-4 text-[0.9375rem] text-ink-soft">Tithes and offerings can be given online through Givelify.</p>
          <ButtonLink href={site.giving.givelify} track="give_click" trackLabel="footer">
            Give Online
          </ButtonLink>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FFCC on Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink/80 text-ink transition-colors duration-micro ease-standard hover:border-copper-700 hover:text-copper-700"
            >
              <FacebookIcon />
            </a>
            {site.social.youtube ? (
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FFCC on YouTube"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink/80 text-ink transition-colors duration-micro ease-standard hover:border-copper-700 hover:text-copper-700"
              >
                <YouTubeIcon />
              </a>
            ) : null}
          </div>
        </section>

        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className={heading}>
            Location and Contact
          </h2>
          <address className="not-italic text-ink-soft">
            <p className="font-medium text-ink">{site.name}</p>
            <p>{site.address.street}</p>
            <p>
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p className="mt-3">
              <a href={site.phone.href} data-track="phone_click" data-track-label="footer" className={link}>
                {site.phone.display}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                data-track="email_click"
                data-track-label="footer"
                className={`${link} break-all`}
              >
                {site.email}
              </a>
            </p>
          </address>
          <div className="mt-4 flex flex-wrap gap-3">
            <ButtonLink href={site.maps.directions} variant="secondary" track="directions_click" trackLabel="footer">
              Get Directions
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </section>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-5 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. “{site.tagline}”
          </p>
          <Link href="/privacy" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-copper-800 sm:min-h-0">
            Privacy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
