import { Glove, Check, Sparkle } from "./icons";

const pillars = [
  {
    title: "Detail-Obsessed",
    desc: "We clean the corners, edges, and overlooked spots most companies skip — every visit, without exception.",
  },
  {
    title: "Trusted in Your Home",
    desc: "Licensed, bonded, insured, and background-checked pros who treat your space with total respect and care.",
  },
  {
    title: "We'll Make It Right",
    desc: "If something isn't up to standard, tell us within 24 hours and we'll return to re-clean the area — no extra charge.",
  },
];

export default function Promise() {
  return (
    <section id="promise" className="px-4 py-20 sm:px-6">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink via-purple-950 to-brand-900 px-6 py-16 shadow-2xl shadow-fuchsia-900/30 sm:px-14 sm:py-20">
        {/* Ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-floaty absolute -left-16 -top-16 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="animate-floaty-slow absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-purple-400/25 blur-3xl" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            <Sparkle className="h-4 w-4" />
            Our commitment to you
          </span>

          <div className="animate-bob mx-auto mt-8 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-brand-400 to-purple-400 text-white shadow-xl shadow-fuchsia-500/40">
            <Glove className="h-10 w-10" />
          </div>

          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            The White Glove Promise
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            When you invite Maid to Clean into your home, you're not just booking
            a cleaning — you're getting our word. We promise to treat every home
            with{" "}
            <span className="font-semibold text-white">white-glove care</span>,
            clean with meticulous attention to the smallest detail, and leave
            your space so spotless you'll never want to book anyone else.
            <span className="mt-4 block font-semibold text-brand-200">
              Flawless results, every visit — or we make it right. That's our
              promise. 🤍
            </span>
          </p>

          {/* Pillars */}
          <div className="mt-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-purple-400 text-white">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
