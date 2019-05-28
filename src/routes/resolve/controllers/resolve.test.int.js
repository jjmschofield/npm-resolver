const underTest = require('./resolve');
const { createResponseMock } = require('../../../lib/express/mocks/express.mock');

describe('src/routes/resolve/controllers/resolve.js', () => {
  describe('get', () => {
    it('should resolve express 4.17.0', async () => {
      // Arrange
      const fakeReq = {
        params: {
          name: 'express',
        },
        query: {
          version: '4.17.0',
        },
      };

      const fakeRes = createResponseMock();

      // Act
      await underTest.get(fakeReq, fakeRes);

      // Assert
      expect(fakeRes.status).toHaveBeenCalledWith(200);
      expect(fakeRes.send).toHaveBeenCalledWith(expectedExpressFixture);
    });

    it('should reject bad requests', async () => {
      // Arrange
      const fakeReq = {
        params: {
          name: 'express',
        },
        query: {
          version: 'dsakjdhgaskjdhsalkjdhaskjdhsalkdhlsakjhhgkjhgkjhgkjhgkjhgkjhgkjhgkjhgkjhgkjhgkjgkjgkjhgkjgkdhsalkjdhl',
        },
      };

      const fakeRes = createResponseMock();

      // Act
      await underTest.get(fakeReq, fakeRes);

      // Assert
      expect(fakeRes.status).toHaveBeenCalledWith(400);
      expect(fakeRes.send).toHaveBeenCalled();
    });
  });
});

const expectedExpressFixture = {
  packages: [{
    dependencies: ['accepts#1.3.7', 'array-flatten#1.1.1', 'body-parser#1.19.0', 'content-disposition#0.5.3', 'content-type#1.0.4', 'cookie#0.4.0', 'cookie-signature#1.0.6', 'debug#2.6.9', 'depd#1.1.2', 'encodeurl#1.0.2', 'escape-html#1.0.3', 'etag#1.8.1', 'finalhandler#1.1.2', 'fresh#0.5.2', 'merge-descriptors#1.0.1', 'methods#1.1.2', 'on-finished#2.3.0', 'parseurl#1.3.3', 'path-to-regexp#0.1.7', 'proxy-addr#2.0.5', 'qs#6.7.0', 'range-parser#1.2.1', 'safe-buffer#5.1.2', 'send#0.17.1', 'serve-static#1.14.1', 'setprototypeof#1.1.1', 'statuses#1.5.0', 'type-is#1.6.18', 'utils-merge#1.0.1', 'vary#1.1.2'],
    error: null,
    id: 'express#4.17.0',
    name: 'express',
    version: '4.17.0',
  }, {
    dependencies: ['mime-types#2.1.24', 'negotiator#0.6.2'],
    error: null,
    id: 'accepts#1.3.7',
    name: 'accepts',
    version: '1.3.7',
  }, {
    dependencies: [],
    error: null,
    id: 'array-flatten#1.1.1',
    name: 'array-flatten',
    version: '1.1.1',
  }, {
    dependencies: ['bytes#3.1.0', 'content-type#1.0.4', 'debug#2.6.9', 'depd#1.1.2', 'http-errors#1.7.2', 'iconv-lite#0.4.24', 'on-finished#2.3.0', 'qs#6.7.0', 'raw-body#2.4.0', 'type-is#1.6.18'],
    error: null,
    id: 'body-parser#1.19.0',
    name: 'body-parser',
    version: '1.19.0',
  }, {
    dependencies: ['safe-buffer#5.1.2'],
    error: null,
    id: 'content-disposition#0.5.3',
    name: 'content-disposition',
    version: '0.5.3',
  }, {
    dependencies: [],
    error: null,
    id: 'content-type#1.0.4',
    name: 'content-type',
    version: '1.0.4',
  }, {
    dependencies: [],
    error: null,
    id: 'cookie#0.4.0',
    name: 'cookie',
    version: '0.4.0',
  }, {
    dependencies: [],
    error: null,
    id: 'cookie-signature#1.0.6',
    name: 'cookie-signature',
    version: '1.0.6',
  }, {
    dependencies: ['ms#2.0.0'],
    error: null,
    id: 'debug#2.6.9',
    name: 'debug',
    version: '2.6.9',
  }, {
    dependencies: [],
    error: null,
    id: 'depd#1.1.2',
    name: 'depd',
    version: '1.1.2',
  }, {
    dependencies: [],
    error: null,
    id: 'encodeurl#1.0.2',
    name: 'encodeurl',
    version: '1.0.2',
  }, {
    dependencies: [],
    error: null,
    id: 'escape-html#1.0.3',
    name: 'escape-html',
    version: '1.0.3',
  }, {
    dependencies: [],
    error: null,
    id: 'etag#1.8.1',
    name: 'etag',
    version: '1.8.1',
  }, {
    dependencies: ['debug#2.6.9', 'encodeurl#1.0.2', 'escape-html#1.0.3', 'on-finished#2.3.0', 'parseurl#1.3.3', 'statuses#1.5.0', 'unpipe#1.0.0'],
    error: null,
    id: 'finalhandler#1.1.2',
    name: 'finalhandler',
    version: '1.1.2',
  }, {
    dependencies: [],
    error: null,
    id: 'fresh#0.5.2',
    name: 'fresh',
    version: '0.5.2',
  }, {
    dependencies: [],
    error: null,
    id: 'merge-descriptors#1.0.1',
    name: 'merge-descriptors',
    version: '1.0.1',
  }, {
    dependencies: [],
    error: null,
    id: 'methods#1.1.2',
    name: 'methods',
    version: '1.1.2',
  }, {
    dependencies: ['ee-first#1.1.1'],
    error: null,
    id: 'on-finished#2.3.0',
    name: 'on-finished',
    version: '2.3.0',
  }, {
    dependencies: [],
    error: null,
    id: 'parseurl#1.3.3',
    name: 'parseurl',
    version: '1.3.3',
  }, {
    dependencies: [],
    error: null,
    id: 'path-to-regexp#0.1.7',
    name: 'path-to-regexp',
    version: '0.1.7',
  }, {
    dependencies: ['forwarded#0.1.2', 'ipaddr.js#1.9.0'],
    error: null,
    id: 'proxy-addr#2.0.5',
    name: 'proxy-addr',
    version: '2.0.5',
  }, {
    dependencies: [], error: null, id: 'qs#6.7.0', name: 'qs', version: '6.7.0',
  }, {
    dependencies: [],
    error: null,
    id: 'range-parser#1.2.1',
    name: 'range-parser',
    version: '1.2.1',
  }, {
    dependencies: [],
    error: null,
    id: 'safe-buffer#5.1.2',
    name: 'safe-buffer',
    version: '5.1.2',
  }, {
    dependencies: ['debug#2.6.9', 'depd#1.1.2', 'destroy#1.0.4', 'encodeurl#1.0.2', 'escape-html#1.0.3', 'etag#1.8.1', 'fresh#0.5.2', 'http-errors#1.7.2', 'mime#1.6.0', 'ms#2.1.1', 'on-finished#2.3.0', 'range-parser#1.2.1', 'statuses#1.5.0'],
    error: null,
    id: 'send#0.17.1',
    name: 'send',
    version: '0.17.1',
  }, {
    dependencies: ['encodeurl#1.0.2', 'escape-html#1.0.3', 'parseurl#1.3.3', 'send#0.17.1'],
    error: null,
    id: 'serve-static#1.14.1',
    name: 'serve-static',
    version: '1.14.1',
  }, {
    dependencies: [],
    error: null,
    id: 'setprototypeof#1.1.1',
    name: 'setprototypeof',
    version: '1.1.1',
  }, {
    dependencies: [],
    error: null,
    id: 'statuses#1.5.0',
    name: 'statuses',
    version: '1.5.0',
  }, {
    dependencies: ['media-typer#0.3.0', 'mime-types#2.1.24'],
    error: null,
    id: 'type-is#1.6.18',
    name: 'type-is',
    version: '1.6.18',
  }, {
    dependencies: [],
    error: null,
    id: 'utils-merge#1.0.1',
    name: 'utils-merge',
    version: '1.0.1',
  }, {
    dependencies: [],
    error: null,
    id: 'vary#1.1.2',
    name: 'vary',
    version: '1.1.2',
  }, {
    dependencies: ['mime-db#1.40.0'],
    error: null,
    id: 'mime-types#2.1.24',
    name: 'mime-types',
    version: '2.1.24',
  }, {
    dependencies: [],
    error: null,
    id: 'negotiator#0.6.2',
    name: 'negotiator',
    version: '0.6.2',
  }, {
    dependencies: [],
    error: null,
    id: 'bytes#3.1.0',
    name: 'bytes',
    version: '3.1.0',
  }, {
    dependencies: ['depd#1.1.2', 'inherits#2.0.3', 'setprototypeof#1.1.1', 'statuses#1.5.0', 'toidentifier#1.0.0'],
    error: null,
    id: 'http-errors#1.7.2',
    name: 'http-errors',
    version: '1.7.2',
  }, {
    dependencies: ['safer-buffer#2.1.2'],
    error: null,
    id: 'iconv-lite#0.4.24',
    name: 'iconv-lite',
    version: '0.4.24',
  }, {
    dependencies: ['bytes#3.1.0', 'http-errors#1.7.2', 'iconv-lite#0.4.24', 'unpipe#1.0.0'],
    error: null,
    id: 'raw-body#2.4.0',
    name: 'raw-body',
    version: '2.4.0',
  }, {
    dependencies: [], error: null, id: 'ms#2.0.0', name: 'ms', version: '2.0.0',
  }, {
    dependencies: [],
    error: null,
    id: 'unpipe#1.0.0',
    name: 'unpipe',
    version: '1.0.0',
  }, {
    dependencies: [],
    error: null,
    id: 'ee-first#1.1.1',
    name: 'ee-first',
    version: '1.1.1',
  }, {
    dependencies: [],
    error: null,
    id: 'forwarded#0.1.2',
    name: 'forwarded',
    version: '0.1.2',
  }, {
    dependencies: [],
    error: null,
    id: 'ipaddr.js#1.9.0',
    name: 'ipaddr.js',
    version: '1.9.0',
  }, {
    dependencies: [],
    error: null,
    id: 'destroy#1.0.4',
    name: 'destroy',
    version: '1.0.4',
  }, {
    dependencies: [],
    error: null,
    id: 'mime#1.6.0',
    name: 'mime',
    version: '1.6.0',
  }, {
    dependencies: [], error: null, id: 'ms#2.1.1', name: 'ms', version: '2.1.1',
  }, {
    dependencies: [],
    error: null,
    id: 'media-typer#0.3.0',
    name: 'media-typer',
    version: '0.3.0',
  }, {
    dependencies: [],
    error: null,
    id: 'mime-db#1.40.0',
    name: 'mime-db',
    version: '1.40.0',
  }, {
    dependencies: [],
    error: null,
    id: 'inherits#2.0.3',
    name: 'inherits',
    version: '2.0.3',
  }, {
    dependencies: [],
    error: null,
    id: 'toidentifier#1.0.0',
    name: 'toidentifier',
    version: '1.0.0',
  }, {
    dependencies: [], error: null, id: 'safer-buffer#2.1.2', name: 'safer-buffer', version: '2.1.2',
  }],
};
