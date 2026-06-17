import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-brand-300" : ""}`}>
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`heading-display mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          light ? "text-white" : ""
        } ${centered ? "max-w-3xl" : "max-w-2xl"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/75" : "text-ink-muted"
          } ${centered ? "max-w-2xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
