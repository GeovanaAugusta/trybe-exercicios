// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
// Primeiramente coloquei uma das palavras, aleatoriamente nas variáveis que criei para ter um ponto de comparação.

let maiorPalavra = array[0];
let menorPalavra = array[0];


// Usei o laço for para percorrer as 4 strings do array. E dei condições para maior e menor número. Para maior número dei a condição de que se o tamanho da palavra do array (array[index].length) fosse maior que o tamanho da palavra maiorPalavra (maiorPalavra.lenght), ela recebesse essa palavra do array. E o inverso para a menor palavra.

for ( let index = 0; index < array.length; index +=1) {
       if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];   
           }
     }
for ( let index = 0; index < array.length; index +=1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);





    
    



