const { Router } = require('express');
const path = require('path');
const imageController = require('../controller/image.controller');
const multer = require('multer');

const imageRouter = Router();

const upload = multer({ dest: path.resolve(__dirname, '../public/images') });

imageRouter.post(
  '/add',
  upload.single('image'),
  imageController.addImgToSuperhero
);

module.exports = imageRouter;
