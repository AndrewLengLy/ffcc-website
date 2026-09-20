type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
};

// Section title pattern from docs/template-notes.md: small eyebrow label,
// uppercase display title, short accent rule, optional one-line intro.
export function SectionHeading({ eyebrow, title, intro, align = "center", tone = "light", id }: Props) {
  const center = align === "center";
  const eyebrowColor = tone === "dark" ? "text-copper-500" : "text-copper-700";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const introColor = tone === "dark" ? "text-white/85" : "text-ink-soft";

  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}>{eyebrow}</p>
      ) : null}
      <h2 id={id} className={`font-display text-h2 font-medium uppercase ${titleColor}`}>
        {title}
      </h2>
      <div aria-hidden="true" className={`mt-4 h-[5px] w-24 bg-copper-500 ${center ? "mx-auto" : ""}`} />
      {intro ? <p className={`mt-5 text-lg leading-relaxed ${introColor}`}>{intro}</p> : null}
    </div>
  );
}
