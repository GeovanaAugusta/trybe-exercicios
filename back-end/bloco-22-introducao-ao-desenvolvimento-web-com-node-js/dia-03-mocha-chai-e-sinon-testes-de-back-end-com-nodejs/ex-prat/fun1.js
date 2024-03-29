// Exercício 2
// Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.
// DICA: Lembre-se de adicionar o script de test no package.json e de instalar as dependências.

// Exercício 3
// Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo number.
// Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a number para a função;
// Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// // Implemente em sua função tal validação para que o teste passe.

const fnNumber = (number) => {
  if (number > 0) {
    return 'positivo';
  }

  if (number < 0) {
    return 'negativo';
  }

  if (typeof number !== 'number') {
    return 'o valor deve ser um número';
  }

  return 'neutro';
}

module.exports = fnNumber;