type MetricsRow = {
  model: string;
  stats: string[];
};

type MetricsTableProps = {
  title: string;
  columns: string[];
  rows: MetricsRow[];
  blurb?: string;
  footnote?: string;
};

export function MetricsTable({
  title,
  columns,
  rows,
  blurb,
  footnote,
}: MetricsTableProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        {blurb ? <p className="text-sm text-slate-600">{blurb}</p> : null}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              {columns.map((header) => (
                <th key={header} className="px-4 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.model} className="hover:bg-slate-50/60">
                <th
                  scope="row"
                  className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900"
                >
                  {row.model}
                </th>
                {row.stats.map((value, idx) => (
                  <td key={idx} className="whitespace-nowrap px-4 py-3">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote ? (
        <p className="text-xs text-slate-500">{footnote}</p>
      ) : null}
    </div>
  );
}
