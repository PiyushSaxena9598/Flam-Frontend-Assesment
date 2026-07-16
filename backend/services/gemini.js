const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateStudyMaterial(prompt) {
  const finalPrompt = `
You are an educational AI assistant.

Return ONLY valid JSON.

Do NOT return markdown.
Do NOT wrap inside \`\`\`.

Return exactly this schema:

{
  "title":"string",
  "flashcards":[
    {
      "question":"string",
      "answer":"string"
    }
  ],
  "quiz":[
    {
      "question":"string",
      "options":["","","",""],
      "correctAnswer":"string"
    }
  ]
}

Generate exactly:
- 5 flashcards
- 5 quiz questions

Topic:
${prompt}
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.3,
    max_tokens: 1200,
    messages: [
      {
        role: "user",
        content: finalPrompt,
      },
    ],
  });

  return response.choices[0].message.content;
}

module.exports = generateStudyMaterial;