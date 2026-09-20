import { photos } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/motion/Reveal";

export function Serve() {
  return (
    <section aria-labelledby="serve-title" className="on-dark bg-ink py-16 text-white sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Photo slot={photos.homeServe} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 560px, 100vw" />
        </Reveal>
        <Reveal>
          <SectionHeading
            id="serve-title"
            eyebrow="Serve"
            title="Serve After New Disciples Orientation"
            intro="FFCC sends new disciples into ministry after orientation. Orientation meets on the 2nd Saturday of each month at 10:00 AM."
            align="left"
            tone="dark"
          />
          <div className="mt-8">
            <ButtonLink href="/next-steps" variant="onDark">
              See Your Next Steps
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
