import { useState } from "react";

export default function Quiz({ questions, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);

  const question = questions[currentQuestion];

  function handleNext() {
    if (!selectedAnswer) return;

    if (selectedAnswer === question.correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setWrongQuestions((prev) => [...prev, question]);
    }

    if (currentQuestion === questions.length - 1) {
      onFinish({
        score:
          selectedAnswer === question.correctAnswer
            ? score + 1
            : score,
        wrongQuestions:
          selectedAnswer === question.correctAnswer
            ? wrongQuestions
            : [...wrongQuestions, question],
      });
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
  }

  return (
    <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800 p-8">
      <div className="mb-6 flex justify-between">
        <h2 className="text-xl font-bold">
          Question {currentQuestion + 1} / {questions.length}
        </h2>

        <span className="text-green-400">
          Score: {score}
        </span>
      </div>

      <h3 className="text-2xl font-semibold">
        {question.question}
      </h3>

      <div className="mt-8 space-y-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedAnswer(option)}
            className={`w-full rounded-xl border p-4 text-left transition ${
              selectedAnswer === option
                ? "border-blue-500 bg-blue-500/20"
                : "border-slate-600 hover:border-blue-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!selectedAnswer}
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 disabled:opacity-40 hover:bg-blue-700"
      >
        {currentQuestion === questions.length - 1
          ? "Finish Quiz"
          : "Next Question"}
      </button>
    </div>
  );
}