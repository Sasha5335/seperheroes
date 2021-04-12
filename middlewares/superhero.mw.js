const { Superhero } = require('../models');

module.exports.checkSuperhero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const superhero = await Superhero.findByPk(id);

    if (!superhero) {
      throw new Error('Superhero not found');
    }
    req.superhero = superhero;

    next();
  } catch (err) {
    next(err);
  }
};
