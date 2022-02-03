const a = 1;
const b = 3;
const c = 5;

// Declara variável falsa aqui, para caso não dê true com o if, retornar falso.

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);