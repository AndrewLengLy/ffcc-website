import { NextResponse } from "next/server";
import { REASONS, type ContactPayload } from "@/lib/contact";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Stores a contact form submission.
// With SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY set, the row goes to the
// `contact_submissions` table through the Supabase REST API (no SDK needed).
// Without them, the payload is logged and the request still succeeds, so the
// form works in local development and before the database exists.
export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in: act like it worked and store nothing.
  if (clean(body.company, 200)) return NextResponse.json({ ok: true });

  const row = {
    reason: clean(body.reason, 60),
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    message: clean(body.message, 5000),
    heard: clean(body.heard, 80),
  };

  const valid =
    (REASONS as readonly string[]).includes(row.reason) &&
    row.name.length >= 2 &&
    EMAIL.test(row.email) &&
    row.message.length >= 10;

  if (!valid) {
    return NextResponse.json({ ok: false, error: "Please check the form and try again." }, { status: 422 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.info("[contact] Supabase env vars not set. Submission logged only:", row);
    return NextResponse.json({ ok: true, stored: false });
  }

  const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/contact_submissions`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ ...row, user_agent: clean(request.headers.get("user-agent"), 300) }),
  });

  if (!res.ok) {
    console.error("[contact] Supabase insert failed:", res.status, await res.text());
    return NextResponse.json({ ok: false, error: "We could not save your message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
