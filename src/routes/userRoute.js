const { Router } = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      username: Joi.string().min(2).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    },
  }),
  userController.create);

userRouter.post('/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    },
  }),
  userController.login);

userRouter.put('/:id',
  celebrate({
    [Segments.BODY]: {
      username: Joi.string().min(2).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    },
  }),
  userController.update);

module.exports = userRouter;
