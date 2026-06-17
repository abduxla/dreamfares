"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { whatsappHref, mailHref } from "@/lib/site";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const composed = () =>
    [
      "New enquiry from the Dreamfares website:",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.destination && `Destination: ${form.destination}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend required — route the enquiry straight to WhatsApp.
    window.open(whatsappHref(composed()), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <h3 className="text-xl font-bold text-ink">Send Us an Enquiry</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Fill in the form and we&apos;ll get back to you ASAP.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="field-label">
            Full Name <span className="text-brand-600">*</span>
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Traveller"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email <span className="text-brand-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor="phone" className="field-label">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="04XX XXX XXX"
            className="field-input"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="destination" className="field-label">
            Destination
          </label>
          <input
            id="destination"
            value={form.destination}
            onChange={update("destination")}
            placeholder="e.g. Bali, Japan, Maldives"
            className="field-input"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="Tell us about your dream trip…"
            className="field-input resize-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full">
        <Send className="h-4 w-4" />
        Send Enquiry
      </button>

      <a
        href={whatsappHref(composed())}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp mt-3 w-full"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us Instead
      </a>

      <p className="mt-4 text-center text-xs text-ink-muted">
        Prefer email?{" "}
        <a href={mailHref} className="font-semibold text-brand-700 underline-offset-2 hover:underline">
          Email our team
        </a>
      </p>
    </form>
  );
}
