"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import type { NavItem } from "@/content/navigation";
import { site } from "@/content/site";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/ui/Icons";

const IN_OUT_QUART = [0.76, 0, 0.24, 1] as const;
const OUT_QUART = [0.25, 1, 0.5, 1] as const;

type Props = {
  items: NavItem[];
  utility: readonly { label: string; href: string }[];
};

export function MobileDrawer({ items, utility }: Props) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  // Scroll lock, Escape to close, focus trap, focus return.
  useEffect(() => {
    if (!open) return;
    const triggerEl = trigger.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("button, a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab" || !panel.current) return;
      const focusable = panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      triggerEl?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="inline-flex h-12 w-12 items-center justify-center bg-ink text-white transition-colors duration-micro ease-standard hover:bg-copper-800"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      <LazyMotion features={domAnimation} strict>
        <AnimatePresence>
          {open ? (
            <>
              <m.div
                key="overlay"
                className="fixed inset-0 z-50 bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
              <m.div
                key="panel"
                id="mobile-drawer"
                ref={panel}
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[360px] flex-col overflow-y-auto bg-paper"
                initial={reduce ? { opacity: 0 } : { x: "100%" }}
                animate={reduce ? { opacity: 1 } : { x: 0 }}
                exit={reduce ? { opacity: 0 } : { x: "100%" }}
                transition={{ duration: reduce ? 0.15 : 0.4, ease: IN_OUT_QUART }}
              >
                <div className="flex items-center justify-between border-b border-line px-5 py-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">Menu</span>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-12 w-12 items-center justify-center text-ink transition-colors duration-micro ease-standard hover:text-copper-700"
                  >
                    <CloseIcon className="h-6 w-6" />
                  </button>
                </div>

                <nav aria-label="Mobile" className="flex-1 px-5 py-4">
                  <m.ul
                    initial="hidden"
                    animate="show"
                    variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.05, delayChildren: 0.12 } } }}
                  >
                    {items.map((item) => {
                      const isOpen = expanded === item.label;
                      return (
                        <m.li
                          key={item.label}
                          className="border-b border-line"
                          variants={{
                            hidden: reduce ? { opacity: 0 } : { opacity: 0, x: 20 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: OUT_QUART } },
                          }}
                        >
                          {item.children ? (
                            <>
                              <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => setExpanded(isOpen ? null : item.label)}
                                className="flex min-h-14 w-full items-center justify-between text-left text-lg font-medium text-ink"
                              >
                                {item.label}
                                <ChevronDownIcon
                                  className={`h-5 w-5 transition-transform duration-fast ease-standard ${isOpen ? "rotate-180" : ""}`}
                                />
                              </button>
                              {isOpen ? (
                                <ul className="animate-fade-in pb-3 pl-3">
                                  {item.children.map((child) => (
                                    <li key={child.href}>
                                      <Link
                                        href={child.href}
                                        aria-current={pathname === child.href ? "page" : undefined}
                                        onClick={() => setOpen(false)}
                                        className="flex min-h-11 items-center text-[0.9375rem] text-ink-soft aria-[current=page]:font-medium aria-[current=page]:text-copper-700"
                                      >
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              aria-current={pathname === item.href ? "page" : undefined}
                              onClick={() => setOpen(false)}
                              className="flex min-h-14 items-center text-lg font-medium text-ink aria-[current=page]:text-copper-700"
                            >
                              {item.label}
                            </Link>
                          )}
                        </m.li>
                      );
                    })}
                  </m.ul>

                  <ul className="mt-6 flex flex-wrap gap-3">
                    {utility.map((u) => (
                      <li key={u.href}>
                        <Link
                          href={u.href}
                          onClick={() => setOpen(false)}
                          className={`inline-flex min-h-12 items-center px-5 text-[0.9375rem] font-semibold ${
                            u.label === "Give" ? "bg-copper-700 text-white" : "border-2 border-ink/80 text-ink"
                          }`}
                        >
                          {u.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="border-t border-line bg-mist px-5 py-5 text-[0.9375rem] text-ink-soft">
                  <p className="font-medium text-ink">Sundays at {site.sundayWorship.time}</p>
                  <p>
                    {site.address.street}, {site.address.city}
                  </p>
                  <a
                    href={site.phone.href}
                    data-track="phone_click"
                    data-track-label="mobile_drawer"
                    className="mt-1 inline-flex min-h-11 items-center font-medium text-copper-700 underline underline-offset-4"
                  >
                    {site.phone.display}
                  </a>
                </div>
              </m.div>
            </>
          ) : null}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
