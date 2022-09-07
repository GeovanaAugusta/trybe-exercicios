// Agora vamos criar a migration responsável pela tabela Addresses utilizando o comando:
// npx sequelize migration:generate --name create-addresse

// Repare que, agora, temos algumas informações novas sendo passadas para o Sequelize no momento de adicionar a coluna. Esses dados informam ao Sequelize que aquele campo deve ser uma _foreign key_. Vamos passar por cada um deles:
// references.model: indica qual tabela nossa foreign key está referenciando.
// references.key: indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key.
// onUpdate e onDelete: configura o que deve acontecer ao atualizar ou excluir um usuário. Nesse caso, todos os produtos daquele usuário serão alterados ou excluídos.
// Essa migration cria uma foreign key na tabela Addresses, que relaciona o campo employee_id dessa tabela ao campo id da tabela Employees.

// Após feitos as duas migrations, para criar rodo:
// npx sequelize db:migrate

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'Employees',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};

// Depois
// npx sequelize db:migrate

