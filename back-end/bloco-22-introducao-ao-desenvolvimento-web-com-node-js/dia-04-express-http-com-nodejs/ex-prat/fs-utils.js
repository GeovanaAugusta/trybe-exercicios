// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK.
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman, Insomnia ou httpie.

const fs = require('fs/promises');

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

function setSimpsons(newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };