// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const objeto = {
    nome: 'Geovana',
    sobrenome: 'Augusta'
}

console.log(objeto)

// objeto.comida = 'lasanha'
// Assim vai

// Assim não
const funcao = (objeto, idade, vinte) => {
objeto.idade = vinte;
}
console.log(objeto)