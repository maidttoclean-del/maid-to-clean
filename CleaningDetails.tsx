import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Check, Sparkle } from "./icons";
import { cn } from "../utils/cn";

type Room = {
  key: string;
  label: string;
  normal: string[];
  rotation: string[];
};

const rooms: Room[] = [
  {
    key: "bathrooms",
    label: "Bathrooms",
    normal: [
      "Tile walls, bathtubs, and showers cleaned & sanitized",
      "Shower doors cleaned and sanitized",
      "Vanity and sink cleaned and sanitized",
      "Mirrors and chrome fixtures cleaned & shined",
      "Floors cleaned / carpets vacuumed",
      "Toilets thoroughly cleaned",
      "Window sills, ledges, and blinds dusted",
      "Cobwebs removed",
      "Doors and door frames spot cleaned",
      "General dusting",
    ],
    rotation: [
      "Tile grouting scrubbed",
      "Shower door given extra attention",
      "Doors and door frames hand wiped",
      "Knickknacks individually cleaned",
      "Fronts of cabinets hand wiped",
      "Baseboards and window sills hand wiped",
      "Floors given extra attention",
      "Faucets, sinks, and drains detailed with a toothbrush",
    ],
  },
  {
    key: "kitchens",
    label: "Kitchens",
    normal: [
      "Countertops cleaned and sanitized",
      "Outside of range hood cleaned & sanitized",
      "Top and front of range cleaned",
      "Drip pans or glass top surfaces wiped",
      "Sinks cleaned & sanitized, chrome shined",
      "Fronts of all appliances cleaned",
      "Floors vacuumed and damp mopped",
      "Window sills, ledges, and blinds dusted",
      "Cobwebs removed",
      "Microwave wiped out",
      "Doors and door frames spot cleaned",
      "General dusting",
    ],
    rotation: [
      "Inside of range hood cleaned",
      "Drip pans or glass top surfaces cleaned",
      "Doors and door frames hand wiped",
      "Appliances cleaned and shined",
      "Knickknack areas cleaned",
      "Fronts of cabinets hand wiped",
      "Baseboards and window sills hand wiped",
      "Floors given extra attention",
      "All kitchen furniture hand wiped",
    ],
  },
  {
    key: "living",
    label: "Living Areas",
    normal: [
      "Flat areas hand wiped and sanitized",
      "Doors and door frames spot cleaned",
      "Cobwebs removed",
      "Picture frames dusted",
      "Ceiling fans dusted",
      "Lamp shades dusted",
      "Intricate items dusted",
      "Heavy knickknack areas dusted",
      "Window sills, ledges, and blinds dusted",
      "Hard floors vacuumed & damp mopped",
      "Stairs vacuumed",
      "All readily accessible floors vacuumed",
    ],
    rotation: [
      "Doors and door frames hand wiped",
      "Window sills and ledges hand wiped",
      "Knickknacks individually cleaned",
      "Furniture surfaces hand wiped",
      "Baseboards hand wiped",
      "Furniture and upholstery vacuumed",
      "Carpet edges vacuumed",
      "Floors given extra attention",
      "Accessible areas under furniture vacuumed",
    ],
  },
  {
    key: "sleeping",
    label: "Sleeping Areas",
    normal: [
      "Flat areas hand wiped and sanitized",
      "Doors and door frames spot cleaned",
      "Cobwebs removed",
      "Picture frames dusted",
      "Ceiling fans dusted",
      "Lamp shades dusted",
      "Intricate items dusted",
      "Heavy knickknack areas dusted",
      "Window sills, ledges, and blinds dusted",
      "Hard floors vacuumed & damp mopped",
      "Empty closet floors vacuumed",
      "All readily accessible floors vacuumed",
    ],
    rotation: [
      "Doors and door frames hand wiped",
      "Window sills and ledges hand wiped",
      "Knickknacks individually cleaned",
      "Furniture surfaces hand wiped",
      "Baseboards hand wiped",
      "Furniture and upholstery vacuumed",
      "Carpet edges vacuumed",
      "Floors given extra attention",
      "Accessible areas under furniture vacuumed",
    ],
  },
];

export default function CleaningDetails() {
  const [active, setActive] = useState(0);
  const room = rooms[active];

  return (
    <section id="details" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Room-by-room detail"
          title={<>See exactly <span className="text-gradient">what we clean</span></>}
          subtitle="Every visit includes a thorough clean of each room. Our White Glove Rotation System™ then adds deep-detail attention on a rotating basis — so nothing is ever missed."
        />

        {/* Room tabs */}
        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {rooms.map((r, i) => (
            <button
              key={r.key}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                active === i
                  ? "bg-gradient-to-r from-brand-600 to-purple-500 text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-500 hover:text-ink"
              )}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Two columns: Normal + Rotation */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Normal clean */}
          <div className="reveal rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Check className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{room.label} — Every Visit</h3>
                <p className="text-xs text-slate-500">Included on every standard clean</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2.5">
              {room.normal.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Rotation clean */}
          <div className="reveal rounded-3xl border border-transparent bg-gradient-to-b from-ink to-slate-900 p-7 text-white shadow-2xl shadow-fuchsia-900/30 sm:p-8" style={{ transitionDelay: "100ms" }}>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-purple-400 text-white">
                <Sparkle className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold">{room.label} — Rotation Detail</h3>
                <p className="text-xs text-white/60">Deep-detail extras on a rotating basis</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2.5">
              {room.rotation.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-400/20 text-brand-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
