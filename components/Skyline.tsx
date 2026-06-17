/**
 * Subtle world-landmarks skyline rendered as line art. Used low-opacity along
 * the bottom of sections to add an abstract, travel-themed texture without
 * competing with the content. Decorative only.
 */
export function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      fill="none"
      preserveAspectRatio="xMidYMax meet"
      className={className}
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
        {/* Pyramids of Giza */}
        <path d="M70 210 L140 96 L210 210 Z" />
        <path d="M170 210 L220 130 L270 210 Z" />

        {/* Eiffel Tower */}
        <path d="M360 210 C374 150 384 120 392 70 C400 120 410 150 424 210" />
        <path d="M372 168 H412 M366 130 H418 M384 92 H400" />
        <path d="M392 70 V46" />

        {/* Big Ben */}
        <path d="M520 210 V108 H556 V210" />
        <path d="M520 108 L538 78 L556 108" />
        <circle cx="538" cy="128" r="9" />
        <path d="M538 60 V78" />

        {/* Taj Mahal */}
        <path d="M690 210 V150 M870 210 V150" />
        <path d="M726 210 V126 M834 210 V126" />
        <path d="M752 210 V120 H808 V210" />
        <path d="M780 60 C756 76 752 104 752 120 H808 C808 104 804 76 780 60 Z" />
        <path d="M780 44 V60" />

        {/* Sydney Opera House */}
        <path d="M980 210 C1004 150 1040 150 1060 210" />
        <path d="M1024 210 C1048 140 1090 140 1112 210" />
        <path d="M1070 210 C1096 158 1132 158 1152 210" />

        {/* Skyscraper cluster (generic skyline) */}
        <path d="M1230 210 V120 H1262 V210 M1246 120 V100" />
        <path d="M1280 210 V150 H1306 V210" />
        <path d="M1322 210 V96 H1352 V210 M1337 96 V74" />
        <path d="M1368 210 V140 H1392 V210" />
      </g>

      {/* Dotted flight path + plane */}
      <path
        d="M40 70 C 380 -10 1060 -10 1400 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="2 12"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M712 34 l26 8 -8 -16 4 -2 14 14 18 -2 c3 0 4 4 1 6 l-16 8 -2 18 -4 1 -8 -20 -24 -8 c-3-1-3-5 0-6 z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}
