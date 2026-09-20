import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { VideoBlock } from "@/components/video/VideoBlock";
import { FacebookIcon, YouTubeIcon } from "@/components/ui/Icons";

export const metadata = pageMeta({
  title: "Watch the Latest Service",
  description:
    "Watch the latest worship service from Faith Fellowship Community Church in North Highlands, CA. Sunday worship begins at 10:00 AM.",
  path: "/watch",
});

export default function WatchPage() {
  return (
    <>
      <PageHeader eyebrow="Watch" title="Watch a Service" intro={`Sunday worship begins at ${site.sundayWorship.time}.`} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-14">
          <div>
            <h2 className="sr-only">Latest service video</h2>
            <VideoBlock title="Latest FFCC worship service" />
          </div>

          <aside aria-labelledby="watch-aside-title" className="self-start border border-line bg-mist p-7">
            <h2 id="watch-aside-title" className="font-display text-h3 font-medium text-ink">
              Sunday Worship
            </h2>
            <p className="mt-3 text-xl font-medium text-ink">
              {site.sundayWorship.day} at {site.sundayWorship.time}
            </p>
            <p className="text-ink-soft">
              {site.address.street}, {site.address.city}
            </p>
            <p className="mt-4 text-[0.9375rem] text-ink-soft">
              FFCC posts its services online. Older services are on the church’s video pages.
            </p>
            <ul className="mt-5 grid gap-3">
              <li>
                <a
                  href={site.social.facebookVideos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center gap-3 border-2 border-ink/80 px-5 font-semibold text-ink transition-colors duration-micro ease-standard hover:border-copper-700 hover:text-copper-800"
                >
                  <FacebookIcon />
                  FFCC videos on Facebook
                </a>
              </li>
              {site.social.youtube ? (
                <li>
                  <a
                    href={site.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 w-full items-center gap-3 border-2 border-ink/80 px-5 font-semibold text-ink transition-colors duration-micro ease-standard hover:border-copper-700 hover:text-copper-800"
                  >
                    <YouTubeIcon />
                    FFCC on YouTube
                  </a>
                </li>
              ) : null}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="bg-mist py-16 text-center sm:py-20">
        <Container width="narrow">
          <h2 className="font-display text-h2 font-medium uppercase text-ink">Worship With Us in Person</h2>
          <p className="mt-4 text-lg text-ink-soft">Guests are welcome every Sunday. There is no dress code.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/about/times-directions">Join Us Sunday</ButtonLink>
            <ButtonLink href="/about/what-to-expect" variant="secondary">
              What to Expect
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
