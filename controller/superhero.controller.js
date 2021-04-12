const createError = require('http-errors');
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

    const superhero = await Superhero.findByPk(id);

    if (!superhero) {
      return next(createError(404, 'Superhero not found'));
    }

    res.status(200).send(superhero);
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
