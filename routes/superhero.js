const { Router } = require('express');
const superheroController = require('../controller/superhero.controller');
const paginate = require('../middlewares/paginate.mw');

const superheroRouter = Router();

superheroRouter.post('/', superheroController.createSuperhero);
superheroRouter.get('/:id', superheroController.getSuperhero);
superheroRouter.get('/', paginate, superheroController.getAllSuperhero);
superheroRouter.delete('/:id', superheroController.deleteSuperhero);

module.exports = superheroRouter;
