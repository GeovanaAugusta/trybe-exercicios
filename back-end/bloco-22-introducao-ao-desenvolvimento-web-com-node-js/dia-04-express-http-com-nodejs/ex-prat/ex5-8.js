// 5 Crie uma API de dados das personagens de Simpsons
// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK.
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman, Insomnia ou httpie.

// // 6  Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os Simpsons.

const express = require('express');
const bodyParser = require('body-parser');
const simpsonsUtils = require('./fs-utils');
const arraySimpsons = require('./simpsons.json');
console.log(arraySimpsons);

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await simpsonsUtils.getSimpsons();

    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
});

// 7 Crie um endpoint GET /simpsons/:id 🚀
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.
app.get('/simpsons/:id', function (req, res) {
  try {
  const { id } = req.params;
  const simpson = arraySimpsons.find((simps) => Number(simps.id) === Number(id));

  if (!simpson) {
    return res.status(404).json({ message: 'simpson not found'})
  };

  return res.status(200).json(simpson);
} catch (error) {
  return res.status(500).end();
}
});

// 8 Crie um endpoint POST /simpsons. 🚀
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end()


app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.some((character) => character.id === id)) {
      // não esqueça de adicionar o return para impedir de que seu código continue.
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    return res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
});


app.listen(3000, () => console.log('ouvindo na porta 3000!'));