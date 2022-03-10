// Uma função como meuArray.find(elemento => elemento % 5 === 0) , por outro lado, seria:
// Encontre o primeiro elemento de meuArray que é múltiplo de cinco .

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);

// Verifique se cada elemento do meu array é múltiplo de 2 .

const meuArray = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100]
meuArray.forEach((elemento) => {
    if (elemento % 2 === 0) {
      console.log(`${elemento} é divísivel por 2!`);
    }
  });