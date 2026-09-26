import { Card, Check, Arrow, Phone } from "./icons";
import { PAYMENT_URL, SERVICES_PAYMENT_URL, PHONE_TEL } from "../config";

export default function Payment() {
  const hasDeposit = PAYMENT_URL.length > 0;
  const hasServices = SERVICES_PAYMENT_URL.length > 0;

  return (
    <section id="pay" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="reveal text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <Card className="h-4 w-4" />
            Easy & secure payment
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Pay online — <span className="text-gradient">simple & secure</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Reserve your spot with a deposit, then pay for your cleaning before or after your visit —
            your choice. Prefer cash? Pay at the time of service and enjoy our{" "}
            <span className="font-semibold text-ink">cash discount</span> (receipt always provided).
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Deposit card */}
          <div className="reveal rounded-3xl bg-gradient-to-br from-ink to-slate-900 p-8 text-center text-white shadow-2xl shadow-fuchsia-900/30">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-purple-400 text-white shadow-lg">
              <Card className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-xl font-bold">Reserve Your Spot</h3>
            <p className="mt-1 text-5xl font-extrabold tracking-tight">$100</p>
            <p className="text-sm text-white/60">refundable deposit · applied to service</p>

            {hasDeposit ? (
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-purple-400 px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Pay $100 Deposit
                <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ) : (
              <a href={PHONE_TEL} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-purple-400 px-6 py-4 text-base font-bold text-white">
                <Phone className="h-5 w-5" /> Call to pay deposit
              </a>
            )}
          </div>

          {/* Services card */}
          <div className="reveal rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-sm" style={{ transitionDelay: "100ms" }}>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/25">
              <Check className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-ink">Pay for Your Cleaning</h3>
            <p className="mt-1 text-3xl font-extrabold tracking-tight text-gradient">Your quoted amount</p>
            <p className="text-sm text-slate-500">pay before or after your visit — your choice</p>

            {hasServices ? (
              <a
                href={SERVICES_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Pay for Services
                <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ) : (
              <a href={PHONE_TEL} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-4 text-base font-bold text-ink hover:border-brand-300 hover:bg-brand-50">
                <Phone className="h-5 w-5" /> Call to pay for services
              </a>
            )}
          </div>
        </div>

        <div className="reveal mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          {["🔒 Secure checkout", "🧾 Instant receipt", "💵 Cash discount available"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
