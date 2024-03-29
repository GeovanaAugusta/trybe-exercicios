// Para criar o seed 
// npx sequelize seed:generate --name addresses

'use strict';

// module.exports = {
//   up: async (queryInterface, _Sequelize) => {
//     return queryInterface.bulkInsert('Addresses',
//       [
//         {
//           city: 'Belo Horizonte',
//           street: 'Rua Flórida',
//           number: 1080,
//           employee_id: 1,
//         },
//         {
//           city: 'São Paulo',
//           street: 'Avenida Paulista',
//           number: 1980,
//           employee_id: 2,
//         },
//         {
//           city: 'Fortaleza',
//           street: 'Rua das Enseadas',
//           number: 95,
//           employee_id: 3,
//         },
//         {
//           city: 'Belo Horizonte',
//           street: 'Rua Andaluzita',
//           number: 131,
//           employee_id: 4,
//         },
//         {
//           city: 'Curitiba',
//           street: 'Rua Fria',
//           number: 101,
//           employee_id: 4,
//         },
//       ],
//       {},
//     );
//   },

//   down: async (queryInterface, _Sequelize) => {
//     return queryInterface.bulkDelete('Addresses', null, {});
//   },
// };

// Depois de os seeds criados
// npx sequelize db:seed:all


// Eager Loading
// Esse método carrega todos os dados na mesma request. Logo, ao utilizar eager loading, todas as informações são trazidas, independente se vamos usá-las ou não. Este modo é útil para cenários em que sabemos, já de antemão, que sempre vamos precisar de todos os dados das entidades envolvidas.

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Florida',
          number: 1080,
          employee_id: 1,
        },
        {
          city: 'São Paulo',
          street: 'Avenida Paulista',
          number: 1980,
          employee_id: 2,
        },
        {
          city: 'Fortaleza',
          street: 'Rua das Enseadas',
          number: 95,
          employee_id: 3,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Andaluzita',
          number: 131,
          employee_id: 4,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Vicente Alvarenga',
          number: 80,
          employee_id: 1,
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          employee_id: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};


// Depois de feita essa atualização
// npx sequelize db:migrate:undo:all
// npx sequelize db:migrate
// npx sequelize db:seed:all