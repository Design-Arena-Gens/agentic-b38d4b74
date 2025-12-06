type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({ title, subtitle, children, id }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-4 pb-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-3xl text-base text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}
