// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//  Usei qualquer posição do array apenas para ter uma posição de comparação inicial.

let menorNumero = numbers[2];

for (let index = 0; index < numbers.length; index += 1 ) {
if (numbers[index] < menorNumero) {
   menorNumero = numbers[index];
} 
}
console.log(menorNumero)