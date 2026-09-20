"use client";

import { useEffect, useMemo, useState } from "react";
import { eventsOn, toDateKey, unscheduled, type DatedEvent, type ScheduleItem } from "@/content/schedule";
import { ClockIcon, PinIcon } from "@/components/ui/Icons";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const longDate = (d: Date) => `${WEEKDAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

// The calendar reads "today" from the visitor's own clock, so it is rendered
// only after mount. The full schedule is server-rendered below it, which is
// what search engines and visitors without JavaScript see.
export function ScheduleCalendar() {
  const [today, setToday] = useState<Date | null>(null);
  const [view, setView] = useState({ year: 0, month: 0 });
  const [selected, setSelected] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    setToday(midnight);
    setView({ year: midnight.getFullYear(), month: midnight.getMonth() });
    // Open on today when something meets, otherwise on the next day that has
    // something, so the panel never starts empty. Nothing recurs less often
    // than monthly, so 31 days is always far enough to find one.
    let pick = midnight;
    for (let i = 0; i < 31; i += 1) {
      const day = new Date(midnight.getFullYear(), midnight.getMonth(), midnight.getDate() + i);
      if (eventsOn(day).length) {
        pick = day;
        break;
      }
    }
    setSelected(pick);
    setView({ year: pick.getFullYear(), month: pick.getMonth() });
  }, []);

  const weeks = useMemo(() => {
    if (!today) return [];
    const { year, month } = view;
    const lead = new Date(year, month, 1).getDay();
    const total = new Date(year, month + 1, 0).getDate();
    const cells: (Date | null)[] = [
      ...Array.from({ length: lead }, () => null),
      ...Array.from({ length: total }, (_, i) => new Date(year, month, i + 1)),
    ];
    while (cells.length % 7 !== 0) cells.push(null);
    return Array.from({ length: cells.length / 7 }, (_, w) => cells.slice(w * 7, w * 7 + 7));
  }, [view, today]);

  if (!today) {
    return <div aria-hidden="true" className="min-h-[30rem] border border-line bg-mist" />;
  }

  const move = (delta: number) => {
    const d = new Date(view.year, view.month + delta, 1);
    setView({ year: d.getFullYear(), month: d.getMonth() });
  };

  const selectedEvents = selected ? eventsOn(selected) : [];

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
      <div className="border border-line bg-paper p-4 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={`Show ${MONTHS[(view.month + 11) % 12]}`}
            className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors duration-fast ease-standard hover:bg-mist"
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <h3 aria-live="polite" className="font-display text-h3 font-medium text-ink">
            {MONTHS[view.month]} {view.year}
          </h3>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={`Show ${MONTHS[(view.month + 1) % 12]}`}
            className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors duration-fast ease-standard hover:bg-mist"
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>

        <table className="mt-6 w-full table-fixed border-collapse">
          <caption className="sr-only">
            {MONTHS[view.month]} {view.year}. Days with something on are buttons; choose one to see what meets that day.
          </caption>
          <thead>
            <tr>
              {WEEKDAYS.map((day) => (
                <th key={day} scope="col" className="pb-2 text-center text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  <abbr title={day} className="no-underline">{day.slice(0, 3)}</abbr>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, wi) => (
              <tr key={wi}>
                {week.map((date, di) => {
                  if (!date) return <td key={di} className="p-0.5" />;
                  const count = eventsOn(date).length;
                  const isToday = toDateKey(date) === toDateKey(today);
                  const isSelected = selected ? toDateKey(date) === toDateKey(selected) : false;

                  if (!count) {
                    return (
                      <td key={di} className="p-0.5">
                        <div
                          className={`flex aspect-square flex-col items-center justify-center text-sm text-ink-muted ${
                            isToday ? "border border-copper-500 font-semibold text-ink" : ""
                          }`}
                        >
                          {date.getDate()}
                        </div>
                      </td>
                    );
                  }

                  return (
                    <td key={di} className="p-0.5">
                      <button
                        type="button"
                        onClick={() => setSelected(date)}
                        aria-pressed={isSelected}
                        aria-current={isToday ? "date" : undefined}
                        aria-label={`${longDate(date)}, ${count} ${count === 1 ? "event" : "events"}`}
                        className={`flex aspect-square w-full flex-col items-center justify-center gap-1 border text-sm font-semibold transition-colors duration-fast ease-standard ${
                          isSelected
                            ? "border-ink bg-ink text-white"
                            : isToday
                              ? "border-copper-500 bg-copper-50 text-ink hover:bg-copper-100"
                              : "border-line bg-mist text-ink hover:bg-copper-100"
                        }`}
                      >
                        {date.getDate()}
                        <span aria-hidden="true" className="flex gap-0.5">
                          {Array.from({ length: Math.min(count, 3) }, (_, i) => (
                            <span
                              key={i}
                              className={`h-1 w-1 rounded-full ${isSelected ? "bg-copper-300" : "bg-copper-600"}`}
                            />
                          ))}
                        </span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-5 flex items-start gap-2 text-sm text-ink-muted">
          <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-copper-600" />
          A dot marks a day with something on. Today is outlined in copper.
        </p>
      </div>

      <div aria-live="polite" className="border border-line bg-paper p-6 sm:p-7">
        <h3 className="font-display text-h3 font-medium text-ink">{selected ? longDate(selected) : "Pick a day"}</h3>
        <div aria-hidden="true" className="mt-3 h-[3px] w-16 bg-copper-500" />

        {selectedEvents.length ? (
          <ul className="mt-6 space-y-5">
            {selectedEvents.map((item: ScheduleItem | DatedEvent) => (
              <li key={item.id} className="border-l-2 border-copper-500 pl-4">
                <a href={`#${item.id}`} className="font-display text-lg font-medium text-ink underline-offset-4 hover:underline">
                  {item.title}
                </a>
                <p className="mt-1.5 flex items-start gap-2 text-sm text-ink-soft">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-copper-700" />
                  {item.when}
                </p>
                <p className="mt-1 flex items-start gap-2 text-sm text-ink-soft">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-copper-700" />
                  {item.where}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-ink-soft">Nothing is scheduled on this day.</p>
        )}

        {unscheduled.length ? (
          <p className="mt-7 border-t border-line pt-5 text-sm text-ink-muted">
            {unscheduled.map((u) => u.title).join(" and ")} meet on weekdays at times that vary, so they are not on the
            calendar. Call the church office to find one.
          </p>
        ) : null}
      </div>
    </div>
  );
}
