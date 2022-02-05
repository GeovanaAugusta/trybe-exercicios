//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.



// condition ? expr1 : expr2
// O operador ternário é um substituto do if, quando tem só duas opções. No qual coloco a condição 1 que seria o primeiro if e o ? que verifica se a condição é true ou false e na sequência uso o console.log com o que vai imprimir, caso true. Mais pra frente tem o ":" que substitui o else em caso de false. 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// let idade = 17;

// idade >=18 ? console.log("A pessoa é maior de idade") :  console.log("A pessoa é menor de idade");

// Usando o if

let idade = 17;

if (idade >= 18) {
    console.log("A pessoa é maior de idade");
} else {
    console.log("A pessoa é menor de idade");
}