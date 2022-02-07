// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function x (a, b) {
    let soma = a + b;
    return soma;
}
console.log(x(2, 5))

function x (a, b) {
    let subtracao = a - b;
    return subtracao;
}
console.log(x(5, 2))

function x (a, b) {
    let multiplicacao = a * b;
    return multiplicacao;
}
console.log(x(5, 2))


function x (a, b) {
    let divisao = a / b;
    return divisao;
}
console.log(x(10, 2))


function x (a, b) {
    let modulo = a % b;
    return modulo;
}
console.log(x(10, 2))



// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

function maiorN (a, b) {
   if (a > b) {
    return a;
} else {
  return b;
} }

console.log(maiorN(10, 5))


// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function maiorN (a, b, c) {
    if (a > b && a > c) {
     return a;
 } else if (b > a && b > c){
   return b;
 } else {
     return c;
 } }
 
 console.log(maiorN(10, 35, 20))

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function number (a) {
    if (a > 0) {
     return 'positive';
 } else {
   return 'negative';
 } }
 
 console.log(number(-10))


// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro (inválido = valor negativo).

function x (a, b, c) {
       if (a + b + c === 180) {
     return true;
    } else if (a < 0 || b < 0 || c < 0) {
        return 'Error' 
    } else if (a + b + c !== 180) {
   return false;
 }
}
 console.log(x(110, 50, 20))