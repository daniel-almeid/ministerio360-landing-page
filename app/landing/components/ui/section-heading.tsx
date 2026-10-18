import Reveal from "./reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${
              dark ? "bg-white/10 text-teal-300" : "bg-teal-50 text-teal-700"
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl ${
            dark ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-lg md:text-xl ${dark ? "text-slate-300" : "text-slate-600"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}