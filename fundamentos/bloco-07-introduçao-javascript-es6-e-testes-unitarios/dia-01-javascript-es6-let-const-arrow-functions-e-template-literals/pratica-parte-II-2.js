// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (frase) => frase.match(/\w+/g).sort((a, b) => b.length - a.length)[0]
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))

// Outra forma

const longestWordd = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWordd("Antonio foi no banheiro e não sabemos o que aconteceu"));







// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

// regex, ordenando pelo tamanho das palavras e pegando o primeiro elemento.

// Separar a frase em palavras com split talvez ou transformar em array e retornar word.lenght >
// 1 https://pt.stackoverflow.com/questions/426836/como-pegar-a-maior-palavra-de-uma-string-em-javascript
