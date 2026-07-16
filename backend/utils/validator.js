const { z } = require("zod");

const FlashcardSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const QuizSchema = z.object({
  question: z.string(),
  options: z.array(z.string()).length(4),
  correctAnswer: z.string(),
});

const StudySchema = z.object({
  title: z.string(),
  flashcards: z.array(FlashcardSchema),
  quiz: z.array(QuizSchema),
});

module.exports = StudySchema;