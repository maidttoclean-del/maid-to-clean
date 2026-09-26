const partners = [
  "Tacoma Living",
  "Seattle Homes",
  "Puget Sound Realty",
  "Emerald City Rentals",
  "Northwest Nest",
  "Rainier Property Co.",
];

const stats = [
  { value: "12,000+", label: "Homes cleaned" },
  { value: "4.9★", label: "Average rating" },
  { value: "98%", label: "Rebook rate" },
  { value: "2 counties", label: "Fully served" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-slate-100 bg-white/60 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="reveal text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Trusted by homeowners & property managers across Western Washington
        </p>

        <div className="reveal mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex w-max gap-12">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-lg font-bold tracking-tight text-slate-300"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-fuchsia-900/5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-3xl font-extrabold tracking-tight text-gradient">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
