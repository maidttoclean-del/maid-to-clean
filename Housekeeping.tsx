import { Check, Sparkle } from "./icons";
import { SIGNUP_URL } from "../config";

const details = [
  "Cleaning cupboards, drawers, and cabinets (when requested)",
  "Sanitizing toilets, sinks, bathtubs, and showers",
  "Vacuuming and/or mopping all floors — wood, vinyl, tile & more — with the proper equipment",
  "Spot cleaning windows, doors, and frames",
  "Dusting furniture, countertops, light fixtures, and ceiling fans",
  "Safely wiping down microwaves, ovens, ranges, and other appliances",
];

export default function Housekeeping() {
  return (
    <section id="housekeeping" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Visual */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-fuchsia-900/20">
            <img
              src="/images/hero.jpg"
              alt="A spotless, freshly cleaned home interior"
              loading="lazy"
              className="h-[480px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>
          <div className="glass absolute -right-4 top-8 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur sm:-right-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white">
              <Sparkle className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Every nook & cranny</p>
              <p className="text-xs text-slate-500">Spotless, guaranteed care</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <span className="reveal inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Our housekeeping standard
          </span>
          <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl" style={{ transitionDelay: "60ms" }}>
            Every corner of your home,{" "}
            <span className="text-gradient">truly clean</span>
          </h2>
          <p className="reveal mt-4 text-lg leading-relaxed text-slate-600" style={{ transitionDelay: "120ms" }}>
            Our housekeepers go above and beyond to make sure every inch is
            spotless. On each recurring visit, our regular housekeeping service
            includes:
          </p>

          <ul className="mt-8 space-y-3.5">
            {details.map((d, i) => (
              <li
                key={d}
                className="reveal flex items-start gap-3"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-purple-500 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{d}</span>
              </li>
            ))}
          </ul>

          <a
            href={SIGNUP_URL}
            className="reveal mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Book your housekeeping
          </a>
        </div>
      </div>
    </section>
  );
}
