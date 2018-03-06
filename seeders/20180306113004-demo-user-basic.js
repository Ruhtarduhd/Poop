'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seeds = [
    {
      name: 'Jack Russel',
      breedStats: JSON.stringify({pug: 2, shiba: 5, shitzu: -3})
    },
    {
      name: 'Peter Dogtown',
      breedStats: JSON.stringify({pug: 1, shiba: -1, shitzu: 3})
    },
    {
      name: 'Lola Pugari',
      breedStats: JSON.stringify({vizsla: -1, pug: 3, saluki: -3})
    }
    ]

    return queryInterface.bulkInsert('Users', seeds, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};