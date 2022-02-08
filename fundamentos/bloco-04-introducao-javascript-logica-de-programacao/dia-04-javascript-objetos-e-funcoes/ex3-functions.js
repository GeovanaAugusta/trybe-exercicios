//  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6. 

// // Primeiro declarei as variáveis, uma com o array, outra com valor inicial de menor índice. Depois usei o for/in já que é usado pra acessar o ÍNDICE. E coloquei o array como o parâmetro da função, por fim pedi pra imprimir o menor índice.


function numerosInteiros (numeros) {

let menorIndice = numeros[0];

for (let indice in numeros) {
    if (numeros[indice] < menorIndice) {
        menorIndice = indice;
    }
}
return menorIndice;
}

console.log(numerosInteiros([2, 4, 6, 7, 10, 0, -3]));
