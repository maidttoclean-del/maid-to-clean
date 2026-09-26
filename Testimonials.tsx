import SectionHeading from "./SectionHeading";
import { Star } from "./icons";

const reviews = [
  {
    quote:
      "Booked a deep clean before hosting Thanksgiving and my house has never sparkled like this. The team was punctual, kind, and unbelievably thorough.",
    name: "Marcus T.",
    role: "Homeowner · Tacoma",
    initials: "MT",
    color: "from-brand-500 to-purple-500",
  },
  {
    quote:
      "As a property manager I need reliability. Maid to Clean handles all my turnovers flawlessly and their communication is instant. Total lifesaver.",
    name: "Priya S.",
    role: "Property Manager · Bellevue",
    initials: "PS",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    quote:
      "Eco-friendly products were a must with my two toddlers. Everything smells fresh, nothing harsh. I've rebooked biweekly and couldn't be happier.",
    name: "Jennifer L.",
    role: "Parent · Puyallup",
    initials: "JL",
    color: "from-purple-500 to-brand-600",
  },
  {
    quote:
      "Move-out clean got my full deposit back. The landlord literally said it was the cleanest unit they'd ever seen. 10/10 would recommend.",
    name: "Andre W.",
    role: "Renter · Seattle",
    initials: "AW",
    color: "from-violet-500 to-brand-500",
  },
  {
    quote:
      "I finally have my weekends back. Same cleaner every visit, and she knows exactly how I like things. It feels like a luxury I can actually afford.",
    name: "Grace H.",
    role: "Professional · Kent",
    initials: "GH",
    color: "from-brand-400 to-violet-500",
  },
  {
    quote:
      "Scheduling online took two minutes and they had someone out the next morning. Transparent pricing, no upsells, incredible results.",
    name: "Robert K.",
    role: "Homeowner · Federal Way",
    initials: "RK",
    color: "from-brand-600 to-purple-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Loved locally"
          title={<>What Washington homes are <span className="text-gradient">saying</span></>}
          subtitle="Over 1,200 five-star reviews from real clients across Pierce, King, Snohomish & Thurston County."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal break-inside-avoid rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-900/10"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-700">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${r.color} text-sm font-bold text-white`}
                >
                  {r.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
