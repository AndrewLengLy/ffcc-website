import { growTabs } from "@/content/schedule";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { Reveal } from "@/components/motion/Reveal";

type Item = { id: string; title: string; meta: string; body: string };

function ItemGrid({ items }: { items: readonly Item[] }) {
  return (
    <ul className={`grid gap-5 ${items.length > 1 ? "md:grid-cols-3" : ""}`}>
      {items.map((item) => (
        <li key={item.id} className="border border-line bg-paper p-6">
          <h3 className="font-display text-xl font-medium text-ink">{item.title}</h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-copper-700">{item.meta}</p>
          <p className="mt-3 text-[0.9375rem] text-ink-soft">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function GrowInFaith() {
  return (
    <section aria-labelledby="grow-title" className="bg-paper py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="grow-title"
          eyebrow="Classes and Groups"
          title="Grow in Your Faith"
          intro="Classes teach the foundations. Groups meet in homes during the week."
        />
        <Reveal className="mx-auto mt-12 max-w-5xl">
          <Tabs
            label="Classes and groups"
            tabs={[
              { id: "classes", label: "Classes", content: <ItemGrid items={growTabs.classes} /> },
              { id: "groups", label: "Groups", content: <ItemGrid items={growTabs.groups} /> },
            ]}
          />
          <div className="mt-10 text-center">
            <ButtonLink href="/next-steps" variant="secondary">
              Find Your Next Step
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
