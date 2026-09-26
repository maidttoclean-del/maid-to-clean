import SectionHeading from "./SectionHeading";
import { Home, Building, Boxes, Confetti, Biohazard, HardHat, Award, Check } from "./icons";
import { SIGNUP_URL } from "../config";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    desc: "Recurring and one-time cleans for houses, condos, and apartments — kept spotless on your schedule.",
  },
  {
    icon: Building,
    title: "Commercial Cleaning",
    desc: "Offices, retail, and workspaces cleaned to a professional shine, with flexible after-hours scheduling.",
  },
  {
    icon: Boxes,
    title: "Move-In & Move-Out",
    desc: "Deep, deposit-ready turnovers for empty properties. As intensive one-time jobs, these are quote-based and priced higher than a recurring clean.",
  },
  {
    icon: Confetti,
    title: "Special Event Cleaning",
    desc: "Pre- and post-party clean-ups so you can host with ease. Quoted per event and priced higher than a standard visit.",
  },
  {
    icon: Home,
    title: "Airbnb & Rental Turnovers",
    desc: "Fast, reliable, 5-star-ready turnovers between guests so your listing always sparkles.",
  },
  {
    icon: HardHat,
    title: "New Construction Cleaning",
    desc: "Post-build and post-renovation cleanup — dust, debris, and residue removed so your new space is move-in ready. Quote-based and priced by scope.",
  },
  {
    icon: Biohazard,
    title: "Biohazard Cleaning",
    desc: "Safe, discreet, thorough specialty cleaning to the highest sanitation standards. Custom-quoted and priced accordingly.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we specialize in"
          title={<>One team for every <span className="text-gradient">kind of clean</span></>}
          subtitle="From everyday homes to specialty jobs, Maid to Clean does it all — with the same meticulous, white-glove standard every time. Just ask our clients."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-fuchsia-900/10"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-brand-100 to-purple-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </article>
          ))}
        </div>

        {/* Experience & quality banner */}
        <div className="reveal mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-slate-900 p-8 text-white shadow-2xl shadow-fuchsia-900/30 sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-purple-400 text-white shadow-lg">
                <Award className="h-7 w-7" />
              </span>
              <div>
                <p className="text-3xl font-extrabold tracking-tight">25+ Years</p>
                <p className="text-sm text-white/70">of professional cleaning experience</p>
              </div>
            </div>

            <ul className="space-y-2.5 text-sm">
              {[
                "Staff 100% trained & background-checked",
                "Rigorous quality-control on every job",
                "Consistent, detail-obsessed results",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-400/20 text-brand-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-white/90">{t}</span>
                </li>
              ))}
            </ul>

            <div className="lg:text-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-300/40 bg-brand-400/10 px-4 py-2 text-sm font-bold text-brand-200">
                ✅ We'll Make It Right
              </div>
              <a
                href={SIGNUP_URL}
                className="mt-4 block rounded-xl bg-gradient-to-r from-brand-400 to-purple-400 px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl lg:inline-block"
              >
                Book your service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
