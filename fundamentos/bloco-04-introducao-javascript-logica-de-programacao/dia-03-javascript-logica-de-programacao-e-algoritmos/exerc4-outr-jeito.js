// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numeros = [];
let maiorPrimo = 0;
let contadorDivisoes;

// Primeiro for para colocar no array vazio numeros, os numeros da questão: 0 a 50! Com o fim já porque foi feito unicamente para preencher o array numeros, conforme dito.

for (let index = 0; index < 51; index +=1){
    numeros[index] = index;
}
// Aqui vem dois laços for, ambos para o array numeros, mas com index de nomes diferentes, de forma que comparem número a  número, em termos de divisão e resto para adicionar ao contador um valor que deve ser menor ou igual 2 para ser primo. Ou seja, desde o 0 vão comparando com o comando que vem abaixo do if, no qual 0 será testado com 0 a 50, 1 será testado com 0, 2 a 50, e assim suscessivamente.

for (let index = 0; index < numeros.length; index += 1){
    contadorDivisoes = 0;
    for(let index2 = 0; index2 < numeros.length; index2 +=1){
        
// Aqui, uso o if para que o contador de número de divisões que dê 0 receba +1, a cada vez que a divisão do 0 a 50, por eles mesmos (0 será testado com 0 a 50, 1 será testado com 0, 2 a 50, etc) der resto zero, ou seja, a cada vez que forem divisíveis por eles mesmos. Ex.: 15 divide por 3, por 5 e por 15, tendo 3 no contador, e não sendo enquadrado como primo.
        
            if(numeros[index] % numeros[index2] == 0){
                contadorDivisoes += 1;
            }

}

// Aqui fiz um duo de if porque são condições COMPLEMENTARES, um if para que caso o contador seja menor ou igual a 2, e outro if para que caso o número presente na let maiorPrimo fosse menor que esses números primos, o let maiorPrimo deveria recebê-lo, para que imprimisse assim, o valor número primo do intervalo pedido.

       if (contadorDivisoes <=2) {
        if(maiorPrimo < numeros[index]){
            maiorPrimo = numeros[index];
        }
    }

    }
    console.log(maiorPrimo)
