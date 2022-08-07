// index.js

const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
}); 

// 2- Crie uma rota /books para trazer a lista de todos os livros;
// 3- Altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados.
app.get('/books', async (_req, res) => {
	const books = await Book.getAll();

	res.status(200).json(books);
}); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});

// Em index.js, importamos o express e iniciamos uma nova aplicação. Porém, para que possamos nos comunicar com o MySQL, precisamos de um driver. Um driver é um software que permite que você se comunique com o banco de dados a partir de uma aplicação. A escolha de qual driver utilizar depende tanto da linguagem quanto do banco de dados que você está utilizando. Aqui na Trybe, você vai utilizar o drive chamado mysql2. 