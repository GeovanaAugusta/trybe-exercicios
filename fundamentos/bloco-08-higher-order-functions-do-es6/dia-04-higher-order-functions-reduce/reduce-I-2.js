const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

//  Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result , ou seja, no acumulador . Ele é o valor inicial do reduce . Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.