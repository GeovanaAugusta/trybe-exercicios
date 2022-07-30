const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

// Para o exemplo de Query String, vamos definir uma rota /pratos/pesquisar?nome=Macarrão que permita, inicialmente, buscar uma lista de receitas filtrando pelo nome. 

// app.get('/recipes/search', function (req, res) {
//   const { name } = req.query;
//   const filteredRecipes = recipes.filter((recipe) => recipe.name.includes(name));
//   res.status(200).json(filteredRecipes);
// });

// Vamos agora refatorar o código para que ele também seja capaz de filtrar pelo preço máximo, passando um segundo parâmetro através da query string.

app.get('/recipes/search', function (req, res) {
	const { name, maxPrice } = req.query;
	const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
	res.status(200).json(filteredRecipes);
})

// QUERY STRING Modifique o código da rota para que ela receba um terceiro parâmetro através de query string com o atributo minPrice e modifique o filter para trazer apenas os receitas onde o valor da receita seja maior ou igual ao o valor enviado como parâmetro, mantendo os filtros anteriores.
// PENDENTE

// No caso em que precisamos acessar objetos específicos, o Express tem alguns recursos que viabilizam passar informações para além da rota que você deseja buscar. Vamos começar falando de parâmetro de rotas.
// No caso da API de receitas, você pode montar uma rota que recebe o id como um parâmetro de rota da seguinte forma:

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// Para testar a aplicação você pode fazer uma requisição usando o próprio navegador, colocando a URL http://localhost:3001/recipes. Porém, como nem todo tipo de requisição HTTP pode ser feita diretamente pelo navegador, é recomendado utilizar algum cliente HTTP. 
// Esse JSON que foi retornado pode ser utilizado por uma aplicação front-end para renderizar essa lista no navegador utilizando o método fetch (bastante utilizado nos nossos exercícios e projetos no módulo de fundamentos e principalmente nos projetos de front-end). A diferença é que agora a requisição vai ser feita para uma API que você mesmo desenvolveu e que roda na sua máquina. A estrutura básica de uma requisição utilizando o fetch pode ser escrita da seguinte forma:

// Para dar mais visibilidade, imagine um componente React que precisa exibir essa lista. Ele ficaria mais ou menos como no entendendoapi.js