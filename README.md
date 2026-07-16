# AI Study Assistant

## Features

- AI Flashcards
- Interactive Quiz
- Retry Wrong Questions
- AbortController
- Loading State
- Error State
- Empty State
- Mobile Responsive

## Tech Stack

Frontend

- React
- Tailwind CSS
- Axios

Backend

- Express
- Groq API
- Zod

## Installation

### Backend

npm install

npm run dev

### Frontend

npm install

npm run dev

## AI Usage

The backend sends prompts to Groq and validates the structured JSON using Zod before returning it.

## Failure Handling

- Invalid JSON
- Wrong AI structure
- Retry button
- Abort stale requests
- Loading state
- Empty state

## Time Spent

~8 hours

## Known Limitations

- AI quality depends on the model.
- Browser localStorage only.