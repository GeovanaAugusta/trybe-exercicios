// Vamos praticar #1
// 1- Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros;

const connection = require('./connection');
const Author = require('./Author');

  
  // Busca todos os books do banco.
  //  const getAll = async () => {
  //  	const [authors] = await connection.execute(
  //  		'SELECT id, title, author_id FROM model_example.books;',
  //  	);
  //    return books.map(({ id, title, author_id }) => ({
  //     id,
  //     title,
  //     authorId: author_id,
  //   }));
  // };
  
  //  module.exports = {
  //  	getAll,
  //  };

   // 3- Crie um método getByAuthorId no modelo Book, para retornar apenas livros associados com um determinado author_id.

   // /models/Book.js


const getAll = async () => {
   	const [books] = await connection.execute(
   		'SELECT id, title, author_id FROM model_example.books;',
   	);
     return books.map(({ id, title, author_id }) => ({
      id,
      title,
      authorId: author_id,
    }));
  };

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';

  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

// Outra solução 
const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;';

  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

// Criando um novo livro

const isValid = async (title, authorId) => {
	if (!title || title.length < 2) return false;
	if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

	return true;
};

const create = async (title, authorId) => connection.execute(
	'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
	[title, authorId],
);


module.exports = {
  getAll,
	getByAuthorId,
  getById,
  isValid,
  create
};