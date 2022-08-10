const express = require('express')
const app = express()
const port = 3000
const Joi = require('joi');
const User = require('./models/User');
require('express-async-errors');

// Exercício 1 - Validação, de todos estarem preenchidos e a senha ter no mínimo 6 dígitos
const validateBody = (user) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
  })

  const { error, value } = schema.validate(user);
  if (error) throw new Error(error.message);

  return value;
};

// Exercícios 3 e 4 - Validação, id sendo número, obrigatório e inteiro
const validateId = (user) => {
  const schema = Joi.object({
    id: Joi.number().integer().required(),
  });

  const { error, value } = schema.validate(user);
  if (error) throw new Error(error.message);

  return value;
};

// Lugar do body-parser - express já o possui embutido
app.use(express.json());

// Exercício 1
app.post('/user', async (req, res) => {
  const { firstName, lastName, email } = req.body
  const user = validateBody(req.body);
  const idUser = await User.create(user);
  res.status(201).json({ id: idUser, firstName, lastName, email });
});

// Exercício 2
app.get('/user', async (_req, res) => {
  const users = await User.findAll();
  if (users.length === 0) return res.status(200).json([]);
  res.status(200).json(users);
})

// Exercício 3
app.get('/user/:id', async (req, res) => {
  const { id } = validateId(req.params);
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: 'User not Found' });
  res.status(200).json(user);
})

// Exercício 4
app.put('/user/:id', async (req, res) => {
  const { id } = validateId(req.params);
  const user = validateBody(req.body);
  const checkId = await User.checkIfExists(id);
  await User.update(id, user);
  if (!checkId) return res.status(404).json({ message: 'User not Found' });
  res.status(200).json(user);
})

app.delete('/user/:id', async (req, res) => {
  const { id } = validateId(req.params);
  await User.checkIfExists(id);
  await User.delete(id);
  res.status(200).json({ message: 'Usuário excluido com sucesso!' });
})

app.use((err, req, res) => {
  const { message } = err;

  res.status(404).json({ message })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))