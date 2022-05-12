// Defina uma função que gere um número aleatório entre 0 e 100.
const getRandomNumberBetween = () =>{
  return Math.floor(Math.random() * 101);
}    
// console.log(getRandomNumberBetween);



// Crie três funções.

// A primeira função: recebe uma string e retorná-la em caixa alta.
const stringToUpperCase = (string) => {
  return string.toUpperCase();
}   
// console.log(stringToUpperCase('Oi'))
// https://stackoverflow.com/questions/35813156/how-to-set-text-text-to-upper-case-in-react-native



// A segunda função: ela recebe uma string e deve retornar só a primeira letra.
const getFirstLetter = (string) => {
  return string.charAt(0);
}
// console.log(getFirstLetter('hello'));
// https://stackoverflow.com/questions/3427132/how-to-get-first-character-of-string



// A terceira função: deve receber duas strings e concatená-las
const concString = (string1, string2) => {
  return [string1, string2].join(' ');
  // Ou string1.concat(string2)
}
// console.log(concString('oi', 'beleza'));
// https://masteringjs.io/tutorials/fundamentals/string-concat



// Crie uma função que faça requisição para a api dog pictures.
const fetchAPI = () => {
  // seu código aqui
  // return fetch('https://dog.ceo/api/breeds/image/random')
  // .then((response) => response.json())
  // .then((json) => response.ok ? Promise.resolve(json) : Promise.reject(json))
  // .then((data) => data
  return fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json()
    .then((data) => response.ok ? Promise.resolve(data) : Promise.reject(data))
);
};
    //  console.log((fetchAPI));

module.exports = { getRandomNumberBetween, stringToUpperCase,  getFirstLetter, concString, fetchAPI };