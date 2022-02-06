// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 5;
const b = 10;
const c = 25;

if (a > b && a > c) {
    console.log("O maior número é a, ou seja,", a);
}
 else if (b > a && b > c) {
  console.log("O maior número é b, ou seja,", b);
 }
 else {
   console.log("O maior número é c, ou seja,", c);
 }