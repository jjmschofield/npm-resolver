const express = require('express');
const http = require('http');

const resolveRouter = require('./routes/resolve/router');

const { createDefaultExpressApp, applyErrorHandlerMiddleware } = require('./lib/express/appFactory');

const app = createDefaultExpressApp();
app.use('/resolve', resolveRouter.create());
app.use('/', express.static('src/public'));

applyErrorHandlerMiddleware(app);

http.createServer(app).listen(3000);
