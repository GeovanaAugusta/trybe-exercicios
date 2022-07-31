// Exercício 5
// Implemente a função descrita no exercício 4.
// Crie a função descrita no exercício 4 utilizando o módulo fs do Node.
// Adapte os testes adicionando stub ao módulo utilizado do fs, isolando assim o teste.
// Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.

// ./escrevaArquivo.js
const fs = require('fs');

module.exports = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
};