'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserBooks', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      bookId: {
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'Books',
          key: 'book_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('UserBooks');
  },
};

// O Sequelize vai interpretar mais de um campo com primaryKey, como sendo a parte de uma chave primária composta, impedindo que combinações repetidas possam ser inseridas nessa tabela! Note ainda, que esses campos também são chaves estrangeiras, dada suas referências (references) a outras tabelas.
// Depois disso, teremos que criar as seeds com informações para podermos, enfim, testar nossa nova association:
// Para evitar problemas com a nomenclatura dos arquivos de seeds, rode os comandos a seguir separadamente.

// npx sequelize seed:generate --name books
// npx sequelize seed:generate --name users
// npx sequelize seed:generate --name user-books