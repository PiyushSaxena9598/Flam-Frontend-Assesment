export default function ProgressBar({
  current,
  total,
}) {
  const percent = ((current + 1) / total) * 100;

  return (
    <div className="mt-6">
      <div className="mb-2 flex justify-between">
        <span>
          Progress
        </span>

        <span>
          {current + 1} / {total}
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-700">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-300"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
}