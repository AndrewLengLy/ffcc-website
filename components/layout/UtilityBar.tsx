import Link from "next/link";
import { site } from "@/content/site";
import { utilityNav } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, PhoneIcon, YouTubeIcon } from "@/components/ui/Icons";

export function UtilityBar() {
  return (
    <div className="on-dark bg-ink text-white">
      <Container className="flex min-h-11 items-center justify-between gap-4 text-[0.9375rem]">
        <a
          href={site.phone.href}
          data-track="phone_click"
          data-track-label="utility_bar"
          className="inline-flex min-h-11 items-center gap-2 text-white/90 transition-colors duration-micro ease-standard hover:text-copper-300"
        >
          <PhoneIcon className="h-4 w-4" />
          <span>{site.phone.display}</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FFCC on Facebook"
            className="inline-flex h-11 w-11 items-center justify-center text-white/90 transition-colors duration-micro ease-standard hover:text-copper-300"
          >
            <FacebookIcon />
          </a>
          {site.social.youtube ? (
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FFCC on YouTube"
              className="inline-flex h-11 w-11 items-center justify-center text-white/90 transition-colors duration-micro ease-standard hover:text-copper-300"
            >
              <YouTubeIcon />
            </a>
          ) : null}

          <ul className="flex items-center gap-1 sm:gap-2">
            {utilityNav.map((item) =>
              item.label === "Give" ? (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center bg-copper-700 px-4 font-medium text-white transition-colors duration-micro ease-standard hover:bg-copper-800 sm:min-h-9"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.href} className="hidden sm:block">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center px-2.5 text-white/90 transition-colors duration-micro ease-standard hover:text-copper-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
}
