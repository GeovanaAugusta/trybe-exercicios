// Para criar o seed 
// npx sequelize seed:generate --name employees

'use strict';

// module.exports = {
//   up: async (queryInterface, _Sequelize) => {
//     return queryInterface.bulkInsert('Employees',
//       [
//         {
//           first_name: 'Marcos',
//           last_name: 'Zuck',
//           age: 49,
//         },
//         {
//           first_name: 'Fred',
//           last_name: 'Mercurio',
//           age: 19,
//         },
//         {
//           first_name: 'Ayrton',
//           last_name: 'Keno',
//           age: 51,
//         },
//         {
//           first_name: 'Robin',
//           last_name: 'Mathias',
//           age: 63,
//         },
//       ],
//       {},
//     );
//   },

//   down: async (queryInterface, _Sequelize) => {
//     return queryInterface.bulkDelete('Employees', null, {});
//   },
// };

// Depois de os seeds criados
// npx sequelize db:seed:all


// Eager Loading
// Esse método carrega todos os dados na mesma request. Logo, ao utilizar eager loading, todas as informações são trazidas, independente se vamos usá-las ou não. Este modo é útil para cenários em que sabemos, já de antemão, que sempre vamos precisar de todos os dados das entidades envolvidas.

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Employees',
      [
        { first_name: 'Marcos', last_name: 'Zuck', age: 49 },
        { first_name: 'Fred', last_name: 'Mercurio', age: 19 },
        { first_name: 'Ayrton', last_name: 'Keno', age: 51 },
        { first_name: 'Robin', last_name: 'Mathias', age: 63 },
        { first_name: 'Antonio', last_name: 'Augusto', age: 18 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};

// Depois de feita essa atualização
// npx sequelize db:migrate:undo:all
// npx sequelize db:migrate
// npx sequelize db:seed:all