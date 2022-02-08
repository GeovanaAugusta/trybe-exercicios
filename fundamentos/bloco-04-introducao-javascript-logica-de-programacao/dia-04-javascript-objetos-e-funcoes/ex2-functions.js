// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

// Primeiro declarei as variáveis, uma com o array, outra com valor inicial de maior índice. Depois usei o for/in já que é usado pra acessar o ÍNDICE. E coloquei o array como o parâmetro da função,  por fim pedi pra imprimir o menor índice.



function numerosInteiros (numeros) {
 let maiorIndice = -10;
  
for (let indice in numeros) { 
    if (numeros[indice] > maiorIndice) {
    maiorIndice = indice;

    }
}
return maiorIndice;
}
console.log(numerosInteiros([2, 3, 6, 7, 10, 1]));
