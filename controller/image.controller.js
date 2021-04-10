const createError = require('http-errors');
const { Superhero, Image } = require('../models');

module.exports.addImgToSuperhero = async (req, res, next) => {
  try {
    const {
      body,
      file: { filename },
    } = req;

    const createdImg = await Image.create({
      name: filename,
      supersheroId: body.supersheroId,
    });

    const superhero = await Superhero.findByPk(body.supersheroId, {
      include: { model: Image },
    });

    if (!superhero || !createdImg) {
      const err = createError(404, 'Not found');
      return next(err);
    }

    res.send(superhero);
  } catch (err) {
    next(err);
  }
};
