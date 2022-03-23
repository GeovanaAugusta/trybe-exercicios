// Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers
// O segundo parâmetro myObject define o tipo de request: method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' } , como visto nas requisições via curl .
// A função fetch é uma Promise (você não precisa entender o que é uma Promise agora, considere apenas como sendo algo assíncrono) e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas .then (em caso de sucesso) e .catch (em caso de falha). A requisição fetch retorna um objeto Response . Utilizando .then , verifique a estrutura da resposta usando um console.log na response retornada pelo fetch .


// apiScript.js     
// Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!

function append (joke) {
const getH2 = document.getElementById('jokeContainer');
console.log(getH2);
getH2.innerHTML = joke;
}



const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
        const allData = data;
        console.log(allData)
        const joke = data.joke;
        console.log(joke); 
        append(joke) 
    });
    
  

};

window.onload = () => fetchJoke();

