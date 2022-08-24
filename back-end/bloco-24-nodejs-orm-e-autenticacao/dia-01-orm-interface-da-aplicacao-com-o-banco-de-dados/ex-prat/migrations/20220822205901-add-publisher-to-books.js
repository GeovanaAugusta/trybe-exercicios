// Crie uma migration para adicionar a coluna publisher (editora) na tabela Books. 
// npx sequelize migration:generate --name add-publisher-to-books
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Books', 'publisher');
  }
};

// Sempre rodar npx sequelize db:migrate