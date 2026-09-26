import { useEffect, useState } from "react";
import { Check, Arrow, Sparkle, Phone, Mail, Card, Speaker } from "./icons";
import { cn } from "../utils/cn";
import { FORMSPREE_ID, EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL, PAYMENT_URL } from "../config";

const serviceTypes = [
  { id: "recurring", label: "Recurring Cleaning (Contract)", note: "Weekly · Bi-weekly · Monthly — best rates 💚" },
  { id: "onetime", label: "One-Time Clean — No Contract", note: "No commitment · higher per-visit rate" },
  { id: "moveinout", label: "Move-In / Move-Out", note: "Quote-based" },
  { id: "commercial", label: "Office / Commercial", note: "Quote-based" },
  { id: "construction", label: "New Construction Cleanup", note: "Quote-based" },
  { id: "specialty", label: "Event / Airbnb / Biohazard", note: "Quote-based" },
];

const frequencies = ["Weekly", "Bi-Weekly", "Every 3 Weeks", "Monthly"];
const terms = ["3 Months", "6 Months", "12 Months"];

type Props = { open: boolean; onClose: () => void };

export default function SignupModal({ open, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    service: "recurring",
    frequency: "Bi-Weekly",
    term: "6 Months",
    name: "",
    email: "",
    mobilePhone: "",
    homePhone: "",
    serviceAddress: "",
    mailingAddress: "",
    sameAddress: true,
    homeSize: "",
    notes: "",
    agree: false,
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Stop any contract narration when the modal closes.
  useEffect(() => {
    if (!open && "speechSynthesis" in window) window.speechSynthesis.cancel();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const isRecurring = form.service === "recurring";
  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const mailingAddr = form.sameAddress ? form.serviceAddress : form.mailingAddress;
  const contractChoice = isRecurring
    ? `Recurring contract — ${form.term}, ${form.frequency}`
    : "No contract (one-time / quote-based)";

  const canContinue1 = !!form.service;
  const canContinue2 =
    form.name && form.email && form.mobilePhone && form.serviceAddress &&
    (form.sameAddress || form.mailingAddress);
  const canSubmit = form.agree && canContinue2;

  const submit = async () => {
    if (!canSubmit) return;
    setError(false);

    // If no Formspree ID yet, fall back to opening an email draft.
    if (!FORMSPREE_ID) {
      const body = encodeURIComponent(
        `NEW SIGN-UP REQUEST\n\nContract choice: ${contractChoice}\n` +
        `\nName: ${form.name}\nEmail: ${form.email}\n` +
        `Mobile phone: ${form.mobilePhone}\nHome phone: ${form.homePhone || "—"}\n` +
        `Service address: ${form.serviceAddress}\nMailing address: ${mailingAddr}\n` +
        `Home size: ${form.homeSize}\nNotes: ${form.notes}\n\nAgreed to terms & $100 deposit: YES`
      );
      window.location.href = `${EMAIL_HREF}?subject=${encodeURIComponent("New Customer Signup — " + form.name)}&body=${body}`;
      setStep(4);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `🧹 New Customer Signup — ${form.name}`,
          contractChoice: contractChoice,
          service: form.service,
          frequency: isRecurring ? form.frequency : "N/A",
          contractTerm: isRecurring ? form.term : "No contract",
          name: form.name,
          email: form.email,
          mobilePhone: form.mobilePhone,
          homePhone: form.homePhone || "Not provided",
          serviceAddress: form.serviceAddress,
          mailingAddress: mailingAddr,
          homeSize: form.homeSize,
          notes: form.notes,
          contractSigned: `YES — ${form.name} electronically signed the Service Agreement (${contractChoice}), agreed to the $100 deposit, cancellation terms, and cash payment.`,
          signedDate: new Date().toLocaleString(),
        }),
      });
      if (res.ok) setStep(4);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const speakContract = () => {
    if (!("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    // Toggle: if already speaking, stop.
    if (synth.speaking) {
      synth.cancel();
      return;
    }
    const termClause = isRecurring
      ? `Term and Commitment. This is a recurring plan for ${form.term} at a ${form.frequency} frequency. Your per-visit rate is locked in for the full term. If you cancel before the term ends, the remaining balance of the contract becomes due.`
      : "";
    const text =
      `Maid to Clean Client Service Agreement. This agreement is between Maid to Clean, and you, the client. ` +
      `Deposit. A one hundred dollar deposit is due at signing to reserve your spot on the schedule. It is applied toward your service, and a receipt is always provided. ` +
      `Payment. Payment is due at the time of each cleaning. We currently accept cash and offer a cash discount. A receipt is provided for all payments. ` +
      termClause + " " +
      `Scheduling. Individual visits may be paused or rescheduled with at least 48 hours notice, at no penalty. ` +
      `Satisfaction. If any area is not up to standard, notify us within 24 hours and we will return to re-clean that area at no extra charge. This covers a re-clean, not a cash refund. ` +
      `Specialty Cleans. One-time, move in, move out, new construction, event, Airbnb, and biohazard cleans are quote-based and priced individually. These typically cost more than a recurring visit. ` +
      `Access and Supplies. You will provide safe access to the property. We arrive fully equipped with eco-friendly supplies, and we are licensed, bonded, and insured. ` +
      `By checking the box, you electronically sign and agree to this Service Agreement.`;
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    u.pitch = 1.05;
    synth.speak(u);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200";

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm sm:items-center">
      <div className="my-8 w-full max-w-xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-brand-600 to-purple-500 px-6 py-4 text-white">
          <div className="flex items-center gap-2">
            <Sparkle className="h-5 w-5" />
            <span className="font-bold">Sign Up · Maid to Clean</span>
          </div>
          <button onClick={onClose} aria-label="Close" className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-lg hover:bg-white/30">
            ✕
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {(
            <>
              {/* Progress */}
              <div className="mb-2 flex items-center gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className={cn("h-1.5 flex-1 rounded-full transition-colors", step >= n ? "bg-gradient-to-r from-brand-500 to-purple-500" : "bg-slate-200")} />
                ))}
              </div>
              <div className="mb-5 grid grid-cols-4 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                <span className={cn(step >= 1 && "text-brand-600")}>Service</span>
                <span className={cn(step >= 2 && "text-brand-600")}>Details</span>
                <span className={cn(step >= 3 && "text-brand-600")}>Sign</span>
                <span className={cn(step >= 4 && "text-brand-600")}>Pay</span>
              </div>

              {/* Step 1 — service */}
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-bold text-ink">What are you looking for?</h3>
                  <p className="mt-1 text-sm text-slate-500">Choose a service to get started.</p>
                  <div className="mt-4 space-y-2.5">
                    {serviceTypes.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => set("service", s.id)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition",
                          form.service === s.id ? "border-brand-400 bg-brand-50" : "border-slate-200 hover:border-brand-300"
                        )}
                      >
                        <div>
                          <p className="text-sm font-semibold text-ink">{s.label}</p>
                          <p className="text-xs text-slate-500">{s.note}</p>
                        </div>
                        {form.service === s.id && <Check className="h-5 w-5 text-brand-600" />}
                      </button>
                    ))}
                  </div>

                  {isRecurring && (
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Frequency</label>
                        <select value={form.frequency} onChange={(e) => set("frequency", e.target.value)} className={cn(inputClass, "mt-1.5")}>
                          {frequencies.map((f) => <option key={f}>{f}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Contract length</label>
                        <select value={form.term} onChange={(e) => set("term", e.target.value)} className={cn(inputClass, "mt-1.5")}>
                          {terms.map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 rounded-xl bg-brand-50 p-3 text-xs leading-relaxed text-brand-800">
                    💡 <strong>Your choice, your terms:</strong> Sign a recurring contract for our{" "}
                    <strong>best locked-in rates</strong>, or choose a one-time clean with{" "}
                    <strong>no commitment</strong> at a higher per-visit rate. Either way, you're 100%
                    in control of your time with us.
                  </div>

                  <button disabled={!canContinue1} onClick={() => setStep(2)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-50">
                    Continue <Arrow className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Step 2 — details */}
              {step === 2 && (
                <div>
                  <h3 className="text-lg font-bold text-ink">Your details</h3>
                  <p className="mt-1 text-sm text-slate-500">So we can prepare your quote & schedule.</p>
                  <div className="mt-4 space-y-3">
                    <input className={inputClass} placeholder="Full name *" value={form.name} onChange={(e) => set("name", e.target.value)} />
                    <input className={inputClass} placeholder="Email address *" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <input className={inputClass} placeholder="Mobile phone *" type="tel" value={form.mobilePhone} onChange={(e) => set("mobilePhone", e.target.value)} />
                      <input className={inputClass} placeholder="Home phone (optional)" type="tel" value={form.homePhone} onChange={(e) => set("homePhone", e.target.value)} />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Service address (where we clean) *</label>
                      <input className={cn(inputClass, "mt-1.5")} placeholder="Street, city, state & ZIP" value={form.serviceAddress} onChange={(e) => set("serviceAddress", e.target.value)} />
                    </div>

                    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" checked={form.sameAddress} onChange={(e) => set("sameAddress", e.target.checked)} className="h-4 w-4 accent-brand-600" />
                      Mailing address is the same as service address
                    </label>

                    {!form.sameAddress && (
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mailing address *</label>
                        <input className={cn(inputClass, "mt-1.5")} placeholder="Street, city, state & ZIP" value={form.mailingAddress} onChange={(e) => set("mailingAddress", e.target.value)} />
                      </div>
                    )}

                    <input className={inputClass} placeholder="Home size (e.g. 3 bed / 2 bath)" value={form.homeSize} onChange={(e) => set("homeSize", e.target.value)} />
                    <textarea className={cn(inputClass, "min-h-[70px] resize-y")} placeholder="Special requests or notes (optional)" value={form.notes} onChange={(e) => set("notes", e.target.value)} />
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setStep(1)} className="rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-ink">Back</button>
                    <button disabled={!canContinue2} onClick={() => setStep(3)} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-50">
                      Review & agree <Arrow className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 — agreement */}
              {step === 3 && (
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-ink">Your Service Agreement</h3>
                    <button
                      type="button"
                      onClick={speakContract}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-purple-500 px-3.5 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5"
                    >
                      <Speaker className="h-4 w-4" />
                      Listen / Stop
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">Tap "Listen" to hear the contract read aloud, or read it below.</p>

                  <div className="mt-4 space-y-3 rounded-2xl bg-brand-50/60 p-4 text-sm">
                    <Row label="Contract Choice" value={contractChoice} />
                    <Row label="Client" value={form.name} />
                    <Row label="Mobile" value={form.mobilePhone} />
                    <Row label="Service Address" value={form.serviceAddress} />
                  </div>

                  {/* Full contract */}
                  <div className="mt-4 max-h-48 overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-600">
                    <p className="text-center text-sm font-bold text-ink">Maid to Clean — Client Service Agreement</p>
                    <p className="mt-2 text-slate-500">This agreement is between Maid to Clean LLC ("Company") and the Client named above.</p>

                    <p className="mt-3 font-semibold text-slate-700">1. Deposit</p>
                    <p>A $100 deposit (cash) is due at signing to reserve the Client's spot on the schedule. The deposit is applied toward service. A receipt is provided for every payment.</p>

                    <p className="mt-3 font-semibold text-slate-700">2. Payment</p>
                    <p>Payment is due at the time of each cleaning. The Company currently accepts cash and offers a cash discount. A receipt is provided for all payments.</p>

                    {isRecurring && (
                      <>
                        <p className="mt-3 font-semibold text-slate-700">3. Term & Commitment</p>
                        <p>This is a recurring plan for the selected term ({form.term}) at the agreed {form.frequency.toLowerCase()} frequency. The per-visit rate is locked in for the full term. If the Client cancels before the term ends, the remaining balance of the contract becomes due.</p>
                      </>
                    )}

                    <p className="mt-3 font-semibold text-slate-700">{isRecurring ? "4." : "3."} Scheduling</p>
                    <p>Individual visits may be paused or rescheduled with at least 48 hours' notice at no penalty. The Company will make reasonable efforts to accommodate changes.</p>

                    <p className="mt-3 font-semibold text-slate-700">{isRecurring ? "5." : "4."} Satisfaction</p>
                    <p>If any area isn't up to standard, the Client must notify the Company within 24 hours and the Company will return to re-clean that area at no extra charge. This covers a re-clean, not a cash refund.</p>

                    <p className="mt-3 font-semibold text-slate-700">{isRecurring ? "6." : "5."} Specialty Cleans</p>
                    <p>One-time, move-in/out, new construction, event, Airbnb, and biohazard cleans are quote-based and priced individually by scope. These typically cost more than a recurring visit.</p>

                    <p className="mt-3 font-semibold text-slate-700">{isRecurring ? "7." : "6."} Access & Supplies</p>
                    <p>The Client will provide safe access to the property. The Company arrives fully equipped with eco-friendly supplies. The Company is licensed, bonded, and insured.</p>

                    <p className="mt-3 text-slate-500">By checking the box below, the Client electronically signs and agrees to this Service Agreement as of the submission date.</p>
                  </div>

                  <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-slate-700">
                    <input type="checkbox" checked={form.agree} onChange={(e) => set("agree", e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-brand-600" />
                    <span>I, <strong>{form.name || "the Client"}</strong>, have read and agree to the Maid to Clean Service Agreement above, including the <strong>$100 deposit</strong> and all terms. This serves as my electronic signature.</span>
                  </label>

                  {error && (
                    <p className="mt-3 text-sm text-red-600">
                      Something went wrong. Please call {PHONE_DISPLAY} or email us and we'll get you set up.
                    </p>
                  )}

                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setStep(2)} className="rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-ink">Back</button>
                    <button disabled={!canSubmit || sending} onClick={submit} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-50">
                      {sending ? "Submitting…" : "Sign & continue to deposit"} {!sending && <Arrow className="h-4 w-4" />}
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
                    <a href={PHONE_TEL} className="flex items-center gap-1 hover:text-brand-600"><Phone className="h-3.5 w-3.5" />{PHONE_DISPLAY}</a>
                    <a href={EMAIL_HREF} className="flex items-center gap-1 hover:text-brand-600"><Mail className="h-3.5 w-3.5" />{EMAIL}</a>
                  </div>
                </div>
              )}

              {/* Step 4 — pay deposit */}
              {step === 4 && (
                <div className="text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-purple-500 text-white">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-ink">Contract signed! One last step 🎉</h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">
                    Thanks, {form.name || "there"}! Your agreement is submitted. To lock in your
                    spot on our schedule, please pay your <strong>$100 deposit</strong> now.
                  </p>

                  {/* Deposit card */}
                  <div className="mx-auto mt-6 max-w-xs rounded-2xl bg-gradient-to-br from-ink to-slate-900 p-6 text-white">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-purple-400">
                      <Card className="h-6 w-6" />
                    </span>
                    <p className="mt-3 text-3xl font-extrabold">$100</p>
                    <p className="text-xs text-white/60">refundable deposit · applied to service</p>

                    {PAYMENT_URL ? (
                      <a
                        href={PAYMENT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-purple-400 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                      >
                        Pay $100 Deposit <Arrow className="h-4 w-4" />
                      </a>
                    ) : (
                      <a
                        href={PHONE_TEL}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-purple-400 px-5 py-3 text-sm font-bold text-white"
                      >
                        <Phone className="h-4 w-4" /> Call to pay deposit
                      </a>
                    )}
                  </div>

                  <p className="mx-auto mt-4 max-w-sm text-xs text-slate-500">
                    Prefer cash? You can pay your deposit and each cleaning in cash at your first
                    visit and enjoy our cash discount. We'll confirm your schedule once your deposit
                    is received.
                  </p>

                  <button onClick={onClose} className="mt-6 text-sm font-semibold text-slate-400 hover:text-brand-600">
                    I'll pay at my first visit — finish
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-500">{label}</span>
      <span className="text-right font-semibold text-ink">{value}</span>
    </div>
  );
}
