import Link from "next/link";
import { ministries } from "@/content/ministries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function GetConnected() {
  return (
    <section aria-labelledby="connected-title" className="bg-mist py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="connected-title"
          eyebrow="Get Connected"
          title="A Ministry for Every Age"
          intro="Every age group has a place to learn at Faith Fellowship."
        />
        <Reveal as="ul" mode="group" className="mt-12 grid gap-6 md:grid-cols-3">
          {ministries.map((m) => (
            <li key={m.id} className="flex">
              <Link
                href={`/ministries#${m.id}`}
                className="group flex w-full flex-col border border-line bg-paper transition-[border-color,box-shadow,transform] duration-fast ease-out-quart hover:-translate-y-1 hover:border-copper-600 hover:shadow-menu"
              >
                <Photo slot={m.photo} aspect="aspect-[3/2]" sizes="(min-width: 768px) 380px, 100vw" rounded={false} />
                <span className="flex flex-1 flex-col p-6">
                  <span className="font-display text-h3 font-medium text-ink">{m.name}</span>
                  <span className="mt-3 flex-1 text-[0.9375rem] text-ink-soft">{m.summary}</span>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-ink">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-fast ease-standard group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
