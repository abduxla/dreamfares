"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";
import { travelMonths } from "@/lib/data";

const initial = {
  departure: "",
  destination: "",
  budget: "",
  month: "",
  nights: "",
  travellers: "",
};

export function AIFinderForm() {
  const [form, setForm] = useState(initial);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const composed = () =>
    [
      "Hi Dreamfares! Please find me a holiday package with these preferences:",
      form.departure && `Departure city: ${form.departure}`,
      form.destination && `Destination: ${form.destination}`,
      form.budget && `Budget: AUD $${form.budget} per person`,
      form.month && `Travel month: ${form.month}`,
      form.nights && `Trip duration: ${form.nights} nights`,
      form.travellers && `Travellers: ${form.travellers}`,
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappHref(composed()), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <h3 className="text-xl font-bold text-ink">Your Travel Preferences</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Fill in as many details as you can for better results.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="departure" className="field-label">
            Departure City
          </label>
          <input
            id="departure"
            value={form.departure}
            onChange={update("departure")}
            placeholder="e.g. Melbourne"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor="destination" className="field-label">
            Destination
          </label>
          <input
            id="destination"
            value={form.destination}
            onChange={update("destination")}
            placeholder="e.g. Bali"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor="budget" className="field-label">
            Budget (AUD per person)
          </label>
          <input
            id="budget"
            type="number"
            min={0}
            value={form.budget}
            onChange={update("budget")}
            placeholder="e.g. 2000"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor="month" className="field-label">
            Travel Month
          </label>
          <select
            id="month"
            value={form.month}
            onChange={update("month")}
            className="field-input"
          >
            <option value="">Select a month</option>
            {travelMonths.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="nights" className="field-label">
            Trip Duration (Nights)
          </label>
          <input
            id="nights"
            type="number"
            min={1}
            value={form.nights}
            onChange={update("nights")}
            placeholder="e.g. 7"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor="travellers" className="field-label">
            Number of Travellers
          </label>
          <input
            id="travellers"
            type="number"
            min={1}
            value={form.travellers}
            onChange={update("travellers")}
            placeholder="e.g. 2"
            className="field-input"
          />
        </div>
      </div>

      <button type="submit" className="btn-whatsapp mt-6 w-full">
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us My Matches
      </button>
    </form>
  );
}
