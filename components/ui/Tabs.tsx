"use client";

import { useId, useRef, useState } from "react";

type Tab = { id: string; label: string; content: React.ReactNode };

// Accessible tabs: roving tabindex, arrow keys, Home and End.
// Every panel is server-rendered. With JavaScript off a noscript rule
// shows all panels stacked.
export function Tabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = tabs.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <noscript>
        <style>{`[data-tabpanel][hidden]{display:block!important;margin-top:2rem}`}</style>
      </noscript>

      <div role="tablist" aria-label={label} onKeyDown={onKeyDown} className="flex">
        {tabs.map((tab, i) => {
          const selected = i === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`${uid}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`relative min-h-14 flex-1 px-4 text-lg font-semibold transition-colors duration-fast ease-standard ${
                selected ? "bg-ink text-white" : "bg-mist text-ink hover:bg-line"
              }`}
            >
              {tab.label}
              {selected ? (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[10px] border-t-[10px] border-x-transparent border-t-ink"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          data-tabpanel
          id={`${uid}-panel-${tab.id}`}
          aria-labelledby={`${uid}-tab-${tab.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="animate-fade-in pt-8"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
