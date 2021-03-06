const createError = require('http-errors');
const { Superpower } = require('../models');

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { body } = req;
    const createdSuperpower = await Superpower.create(body);

    if (!createdSuperpower) {
      return next(createError(400));
    }

    res.status(201).send({
      data: createdSuperpower,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllSuperpowers = async (req, res, next) => {
  try {
    const { pagination = {} } = req;

    const superpowers = await Superpower.findAll({
      ...pagination,
    });

    if (!superpowers.length) {
      return next(createError(404, 'Superpower not found'));
    }

    res.send({ data: superpowers });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteSuperpower = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const rowsCount = await Superpower.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, 'Superpower not found'));
    }

    res.send({ data: id });
  } catch (err) {
    next(err);
  }
};

module.exports.updateSuperpower = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [rowsCount, [updatedSuperpower]] = await Superpower.update(body, {
      where: { id },
      returning: true,
    });

    if (rowsCount !== 1) {
      return next(createError(404, 'Superpower not found'));
    }

    res.send({ data: updatedSuperpower });
  } catch (err) {
    next(err);
  }
};
