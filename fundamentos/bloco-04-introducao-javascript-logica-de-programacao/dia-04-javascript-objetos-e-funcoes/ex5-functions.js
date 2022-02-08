 // Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function numInteiros(numbers) {
    let numMaisRepete = numbers[0];
    let contadorNumsRepete = 0;

//Usei o for/of para acessar o valor, não o índice. E fiz duas condições, uma dizendo que caso o número, ou seja, numbers[value] fosse igual a outro número, o contador de números repetidos deveria somar +1. E fiz outra condição de que, caso o contador de repetições de um número fosse maior que outro, a let numMaisRepete receberia esse número.

for (let value of numbers) {
    if (numbers[value] === numbers[value]) {
        contadorNumsRepete += 1;
    } else if (contadorNumsRepete[value] > contadorNumsRepete[value]) {
    numMaisRepete = value;
}
return numMaisRepete;
}
}

console.log(numInteiros([2, 3, 2, 5, 8, 2, 3]));
console.log(numInteiros([1, 1, 1, 3, 2]))