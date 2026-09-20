"use client";

import { useEffect } from "react";
import { trackEvent, type TrackEvent } from "@/lib/track";

// One delegated listener for conversion clicks. Any element with
// data-track="phone_click" (or email_click, give_click, directions_click)
// reports an event. This keeps links and buttons as server components.
export function TrackClicks() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const name = el.dataset.track as TrackEvent;
      const label = el.dataset.trackLabel;
      trackEvent(name, label ? { location: label } : undefined);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
