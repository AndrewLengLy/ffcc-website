import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoBlock } from "@/components/video/VideoBlock";
import { Reveal } from "@/components/motion/Reveal";

export function LatestVideo() {
  return (
    <section aria-labelledby="video-title" className="on-dark bg-ink py-16 text-white sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <Reveal>
          <VideoBlock tone="dark" />
        </Reveal>
        <Reveal>
          <SectionHeading
            id="video-title"
            eyebrow="Watch"
            title="Watch the Latest Service"
            intro={`FFCC shares its worship services on Facebook. Watch the newest one here, then join us in person on ${site.sundayWorship.day} at ${site.sundayWorship.time}.`}
            align="left"
            tone="dark"
          />
          <div className="mt-8">
            <ButtonLink href="/watch" variant="onDark">
              Go to the Watch Page
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
