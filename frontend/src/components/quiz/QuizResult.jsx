export default function QuizResult({
  score,
  total,
  wrongQuestions,
  onRetry,
  onFlashcards,
}) {
  return (
    <div className="mt-10 rounded-2xl border border-green-500 bg-slate-800 p-8 text-center">
      <h2 className="text-4xl font-bold">
        🎉 Quiz Completed
      </h2>

      <p className="mt-6 text-2xl">
        Score: {score} / {total}
      </p>

      <p className="mt-2 text-slate-400">
        Wrong Answers: {wrongQuestions.length}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={onRetry}
          className="rounded-xl bg-red-600 px-6 py-3 hover:bg-red-700"
        >
          Retry Wrong Questions
        </button>

        <button
          onClick={onFlashcards}
          className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700"
        >
          Back to Flashcards
        </button>
      </div>
    </div>
  );
}