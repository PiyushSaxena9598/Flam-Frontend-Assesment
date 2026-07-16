import { useRef, useState } from "react";

import Header from "./components/Home/Header";
import PromptInput from "./components/Home/PromptInput";
import GenerateButton from "./components/Home/GenerateButton";

import Flashcard from "./components/flashcards/Flashcard";
import FlashcardNavigation from "./components/flashcards/FlashcardNavigation";
import ProgressBar from "./components/flashcards/ProgressBar";
import ModeSwitcher from "./components/flashcards/ModeSwitcher";

import Quiz from "./components/quiz/Quiz";
import QuizResult from "./components/quiz/QuizResult";

import { generateStudyMaterial } from "./services/api";

function App() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [studyData, setStudyData] = useState(null);
  const [error, setError] = useState("");
  const [mode, setMode] = useState("flashcards");
  const [currentCard, setCurrentCard] = useState(0);
  const [quizResult, setQuizResult] = useState(null);

  const controllerRef = useRef(null);

  async function handleGenerate() {
    if (!prompt.trim()) {
      setError("Please enter a topic.");
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    try {
      setLoading(true);
      setError("");

      const response = await generateStudyMaterial(
        prompt,
        controllerRef.current.signal
      );

      if (!response.success) {
        throw new Error(response.message || "Generation failed");
      }

      setStudyData(response.data);
      setCurrentCard(0);
      setQuizResult(null);
      setMode("flashcards");
    } catch (err) {
      if (
        err.name === "AbortError" ||
        err.name === "CanceledError"
      ) {
        return;
      }

      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function nextCard() {
    setCurrentCard((prev) =>
      Math.min(prev + 1, studyData.flashcards.length - 1)
    );
  }

  function previousCard() {
    setCurrentCard((prev) => Math.max(prev - 1, 0));
  }

  function handleQuizFinish(result) {
    setQuizResult(result);
    setMode("result");
  }

  function retryWrongQuestions() {
    if (!quizResult?.wrongQuestions?.length) {
      setMode("flashcards");
      return;
    }

    setStudyData((prev) => ({
      ...prev,
      quiz: quizResult.wrongQuestions,
    }));

    setQuizResult(null);
    setMode("quiz");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Header />

        <div className="mt-8">
          <PromptInput
            value={prompt}
            onChange={setPrompt}
          />

          <GenerateButton
            onClick={handleGenerate}
            loading={loading}
          />
        </div>

        {loading && (
          <div className="mt-8 rounded-xl bg-slate-800 p-6 text-center">
            <p className="animate-pulse text-blue-400">
              🤖 AI is generating your study material...
            </p>
          </div>
        )}

        {error && (
          <div className="mt-8 rounded-xl border border-red-500 bg-red-500/10 p-5">
            <p className="text-red-300">{error}</p>

            <button
              onClick={handleGenerate}
              className="mt-4 rounded-lg bg-red-600 px-5 py-2 hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        )}

        {!studyData && !loading && !error && (
          <div className="mt-16 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
            <h2 className="text-2xl font-bold">
              📚 Ready to Study?
            </h2>

            <p className="mt-4 text-slate-400">
              Enter any topic or paste your notes to generate
              AI-powered flashcards and a quiz.
            </p>
          </div>
        )}

        {studyData && !loading && (
          <>
            <h2 className="mt-10 text-3xl md:text-4xl font-bold">
              {studyData.title}
            </h2>

            {mode === "flashcards" && (
              <>
                <ProgressBar
                  current={currentCard}
                  total={studyData.flashcards.length}
                />

                <Flashcard
                  key={currentCard}
                  card={studyData.flashcards[currentCard]}
                />

                <FlashcardNavigation
                  current={currentCard}
                  total={studyData.flashcards.length}
                  next={nextCard}
                  previous={previousCard}
                />

                <ModeSwitcher
                  onQuiz={() => setMode("quiz")}
                />
              </>
            )}

            {mode === "quiz" && (
              <Quiz
                questions={studyData.quiz}
                onFinish={handleQuizFinish}
              />
            )}

            {mode === "result" && quizResult && (
              <QuizResult
                score={quizResult.score}
                total={studyData.quiz.length}
                wrongQuestions={quizResult.wrongQuestions}
                onRetry={retryWrongQuestions}
                onFlashcards={() => {
                  setMode("flashcards");
                  setCurrentCard(0);
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;