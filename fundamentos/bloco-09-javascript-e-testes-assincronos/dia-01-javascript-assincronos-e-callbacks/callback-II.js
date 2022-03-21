// Lembre-se: quando definimos uma função, o parâmetro pode ter qualquer nome, porém, ao fazer a execução/chamada dessa função, o parâmetro deve ser um valor definido. No nosso caso, vamos utilizar uma função como parâmetro ( callback ).Vamos ver um exemplo de como esse processo acontece:

// Definição da função userFullName
const userFullName = ({ firstName, lastName, nationality }) => `Hello! My name is ${firstName} ${lastName} and I'm from ${nationality}`;

// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
console.log(getUser(userFullName));


// Vamos ao passo a passo:
// Definimos a função userFullName ;
// Definimos a função getUser
// Definimos que o parâmetro que a nossa getUser vai receber se chama "param".
// Ao executar a função getUser , passamos a função userFullName como parâmetro.
// Ou seja, o parâmetro "param" de dentro da nossa getUser é igual à função userFullName . Isso significa que, ao definirmos nossa função, o parâmetro é dinâmico, ele vai assumir o valor que passarmos no momento em que executarmos a nossa funçã

