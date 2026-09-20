"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/track";
import { REASONS, REASON_KEYS } from "@/lib/contact";

type Fields = "reason" | "name" | "email" | "phone" | "message" | "heard";
type Errors = Partial<Record<Fields, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: Record<Fields, string>): Errors {
  const errors: Errors = {};
  if (!data.reason) errors.reason = "Choose a reason for your message.";
  if (data.name.trim().length < 2) errors.name = "Enter your name.";
  if (!EMAIL.test(data.email.trim())) errors.email = "Enter a valid email address.";
  if (data.phone.trim() && data.phone.replace(/\D/g, "").length < 10)
    errors.phone = "Enter a 10 digit phone number, or leave this blank.";
  if (data.message.trim().length < 10) errors.message = "Write a short message (10 characters or more).";
  return errors;
}

const label = "mb-1.5 block text-[0.9375rem] font-medium text-ink";
const input =
  "block min-h-12 w-full border border-ink/40 bg-paper px-4 py-2.5 text-ink transition-[border-color,box-shadow] duration-micro ease-standard placeholder:text-ink-muted hover:border-ink focus:border-copper-700 focus:outline-none focus:ring-2 focus:ring-copper-600/40 aria-[invalid=true]:border-red-700";
const errorText = "mt-1.5 text-sm font-medium text-red-700";

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  // Preselect the reason from ?reason=rental and similar links. Read on the
  // client so the contact page itself stays static.
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("reason");
    const select = form.current?.querySelector<HTMLSelectElement>('[name="reason"]');
    if (select && key && REASON_KEYS[key]) select.value = REASON_KEYS[key];
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      (["reason", "name", "email", "phone", "message", "heard"] as Fields[]).map((k) => [k, String(fd.get(k) ?? "")]),
    ) as Record<Fields, string>;

    const found = validate(data);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, company: String(fd.get("company") ?? "") }),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent("form_submit", { reason: data.reason });
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="animate-fade-in border-l-4 border-copper-600 bg-copper-50 p-6 sm:p-8">
        <h3 className="font-display text-h3 font-semibold text-ink">Thank you. Your message was sent.</h3>
        <p className="mt-3 text-ink-soft">
          The church office will follow up with you. If your need is urgent, call the office during office hours.
        </p>
      </div>
    );
  }

  const field = (name: Fields) => ({
    name,
    id: `contact-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  const err = (name: Fields) =>
    errors[name] ? (
      <p id={`contact-${name}-error`} className={errorText}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={form} onSubmit={onSubmit} noValidate className="grid gap-5">
      <div>
        <label htmlFor="contact-reason" className={label}>
          How can we help?
        </label>
        <select {...field("reason")} defaultValue="" required className={input}>
          <option value="" disabled>
            Choose one
          </option>
          {REASONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        {err("reason")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={label}>
            Your name
          </label>
          <input {...field("name")} type="text" autoComplete="name" required className={input} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className={label}>
            Email
          </label>
          <input {...field("email")} type="email" autoComplete="email" required className={input} />
          {err("email")}
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className={label}>
          Phone <span className="font-normal text-ink-muted">(optional)</span>
        </label>
        <input {...field("phone")} type="tel" autoComplete="tel" className={input} />
        {err("phone")}
      </div>

      <div>
        <label htmlFor="contact-message" className={label}>
          Message
        </label>
        <textarea {...field("message")} rows={5} required className={input} />
        {err("message")}
      </div>

      <div>
        <label htmlFor="contact-heard" className={label}>
          How did you hear about FFCC? <span className="font-normal text-ink-muted">(optional)</span>
        </label>
        <select {...field("heard")} defaultValue="" className={input}>
          <option value="">Choose one</option>
          <option>A friend or family member</option>
          <option>Facebook</option>
          <option>Google search</option>
          <option>I drove by</option>
          <option>A community event</option>
          <option>Other</option>
        </select>
      </div>

      {/* Honeypot. People never see or reach this field. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "failed" ? (
        <p role="alert" className="border-l-4 border-red-700 bg-red-50 p-4 font-medium text-red-800">
          Your message did not send. Please try again, or call the church office.
        </p>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center bg-copper-700 px-8 font-semibold text-white transition-colors duration-micro ease-standard hover:bg-copper-800 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending" : "Send Message"}
        </button>
        <p className="mt-3 text-sm text-ink-muted">The church office reads every message.</p>
      </div>
    </form>
  );
}
