type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="reveal inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
        {eyebrow}
      </span>
      <h2 className="reveal mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl" style={{ transitionDelay: "60ms" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="reveal mt-4 text-lg leading-relaxed text-slate-600" style={{ transitionDelay: "120ms" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
