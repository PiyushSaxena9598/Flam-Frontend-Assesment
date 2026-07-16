export default function ClearSessionButton({ onClear }) {
  return (
    <button
      onClick={onClear}
      className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700 transition"
    >
      Clear Session
    </button>
  );
}