import Link from "next/link";
import { MessageSquareText } from "lucide-react";

/** Floating "Get a Quote" pill (bottom-left), mirroring the reference site. */
export function GetQuote() {
  return (
    <Link
      href="/contact"
      className="group fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-850/90 px-4 py-3 text-sm font-semibold text-white shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50"
    >
      <MessageSquareText className="h-[18px] w-[18px] text-brand-300" />
      Get a Quote
    </Link>
  );
}
