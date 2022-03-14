const books = [{
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];



// 2 Crie uma string com os nomes de todas as pessoas autoras.
// GABARITO
// function reduceNames() {
//     const names = books.reduce((acc, book, index, array) => {
//       if (index === array.length - 1) return `${acc} ${book.author.name}.`;
//       return `${acc} ${book.author.name},`;
//     }, '');
//     return names.trim();
//   }

function reduceNames(array) {
    // escreva seu código aqui
    const authorNames = array.map((element) => element.author.name).reduce((accumulator, currentValue) => `${accumulator}, ${currentValue}`)
    return authorNames
}
console.log(reduceNames(books))

// https://stackoverflow.com/questions/38270089/reduce-array-to-a-single-string
// Espécie de concatenação, por ser uma soma de strings, o .concat também dá mas com o defeito de não separar o fim delas
// OUTRA FORMA SÓ COM MAP, mas como estou estudando reduce, usei
// const authorNames = array.map((element) => element.author.name).join(', ')




// 3 Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.


function averageAge(array) {
    // escreva seu código aqui
    const age = array.map((element) => element.releaseYear - element.author.birthYear)
    console.log(age)
    const totalAge = age.reduce((accumulator, currentValue) => accumulator + currentValue)

    return totalAge / age.length;

}

console.log(averageAge(books))

// https://pt.stackoverflow.com/questions/480776/problema-com-o-reduce-para-calcular-m%C3%A9dia-aritm%C3%A9tica-de-array
// OUTRA FORMA USANDO INDEX E ARRAY 
// Primeiro busquei o requerido que era acessar o ano de lançamento  e o de nascimento, pra obter a idade do autor, formando assim um array apenas com essas informações, depois usei o reduce inicialmente para fazer a soma de todos os itens desse array, por fim dividi pelo tamanho do array.




// 4 Encontre o livro com o maior nome.

function longestNamedBook(array) {
    // escreva seu código aqui
    const booksName = array.map((element) => element);
    const biggest = booksName.reduce((accumulator, currentValue) => (accumulator.name.length > currentValue.name.length) ? accumulator : currentValue)
    return biggest
}
console.log(longestNamedBook(books));

// Inicialmente peguei todos os objetos do array books com map, para o reduce me inspirei no arquivo reduce-II.js com exemplo feito com numbers e tentei ver se funcionaria com strings também.

// 5 Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
    // escreva seu código aqui
           return array.reduce((acc, curr) =>
            acc + curr.split('').reduce((accumulator, currentvalue) => {
                if (currentvalue === 'a' || currentvalue === 'A') return accumulator + 1;
                return accumulator;
            }, 0), 0);
    }
    console.log(containsA(names));

// Primeiro, era necessário usar split para separar as palavras em letras e só assim ser possível verificar a existência. .contains(só vale para PALAVRA)




 // 6  Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notes refere-se ao aluno na posição 0 de students , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(array, array2) {
  // escreva seu código aqui
 const finalGrade = array.map((student, index) => ({

    name: student,
    average: array2[index].reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array2[index].length,
}))

return finalGrade
 
}
console.log(studentAverage(students, grades));

// Primeiro usei o map para pegar todos os nomes, aproveitei o index para depois acessar cada array de nota através dele.