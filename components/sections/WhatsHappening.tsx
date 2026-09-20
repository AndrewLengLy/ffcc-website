import { featuredSchedule, datedEvents } from "@/content/schedule";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCards } from "@/components/events/EventCards";

export function WhatsHappening() {
  // Dated events from FFCC's own pages lead the row when any exist.
  const items = [...datedEvents, ...featuredSchedule].slice(0, 4);

  return (
    <section aria-labelledby="happening-title" className="bg-paper py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="happening-title"
          eyebrow="What’s Happening"
          title="What’s Happening at FFCC"
          intro="These gatherings meet on a regular schedule. Select a card for the details."
        />
        <div className="mt-12">
          <EventCards items={items} columns={4} />
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/events" variant="secondary">
            See the Full Schedule
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
