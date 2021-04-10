'use strict';

const generateSuperhero = (key) => ({
  nickname: `Superhero_${key}`,
  real_name: `Name_${key}`,
  origin_description: `${key}_very original description_${key}`,
  created_at: new Date(),
  updated_at: new Date(),
});

const generateSuperheroes = (amount = 50) => {
  return new Array(amount > 200 ? 200 : amount)
    .fill(null)
    .map((_, i) => generateSuperhero(i));
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'superheroes',
      generateSuperheroes(150),
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
