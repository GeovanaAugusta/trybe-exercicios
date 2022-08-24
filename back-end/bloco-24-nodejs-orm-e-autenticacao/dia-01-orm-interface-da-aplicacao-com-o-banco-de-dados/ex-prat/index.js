

const BooksController = require('./controller/BooksController'); // controller importado

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Exercício 5: Vincule a rota GET /books para acessar seu controller.
app.get('/books', BooksController.getAll);

// Exercício 8: Vincule a rota GET /books/:id para acessar seu controller.
app.get('/books/:id', BooksController.getById);

// Exercício 11: Vincule a rota POST /books para acessar seu controller.
app.post('/books', BooksController.create);

// Exercício 14: Vincule a rota PUT /books/:id para acessar seu controller.
app.put('/books/:id', BooksController.update);

// Exercício 17: Vincule a rota DELETE /books/:id para acessar seu controller.
app.delete('/books/:id', BooksController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));