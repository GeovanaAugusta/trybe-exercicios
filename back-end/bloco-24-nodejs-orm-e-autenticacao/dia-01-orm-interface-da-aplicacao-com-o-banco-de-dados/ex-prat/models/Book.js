//  Exercício 2: Crie o model Book utilizando a API do Sequelize.
// Nos próximos exercícios você vai desenvolver uma API utilizando as camadas de service e controller.



module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    // Crie uma migration para adicionar a coluna publisher (editora) na tabela Books. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição.
    publisher: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return Book;
};