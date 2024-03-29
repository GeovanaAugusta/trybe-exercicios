// 1 Crie uma função que receba três parâmetros e retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

 function doMath(a, b, c) {
    // Caso o tipo de algum parâmetro não seja `number`, rejeitam  a Promise 
    const promise = new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return reject(new Error('Informe apenas números')); 
      }
  
      const result = (a + b) * c;
  
      if (result < 50) {
        return reject(new Error('Valor muito baixo'));
      }
  
      resolve(result);
    });
    return promise;
  }

  doMath(10, 10, 10)
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error.message));
  
doMath(1, 1, 'a')
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

doMath(1, 1, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

//  2 Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100 + 1) + 1;
  return randomNumber;
}
// console.log(getRandomNumber())

const randomNumber = getRandomNumber();
const randomNumber2 = getRandomNumber();
const randomNumber3 = getRandomNumber();
console.log(typeof randomNumber);
// console.log(randomNumber, randomNumber2, randomNumber3);

// Números aleatórios
doMath(randomNumber, randomNumber2, randomNumber3)
.then((resolve) => console.log('Aleatório', resolve))
  .catch((error) => console.error('Aleatório', error.message));

