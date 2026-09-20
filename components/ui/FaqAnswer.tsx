import { site } from "@/content/site";
import type { Faq } from "@/content/faq";

// FFCC's FAQ answers are published verbatim. Their original page linked a few
// phrases. This rebuilds those links without changing a word.
const LINKS: { phrase: string; href: string; track?: string }[] = [
  { phrase: "Click here for driving directions.", href: site.maps.directions, track: "directions_click" },
  { phrase: "Click here for online giving.", href: site.giving.givelify, track: "give_click" },
  { phrase: site.phone.display, href: site.phone.href, track: "phone_click" },
  { phrase: site.newDisciplesEmail, href: `mailto:${site.newDisciplesEmail}`, track: "email_click" },
];

function linkify(text: string): React.ReactNode[] {
  let parts: React.ReactNode[] = [text];
  for (const { phrase, href, track } of LINKS) {
    parts = parts.flatMap((part, i) => {
      if (typeof part !== "string" || !part.includes(phrase)) return [part];
      const out: React.ReactNode[] = [];
      part.split(phrase).forEach((chunk, j, all) => {
        out.push(chunk);
        if (j < all.length - 1) {
          const external = href.startsWith("http");
          out.push(
            <a
              key={`${phrase}-${i}-${j}`}
              href={href}
              data-track={track}
              data-track-label="faq"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {phrase}
            </a>,
          );
        }
      });
      return out;
    });
  }
  return parts;
}

// Address lines in the offering answer are short lines with no period.
const isAddressLine = (line: string) => line.length < 45 && !/[.:?]$/.test(line);

export function FaqAnswer({ faq, className = "" }: { faq: Faq; className?: string }) {
  const blocks: React.ReactNode[] = [];
  let address: string[] = [];

  const flush = () => {
    if (!address.length) return;
    blocks.push(
      <address key={`addr-${blocks.length}`} className="my-4 border-l-4 border-copper-500 pl-4 not-italic">
        {address.map((l) => (
          <span key={l} className="block">
            {l}
          </span>
        ))}
      </address>,
    );
    address = [];
  };

  faq.answer.forEach((line) => {
    if (isAddressLine(line)) {
      address.push(line);
      return;
    }
    flush();
    blocks.push(<p key={line}>{linkify(line)}</p>);
  });
  flush();

  return <div className={`prose-ffcc ${className}`}>{blocks}</div>;
}
