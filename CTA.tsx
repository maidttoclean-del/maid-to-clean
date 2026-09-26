import { Arrow, Phone, Check, Mail } from "./icons";
import { SIGNUP_URL } from "../config";

export default function CTA() {
  return (
    <section id="cta" className="px-4 py-20 sm:px-6">
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
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to come home to{" "}
            <span className="bg-gradient-to-r from-brand-300 to-purple-300 bg-clip-text text-transparent">
              spotless?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Book your first clean today and get{" "}
            <span className="font-bold text-white">$40 off</span> your Signature
            visit. Serving Pierce, King, Snohomish & Thurston County.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SIGNUP_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-purple-400 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Claim my $40 off
              <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:12532900312"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              (253) 290-0312
            </a>
            <a
              href="mailto:maidtocleanhousecleaning@yahoo.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              Email us
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
            {["Cash discount", "Flexible plans", "We'll make it right"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-purple-300" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
