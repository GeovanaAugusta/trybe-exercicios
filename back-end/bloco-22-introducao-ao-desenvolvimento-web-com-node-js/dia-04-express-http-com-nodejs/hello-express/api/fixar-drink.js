// 1 Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.

const express = require('express');
const app = express();


const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// 2 Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética. 
// PENDENTE

  drinks.sort(function(a, b) {
    if(a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  });


app.get('/drinks', function (req, res) {
  res.json(drinks);
});

// QUERY STRING Implemente uma rota /drinks/search que permita pesquisar pelo atributo name usando query string.

app.get('/drinks/search', function (req, res) {
	const { name, maxPrice } = req.query;
	const filteredRecipes = drinks.filter((recipe) => recipe.name.includes(name));
	res.status(200).json(filteredRecipes);
})

// PARÂMETROS DE ROTAS 1 Crie uma rota GET /drink/:id para retornar uma bebida pelo id.
// Você aprendeu como utilizar parâmetro de rota, mas imagine o cenário em que, além de pesquisar pelo nome você deseja buscar as receitas com valor máximo de 30 reais ao mesmo tempo. Você até poderia utilizar o parâmetro de rotas para isso, mas teriam rotas um pouco mais difíceis de usar pois você precisaria se preocupar com a ordem que os parâmetros são organizados, diminuindo a legibilidade das rotas da API. Para isso, existe uma segunda forma de enviar parâmetros através de uma URL, conhecida como query string.

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// npm run drink para rodar na 3001/drinks



// Pronto! Agora você tem uma rota da API que devolve a lista das receitas disponíveis, mas não precisa parar por aqui! E se você quisésse acessar uma receita específica pelo seu id? Ou mesmo procurar por todas as receitas que tem a palavra Macarrão no nome? Além disso, como fazer para permitir adicionar, editar ou remover receitas da lista através da API?
// Tudo isso é o que você vai aprender daqui em diante.