import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { faqById } from "@/content/faq";
import { photos } from "@/content/media";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { FaqAnswer } from "@/components/ui/FaqAnswer";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = pageMeta({
  title: "Next Steps for New Disciples",
  description:
    "How to become a disciple at Faith Fellowship Community Church. Attend New Disciples Orientation on the 2nd Saturday, join a Koinonia Home Group and serve.",
  path: "/next-steps",
});

export default function NextStepsPage() {
  const membership = faqById("membership");
  const [becoming, orientationWhy, orientationWhen] = membership?.answer ?? [];

  const steps = [
    { n: "1", id: "disciple", label: "Become a Disciple" },
    { n: "2", id: "orientation", label: "New Disciples Orientation" },
    { n: "3", id: "groups", label: "Koinonia Home Groups" },
    { n: "4", id: "serve", label: "Serve" },
  ];

  return (
    <>
      <PageHeader eyebrow="Next Steps" title="Your Next Steps" intro="Four steps for anyone who wants to belong at FFCC." />

      <nav aria-label="Steps on this page" className="border-b border-line bg-mist">
        <Container>
          <ol className="grid grid-cols-2 gap-x-4 py-3 md:grid-cols-4">
            {steps.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex min-h-12 items-center gap-3 text-[0.9375rem] font-medium text-ink transition-colors duration-micro ease-standard hover:text-copper-800"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center bg-ink text-sm font-semibold text-white">
                    {s.n}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </nav>

      <section id="disciple" aria-labelledby="disciple-title" className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">Step 1</p>
            <h2 id="disciple-title" className="font-display text-h2 font-medium uppercase text-ink">
              Become a Disciple
            </h2>
            <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
            {membership && becoming ? (
              <FaqAnswer faq={{ ...membership, answer: [becoming] }} className="mt-6 text-lg leading-relaxed text-ink-soft" />
            ) : null}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/about/times-directions">Join Us Sunday</ButtonLink>
              <ButtonLink href={site.phone.href} variant="secondary" track="phone_click" trackLabel="next_steps">
                Call {site.phone.display}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal>
            <Photo slot={photos.nextSteps} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 560px, 100vw" />
          </Reveal>
        </Container>
      </section>

      <section id="orientation" aria-labelledby="orientation-title" className="bg-mist py-16 sm:py-20">
        <Container width="narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">Step 2</p>
          <h2 id="orientation-title" className="font-display text-h2 font-medium uppercase text-ink">
            New Disciples Orientation
          </h2>
          <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["When", "2nd Saturday of each month"],
              ["Time", "10:00 AM"],
              ["Where", "Main Sanctuary"],
            ].map(([k, v]) => (
              <div key={k} className="border border-line bg-paper p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">{k}</dt>
                <dd className="mt-1 text-lg font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          {membership && orientationWhy && orientationWhen ? (
            <FaqAnswer
              faq={{ ...membership, answer: [orientationWhy, orientationWhen] }}
              className="mt-8 text-lg leading-relaxed text-ink-soft"
            />
          ) : null}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact?reason=orientation">Ask About Orientation</ButtonLink>
            <ButtonLink
              href={`mailto:${site.newDisciplesEmail}`}
              variant="secondary"
              track="email_click"
              trackLabel="next_steps_orientation"
            >
              Email New Disciples
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section id="groups" aria-labelledby="groups-title" className="py-16 sm:py-20">
        <Container width="narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">Step 3</p>
          <h2 id="groups-title" className="font-display text-h2 font-medium uppercase text-ink">
            Join a Koinonia Home Group
          </h2>
          <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Koinonia Home Groups (KHGs) are FFCC’s small groups. They meet on weekdays at various times and locations.
            The church office can tell you which groups are meeting now.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="secondary">
              Ask About a Group
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section id="serve" aria-labelledby="serve-title" className="on-dark bg-ink py-16 text-white sm:py-20">
        <Container width="narrow">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-500">Step 4</p>
          <h2 id="serve-title" className="font-display text-h2 font-medium uppercase">
            Serve in a Ministry
          </h2>
          <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            New Disciples Orientation prepares you to be dispatched into ministry. Once you complete it, you can take
            part in a ministry and vote in Church elections.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/ministries" variant="onDark">
              See the Ministries
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghostOnDark">
              Contact the Office
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
