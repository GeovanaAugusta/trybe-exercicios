// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false


// .split('').reverse().join('') reverte o array.

function verifyEnd (word, ending) {
let inverseWord = word.split('').reverse().join(''); // ebyrt
let inverseEnding = ending.split('').reverse().join(''); // eb
let result;

// Como o fim da palavra sempre é menor, ela define até onde o for vai. Para a comparação encerrar no exato tamanho inverso da palavra.

    for (let index = 0; index < inverseEnding.length; index += 1) {
      if (inverseWord[index] === inverseEnding[index]) { 
        result = true;
      } else {
        result = false;
      }
    }
    return result;
  }

console.log(verifyEnd('trybe', 'be'));
console.log(verifyEnd('joaofernando', 'fernan'));
