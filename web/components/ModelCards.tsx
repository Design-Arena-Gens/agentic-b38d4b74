type Model = {
  name: string;
  size: string;
  training: string;
  strengths: string[];
  links: { label: string; url: string }[];
};

type ModelCardsProps = {
  models: Model[];
};

export function ModelCards({ models }: ModelCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {models.map((model) => (
        <article
          key={model.name}
          className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                {model.name}
              </h3>
              <p className="text-sm text-slate-500">{model.size}</p>
            </div>
            <p className="text-sm font-medium text-slate-700">
              {model.training}
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              {model.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {model.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
