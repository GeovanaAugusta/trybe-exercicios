// index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
}); 

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

// Criando uma nova pessoa autora
app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});




// Vamos praticar #1
// 2- Crie uma rota /books para trazer a lista de todos os livros;
// 3- Altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados.
app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});



// Vamos praticar #2
app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.getAll();
	const findBook = books.find((book) => book.id === Number(id));

	if (!findBook) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(findBook);

	// Outra solução
	// const book = await Book.getById(id);
	// if (!book) return res.status(404).json({ message: 'Not found' });
	// res.status(200).json(book);
});

// Vamos praticar #3
// Criando um novo livro caso passe nas validações
app.post('/books', async (req, res) => {
	const { title, author_id } = req.body;

	if (await !Book.isValid(title, author_id)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Book.create(title, author_id);

	res.status(201).json({ message: 'Livro criado com sucesso! '});
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});

// Em index.js, importamos o express e iniciamos uma nova aplicação. Porém, para que possamos nos comunicar com o MySQL, precisamos de um driver. Um driver é um software que permite que você se comunique com o banco de dados a partir de uma aplicação. A escolha de qual driver utilizar depende tanto da linguagem quanto do banco de dados que você está utilizando. Aqui na Trybe, você vai utilizar o drive chamado mysql2. 