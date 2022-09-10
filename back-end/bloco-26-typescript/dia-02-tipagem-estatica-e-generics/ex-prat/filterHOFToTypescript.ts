// Exercício 5: Em JavaScript, temos a High Order Function filter. Ela funciona da seguinte forma:

// Recebe como primeiro parâmetro um array que pode ser de qualquer tipo;
// Recebe como segundo parâmetro uma função de callback;
// Retorna um novo array removendo os itens que não atendem a condição da função de callback;
// A função de callback recebe como primeiro parâmetro um item do tipo do array;
// A função de callback pode receber como segundo parâmetro um index do tipo inteiro;
// A função de callback pode receber como terceiro parâmetro o próprio array;
// A função de callback devolve um booleano.
// Usando generics e os demais conceitos aprendidos em TypeScript, recrie a função filter e nomeie-a como myFilter.

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
  return item !== "a"
}));