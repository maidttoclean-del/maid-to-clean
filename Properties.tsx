import SectionHeading from "./SectionHeading";
import { Home, Sun, Key, Building, Door, Boxes } from "./icons";

const properties = [
  { icon: Home, title: "Primary Residences", desc: "Your everyday home, kept effortlessly clean." },
  { icon: Sun, title: "Vacation Homes", desc: "Fresh and ready whenever you arrive." },
  { icon: Key, title: "Rental Properties", desc: "Turnovers and upkeep for landlords & tenants." },
  { icon: Building, title: "Condos", desc: "Detailed cleaning for condo living." },
  { icon: Door, title: "Apartments", desc: "Spotless service for any apartment size." },
  { icon: Boxes, title: "Move In / Out Units", desc: "Deposit-ready deep cleans for empty spaces." },
];

const factors = [
  "Where you live (your service area)",
  "The size of your home",
  "How often you'd like us to clean",
  "The services you choose to include",
  "Any add-ons or special requests",
];

export default function Properties() {
  return (
    <section id="properties" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Properties we serve"
          title={<>Whatever you call home, <span className="text-gradient">we keep it spotless</span></>}
          subtitle="From primary residences to vacation homes and rentals, Maid to Clean brings the same white-glove standard to every kind of space."
        />

        {/* Property types */}
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {properties.map((p, i) => (
            <article
              key={p.title}
              className="reveal group rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-fuchsia-900/10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-3 text-sm font-bold text-ink">{p.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{p.desc}</p>
            </article>
          ))}
        </div>

        {/* Pricing factors */}
        <div className="reveal mt-14 overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-brand-50/60 to-purple-50/60 p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-ink">
                What goes into your price?
              </h3>
              <p className="mt-3 text-slate-600">
                We believe in honest, transparent pricing. The cost of your
                residential cleaning depends on a few simple factors — so every
                quote is fair and tailored to your exact home and needs.
              </p>
            </div>
            <ul className="space-y-3">
              {factors.map((f, i) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-xl border border-white bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-purple-500 text-xs font-black text-white">
                    {i + 1}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
