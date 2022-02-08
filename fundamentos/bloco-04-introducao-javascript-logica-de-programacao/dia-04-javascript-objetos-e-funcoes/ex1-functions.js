// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


function isPalindromo(string) {
let stringReverse = string.split('').reverse().join('')
        
if (string === stringReverse) {
      return true; 
} else {
   return false;
}
}
console.log(isPalindromo('arara'));
console.log(isPalindromo('banana'))


// console.log somente após o fim (}) da function, se não undefined. Dentro da function: return.

