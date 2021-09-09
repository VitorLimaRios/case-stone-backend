const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const { verifyToken } = require('../../config/jwtConfig');

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
  try {
    verifyToken(token);
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
  }
};

module.exports = auth;
