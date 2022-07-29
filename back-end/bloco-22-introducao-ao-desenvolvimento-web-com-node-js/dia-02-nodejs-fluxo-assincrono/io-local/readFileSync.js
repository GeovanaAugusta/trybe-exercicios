// O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile. Na versão padrão do fs, a função readFile aceita um callback, chamado quando a leitura do arquivo termina. 
// O fs.readFileSync é síncrono,  não tem melhor performance, não usa nem callback nem promise.

const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}