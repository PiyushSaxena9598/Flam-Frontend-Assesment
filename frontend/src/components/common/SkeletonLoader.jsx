export default function SkeletonLoader() {
  return (
    <div className="animate-pulse mt-10 space-y-6">
      <div className="h-8 rounded bg-slate-700"></div>

      <div className="h-72 rounded-2xl bg-slate-800"></div>

      <div className="h-10 rounded bg-slate-700"></div>
    </div>
  );
}