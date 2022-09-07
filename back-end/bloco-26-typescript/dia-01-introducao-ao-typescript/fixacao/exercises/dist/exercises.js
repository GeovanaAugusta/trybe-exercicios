"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapeze = exports.lozenge = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto "Olá Nome".
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
// A terceira função que vamos desenvolver fará a adição de todos os números que estão dentro de um array. Para isso, faremos uma função add que será chamada dentro da função sumArray, que por sua vez utilizará o método reduce para realizar a soma dos valores.
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// A quarta função que vamos desenvolver será para calcular a área de um triângulo. A fórmula para isso é multiplicar a medida da base pela medida da altura e dividir o resultado por dois. x = BxA=2 (área do triângulo)
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
// A quinta função que vamos desenvolver será para calcular a área de um quadrado. Para calcular isso, multiplicamos a medida da base pela medida da altura. Como as medidas são as mesmas, multiplicá-las é o mesmo que elevar uma delas ao quadrado. x=l² (área do quadrado)
function square(side) {
    return side ** 2;
}
exports.square = square;
// A última função que vamos desenvolver será para calcular a área de um retângulo. A área do retângulo é dada pela multiplicação da base pela altura. x=BxA (área do retângulo)
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. (D * d) / 2
function lozenge(D, d) {
    return (D * d) / 2;
}
exports.lozenge = lozenge;
// Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. ((B + b) * h) / 2
function trapeze(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapeze = trapeze;
// Crie uma nova função para calcular a área de um círculo. A área do círculo de raio r é encontrada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14). ℼ * r²
function circle(r) {
    return 3.14 * (r ** 2);
}
exports.circle = circle;
