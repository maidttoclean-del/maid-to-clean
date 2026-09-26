import SectionHeading from "./SectionHeading";
import { Calendar, Sparkle, Check, Arrow } from "./icons";
import { SIGNUP_URL } from "../config";

const frequencies = [
  { name: "Weekly", tag: "Best value", desc: "Your home stays effortlessly pristine — the lowest price per visit." },
  { name: "Bi-Weekly", tag: "Most popular", desc: "Every two weeks — the perfect balance of clean and value." },
  { name: "Every 3 Weeks", tag: "Flexible", desc: "A lighter rhythm that still keeps your home fresh and tidy." },
  { name: "Monthly", tag: "Deep clean", desc: "A thorough deep clean each month to reset your entire home." },
  { name: "One-Time", tag: "No commitment", desc: "Deep, move-out, event or Airbnb cleans — whenever you need." },
];

const steps = [
  {
    title: "Visit 1 — Kitchen & Baths First",
    desc: "We start with a detailed top-to-bottom clean, giving special attention to your kitchen and bathrooms — the hardest-working rooms in your home.",
  },
  {
    title: "Visit 2 — Living & Sleeping Areas",
    desc: "We thoroughly clean the whole home again, this time detail-cleaning your living and sleeping areas so every space shines.",
  },
  {
    title: "Ongoing — Rotating Detail Clean",
    desc: "From there we maintain that pristine standard every visit, rotating deep-detail focus room by room so nothing is ever overlooked.",
  },
];

export default function Frequencies() {
  return (
    <section id="frequencies" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cleaning frequencies"
          title={<>Choose the rhythm that <span className="text-gradient">fits your life</span></>}
          subtitle="Our services come in flexible frequencies so you get exactly the level of clean you want. Clean more often and pay less per visit — you're always 100% in control of your time with us."
        />

        {/* Frequency options */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {frequencies.map((f, i) => (
            <article
              key={f.name}
              className="reveal group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-fuchsia-900/10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/25 transition-transform duration-300 group-hover:scale-110">
                <Calendar className="h-6 w-6" />
              </span>
              <span className="mt-4 inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brand-700">
                {f.tag}
              </span>
              <h3 className="mt-2 text-lg font-bold text-ink">{f.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{f.desc}</p>
            </article>
          ))}
        </div>

        {/* Signature system */}
        <div className="reveal mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-purple-950 to-brand-900 p-8 text-white shadow-2xl shadow-fuchsia-900/30 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              <Sparkle className="h-4 w-4" />
              Our signature method
            </span>
            <h3 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The White Glove Rotation System™
            </h3>
            <p className="mt-4 text-white/75">
              Refined over 25+ years, our rotation system guarantees a beautiful,
              deep-cleaned home after every single visit — never a rushed or
              surface-level clean.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-purple-400 text-sm font-black text-white">
                    {i + 1}
                  </span>
                  <Check className="h-5 w-5 text-brand-300" />
                </div>
                <h4 className="mt-4 text-base font-bold">{s.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={SIGNUP_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-purple-400 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Stop coming home to a second job
              <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
