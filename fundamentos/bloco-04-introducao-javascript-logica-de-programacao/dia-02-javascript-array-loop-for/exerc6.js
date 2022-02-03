// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Fiz um contador para receber 0 inicialmente
let numerosImpares= 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numerosImpares = numerosImpares + 1;
  }

  else if (numerosImpares === 0) {
    console.log("Nenhum valor ímpar foi encontrado")
  }
}

console.log(numerosImpares)
