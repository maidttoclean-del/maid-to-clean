import { Check, Star } from "./icons";

const points = [
  "Reclaim 4+ hours every week for what matters most",
  "A healthier home with allergen & germ reduction",
  "Consistent quality with the same trusted pro",
  "Transparent flat-rate pricing — no surprises",
  "Move-in / move-out & Airbnb turnovers available",
  "Text-back support with real humans, fast",
];

export default function Benefits() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Visual */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-fuchsia-900/20">
            <img
              src="/images/kitchen.jpg"
              alt="A gleaming, freshly cleaned kitchen"
              loading="lazy"
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 -right-4 max-w-[220px] rounded-2xl border border-white/70 p-5 shadow-xl sm:-right-8">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400" />
              ))}
            </div>
            <p className="mt-2 text-sm font-medium text-slate-700">
              “My condo has never looked this good. Worth every penny.”
            </p>
            <p className="mt-2 text-xs font-semibold text-slate-500">— Dana R., Seattle</p>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <span className="reveal inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            The Maid to Clean difference
          </span>
          <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl" style={{ transitionDelay: "60ms" }}>
            More than clean —
            <span className="text-gradient"> peace of mind.</span>
          </h2>
          <p className="reveal mt-4 text-lg leading-relaxed text-slate-600" style={{ transitionDelay: "120ms" }}>
            We handle the details so you can enjoy your home and your time. Here's
            what our Pierce, King, Snohomish & Thurston County clients love most.
          </p>

          <ul className="mt-8 space-y-3.5">
            {points.map((p, i) => (
              <li
                key={p}
                className="reveal flex items-start gap-3"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-purple-500 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#pricing"
            className="reveal mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            See pricing plans
          </a>
        </div>
      </div>
    </section>
  );
}
