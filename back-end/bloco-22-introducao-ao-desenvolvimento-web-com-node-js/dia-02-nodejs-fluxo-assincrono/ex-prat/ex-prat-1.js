// 1 Crie uma função que receba três parâmetros e retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function doMath(a, b, c) {
    // Caso o tipo de algum parâmetro não seja `number`, rejeitam  a Promise 
    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return reject(new Error('Informe apenas números')); 
      }
  
      const result = (a + b) * c;
  
      if (result < 50) {
        return reject(new Error('Valor muito baixo'));
      }
  
      resolve(result);
    });
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