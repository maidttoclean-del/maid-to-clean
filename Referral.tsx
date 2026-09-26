import SectionHeading from "./SectionHeading";
import { Users, Calendar, Gift, Repeat, Arrow, Check } from "./icons";

const steps = [
  {
    icon: Users,
    step: "01",
    title: "Refer a friend",
    desc: "Tell a friend, neighbor, or family member about Maid to Clean and have them mention your name when they sign up.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "They complete 6 cleanings",
    desc: "Once your friend signs a contract and receives 6 cleanings from us, your reward unlocks automatically.",
  },
  {
    icon: Gift,
    step: "03",
    title: "You get a FREE clean",
    desc: "We add a complimentary cleaning to your account as a thank-you. Refer as many friends as you like!",
  },
];

export default function Referral() {
  return (
    <section id="rewards" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/50 to-white" />
        <div className="animate-floaty absolute -left-16 top-24 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="animate-floaty-slow absolute right-0 bottom-10 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Referrals & rewards"
          title={<>Share the sparkle, <span className="text-gradient">earn free cleanings</span></>}
          subtitle="Love your clean home? Spread the word. Every customer is automatically enrolled in our rewards program at sign-up."
        />

        {/* Referral steps */}
        <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block" />
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="reveal relative rounded-2xl border border-slate-100 bg-white/80 p-7 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-900/10"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/25">
                  <s.icon className="h-7 w-7" />
                </span>
                <span className="text-4xl font-black text-slate-100">{s.step}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Two reward highlight cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Referral reward */}
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-slate-900 p-8 text-white shadow-2xl shadow-fuchsia-900/30 sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
            <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-purple-400 text-white">
              <Gift className="h-6 w-6" />
            </span>
            <h3 className="relative mt-5 text-2xl font-bold">Referral Reward</h3>
            <p className="relative mt-2 text-white/70">
              Refer a friend — when they sign a contract and complete{" "}
              <span className="font-bold text-white">6 cleanings</span>, you earn a{" "}
              <span className="font-bold text-white">FREE cleaning</span>. No limit on how many friends you refer.
            </p>
            <ul className="relative mt-6 space-y-2.5 text-sm">
              {["Unlimited referrals", "Reward added automatically", "Stacks with your plan"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-400/20 text-brand-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-white/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Loyalty renewal reward */}
          <div className="reveal relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-sm sm:p-10" style={{ transitionDelay: "100ms" }}>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-200/50 blur-3xl" />
            <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/25">
              <Repeat className="h-6 w-6" />
            </span>
            <h3 className="relative mt-5 text-2xl font-bold text-ink">Loyalty Renewal Bonus</h3>
            <p className="relative mt-2 text-slate-600">
              Stay with us! When you renew your contract at expiration, we thank you with a{" "}
              <span className="font-bold text-ink">FREE cleaning</span> on the house — because loyalty deserves a reward.
            </p>
            <ul className="relative mt-6 space-y-2.5 text-sm">
              {["Free clean every renewal", "Keep your locked-in rate", "Priority scheduling"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-slate-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="#cta"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Start referring & earning
            <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
