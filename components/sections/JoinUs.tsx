import Link from "next/link";
import { site } from "@/content/site";
import { photos } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRightIcon, ClockIcon, PinIcon } from "@/components/ui/Icons";

export function JoinUs() {
  return (
    <section aria-labelledby="join-title" className="bg-paper py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">Join Us</p>
          <h2 id="join-title" className="font-display text-h2 font-medium uppercase text-ink">
            Join {site.worshipPhrase}
          </h2>
          <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />

          <div className="mt-8 grid gap-5">
            <div className="flex items-start gap-4">
              <ClockIcon className="mt-1 h-6 w-6 shrink-0 text-copper-700" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-muted">Sunday Worship</p>
                <p className="text-xl font-medium text-ink">
                  {site.sundayWorship.day} at {site.sundayWorship.time}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PinIcon className="mt-1 h-6 w-6 shrink-0 text-copper-700" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-muted">Address</p>
                <p className="text-xl font-medium text-ink">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={site.maps.directions} track="directions_click" trackLabel="home_join_us">
              Get Directions
            </ButtonLink>
            <Link href="/about/what-to-expect" className="link-copper inline-flex min-h-11 items-center gap-2">
              New here? See what to expect
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <Photo slot={photos.homeJoinUs} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 560px, 100vw" />
        </Reveal>
      </Container>
    </section>
  );
}
