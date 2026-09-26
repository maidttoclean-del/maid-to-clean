import { Sparkle, Star, Check, Arrow, Shield } from "./icons";
import { SIGNUP_URL } from "../config";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-white to-white" />
        <div className="animate-floaty absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl" />
        <div className="animate-floaty-slow absolute right-0 top-32 h-80 w-80 rounded-full bg-purple-300/40 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(8,145,178,0.12) 1px, transparent 0)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Copy */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
            <Sparkle className="h-4 w-4" />
            Serving Pierce, King, Snohomish & Thurston County, WA
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            A spotless home,
            <br />
            <span className="text-gradient">without lifting a finger.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Maid to Clean delivers meticulous, eco-friendly house cleaning
            across Tacoma, Seattle and beyond. Vetted pros, flawless results,
            and a commitment to make it right — every single visit.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SIGNUP_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/40"
            >
              Sign Up Today
              <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-7 py-4 text-base font-semibold text-ink backdrop-blur transition-all duration-300 hover:border-brand-300 hover:bg-white"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600">
                <span className="font-bold text-ink">4.9/5</span> · 1,200+ reviews
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Shield className="h-5 w-5 text-brand-600" />
              Licensed, bonded & insured
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="reveal relative" style={{ transitionDelay: "150ms" }}>
          <div className="animate-bob relative overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-fuchsia-900/20">
            <img
              src="/images/hero.jpg"
              alt="A bright, freshly cleaned modern living room"
              className="h-[420px] w-full object-cover sm:h-[540px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
          </div>

          {/* Floating card: guarantee */}
          <div className="glass absolute -left-4 top-8 flex items-center gap-3 rounded-2xl border border-white/70 p-3.5 shadow-xl sm:-left-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white">
              <Check className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">We'll Make It Right</p>
              <p className="text-xs text-slate-500">Your satisfaction first</p>
            </div>
          </div>

          {/* Floating card: booking */}
          <div className="glass absolute -bottom-6 right-2 rounded-2xl border border-white/70 p-4 shadow-xl sm:right-0">
            <p className="text-xs font-medium text-slate-500">Next available</p>
            <p className="mt-0.5 text-sm font-bold text-ink">Tomorrow, 9:00 AM</p>
            <div className="mt-2 flex -space-x-2">
              {["#ec4899", "#a855f7", "#db2777", "#c026d3"].map((c, i) => (
                <span
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-slate-800 text-[10px] font-bold text-white">
                +9
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
