import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Plus } from "./icons";
import { cn } from "../utils/cn";

const faqs = [
  {
    q: "Which areas do you serve?",
    a: "We proudly serve all of Pierce, King, Snohomish and Thurston County, including Tacoma, Seattle, Bellevue, Everett, Olympia, Lacey, Puyallup, Kent, Federal Way, Auburn, Renton, Lynnwood, Marysville and surrounding communities.",
  },
  {
    q: "Do I need to provide cleaning supplies?",
    a: "Never. Your team arrives fully equipped with premium, eco-friendly, family- and pet-safe supplies and professional-grade equipment. Just unlock the door.",
  },
  {
    q: "Are your cleaners background-checked and insured?",
    a: "Absolutely. Every professional is thoroughly vetted, background-checked, and trained, and our company is fully licensed, bonded, and insured for your complete peace of mind.",
  },
  {
    q: "What if I'm not satisfied with the clean?",
    a: "Your satisfaction is our priority. If anything isn't up to standard, contact us within 24 hours of your cleaning and we'll return to re-clean the specific area at no extra charge. Our commitment covers a re-clean rather than a cash refund, which keeps our pricing fair for everyone.",
  },
  {
    q: "Can I get the same cleaner every time?",
    a: "Yes! With recurring plans we match you with a dedicated pro who learns your preferences, so every visit feels consistent and personal.",
  },
  {
    q: "How do I sign up and pay?",
    a: "Choose your plan and contract length (3, 6, or 12 months), then complete a quick sign-up. A $100 deposit reserves your spot. We currently accept cash at the time of each cleaning — and we offer a cash discount as a thank-you. You'll always receive a receipt.",
  },
  {
    q: "How do I pay, and is there a discount?",
    a: "We currently accept cash, due at the time of each cleaning. As a thank-you, we offer a cash discount on every visit — and you'll always receive a receipt for your records. A flat $100 deposit (cash) is collected at signing and applied toward your service.",
  },
  {
    q: "What is your cancellation policy?",
    a: "You're 100% in control of your time with us. We know nobody loves contracts, so we treat ours as a safety net that protects both sides: your price is guaranteed and locked in for the full term, and our schedule stays reserved for you. If you cancel before your contract term ends, the remaining balance becomes due. You can always pause or reschedule an individual visit with notice.",
  },
  {
    q: "How does the referral & loyalty reward work?",
    a: "Every customer is enrolled in our referral program at sign-up. Refer friends and earn rewards when they sign a contract — and when you renew your own contract at expiration, you get a FREE cleaning on us as a thank-you for your loyalty.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Questions"
          title={<>Everything you need to <span className="text-gradient">know</span></>}
          subtitle="Can't find your answer? Our team is a quick text or call away."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="reveal overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-ink">{f.q}</span>
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300",
                      isOpen && "rotate-45 bg-gradient-to-br from-brand-500 to-purple-500 text-white"
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-slate-600">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
