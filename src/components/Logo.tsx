/**
 * SVG Logo Component
 */

export const Logo = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Broom Icon */}
    <g>
      {/* Handle */}
      <path
        d="M50 15 L50 70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Bristles */}
      <path
        d="M30 70 Q40 80 50 85 Q60 80 70 70"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Bristle lines */}
      <line
        x1="35"
        y1="75"
        x2="32"
        y2="82"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="85"
        x2="50"
        y2="88"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="65"
        y1="75"
        x2="68"
        y2="82"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Sparkle effects */}
      <circle cx="45" cy="25" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="60" cy="40" r="2" fill="currentColor" opacity="0.6" />
    </g>
  </svg>
);
