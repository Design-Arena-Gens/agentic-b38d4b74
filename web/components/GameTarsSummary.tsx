type Pillar = {
  title: string;
  description: string;
};

type GameTarsSummaryProps = {
  intro: string;
  highlights: string[];
  pillars: Pillar[];
  citation: { title: string; url: string };
};

export function GameTarsSummary({
  intro,
  highlights,
  pillars,
  citation,
}: GameTarsSummaryProps) {
  return (
    <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-600">{intro}</p>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="grid gap-4 md:grid-cols-2">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">
              {pillar.title}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
      <a
        href={citation.url}
        className="inline-flex items-center text-sm font-medium text-slate-900 underline"
      >
        {citation.title}
      </a>
    </div>
  );
}
