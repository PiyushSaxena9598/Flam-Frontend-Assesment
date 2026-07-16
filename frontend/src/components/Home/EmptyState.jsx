import { BookOpen } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="mt-16 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
      <BookOpen
        className="mx-auto mb-5"
        size={70}
      />

      <h2 className="text-3xl font-bold">
        AI Study Assistant
      </h2>

      <p className="mt-4 text-slate-400">
        Paste your notes or any topic.

        AI will automatically generate
        flashcards and quiz questions.
      </p>
    </div>
  );
}