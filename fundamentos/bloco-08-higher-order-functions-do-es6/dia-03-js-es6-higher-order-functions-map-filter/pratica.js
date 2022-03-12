const books = [{
        id: 1,
        name: "As Crônicas de Gelo e Fogo",
        genre: "Fantasia",
        author: {
            name: "George R. R. Martin",
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: "O Senhor dos Anéis",
        genre: "Fantasia",
        author: {
            name: "J. R. R. Tolkien",
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: "Fundação",
        genre: "Ficção Científica",
        author: {
            name: "Isaac Asimov",
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: "Duna",
        genre: "Ficção Científica",
        author: {
            name: "Frank Herbert",
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: "A Coisa",
        genre: "Terror",
        author: {
            name: "Stephen King",
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: "O Chamado de Cthulhu",
        genre: "Terror",
        author: {
            name: "H. P. Lovecraft",
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

// 1 Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames(array) {
    // escreva seu código aqui
    return array.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}
console.log(formatedBookNames(books));




// 2 Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

function nameAndAge(array) {
    // escreva seu código aqui

    const map = array.map((book) => ({
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
    }))
    map.sort((age1, age2) => age1.age - age2.age);
    return map
}
console.log(nameAndAge(books));




// 3  Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction(array) {
    // escreva seu código aqui
    return array.filter(
        (book) => book.genre === "Ficção Científica" || book.genre === "Fantasia"
    );
}
console.log(fantasyOrScienceFiction(books));



// 4 Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Primeiramente usei o filter para pegar apenas os livros com +60. Após isso usei o sort, considerando que: o mais velho é menor numericamente, com a  ordem crescente pra ir do mais velho para o mais jovem

function oldBooksOrdered(array) {
    // escreva seu código aqui
    const more60 = array.filter(
        (book) => book.releaseYear < 1962
    ).sort((release1, release2) => release1.releaseYear - release2.releaseYear)
    return more60
}
console.log(oldBooksOrdered(books));




//  5 Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// Primeiro filtrei: peguei todos os livros com gênero específico, depois usei map pra a partir do filter, pegar apenas os nomes dos autores que é o que me interessava e por fim o sort pra ordenar.

function fantasyOrScienceFictionAuthors(array) {
    // escreva seu código aqui
    const films = array.filter((book) => (
        book.genre === "Ficção Científica" || book.genre === "Fantasia"
    )).map((arr) => arr.author.name).sort();
    return films
}
  console.log(fantasyOrScienceFictionAuthors(books))




// 6 Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// Primeiro filtro o que quero: livros +60. Depois uso o map para desse array com os livros filtrados pegar somente o nome do livro que é o que me interessa.

function oldBooks(array) {
    // escreva seu código aqui
    const more60 = array.filter(
        (book) => book.releaseYear < 1962
    ).map((bookName) => bookName.name)
    return more60
}
console.log(oldBooks(books))




//   7 Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
// Maiúscula
// Filter 3 iniciais author
// map e pego só o nome do livro
// Tentei replace, Math all, split, nenhum foi

function authorWith3DotsOnName(array) {
    // escreva seu código aqui
const bookName = array.map(
    (book) => book.author.name.replace(/ /g, "_").split(' ')).includes('_')
  return bookName  
}
  
console.log(authorWith3DotsOnName(books))