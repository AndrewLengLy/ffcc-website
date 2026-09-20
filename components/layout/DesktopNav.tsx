"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/content/navigation";
import { ChevronDownIcon } from "@/components/ui/Icons";

const linkBase =
  "inline-flex min-h-11 items-center px-3.5 text-[0.9375rem] font-medium uppercase tracking-[0.06em] text-ink transition-colors duration-micro ease-standard hover:text-copper-700 xl:px-4";

function Dropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLLIElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const active = item.children?.some((c) => pathname.startsWith(c.href)) ?? false;

  // Close on outside click and Escape. Links close the menu when followed.

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      button.current?.focus();
    }
    if (e.key === "ArrowDown" && e.target === button.current) {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => wrap.current?.querySelector<HTMLAnchorElement>("ul a")?.focus());
    }
  };

  return (
    <li
      ref={wrap}
      className="group relative"
      data-open={open}
      onKeyDown={onKeyDown}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={`${linkBase} gap-1.5 ${active ? "text-copper-700" : ""}`}
      >
        {item.label}
        <ChevronDownIcon className="h-4 w-4 transition-transform duration-fast ease-standard group-hover:rotate-180 group-data-[open=true]:rotate-180" />
      </button>

      {/* Opens on hover, on keyboard focus and on click. Hover and focus work with JavaScript off. */}
      <ul
        id={menuId}
        className="invisible absolute left-0 top-full z-50 w-64 -translate-y-1.5 bg-paper p-3 opacity-0 shadow-menu transition-[opacity,transform,visibility] duration-fast ease-out-quart group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-data-[open=true]:visible group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100"
      >
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              aria-current={pathname === child.href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-[0.9375rem] text-ink transition-colors duration-micro ease-standard hover:bg-mist hover:text-copper-800 aria-[current=page]:font-medium aria-[current=page]:text-copper-700"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center">
        {items.map((item) =>
          item.children ? (
            <Dropdown key={item.label} item={item} pathname={pathname} />
          ) : (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`${linkBase} aria-[current=page]:text-copper-700`}
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
