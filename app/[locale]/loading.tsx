export default function Loading() {
  return (
    <div className="pt-16 md:pt-14 min-h-screen primary-bg">
      <div className="container py-16 animate-pulse">
        <div className="h-10 w-64 mx-auto rounded-md bg-white/10 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="h-56 rounded-md bg-white/10 md:col-span-2" />
          <div className="h-56 rounded-md bg-white/10" />
        </div>
        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-5/6 rounded bg-white/10" />
          <div className="h-4 w-4/6 rounded bg-white/10" />
        </div>
      </div>
      <div className="fixed bottom-6 right-6 rounded-full bg-accent_primary px-4 py-2 text-white text-sm font-semibold shadow-lg">Loading…</div>
    </div>
  );
}
