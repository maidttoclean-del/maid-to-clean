import SectionHeading from "./SectionHeading";
import { Home, Leaf, Shield, Clock, Truck, Heart } from "./icons";

const features = [
  {
    icon: Home,
    title: "Deep & Recurring Cleans",
    desc: "From top-to-bottom deep cleans to weekly maintenance, we tailor every visit to your home and lifestyle.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "Non-toxic, family- and pet-safe supplies that leave your home fresh, healthy, and residue-free.",
  },
  {
    icon: Shield,
    title: "Licensed, Bonded & Insured",
    desc: "Every cleaner is background-checked, trained, and insured — and our company is fully licensed and bonded across Pierce, King, Snohomish & Thurston County.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Book online in 60 seconds. Same-week openings, easy rescheduling, and no long-term contracts.",
  },
  {
    icon: Truck,
    title: "We Bring Everything",
    desc: "Premium tools and supplies arrive with your team. Just unlock the door and enjoy the results.",
  },
  {
    icon: Heart,
    title: "We'll Make It Right",
    desc: "Not thrilled? Just let us know within 24 hours and we'll return to re-clean the area at no extra charge. Simple and fair.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Maid to Clean"
          title={<>Cleaning done right, <span className="text-gradient">right here at home</span></>}
          subtitle="We combine hospitality-grade attention to detail with the reliability busy Washington households deserve."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-fuchsia-900/10"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-brand-100 to-purple-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
