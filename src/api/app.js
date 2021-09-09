const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const { userRouter, favoriteRouter } = require('../routes');

const app = express();

app.use(cors());
app.use(BodyParser.json());

app.use('/user', userRouter);
app.use('/favorite', favoriteRouter);

module.exports = app;
