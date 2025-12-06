type Feature = {
  title: string;
  description: string;
};

type FeatureGroup = {
  name: string;
  summary: string;
  bullets: Feature[];
};

type FeatureGridProps = {
  groups: FeatureGroup[];
};

export function FeatureGrid({ groups }: FeatureGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.name}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="flex flex-col gap-3 border-b border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {group.name}
            </h3>
            <p className="text-sm text-slate-600">{group.summary}</p>
          </div>
          <ul className="flex flex-col gap-4 p-6">
            {group.bullets.map((item) => (
              <li key={item.title} className="space-y-1.5">
                <p className="text-base font-medium text-slate-900">
                  {item.title}
                </p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
