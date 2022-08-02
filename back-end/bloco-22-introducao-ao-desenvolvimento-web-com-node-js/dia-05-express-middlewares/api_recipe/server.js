// Existem alguns pacotes que nos fornecem ferramentas necessárias para o desenvolvimento de nossas aplicações. Um exemplo disso é o módulo body-parser, que utilizamos ontem. Ele é um middleware que lê o corpo da request, cria nela uma propriedade body e coloca o conteúdo do corpo lá. Para utilizá-lo e ter acesso às informações do corpo da request, só precisamos instalá-lo com npm i body-parser e registrá-lo na nossa aplicação.
// A função json() utilizada na linha app.use(bodyParser.json()) diz ao body-parser que queremos um middleware que processe corpos de requisições escritos em JSON. Se executarmos nossa API e fizermos uma requisição do tipo POST, conseguiremos ter acesso aos valores enviados no body da requisição. Porém, se tirarmos o uso deste middleware, você perceberá que as requisições do tipo POST não conseguem processar os dados enviados no body da requisição.
// Faça o teste: copie o script abaixo, cole-o em um arquivo chamado server.js e execute-o com o comando node server.js . Em seguida, abra o Postman ou o Insomnia e realize a request POST localhost:3000/hello, passando o JSON { "name": "<seu nome aqui">" }.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Outro middleware bem comum de utilizarmos nas nossas aplicações back-end é o cors, que permite que nossa API receba requisições de outras aplicações, como por exemplo, uma aplicação front-end que consuma nossa API. O uso básico desse módulo é instalá-lo usando npm i cors e adicionando as seguintes linha no nosso código.

const cors = require('cors');

app.use(cors());

// Agora, qualquer requisição que você fizer de outra aplicação vai responder, pois temos o middleware cors. Caso não o tivéssemos, o navegador bloquearia as requests do nosso front-end para nossa API. O cors tem um conjunto de configurações que permitem criar regras específicas, de quem e como as requisições podem ser feitas. Por enquanto, não precisamos nos preocupar com isso já que estamos desenvolvendo aplicações apenas em ambiente de desenvolvimento, porém é importante ter cuidado com essa configuração ao subir uma aplicação para ambiente de produção.

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.name}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });