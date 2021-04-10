const { Router } = require('express');
const superpowerController = require('../controller/superpower.controller');
const paginate = require('../middlewares/paginate.mw');

const superpowerRouter = Router();

superpowerRouter.post('/', superpowerController.createSuperpower);
superpowerRouter.get('/', paginate, superpowerController.getAllSuperpowers);
superpowerRouter.delete('/:id', superpowerController.deleteSuperpower);
superpowerRouter.patch('/:id', superpowerController.updateSuperpower);

module.exports = superpowerRouter;
