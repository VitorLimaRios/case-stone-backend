const { Router } = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const favoriteController = require('../controllers/favoriteController');
const authMiddleware = require('../api/middlewares/authMiddleware');

const favoriteRouter = Router();

favoriteRouter.post('/',
  authMiddleware,
  celebrate({
    [Segments.BODY]: {
      userid: Joi.string().required(),
      favorited: Joi.string().required(),
      type: Joi.string().required(),
    },
  }),
  favoriteController.create);

favoriteRouter.get('/:id',
  authMiddleware,
  favoriteController.getByIdAndType);

favoriteRouter.delete('/:id',
  authMiddleware,
  favoriteController.destroy);

module.exports = favoriteRouter;
