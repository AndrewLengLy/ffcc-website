import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FacebookIcon } from "@/components/ui/Icons";

// Facebook follow band. It fills the slot a newsletter signup would take.
export function StayConnected() {
  return (
    <section aria-labelledby="stay-title" className="border-t border-line bg-copper-50 py-14 sm:py-16">
      <Container className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-copper-800">Stay Connected</p>
          <h2 id="stay-title" className="font-display text-h2 font-medium uppercase text-ink">
            Follow FFCC on Facebook
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink-soft">
            Service videos are posted on the FFCC Facebook page.
          </p>
        </div>
        <ButtonLink href={site.social.facebook} className="shrink-0">
          <FacebookIcon />
          Follow on Facebook
        </ButtonLink>
      </Container>
    </section>
  );
}
