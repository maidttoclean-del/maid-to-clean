import SectionHeading from "./SectionHeading";
import { Calendar, Shield, Clock, Leaf, Check, Heart } from "./icons";

const policies = [
  {
    icon: Calendar,
    title: "$100 Deposit at Signing",
    desc: "A flat $100 deposit (cash) reserves your spot when you sign, and is applied toward your service. A receipt is provided for every payment.",
  },
  {
    icon: Shield,
    title: "A Safety Net for Both of Us",
    desc: "You're 100% in control of your time with us. Nobody loves contracts — but ours is a safety net that protects us both: your price is guaranteed and locked in, and our schedule is protected. Plans run 3, 6, or 12 months; canceling early makes the remaining balance due.",
  },
  {
    icon: Clock,
    title: "Reschedule Anytime",
    desc: "Life happens. Individual visits can be paused or rescheduled with at least 48 hours' notice, at no penalty.",
  },
  {
    icon: Heart,
    title: "We'll Make It Right",
    desc: "If something isn't up to standard, contact us within 24 hours and we'll return to re-clean the specific area at no extra charge. (Covers a re-clean, not a cash refund.)",
  },
  {
    icon: Leaf,
    title: "Safe, Eco-Friendly",
    desc: "We arrive fully equipped with non-toxic, family- and pet-safe products. No supplies needed on your end.",
  },
  {
    icon: Check,
    title: "Transparent Billing",
    desc: "Cash is due at the time of each cleaning. Pay cash and enjoy a discount — plus you'll always receive a receipt. No hidden fees, ever.",
  },
];

export default function Policies() {
  return (
    <section id="policies" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Policies & terms"
          title={<>Clear, fair, <span className="text-gradient">up-front terms</span></>}
          subtitle="No fine-print surprises. Here's exactly how our contracts, deposits, and scheduling work before you ever sign."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((p, i) => (
            <article
              key={p.title}
              className="reveal group rounded-2xl border border-slate-100 bg-white/80 p-7 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-fuchsia-900/10"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </article>
          ))}
        </div>

        {/* Cash discount banner */}
        <div className="reveal mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-purple-950 to-brand-900 p-8 text-white shadow-2xl shadow-fuchsia-900/30 sm:p-10">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-purple-400 text-3xl shadow-lg">
              💵
            </span>
            <div className="flex-1">
              <h3 className="text-2xl font-bold">Pay Cash &amp; Save</h3>
              <p className="mt-2 text-white/75">
                We currently accept <span className="font-semibold text-white">cash at the time of service</span> —
                and we pass the savings on to you with a <span className="font-semibold text-brand-200">cash discount</span> on
                every clean. You'll always receive a <span className="font-semibold text-white">receipt</span> for your records.
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-brand-300/40 bg-brand-400/10 px-6 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-200">Ask about our</p>
              <p className="text-lg font-extrabold text-white">Cash Discount</p>
            </div>
          </div>
        </div>

        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          Full terms are provided in your service agreement at sign-up. Pay cash and save with our cash discount — receipts always provided. Questions about a policy?{" "}
          <a href="#cta" className="font-semibold text-brand-600 hover:underline">
            Reach out — we're happy to explain →
          </a>
        </p>
      </div>
    </section>
  );
}
