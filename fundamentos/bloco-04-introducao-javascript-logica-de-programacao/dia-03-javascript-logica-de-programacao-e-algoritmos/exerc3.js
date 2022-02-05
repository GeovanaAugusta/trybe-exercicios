// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "i";
let menorPalavra = "";

for (index = 0; index < array.length; index +=1) {
    for (index2 = 0; index2 < maiorPalavra.length; index2 +=1) {
    if (array[index.length] > maiorPalavra[index2.length]) {
        maiorPalavra = array[index];   
        console.log(maiorPalavra);
    }
                }
    }


console.log(maiorPalavra);
    // else if (array[index] < menorPalavra[index]) {
    //     menorPalavra = array[index];
    //                }
    //     }
       
        // console.log(menorPalavra);
