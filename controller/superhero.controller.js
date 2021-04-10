const { Superhero } = require('../models');

module.exports.createSuperhero = async (req, res, next) => {
  try {
    const { body } = req;
    const createdSuperhero = await Superhero.create(body);
    res.status(201).send(createdSuperhero);
  } catch (err) {
    next(err);
  }
};

module.exports.getSuperhero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const superheroes = await Superhero.findByPk(id);

    res.status(200).send(superheroes);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllSuperhero = async (req, res, next) => {
  try {
    const { pagination = {} } = req;

    const superheroes = await Superhero.findAll({
      ...pagination,
    });

    if (!superheroes.length) {
      return next(createError(404, 'Users not found'));
    }

    res.send({ data: superheroes });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteSuperhero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const rowsCount = await Superhero.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, 'User not found'));
    }

    res.send({ data: id });
  } catch (err) {
    next(err);
  }
};
