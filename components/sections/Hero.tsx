import Image from "next/image";
import { site } from "@/content/site";
import { photos } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

// Static hero. With a real FFCC photo it becomes photo plus a dark overlay
// with white text. Until then it is a flat gray block with dark text.
export function Hero() {
  const photo = photos.homeHero;
  const hasPhoto = Boolean(photo.src);
  const text = hasPhoto ? "text-white" : "text-ink";

  return (
    <section
      aria-labelledby="hero-title"
      className={`relative isolate overflow-hidden ${hasPhoto ? "on-dark bg-ink" : "bg-slot"}`}
    >
      {hasPhoto ? (
        <>
          <Image src={photo.src!} alt={photo.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/70" />
        </>
      ) : (
        <div role="img" aria-label={photo.alt} className="absolute inset-0 -z-10" />
      )}

      <Container className={`flex min-h-[34rem] flex-col items-center justify-center py-20 text-center sm:min-h-[38rem] ${text}`}>
        <p className="animate-hero-in text-base font-medium uppercase tracking-[0.2em] sm:text-lg">Welcome to</p>
        <h1
          id="hero-title"
          className="animate-hero-in mt-4 max-w-4xl font-display text-h1 font-semibold uppercase [animation-delay:80ms]"
        >
          {site.name}
        </h1>
        <p className="animate-hero-in mt-6 max-w-2xl font-accent text-2xl italic sm:text-[2rem] sm:leading-snug [animation-delay:160ms]">
          “{site.tagline}”
        </p>
        <div className="animate-hero-in mt-10 flex flex-col gap-4 sm:flex-row [animation-delay:240ms]">
          <ButtonLink href="/about/times-directions">
            Join Us Sunday
          </ButtonLink>
          <ButtonLink href="/watch" variant={hasPhoto ? "ghostOnDark" : "secondary"}>
            Watch the Latest Service
          </ButtonLink>
        </div>
        <p className="animate-hero-in mt-5 text-[0.9375rem] font-medium [animation-delay:240ms]">
          Sundays at {site.sundayWorship.time}. Guests are welcome.
        </p>
      </Container>
    </section>
  );
}
