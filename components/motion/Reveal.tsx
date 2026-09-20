"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  // "group" staggers direct children (card grids). "block" reveals the wrapper itself.
  mode?: "block" | "group";
  as?: "div" | "ul" | "section";
};

// The one scroll-reveal pattern for the site. CSS does the animation
// (see globals.css). This only flips data-revealed once, when the element
// is about 15% into the viewport. Hidden initial state is scoped to
// .js-motion, so content stays visible with JavaScript off.
export function Reveal({ children, className = "", mode = "block", as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.setAttribute("data-revealed", "true");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.setAttribute("data-revealed", "true");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal={mode}
      className={className}
    >
      {children}
    </Tag>
  );
}
