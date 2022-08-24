// Exercício 4: Crie um controller BooksController com o método getAll sendo um middleware para retornar a lista de livros por meio do método getAll de BookService.

// Crie uma migration para adicionar a coluna publisher (editora) na tabela Books. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição. Adiciona o publisher no create e update.

const BookService = require('../services/BookService');

// const getAll = async (req, res) => {
//   const books = await BookService.getAll();
//   res.status(200).json(books);
// };

// Refatore o método getAll de forma que ser for enviado uma query string author ele seja capaz de pegar a lista usando o método getByAuthor de BooksService.

const getAll = async (req, res) => {
  const { author } = req.query;

  let books;
try {
  if (author) {
    books = await BookService.getByAuthor(author);
  } else {
    books = await BookService.getAll();
  }
  res.status(200).json(books);
} catch (error) {
  console.log(error);
  res.status(500).json({message: "Algo deu errado"})
}

};


// Exercício 7: No controller BooksController crie o método getById sendo um middleware que recebe o id como parâmetro de rota e buscar o livro por meio do service. Se o livro não existir a resposta da requisição deve ter o status 404 e o json { "message": "Book not found" }.

const getById = async (req, res) => {
  const book = await BookService.getById(req.params.id);
  try {
    if (!book) return  res.status(404).json({message: 'Book not found'});
    res.status(200).json(book);
 
  } catch (error) {
    console.log(error);
  res.status(500).json({message: "Algo deu errado"})
  }
 };
// Exercício 10: No controller BooksController crie o método create sendo um middleware que recebe os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service.

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const book = await BookService.create({ title, author, pageQuantity, publisher });
  try {
    if (book) return res.status(201).json(book);
  } catch (error) {
    console.log(error);
  res.status(500).json({message: "Algo deu errado"})
  }
 

};

// Exercício 13: No controller BooksController crie o método update sendo um middleware que recebe o id como parâmetro de rota e os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service. A requisição deve retornar o status 200 e a mensagem 'Book updated!'. Se o livro não for encontrado retornar a mensagem 'Book not found!'.

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;
  
  const updatedUser = await BookService.update(id, { title, author, pageQuantity, publisher });
  try {
    if (!updatedUser) return res.status(404).json({ message: 'Book not found' });
    res.status(201).json({ message: 'Book updated' });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Algo deu errado"})
  }

};

// Exercício 16: No controller BooksController crie o método remove sendo um middleware que recebe o id como parâmetro de rota e remova o livro por meio do service.

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await BookService.remove(id);

  try {
    if (!removed) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Book removed' });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Algo deu errado"})
  }

};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

