export default function ModeSwitcher({
  onQuiz,
}) {
  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={onQuiz}
        className="
        rounded-xl
        bg-green-600
        px-6
        py-3
        hover:bg-green-700
        "
      >
        Start Quiz →
      </button>
    </div>
  );
}