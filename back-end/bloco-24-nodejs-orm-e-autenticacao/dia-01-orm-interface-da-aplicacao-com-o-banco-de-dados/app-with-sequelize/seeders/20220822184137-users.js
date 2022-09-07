'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Leonardo',
        email: 'leo@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

// Na função acima, estamos utilizando o parâmetro recebido pela função queryInterface para conversar com o banco de dados. Dessa forma, conseguimos inserir os dados que queremos. Também estamos adicionando os dados, que estão na estrutura de uma array de objetos, na tabela Users. O queryInterface tem a função bulkInsert, a qual estamos utilizando, que insere múltiplos dados na tabela.
// Note que o seed segue o mesmo princípio de up e down, ou seja, devemos colocar também o que o seed deve fazer caso precise reverter a operação. Aqui, um código ruim pode quebrar o fluxo de uso/reversão dos seeds, então escreva com atenção!

// Para executar o seed, basta rodarmos o comando abaixo:
// npx sequelize db:seed:all

// Para reverter o seed, use o seguinte comando:
// npx sequelize db:seed:undo:all