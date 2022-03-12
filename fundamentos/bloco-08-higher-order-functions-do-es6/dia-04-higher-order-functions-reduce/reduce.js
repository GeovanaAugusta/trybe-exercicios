const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumberrs = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumberrs); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração, number ;
// Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number ;
// O retorno é salvo no primeiro parâmetro , result . É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index] , mas nesse caso seria result = result + number ;


const collection = [1, 2, 3, 4, 5];

const getSuum = (accumulator, number) => {
  console.log(accumulator); 
  return accumulator + number;
};


const suumNumbers = collection.reduce(getSuum);
console.log(suumNumbers);