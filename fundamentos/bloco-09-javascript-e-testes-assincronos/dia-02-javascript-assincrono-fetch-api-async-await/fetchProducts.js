const fetch = require('node-fetch');

const fetchProducts = ($QUERY) => {
  // seu código aqui
const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));

};

console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}