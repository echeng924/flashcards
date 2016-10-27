INSERT INTO flashcards (term, definition) VALUES ($1, $2) RETURNING *;
