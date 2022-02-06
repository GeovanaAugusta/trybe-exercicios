
// Sem função fica muito mais inviável  ter que ficar colocando nome a nome, toda vez que terei um diferente e sempre escrevendo a mesma mensagem, o que pode acabar gerando erros de digitação e causar erros na sua aplicação.

// let nome = 'João';
// console.log('Bom dia, ' + nome);


// Com função isso se mostra mais simples. Invoco e já digito o nome nomeDaFunction('').

function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo