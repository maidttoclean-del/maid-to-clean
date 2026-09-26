import { Building, Check, Arrow, Shield } from "./icons";
import { SIGNUP_URL } from "../config";

const officeServices = [
  "Workstations, desks & common areas",
  "Restroom cleaning, sanitizing & restocking",
  "Breakroom & kitchen areas",
  "Reception & waiting areas",
  "Floors: vacuum, mop & carpet care",
  "Trash & recycling removal",
  "High-touch point disinfection",
  "Glass doors, partitions & entryways",
];

const industries = [
  "Offices",
  "Retail & Storefronts",
  "Medical & Dental",
  "Salons & Studios",
  "Warehouses",
  "Property Management",
];

export default function Office() {
  return (
    <section id="office" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <Building className="h-4 w-4" />
            Office & Commercial Cleaning
          </span>
          <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl" style={{ transitionDelay: "60ms" }}>
            A workplace that <span className="text-gradient">works as hard as you do</span>
          </h2>
          <p className="reveal mt-4 text-lg leading-relaxed text-slate-600" style={{ transitionDelay: "120ms" }}>
            First impressions matter. Keep your business spotless, healthy, and
            welcoming with reliable commercial cleaning tailored to your space —
            scheduled daily, weekly, or after hours so we never interrupt your day.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {officeServices.map((s, i) => (
              <li
                key={s}
                className="reveal flex items-start gap-2.5 text-sm text-slate-700"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-purple-500 text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {s}
              </li>
            ))}
          </ul>

          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={SIGNUP_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Request a commercial quote
              <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <span className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Shield className="h-4 w-4 text-brand-600" />
              Licensed, bonded & insured
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="reveal relative" style={{ transitionDelay: "150ms" }}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-fuchsia-900/20">
            <img
              src="/images/office.jpg"
              alt="A spotless, professionally cleaned modern office"
              loading="lazy"
              className="h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>

          {/* Industries card */}
          <div className="glass absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              We clean all kinds of businesses
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
