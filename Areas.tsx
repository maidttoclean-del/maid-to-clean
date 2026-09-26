import SectionHeading from "./SectionHeading";
import { Pin, Arrow } from "./icons";

const counties = [
  {
    name: "Pierce County",
    cities: ["Tacoma", "Puyallup", "Lakewood", "University Place", "Gig Harbor", "Bonney Lake", "Sumner", "Spanaway"],
  },
  {
    name: "King County",
    cities: ["Seattle", "Bellevue", "Kent", "Renton", "Federal Way", "Auburn", "Redmond", "Burien"],
  },
  {
    name: "Snohomish County",
    cities: ["Everett", "Lynnwood", "Marysville", "Edmonds", "Mukilteo", "Mill Creek", "Bothell", "Monroe"],
  },
  {
    name: "Thurston County",
    cities: ["Olympia", "Lacey", "Tumwater", "Yelm", "Rainier", "Tenino", "Rochester", "Lakewood"],
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Areas we serve"
          title={<>Proudly cleaning homes <span className="text-gradient">across the Sound</span></>}
          subtitle="From Olympia to Everett, Maid to Clean covers four counties. Don't see your town? Reach out — chances are we're nearby."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {counties.map((c, i) => (
            <article
              key={c.name}
              className="reveal group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-fuchsia-900/10"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-lg shadow-fuchsia-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Pin className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-ink">{c.name}</h3>
              </div>
              <ul className="mt-5 space-y-2">
                {c.cities.map((city) => (
                  <li key={city} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-purple-400" />
                    {city}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-slate-500">
          Serving Pierce, King, Snohomish & Thurston County and surrounding communities.{" "}
          <a href="#pricing" className="group inline-flex items-center gap-1 font-semibold text-brand-600 hover:underline">
            Check availability in your area
            <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </p>
      </div>
    </section>
  );
}
