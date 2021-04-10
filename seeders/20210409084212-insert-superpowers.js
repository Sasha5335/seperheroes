'use strict';

const generateSuperpower = (key) => ({
  superpower: `Some kind of superpower_${key}`,
  created_at: new Date(),
  updated_at: new Date(),
});

const generateSuperpowers = (amount = 20) => {
  return new Array(amount > 50 ? 50 : amount)
    .fill(null)
    .map((_, i) => generateSuperpower(i));
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('superpowers', generateSuperpowers(15), {});
  },

  down: async (queryInterface, Sequelize) => {},
};
