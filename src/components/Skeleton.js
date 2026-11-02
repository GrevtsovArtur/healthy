export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border border-ink/10 bg-white p-4" aria-hidden="true">
      <div className="mx-auto h-28 w-28 rounded-full bg-ink/10" />
      <div className="mt-4 h-4 w-2/3 rounded bg-ink/10" />
      <div className="mt-2 h-3 w-full rounded bg-ink/10" />
      <div className="mt-4 h-8 w-1/2 rounded bg-ink/10" />
    </div>
  );
}
export function GridSkeleton({ n = 6 }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: n }, (_, i) => <CardSkeleton key={i} />)}</div>;
}
