import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Sparkle, Phone, Mail } from "./icons";
import { SIGNUP_URL } from "../config";

const links = [
  { label: "Set Up Services", href: "#signup" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#showcase" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Areas", href: "#areas" },
  { label: "Pricing", href: "#pricing" },
  { label: "Pay", href: "#pay" },
  { label: "Rewards", href: "#rewards" },
  { label: "Policies", href: "#policies" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl border bg-white px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled
              ? "border-slate-200 shadow-lg shadow-fuchsia-900/5"
              : "border-slate-100 shadow-sm"
          )}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Sparkle className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-ink">
              Maid<span className="text-gradient"> to Clean</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-ink after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-brand-500 after:to-purple-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:maidtocleanhousecleaning@yahoo.com"
              aria-label="Email us"
              className="hidden items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-brand-600 2xl:flex"
            >
              <Mail className="h-4 w-4" />
              Email us
            </a>
            <a
              href="tel:12532900312"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-brand-600"
            >
              <Phone className="h-4 w-4" />
              (253) 290-0312
            </a>
            <a
              href={SIGNUP_URL}
              className="rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/40"
            >
              Set Up Services
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/70 text-ink lg:hidden"
          >
            <div className="space-y-1.5">
              <span className={cn("block h-0.5 w-5 bg-current transition-all", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-current transition-all", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-current transition-all", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-500 lg:hidden",
            open ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={SIGNUP_URL}
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-xl bg-gradient-to-r from-brand-600 to-purple-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg"
            >
              Set Up Services
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
