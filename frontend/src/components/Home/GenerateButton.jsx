import { Sparkles } from "lucide-react";

export default function GenerateButton({
  onClick,
  loading,
}) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className="
      mt-6
      flex
      items-center
      gap-2
      rounded-xl
      bg-blue-600
      px-6
      py-3
      font-semibold
      transition
      hover:bg-blue-700
      disabled:opacity-50
      disabled:cursor-not-allowed
      "
    >
      <Sparkles size={18} />

      {loading
        ? "Generating..."
        : "Generate Study Material"}
    </button>
  );
}