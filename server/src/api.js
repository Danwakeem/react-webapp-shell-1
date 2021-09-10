const serverless = require('serverless-http');

const { initialize } = require('./server');

exports.handler = serverless(initialize());
