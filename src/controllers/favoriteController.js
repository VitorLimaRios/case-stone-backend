const { StatusCodes, getStatusCode, ReasonPhrases } = require('http-status-codes');
const favoriteModel = require('../models/favoriteModel');

const create = async (req, res) => {
  const { userid, favorited, type } = req.body;
  try {
    await favoriteModel.create(userid, favorited, type);
    res.status(StatusCodes.CREATED).json(ReasonPhrases.CREATED);
  } catch (error) {
    const statusResponse = getStatusCode(error.message) || 500;
    res.status(statusResponse).json(error.message);
  }
};

const getByIdAndType = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await favoriteModel.getByIdAndType(id);
    res.status(StatusCodes.OK).json({ data });
  } catch (error) {
    const statusResponse = getStatusCode(error.message) || 500;
    res.status(statusResponse).json(error.message);
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await favoriteModel.destroy(id);
    res.status(StatusCodes.NO_CONTENT).json(ReasonPhrases.NO_CONTENT);
  } catch (error) {
    const statusResponse = getStatusCode(error.message) || 500;
    res.status(statusResponse).json(error.message);
  }
};

module.exports = {
  create,
  getByIdAndType,
  destroy,
};
