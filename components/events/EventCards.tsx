"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ScheduleItem } from "@/content/schedule";
import { ArrowRightIcon, ClockIcon, CloseIcon, PinIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";

type Props = { items: ScheduleItem[]; columns?: 2 | 3 | 4 };

const grid = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

// Event cards that open a detail dialog. Each card is a real link to the
// matching entry on /events, so it still works with JavaScript off.
export function EventCards({ items, columns = 4 }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ScheduleItem | null>(null);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (active && !el.open) {
      el.showModal();
      document.body.style.overflow = "hidden";
    }
  }, [active]);

  const close = () => dialog.current?.close();

  return (
    <>
      <Reveal as="ul" mode="group" className={`grid gap-5 ${grid[columns]}`}>
        {items.map((item) => (
          <li key={item.id} className="flex">
            <a
              href={`/events#${item.id}`}
              aria-haspopup="dialog"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                e.preventDefault();
                setActive(item);
              }}
              className="group flex w-full flex-col border border-line bg-paper p-6 transition-[border-color,box-shadow,transform] duration-fast ease-out-quart hover:-translate-y-1 hover:border-copper-600 hover:shadow-menu"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-copper-700">{item.when}</span>
              <span className="mt-3 font-display text-h3 font-medium text-ink">{item.title}</span>
              <span className="mt-3 flex-1 text-[0.9375rem] text-ink-soft">{item.summary}</span>
              <span className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-ink">
                View details
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-fast ease-standard group-hover:translate-x-1" />
              </span>
            </a>
          </li>
        ))}
      </Reveal>

      <dialog
        ref={dialog}
        aria-labelledby="event-dialog-title"
        onClose={() => {
          document.body.style.overflow = "";
          setActive(null);
        }}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        onKeyDown={(e) => {
          // Native dialogs close on Escape already. This covers browsers that skip it.
          if (e.key === "Escape") close();
        }}
        className="event-dialog m-auto w-[min(94vw,44rem)] max-h-[88vh] overflow-y-auto rounded-modal bg-paper p-0 text-ink shadow-modal"
      >
        {active ? (
          <div className="p-6 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <h2 id="event-dialog-title" className="font-display text-h3 font-semibold">
                {active.title}
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close details"
                className="-mr-2 -mt-2 inline-flex h-11 w-11 shrink-0 items-center justify-center text-ink transition-colors duration-micro ease-standard hover:text-copper-700"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 bg-mist p-4">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper-700" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">When</p>
                  <p className="font-medium">{active.when}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-mist p-4">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper-700" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">Where</p>
                  <p className="font-medium">{active.where}</p>
                </div>
              </div>
            </div>

            <div className="prose-ffcc mt-6 text-ink-soft">
              {active.details.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {active.cta ? (
              <Link
                href={active.cta.href}
                onClick={close}
                className="mt-7 inline-flex min-h-12 items-center gap-2 bg-copper-700 px-6 font-semibold text-white transition-colors duration-micro ease-standard hover:bg-copper-800"
              >
                {active.cta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
