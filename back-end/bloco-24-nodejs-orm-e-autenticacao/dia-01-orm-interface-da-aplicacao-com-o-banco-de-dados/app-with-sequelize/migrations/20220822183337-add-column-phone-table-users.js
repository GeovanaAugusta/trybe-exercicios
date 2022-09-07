// Criando uma nova migration para alterar uma tabela já existente**
// Então qual seria a forma correta de adicionar uma nova coluna em uma tabela já existente?
// ✔️ A resposta certa é: criar uma nova migration que permita alterar a tabela. Para isso, o objeto queryInterface possui funções específicas, que permitem criar uma nova coluna, remover uma coluna ou mesmo mudar o tipo de uma coluna que já existe. Nesse caso, o queryInterface abstrai o que a função ALTER TABLE faz no SQL, como já aprendemos no conteúdo sobre estrutura de banco de dados.

// 'use strict';

// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'phone_num', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phone_num');
  }
};
//  Em seguida rodamos o comando abaixo para executar a nossa nova migration:
// npx sequelize db:migrate
