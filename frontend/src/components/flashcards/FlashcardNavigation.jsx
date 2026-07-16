export default function FlashcardNavigation({
  current,
  total,
  next,
  previous,
}) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <button
        onClick={previous}
        disabled={current === 0}
        className="rounded-lg bg-slate-700 px-4 py-2 disabled:opacity-40"
      >
        Previous
      </button>

      <span>
        {current + 1} / {total}
      </span>

      <button
        onClick={next}
        disabled={current === total - 1}
        className="rounded-lg bg-slate-700 px-4 py-2 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}