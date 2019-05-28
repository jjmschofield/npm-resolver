const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { logRequestStart, logRequestEnd } = require('../logger/middleware/requestLoggersMiddleware');
const { setCorrelationId } = require('../logger/middleware/correlationIdMiddleware');
const { unexpectedErrorHandler } = require('./middleware/errorHandlerMiddleware');

module.exports = {
  createDefaultExpressApp: () => {
    const app = express();

    applySecurityMiddleware(app);

    applyLoggerMiddleware(app);

    app.use(bodyParser.json());

    return app;
  },
  applyErrorHandlerMiddleware: (app) => {
    app.use(unexpectedErrorHandler);
    return app;
  },
};

function applySecurityMiddleware(app) {
  app.use(helmet());
  app.use(cors());
}

function applyLoggerMiddleware(app) {
  app.use(setCorrelationId);
  app.use(logRequestStart);
  app.use(logRequestEnd);
}
