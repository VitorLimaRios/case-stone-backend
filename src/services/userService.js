const { ReasonPhrases } = require('http-status-codes');
const md5 = require('md5');
const usersModel = require('../models/userModel');
const { signToken } = require('../config/jwtConfig');

const create = async (username, email, password) => {
  const emailAlreadyInUse = await usersModel.getByEmail(email);
  if (emailAlreadyInUse) throw new Error(ReasonPhrases.CONFLICT);

  const hidePassword = md5(password);

  const id = await usersModel.create(username, email, hidePassword);
  const token = signToken({ id, username, email });
  return { username, token, id };
};

const login = async (email, password) => {
  const user = await usersModel.getByEmail(email);
  if (!user) throw new Error(ReasonPhrases.NOT_FOUND);
  if (md5(password) !== user.password) throw new Error(ReasonPhrases.BAD_REQUEST);
  const { id, username } = user;
  const token = signToken({ id, username, email });
  return { username, token, id };
};

const update = async (username, email, password, id) => {
  const hidePassword = md5(password);
  const user = await usersModel.update(username, email, hidePassword, id);
  if (!user) throw new Error(ReasonPhrases.NOT_FOUND);
  const token = signToken({ id, username, email });
  return { username, token, id };
};

module.exports = {
  create,
  login,
  update,
};
