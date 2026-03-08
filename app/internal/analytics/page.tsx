import { getGaDashboardData, type BreakdownItem, type TrendPoint } from '@/lib/ga4Dashboard';

type ChartDatum = TrendPoint;

function maxOf(values: number[]) {
  return values.length ? Math.max(...values) : 1;
}

function formatPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

function formatAxisDate(date: string) {
  return date.slice(5);
}

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.35)] backdrop-blur">
      <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-200/70">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{hint}</p>
    </article>
  );
}

function InlineTrendChart({ data }: { data: ChartDatum[] }) {
  const max = maxOf(data.flatMap((d) => [d.pageviews, d.sessions, d.users]));

  const toPolyline = (pick: (d: ChartDatum) => number) =>
    data
      .map((d, i) => {
        const x = data.length === 1 ? 0 : (i / (data.length - 1)) * 100;
        const y = 100 - (pick(d) / max) * 100;
        return `${x},${y}`;
      })
      .join(' ');

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 lg:col-span-2">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Trend</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Traffic over the last 30 days</h2>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-slate-300">
          <span>🔵 Pageviews</span>
          <span>🟢 Sessions</span>
          <span>🟠 Users</span>
        </div>
      </div>

      {data.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-slate-950/70 p-10 text-center text-slate-400">
          No trend data returned by GA4 yet.
        </div>
      ) : (
        <>
          <svg viewBox="0 0 100 100" className="h-72 w-full rounded-2xl bg-slate-950/80 p-4" preserveAspectRatio="none">
            {[20, 40, 60, 80].map((y) => (
              <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="rgba(148,163,184,0.15)" strokeWidth="0.6" />
            ))}
            <polyline points={toPolyline((d) => d.pageviews)} fill="none" stroke="#38bdf8" strokeWidth="1.8" />
            <polyline points={toPolyline((d) => d.sessions)} fill="none" stroke="#34d399" strokeWidth="1.8" />
            <polyline points={toPolyline((d) => d.users)} fill="none" stroke="#f59e0b" strokeWidth="1.8" />
          </svg>
          <div className="mt-3 grid grid-cols-4 gap-2 text-[11px] text-slate-500 md:grid-cols-7">
            {data.filter((_, index) => index % Math.max(Math.floor(data.length / 7), 1) === 0).map((point) => (
              <span key={point.date}>{formatAxisDate(point.date)}</span>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function BreakdownCard({ title, subtitle, data, accent }: { title: string; subtitle: string; data: BreakdownItem[]; accent: string }) {
  const max = maxOf(data.map((item) => item.value));

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Breakdown</p>
      <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
      <p className="mt-1 text-sm text-slate-400">{subtitle}</p>

      <div className="mt-6 space-y-4">
        {data.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-slate-950/70 p-8 text-center text-sm text-slate-400">
            No data available yet.
          </div>
        ) : (
          data.map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex items-start justify-between gap-4 text-sm">
                <div>
                  <p className="font-medium text-slate-100">{item.label}</p>
                  <p className="text-xs text-slate-500">{formatPercent(item.share)} of visible total</p>
                </div>
                <p className="whitespace-nowrap text-slate-300">{item.value.toLocaleString('en-US')}</p>
              </div>
              <div className="h-2.5 rounded-full bg-slate-800">
                <div className={`h-2.5 rounded-full ${accent}`} style={{ width: `${Math.max((item.value / max) * 100, 4)}%` }} />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function SetupState({ missingVars }: { missingVars: string[] }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_35%),#020617] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-amber-400/20 bg-slate-900/80 p-8 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Internal analytics</p>
        <h1 className="mt-3 text-3xl font-bold text-white">GA4 dashboard setup required</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Frontend tracking can stay enabled with <code className="text-cyan-300">NEXT_PUBLIC_MEASUREMENT_ID</code>. This page only needs
          server-side GA4 Data API credentials to read reporting data.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <p className="text-sm font-semibold text-white">Add these to .env.local</p>
            <pre className="mt-4 overflow-auto whitespace-pre-wrap rounded-2xl bg-black/30 p-4 text-sm text-cyan-300">{`GA4_PROPERTY_ID=123456789\nGA4_CLIENT_EMAIL=ga4-dashboard@your-project.iam.gserviceaccount.com\nGA4_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"\nNEXT_PUBLIC_MEASUREMENT_ID=G-XXXXXXXXXX`}</pre>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <p className="text-sm font-semibold text-white">Missing vars</p>
            <ul className="mt-4 space-y-2 text-sm text-amber-200">
              {missingVars.map((name) => (
                <li key={name} className="rounded-xl border border-amber-400/15 bg-amber-500/5 px-3 py-2">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

function ErrorState({ error }: { error: string }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_35%),#020617] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-rose-400/20 bg-slate-900/80 p-8 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-rose-300">GA4 Data API</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Dashboard could not load analytics data</h1>
        <p className="mt-4 text-slate-300">
          The route is wired correctly, but GA4 rejected the request or the credentials/property access are incomplete.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-rose-200">{error}</div>
        <ol className="mt-6 list-inside list-decimal space-y-2 text-sm text-slate-300">
          <li>Confirm the service account has access in GA4 Property Access Management.</li>
          <li>Verify <code className="text-cyan-300">GA4_PROPERTY_ID</code> points to the correct GA4 property.</li>
          <li>Make sure the private key keeps literal newline escapes (<code className="text-cyan-300">\n</code>) in env storage.</li>
        </ol>
      </div>
    </main>
  );
}

export const dynamic = 'force-dynamic';

export default async function AnalyticsDashboardPage() {
  const result = await getGaDashboardData();

  if (!result.configured) {
    return <SetupState missingVars={result.missingVars} />;
  }

  if (!result.ok) {
    return <ErrorState error={result.error} />;
  }

  const { data } = result;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_35%),#020617] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-[32px] border border-white/10 bg-slate-900/75 p-6 shadow-2xl backdrop-blur md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Internal analytics</p>
              <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">GA4 Analytics Dashboard</h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-400">
                Server-side Google Analytics Data API dashboard for fast performance reviews, without exposing private credentials to the client.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 px-4 py-3 text-sm text-cyan-100">
              <p className="font-semibold">{data.periodLabel}</p>
              <p className="text-cyan-100/70">Tracking remains powered by NEXT_PUBLIC_MEASUREMENT_ID.</p>
            </div>
          </div>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {data.metricCards.map((card) => (
            <StatCard key={card.key} label={card.label} value={card.value} hint={card.hint} />
          ))}
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <InlineTrendChart data={data.trend} />
          <BreakdownCard title="Top pages" subtitle="Most viewed landing/content paths" data={data.topPages} accent="bg-cyan-400" />
          <BreakdownCard title="Top countries" subtitle="Traffic origin by session volume" data={data.topCountries} accent="bg-emerald-400" />
          <BreakdownCard title="Devices" subtitle="Desktop vs mobile vs tablet split" data={data.deviceSplit} accent="bg-fuchsia-400" />
          <BreakdownCard title="Source / medium" subtitle="Acquisition mix from GA4 session attribution" data={data.sourceMedium} accent="bg-amber-400" />
        </section>
      </div>
    </main>
  );
}
