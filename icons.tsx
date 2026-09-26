import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Sparkle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
  </svg>
);

export const Leaf = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-6 8-9 15-9 0 7-3 13-8 13z" />
    <path d="M4 21c3-3 6-5 11-6" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Heart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.3-9.3-8.5C1.2 8.6 2.6 5.5 5.6 5c1.9-.3 3.4.7 4.4 2 1-1.3 2.5-2.3 4.4-2 3 .5 4.4 3.6 2.9 6.5C19 15.7 12 20 12 20z" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const Arrow = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const Home = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M9 20v-6h6v6" />
  </svg>
);

export const Truck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const Calendar = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const Gift = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M5 12v9h14v-9M12 8v13" />
    <path d="M12 8S10 3 7.5 4.5 12 8 12 8zM12 8s2-5 4.5-3.5S12 8 12 8z" />
  </svg>
);

export const Users = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
    <path d="M16 5.2A3.2 3.2 0 0 1 16 11.4M21 20c0-2.6-1.5-4.5-3.7-5.2" />
  </svg>
);

export const Repeat = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M17 2l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="M7 22l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

export const Pin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Glove = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 11V5.5a1.5 1.5 0 0 1 3 0V10" />
    <path d="M11 10V4.5a1.5 1.5 0 0 1 3 0V10" />
    <path d="M14 10V5.5a1.5 1.5 0 0 1 3 0V12" />
    <path d="M17 9.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-2.5a6 6 0 0 1-4.4-1.9l-3.3-3.6a1.6 1.6 0 0 1 2.2-2.3L8 15V7" />
  </svg>
);

export const Building = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="3" width="16" height="18" rx="1.5" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    <path d="M10 21v-3h4v3" />
  </svg>
);

export const Boxes = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 8l4-2 4 2v4l-4 2-4-2z" />
    <path d="M13 8l4-2 4 2v4l-4 2-4-2z" />
    <path d="M8 15l4-2 4 2v4l-4 2-4-2z" />
  </svg>
);

export const Confetti = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20l6-14 8 8-14 6z" />
    <path d="M14 6l1-2M18 8l2-1M17 12l2 1M20 4l0 0" />
  </svg>
);

export const Biohazard = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="2.2" />
    <path d="M12 9.8V4.5M10.1 13.1L5.5 15.8M13.9 13.1l4.6 2.7" />
    <path d="M9 8a5 5 0 0 1 6 0M6.5 16.5a5 5 0 0 1-1-6M18.5 16.5a5 5 0 0 0 1-6" />
  </svg>
);

export const Award = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="M9 13.5L8 21l4-2 4 2-1-7.5" />
  </svg>
);

export const HardHat = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 17h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2z" />
    <path d="M5 17v-2a7 7 0 0 1 14 0v2" />
    <path d="M10 6.5V4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
  </svg>
);

export const Card = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20M6 15h4" />
  </svg>
);

export const Key = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="4" />
    <path d="M11 11l8 8M17 17l2-2M14 14l2-2" />
  </svg>
);

export const Sun = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
  </svg>
);

export const Door = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
    <path d="M4 21h16M14 12h.01" />
  </svg>
);

export const Speaker = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M11 5L6 9H3v6h3l5 4V5z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8 8 0 0 1 0 12" />
  </svg>
);

export const Pause = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
);

export const Play = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M7 5v14l12-7z" />
  </svg>
);

