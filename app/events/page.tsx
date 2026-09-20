import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { schedule, datedEvents } from "@/content/schedule";
import { faqById } from "@/content/faq";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FaqAnswer } from "@/components/ui/FaqAnswer";
import { EventCards } from "@/components/events/EventCards";
import { ClockIcon, PinIcon } from "@/components/ui/Icons";
import { Photo } from "@/components/ui/Photo";
import { photos } from "@/content/media";
import { ScheduleCalendar } from "@/components/events/ScheduleCalendar";

export const metadata = pageMeta({
  title: "Events and Weekly Schedule",
  description:
    "The weekly schedule at Faith Fellowship Community Church, North Highlands. Sunday worship at 10:00 AM, Bible study, prayer line and New Disciples Orientation.",
  path: "/events",
});

export default function EventsPage() {
  const eventsFaq = faqById("events");

  return (
    <>
      <PageHeader eyebrow="Events" title="Events and Schedule" intro="What meets each week and each month at FFCC." />

      {datedEvents.length ? (
        <section aria-labelledby="upcoming-title" className="py-16 sm:py-20">
          <Container>
            <h2 id="upcoming-title" className="font-display text-h2 font-medium uppercase text-ink">
              Upcoming Events
            </h2>
            <div aria-hidden="true" className="mb-10 mt-4 h-[5px] w-24 bg-copper-500" />
            <EventCards items={datedEvents} columns={3} />
          </Container>
        </section>
      ) : null}

      <section aria-labelledby="calendar-title" className="bg-mist py-16 sm:py-20">
        <Container>
          <h2 id="calendar-title" className="font-display text-h2 font-medium uppercase text-ink">
            This Month at FFCC
          </h2>
          <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Choose any marked day to see what meets. Everything on the calendar repeats every week or every month, and
            each one is written out in full below.
          </p>
          <ScheduleCalendar />
        </Container>
      </section>

      <section aria-labelledby="weekly-title" className="py-16 sm:py-20">
        <Container>
          <h2 id="weekly-title" className="font-display text-h2 font-medium uppercase text-ink">
            The Regular Schedule
          </h2>
          <div aria-hidden="true" className="mt-4 h-[5px] w-24 bg-copper-500" />
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>{eventsFaq ? <FaqAnswer faq={eventsFaq} className="text-lg leading-relaxed text-ink-soft" /> : null}</div>
            <Photo slot={photos.events} aspect="aspect-[16/9]" sizes="(min-width: 1024px) 560px, 100vw" />
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {schedule.map((item) => (
              <li key={item.id} id={item.id} className="scroll-mt-28 border border-line bg-paper p-6 sm:p-7">
                <h3 className="font-display text-h3 font-medium text-ink">{item.title}</h3>
                <p className="mt-3 flex items-start gap-2.5 font-medium text-ink">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper-700" />
                  {item.when}
                </p>
                <p className="mt-1.5 flex items-start gap-2.5 text-ink-soft">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper-700" />
                  {item.where}
                </p>
                <div className="prose-ffcc mt-4 text-[0.9375rem] text-ink-soft">
                  {item.details.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-muted">
            Times can change around holidays. Call the church office at {site.phone.display} to confirm.
          </p>
        </Container>
      </section>

      <section className="bg-mist py-16 text-center sm:py-20">
        <Container width="narrow">
          <h2 className="font-display text-h2 font-medium uppercase text-ink">Start With Sunday Worship</h2>
          <p className="mt-4 text-lg text-ink-soft">
            {site.sundayWorship.day} at {site.sundayWorship.time} in the {site.sundayWorship.place}.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/about/times-directions">Join Us Sunday</ButtonLink>
            <ButtonLink href={site.social.facebook} variant="secondary">
              Follow on Facebook
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
