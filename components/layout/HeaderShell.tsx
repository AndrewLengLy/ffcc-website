"use client";

import { useEffect, useRef, useState } from "react";

// Sticky main header row. Adds a shadow and tightens its height once the
// page has scrolled past the utility bar. Uses a sentinel with
// IntersectionObserver, so there is no scroll listener.
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const sentinel = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = sentinel.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="h-px w-full" />
      <header
        data-scrolled={scrolled}
        className="group/header sticky top-0 z-40 -mt-px border-b border-line bg-paper transition-shadow duration-fast ease-standard data-[scrolled=true]:shadow-header"
      >
        {children}
      </header>
    </>
  );
}
