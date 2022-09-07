// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     fullName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
// não vamos trabalhar com classes, mas sim com a função sequelize.define(), então substitua o código anterior pelo seguinte

// const User = (sequelize, DataTypes) => {
//   const User = sequelize.define("User", {
//     fullName: DataTypes.STRING,
//     email: DataTypes.STRING,
//   });

//   return User;
// };

// module.exports = User;

// Após feito a migration do telefone, altera aqui para incluir essa nova coluna 

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  // aqui inserimos o datatype da coluna criada
  phone_num: DataTypes.STRING,
  });

  return User;
}