CREATE DATABASE flashcards;

\c flashcards

CREATE TABLE terms (
  id SERIAL PRIMARY KEY,
  term TEXT NOT NULL,
  definition TEXT NOT NULL
);
