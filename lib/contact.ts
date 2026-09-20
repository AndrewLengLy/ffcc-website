// Shared by the contact form (client) and the route handler (server).

export const REASONS = [
  "Plan a visit",
  "Prayer request",
  "New Disciples Orientation",
  "Facility rental",
  "General question",
] as const;

// Links such as /contact?reason=rental preselect the reason in the form.
export const REASON_KEYS: Record<string, (typeof REASONS)[number]> = {
  visit: "Plan a visit",
  prayer: "Prayer request",
  orientation: "New Disciples Orientation",
  rental: "Facility rental",
  question: "General question",
};

export type ContactPayload = {
  reason: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  heard: string;
  // Honeypot. Real visitors leave it empty.
  company: string;
};
