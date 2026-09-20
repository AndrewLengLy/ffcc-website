import { Container } from "@/components/ui/Container";

type Props = { eyebrow?: string; title: string; intro?: string };

// Inner page banner. Solid neutral band with the page title, matching the
// no-photo banner pattern in docs/template-notes.md.
export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <div className="on-dark bg-ink text-white">
      <Container className="py-14 text-center sm:py-20">
        {eyebrow ? (
          <p className="animate-hero-in mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-500">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="animate-hero-in font-display text-h1 font-semibold uppercase [animation-delay:60ms]">{title}</h1>
        <div aria-hidden="true" className="mx-auto mt-5 h-[5px] w-24 bg-copper-500" />
        {intro ? (
          <p className="animate-hero-in mx-auto mt-5 max-w-2xl text-lg text-white/85 [animation-delay:140ms]">{intro}</p>
        ) : null}
      </Container>
    </div>
  );
}
