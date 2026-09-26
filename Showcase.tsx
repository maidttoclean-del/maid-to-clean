import SectionHeading from "./SectionHeading";
import { Calendar, Sparkle, Check } from "./icons";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book in 60 seconds",
    desc: "Tell us your home size and preferred date. Get an instant, transparent price — no walkthroughs required.",
  },
  {
    icon: Sparkle,
    step: "02",
    title: "We clean, you relax",
    desc: "A vetted team arrives on time with everything needed, following a 50-point checklist room by room.",
  },
  {
    icon: Check,
    step: "03",
    title: "Enjoy a flawless home",
    desc: "Come home to spotless. Rate your visit and rebook your favorite pro in a single tap.",
  },
];

const gallery = [
  { src: "/images/kitchen.jpg", label: "Kitchens", area: "Deep degrease & shine" },
  { src: "/images/bathroom.jpg", label: "Bathrooms", area: "Sanitized top to bottom" },
  { src: "/images/team.jpg", label: "Our Pros", area: "Friendly & background-checked" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title={<>Three simple steps to a <span className="text-gradient whitespace-nowrap">sparkling home</span></>}
          subtitle="No quotes to chase, no supplies to buy, no stress. Just book and enjoy the results."
        />

        {/* Steps */}
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

        {/* Gallery */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {gallery.map((g, i) => (
            <div
              key={g.label}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/60 shadow-lg shadow-fuchsia-900/10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-lg font-bold text-white">{g.label}</p>
                <p className="text-sm text-white/80">{g.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
