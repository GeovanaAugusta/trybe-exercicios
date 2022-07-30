// Criar uma nova aplicação Express;
// Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;
// Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
// Ao tratar uma requisição com método GET no caminho /hello, enviar o status HTTP 200 que significa OK e a mensagem 'Hello World!'.

// Você vai perceber que, diferentemente dos scripts que desenvolvemos até aqui (que executavam e acabavam quando chegavam ao final do script), nossa aplicação executará até ser finalizada manualmente. Desejando parar a aplicação, pressione CTRL+C no seu terminal.

const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello World!'); // 4
// } 
// teste1

// Mudando a mensagem

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Olá mundo!');
}

// Para que a mudança seja aplicada, você deve parar a aplicação (CTRL+C) e iniciar a aplicação novamente. É bem trabalhoso ter que fazer isso sempre que alterarmos qualquer coisa no nosso código, não é mesmo?
// Para facilitar nosso fluxo de desenvolvimento podemos utilizar um pacote chamado Nodemon, adicionando a linha no package e usando npm run dev basta recarregar a página para ver as mudanças automaticamente