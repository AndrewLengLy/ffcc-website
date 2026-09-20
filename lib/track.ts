import { track } from "@vercel/analytics";

// Stable, human-readable conversion event names. These feed reporting,
// so rename with care.
export type TrackEvent =
  | "form_submit"
  | "phone_click"
  | "email_click"
  | "give_click"
  | "directions_click"
  | "video_play";

export function trackEvent(name: TrackEvent, props?: Record<string, string>) {
  try {
    track(name, props);
  } catch {
    // Analytics must never break the page.
  }
}
