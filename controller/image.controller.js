const createError = require('http-errors');
const { Superhero, Image } = require('../models');

module.exports.addImgToSuperhero = async (req, res, next) => {
  try {
    const { body, files } = req;

    files.forEach(({filename}) => {
      const createdImg = await Image.bulkCreate({name: filename,supersheroId: body.supersheroId});
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
