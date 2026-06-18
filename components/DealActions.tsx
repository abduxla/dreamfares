"use client";

import { MessageCircle } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryProvider";
import { whatsappHref } from "@/lib/site";

/**
 * Deal card actions. "View Details" opens the WhatsApp/Messenger choice popup;
 * the icon button is a direct WhatsApp shortcut.
 */
export function DealActions({ message }: { message: string }) {
  const { open } = useEnquiry();

  return (
    <div className="mt-4 flex gap-2">
      <button type="button" onClick={() => open(message)} className="btn-gold flex-1">
        View Details
      </button>
      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="grid h-11 w-12 shrink-0 place-items-center rounded-full bg-grass-500 text-white shadow-glow-green transition-transform duration-300 hover:-translate-y-0.5"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
