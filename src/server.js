const http = require('http');

const { createDefaultExpressApp, applyErrorHandlerMiddleware } = require('./lib/express/appFactory');

const app = createDefaultExpressApp();

applyErrorHandlerMiddleware(app);

http.createServer(app).listen(3000);
