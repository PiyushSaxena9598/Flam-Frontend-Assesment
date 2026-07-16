import { useState } from "react";

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  if (!card) return null;

  return (
    <div className="mt-8">
      <div
        onClick={() => setFlipped(!flipped)}
        className="
          cursor-pointer
          rounded-2xl
          border
          border-slate-700
          bg-slate-800
          p-10
          min-h-[260px]
          flex
          items-center
          justify-center
          transition
          hover:border-blue-500
        "
      >
        <p className="text-2xl text-center leading-9">
          {flipped ? card.answer : card.question}
        </p>
      </div>

      <button
        onClick={() => setFlipped(!flipped)}
        className="mt-5 rounded-xl bg-blue-600 px-5 py-2 hover:bg-blue-700 transition"
      >
        {flipped ? "Show Question" : "Reveal Answer"}
      </button>
    </div>
  );
}