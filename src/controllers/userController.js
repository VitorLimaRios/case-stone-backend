const { StatusCodes, getStatusCode } = require('http-status-codes');
const userService = require('../services/userService');

const create = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const { token, id } = await userService.create(username, email, password);
    res.status(StatusCodes.CREATED).json({ username, token, id });
  } catch (error) {
    const statusResponse = getStatusCode(error.message) || 500;
    res.status(statusResponse).json(error.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { username, token, id } = await userService.login(email, password);
    res.status(StatusCodes.OK).json({ username, token, id });
  } catch (error) {
    const statusResponse = getStatusCode(error.message) || 500;
    res.status(statusResponse).json(error.message);
  }
};

const update = async (req, res) => {
  const { username, email, password } = req.body;
  const { id } = req.params;
  try {
    const { token } = await userService.update(username, email, password, id);
    res.status(StatusCodes.OK).json({ username, token, id });
  } catch (error) {
    const statusResponse = getStatusCode(error.message) || 500;
    res.status(statusResponse).json(error.message);
  }
};

module.exports = {
  create,
  login,
  update,
};
