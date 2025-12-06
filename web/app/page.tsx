import { GameTarsSummary } from "@/components/GameTarsSummary";
import { FeatureGrid } from "@/components/FeatureGrid";
import { MetricsTable } from "@/components/MetricsTable";
import { ModelCards } from "@/components/ModelCards";
import { ResourceList } from "@/components/ResourceList";
import { Section } from "@/components/Section";
import {
  benchmarkSections,
  coreAbilities,
  deploymentNotes,
  gameTars,
  hero,
  limitations,
  resources,
  uiTarsModels,
} from "@/data/uiTars";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_55%)]" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Seed-TARS Intelligence Brief
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {hero.title}
            </h1>
            <p className="max-w-3xl text-base text-slate-200">
              {hero.subtitle}
            </p>
          </div>
          <dl className="grid gap-4 text-sm text-slate-200 md:grid-cols-3">
            {hero.snapshot.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
              >
                <dt className="text-xs uppercase tracking-wide text-slate-300">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main className="mx-auto flex w-full flex-col gap-12 pt-12">
        <Section
          id="capabilities"
          title="Integrated Capabilities"
          subtitle="UI-TARS unifies perception, grounding, reasoning, and memory inside a single vision-language model, removing the modular pipelines used by previous GUI agents."
        >
          <FeatureGrid groups={coreAbilities} />
        </Section>

        <Section
          id="models"
          title="Model Lineup"
          subtitle="Three checkpoint sizes are published on Hugging Face with SFT and DPO variants. The 7B and 72B models are the recommended balance between capability and compute."
        >
          <ModelCards models={uiTarsModels} />
        </Section>

        <Section
          id="benchmarks"
          title="Reported Benchmarks"
          subtitle="Seed-TARS publishes extensive third-party benchmark coverage. The tables below re-state the headline values so you can compare quickly."
        >
          <div className="space-y-8">
            {benchmarkSections.map((block) => (
              <MetricsTable
                key={block.title}
                title={block.title}
                blurb={block.blurb}
                columns={["Model", ...block.columns.slice(1)]}
                rows={block.rows}
                footnote={block.footnote}
              />
            ))}
          </div>
        </Section>

        <Section
          id="game-tars"
          title="Game-TARS Extension"
          subtitle="Game-TARS adapts the UI-TARS architecture to open-ended 2D and 3D games, positioning gameplay as the proving ground for future computer-use agents."
        >
          <GameTarsSummary {...gameTars} />
        </Section>

        <Section
          id="deployment"
          title="Deployment Notes"
          subtitle="The team recommends a mix of managed inference endpoints and self-hosted vLLM clusters. Below are the logistics mentioned on the site."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {deploymentNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-base font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.details}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="limitations"
          title="Limitations & Risk Notes"
          subtitle="Seed highlights the following caveats for UI-TARS-1.5 and downstream deployments."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {limitations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-base font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
            Early access enquiries are directed to{" "}
            <a
              href="mailto:TARS@bytedance.com"
              className="font-medium text-slate-900 underline"
            >
              TARS@bytedance.com
            </a>{" "}
            for collaborative research, matching the call-to-action on
            seed-tars.com.
          </div>
        </Section>

        <Section
          id="resources"
          title="Primary Sources"
          subtitle="Direct links surfaced on seed-tars.com for papers, code, and deployment support."
        >
          <ResourceList resources={resources} />
        </Section>
      </main>
    </div>
  );
}
