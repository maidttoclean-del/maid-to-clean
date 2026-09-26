import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Check, Arrow, Sparkle } from "./icons";
import { cn } from "../utils/cn";
import { SIGNUP_URL } from "../config";

type Term = "3" | "6" | "12";

const terms: { id: Term; label: string; save: string }[] = [
  { id: "3", label: "3 Months", save: "" },
  { id: "6", label: "6 Months", save: "Save 8%" },
  { id: "12", label: "12 Months", save: "Save 15%" },
];

const plans = [
  {
    name: "Weekly",
    type: "Regular Clean",
    tagline: "Best value — home always fresh",
    prices: { "3": 130, "6": 120, "12": 110 } as Record<Term, number>,
    features: [
      "General upkeep every week",
      "Kitchen & bathroom sanitizing",
      "Dusting, vacuuming & mopping",
      "Trash & surface refresh",
      "Same trusted pro each visit",
      "Eco-friendly supplies included",
    ],
    highlight: false,
    badge: "Lowest per visit",
  },
  {
    name: "Bi-Weekly",
    type: "Regular Clean",
    tagline: "Every 2 weeks — the sweet spot",
    prices: { "3": 150, "6": 140, "12": 130 } as Record<Term, number>,
    features: [
      "General clean every 2 weeks",
      "Kitchen & bathroom sanitizing",
      "Dusting, vacuuming & mopping",
      "Trash & surface refresh",
      "Same trusted pro each visit",
      "Eco-friendly supplies included",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Monthly",
    type: "Deep Clean",
    tagline: "Once a month — always a deep clean",
    prices: { "3": 220, "6": 205, "12": 190 } as Record<Term, number>,
    features: [
      "Full deep clean every visit",
      "Baseboards, doors & trim",
      "Inside appliances (oven & fridge)",
      "Interior windows & fixtures",
      "Grout, tile & cabinet fronts",
      "Eco-friendly supplies included",
    ],
    highlight: false,
    badge: "Deep clean",
  },
];

export default function Pricing() {
  const [term, setTerm] = useState<Term>("6");

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Plans & pricing"
          title={<>Pick your rhythm, <span className="text-gradient">lock in your rate</span></>}
          subtitle="You're 100% in control of your time with us. Clean more often and pay less per visit — and while nobody loves contracts, ours is a safety net for both of us: your price stays locked in and guaranteed. Serving Pierce, King, Snohomish & Thurston County."
        />

        {/* Contract length selector */}
        <div className="reveal mt-8 flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-slate-500">Choose your contract length</p>
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {terms.map((t) => (
              <button
                key={t.id}
                onClick={() => setTerm(t.id)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  term === t.id
                    ? "bg-gradient-to-r from-brand-600 to-purple-500 text-white shadow-md"
                    : "text-slate-500 hover:text-ink"
                )}
              >
                {t.label}
                {t.save && (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-bold",
                      term === t.id ? "bg-white/20 text-white" : "bg-purple-100 text-purple-700"
                    )}
                  >
                    {t.save}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={cn(
                "reveal relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2",
                p.highlight
                  ? "border-transparent bg-gradient-to-b from-ink to-slate-900 text-white shadow-2xl shadow-fuchsia-900/30 lg:-mt-4 lg:mb-4"
                  : "border-slate-100 bg-white text-ink shadow-sm hover:shadow-xl hover:shadow-fuchsia-900/10"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400 to-purple-400 px-4 py-1 text-xs font-bold text-white shadow-lg">
                  {p.badge}
                </span>
              )}

              <div className="flex items-center justify-between">
                <h3 className={cn("text-xl font-bold", p.highlight && "text-white")}>{p.name}</h3>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide",
                    p.type === "Deep Clean"
                      ? p.highlight ? "bg-purple-400/20 text-purple-200" : "bg-purple-100 text-purple-700"
                      : p.highlight ? "bg-brand-400/20 text-brand-200" : "bg-brand-50 text-brand-700"
                  )}
                >
                  {p.type}
                </span>
              </div>
              <p className={cn("mt-1 text-sm", p.highlight ? "text-white/70" : "text-slate-500")}>
                {p.tagline}
              </p>

              <div className="mt-6 flex items-end gap-1.5">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${p.prices[term]}
                </span>
                <span className={cn("mb-1.5 text-sm font-medium", p.highlight ? "text-white/60" : "text-slate-400")}>
                  / visit
                </span>
              </div>
              <p className={cn("mt-1 text-xs", p.highlight ? "text-white/50" : "text-slate-400")}>
                on a {term}-month plan · billed per cleaning
              </p>

              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                        p.highlight ? "bg-brand-400/20 text-brand-300" : "bg-brand-50 text-brand-600"
                      )}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className={p.highlight ? "text-white/90" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={SIGNUP_URL}
                className={cn(
                  "group mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300",
                  p.highlight
                    ? "bg-gradient-to-r from-brand-400 to-purple-400 text-white hover:-translate-y-0.5 hover:shadow-xl"
                    : "border border-slate-200 text-ink hover:border-brand-300 hover:bg-brand-50"
                )}
              >
                Sign up for {p.name.toLowerCase()}
                <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* One-time & specialty cleans */}
        <div className="reveal mt-8 overflow-hidden rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white">
                <Sparkle className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">One-Time & No-Contract Cleans</h3>
                <p className="mt-1 max-w-lg text-sm text-slate-500">
                  Prefer no commitment? You can absolutely book a one-time clean — just note that
                  cleans without a recurring contract are priced at a{" "}
                  <span className="font-semibold text-ink">higher per-visit rate</span>. Move-outs,
                  move-ins, events, Airbnb, and biohazard jobs are quoted individually. Always priced
                  up front — no surprises.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Move-Out", "Move-In", "Special Events", "Airbnb", "New Construction", "Biohazard", "Deep Clean"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-5 sm:flex-col sm:items-end">
              <div className="text-right">
                <p className="text-3xl font-extrabold text-gradient">$280+</p>
                <p className="text-xs text-slate-400">starting · quote-based</p>
              </div>
              <a
                href={SIGNUP_URL}
                className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-ink transition-all hover:border-brand-300 hover:bg-brand-50"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>

        <p className="reveal mt-6 text-center text-sm text-slate-500">
          Final price may vary by home size & condition. Every new plan includes a{" "}
          <span className="font-semibold text-ink">FREE clean at renewal</span> and{" "}
          <span className="font-semibold text-ink">referral rewards</span>.{" "}
          <a href="#cta" className="font-semibold text-brand-600 hover:underline">
            Get your exact quote →
          </a>
        </p>
      </div>
    </section>
  );
}
