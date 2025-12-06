type Resource = {
  label: string;
  description: string;
  url: string;
};

type ResourceListProps = {
  resources: Resource[];
};

export function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {resources.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-400 hover:shadow-md"
        >
          <p className="text-sm font-semibold text-slate-900">{item.label}</p>
          <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          <span className="mt-3 inline-flex items-center text-xs font-medium text-slate-500">
            {item.url}
          </span>
        </a>
      ))}
    </div>
  );
}
