const cors = require('cors');
const express = require('express');

const errorMiddleware = require('./middleware/errorMiddleware');
const healthRouter = require('./routes/health');

const server = express().use(cors());

const initialize = () => {
  server.use('/api/v1/health', healthRouter);

  server.use(errorMiddleware);

  return server;
};

module.exports = { initialize };
