// Dando continuidade à nossa aplicação vamos criar um CRUD de livros. Primeiramente criaremos uma interface para representar um livro no nosso sistema, ela irá possuir as seguintes propriedades:

// id: A chave primária da tabela. Como é um campo que não será obrigatório, vamos adicioná-la como um atributo opcional.
// title: O título do livro;
// price: O preço de venda do livro;
// author: O nome do autor do livro;
// isbn: O registro ISBN do livro.

interface Book {
  id?: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}

export default Book;