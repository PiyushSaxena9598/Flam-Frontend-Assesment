export default function Header() {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
        AI Study Assistant
      </h1>

      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Paste your study notes or enter any topic. AI will generate interactive
        flashcards and quizzes to help you learn faster.
      </p>
    </header>
  );
}