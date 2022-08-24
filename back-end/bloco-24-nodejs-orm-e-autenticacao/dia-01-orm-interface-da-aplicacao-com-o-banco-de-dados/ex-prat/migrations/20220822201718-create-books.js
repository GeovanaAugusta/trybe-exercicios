// 🚀 Exercício 1: Crie uma migration para criar uma tabela books com as seguintes colunas:
// id: dever ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
// title: deve ser do tipo string e não pode ser nulo;
// author: deve ser do tipo string e não pode ser nulo;
// pageQuantity: deve ser do tipo integer e pode ser nulo;
// createdAt: deve ser do tipo date e não pode ser nulo;
// updatedAt: deve ser do tipo date e não pode ser nulo;
// Obs: o método down da migration deve ser capaz de remover a tabela.
// Obs 2: Execute o comando npx sequelize db:migrate e verifique se a tabela foi criada antes de continuar para os próximos exercícios.

'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Books');
  },
};