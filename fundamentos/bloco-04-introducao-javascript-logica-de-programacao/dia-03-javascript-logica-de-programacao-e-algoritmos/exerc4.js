// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numerosPrimos = [];
let divisores = 0;
let divisao = [];
let maiorPrimo;

for (let index = 0; index < 51; index +=1) {
   
numerosPrimos.push(index);
}
// console.log(numerosPrimos)


for (let index = 0; index <= numerosPrimos.length; index +=1) {
    if (numerosPrimos[index] % index === 0) {
    divisores = divisores + 1;
} else if (divisores <= 2) {
    divisao.push(numerosPrimos[index]);
}

if (divisao[index] > maiorPrimo ) {
    maiorPrimo = divisao[index]
}
}
console.log(maiorPrimo)
