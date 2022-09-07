// index.js
const express = require('express');
const { Address, Employee } = require('./models');
const { Book, User } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        include: [{ model: Address, as: 'addresses' }],
      });

      // . Por exemplo, se não quisermos o acesso ao número do endereço, bastaria alterar o código, adicionando a propriedade attributes e dentro dela o que queremos fazer:
      // include: [{
      //   model: Address, as: 'addresses', attributes: { exclude: ['number'] },
      // }],

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// Lazy Loading
// Agora vamos ver como funciona a outra forma de carregar dados de associações: o lazy loading. Esse método consiste, basicamente, em não especificar uma propriedade includes no momento de realizar a query no banco. Dessa forma, cria-se a possibilidade de termos dois usos para o mesmo endpoint.
// Para utilizarmos duas ações diferentes em um endpoint, usaremos a query string includeAddresses, na qual, caso o parâmetro dela seja true, os endereços daquele funcionário também serão retornados.
// Imagine que exista a função getAddress que tem como responsabilidade buscar todos os endereços de acordo com o employee_id:

// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
// const employee = await Employee.findOne({ where: { id } });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

      //  if (req.query.includeAddresses === 'true') {
      //    const addresses = await Address.findAll({ where: { employeeId: id } });
      //    return res.status(200).json({ employee, addresses });
      //  }

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// Reinicie a aplicação e realize uma requisição do tipo GET para o endpoint http://localhost:3000/employees/1?includeAddresses=true. Depois, retire o ?includeAddresses=true e veja seu retorno.
// Como presenciamos, o lazy loading é muito útil em situações em que não sabemos se vamos, de fato, precisar buscar todas as informações de uma só vez. Aqui, se tivéssemos utilizado o eager loading, teríamos buscado os dados das pessoas colaboradoras mesmo quando includeAddresses não era informado, e precisaríamos excluir a chave addresses do resultado do banco. Com o lazy loading, podemos carregar apenas os dados da pessoa colaboradora e dos endereços, somente quando necessário, economizando recursos do banco.

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;