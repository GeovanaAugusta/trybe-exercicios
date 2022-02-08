// Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 }

let arrayNumbers = [ 2, 4, 6, 7, 9]; 
    
function numbers(numeros) {

   let result = {
       pares: 0,
       impares: 0,
   }


for (let value of numeros) {

if (value % 2 === 0) {
    result.pares += 1;
} else {
    result.impares += 1;
}
}

return result

}

console.log(numbers(arrayNumbers))

