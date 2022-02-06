// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo = 0;


for (let numeros = 0; numeros < 51; numeros +=1) {
let primos = true;
    for (let numeroDivisor = 2; numeroDivisor < numeros; numeroDivisor +=1) { 
    if (numeros % numeroDivisor === 0) {
    primos = false;
    }
}
if (primos) {
    maiorPrimo = numeros;
}
}
console.log(maiorPrimo)
        

