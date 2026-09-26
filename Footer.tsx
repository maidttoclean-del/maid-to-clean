import { Sparkle, Phone, Mail } from "./icons";
import { CREW_APP_URL } from "../config";

const cols = [
  {
    title: "Services",
    links: ["Residential Cleaning", "Commercial Cleaning", "Move In / Out", "New Construction", "Special Event Cleaning", "Airbnb & Biohazard"],
  },
  {
    title: "Service Areas",
    links: ["Tacoma", "Seattle", "Everett", "Olympia", "Bellevue", "Puyallup", "Lynnwood & Lacey"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Reviews", "Gift Cards", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/30">
                <Sparkle className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-ink">
                Maid<span className="text-gradient"> to Clean</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Premium, eco-friendly house cleaning for Pierce, King, Snohomish & Thurston
              County homes. Vetted pros, flawless results, guaranteed.
            </p>
            <div className="mt-5 space-y-2.5">
              <a
                href="tel:12532900312"
                className="flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
              >
                <Phone className="h-4 w-4" />
                (253) 290-0312
              </a>
              <a
                href="mailto:maidtocleanhousecleaning@yahoo.com"
                className="flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
              >
                <Mail className="h-4 w-4" />
                <span className="break-all">maidtocleanhousecleaning@yahoo.com</span>
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-ink">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-500 transition-colors hover:text-brand-600">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Maid to Clean LLC. All rights reserved. Licensed, bonded & insured · WA.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <a href="#" className="transition-colors hover:text-brand-600">Privacy</a>
            <a href="#" className="transition-colors hover:text-brand-600">Terms</a>
            <a
              href={CREW_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 font-semibold text-brand-700 transition-colors hover:bg-brand-100"
            >
              👷 Team Login · Maid to Crew
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
