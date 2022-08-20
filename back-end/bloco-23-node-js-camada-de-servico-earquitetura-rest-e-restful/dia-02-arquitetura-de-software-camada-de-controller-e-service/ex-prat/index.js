require('dotenv').config();
const express = require('express');
const CepController = require('./controllers/CepController');
const errorMiddleware = require('./middlewares/error.js');

const app = express();

// Substitui o bodyParser.json()
app.use(express.json());

// 1 A aplicação deve ter a rota GET /ping, que retorna o status 200 OK e o seguinte JSON:
app.get('/ping', (_req, res ) => {
  return res.status(200).json({message: 'pong!'});
})

// 2 
app.get('/cep/:cep', CepController.findAddressByCep);

app.use(errorMiddleware);

// 3
app.post('/cep', CepController.createCep);

// A aplicação deve escutar na porta 3000;
const PORT = process.env.API_PORT || 3000;;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});