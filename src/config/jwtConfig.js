require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET_KEY || 'jwt_secret';

const signToken = (payload) => jwt.sign(payload, SECRET, {
  expiresIn: '7d',
  algorithm: 'HS256',
});

const verifyToken = (token) => jwt.verify(token, SECRET);

module.exports = {
  signToken,
  verifyToken,
};
