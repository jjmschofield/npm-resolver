const { NpmClient } = require('./NpmClient');
const { Resolver } = require('./Resolver');

describe('integration test', () => {
  beforeEach(() => {
    jest.setTimeout(60000);
  });

  it('should resolve express 4.17.0', async () => {
    const client = new NpmClient({});

    const resolver = new Resolver({ client });

    const result = await resolver.resolve('express', '4.17.0');

    const serializableResult = Array.from(result);

    expect(serializableResult).toEqual(expectedExpressFixture);
  });

  it('should resolve snyk 1.168.0', async () => {
    const client = new NpmClient({});

    const resolver = new Resolver({ client });

    const result = await resolver.resolve('snyk', '1.168.0');

    const serializableResult = Array.from(result);

    expect(serializableResult).toEqual(expectedSnykFixture);
  });
});

const expectedExpressFixture = [
  [
    'express#4.17.0',
    {
      name: 'express',
      version: '4.17.0',
      id: 'express#4.17.0',
      dependencies: [
        'accepts#1.3.7',
        'array-flatten#1.1.1',
        'body-parser#1.19.0',
        'content-disposition#0.5.3',
        'content-type#1.0.4',
        'cookie#0.4.0',
        'cookie-signature#1.0.6',
        'debug#2.6.9',
        'depd#1.1.2',
        'encodeurl#1.0.2',
        'escape-html#1.0.3',
        'etag#1.8.1',
        'finalhandler#1.1.2',
        'fresh#0.5.2',
        'merge-descriptors#1.0.1',
        'methods#1.1.2',
        'on-finished#2.3.0',
        'parseurl#1.3.3',
        'path-to-regexp#0.1.7',
        'proxy-addr#2.0.5',
        'qs#6.7.0',
        'range-parser#1.2.1',
        'safe-buffer#5.1.2',
        'send#0.17.1',
        'serve-static#1.14.1',
        'setprototypeof#1.1.1',
        'statuses#1.5.0',
        'type-is#1.6.18',
        'utils-merge#1.0.1',
        'vary#1.1.2',
      ],
      error: null,
    },
  ],
  [
    'accepts#1.3.7',
    {
      name: 'accepts',
      version: '1.3.7',
      id: 'accepts#1.3.7',
      dependencies: [
        'mime-types#2.1.24',
        'negotiator#0.6.2',
      ],
      error: null,
    },
  ],
  [
    'array-flatten#1.1.1',
    {
      name: 'array-flatten',
      version: '1.1.1',
      id: 'array-flatten#1.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'body-parser#1.19.0',
    {
      name: 'body-parser',
      version: '1.19.0',
      id: 'body-parser#1.19.0',
      dependencies: [
        'bytes#3.1.0',
        'content-type#1.0.4',
        'debug#2.6.9',
        'depd#1.1.2',
        'http-errors#1.7.2',
        'iconv-lite#0.4.24',
        'on-finished#2.3.0',
        'qs#6.7.0',
        'raw-body#2.4.0',
        'type-is#1.6.18',
      ],
      error: null,
    },
  ],
  [
    'content-disposition#0.5.3',
    {
      name: 'content-disposition',
      version: '0.5.3',
      id: 'content-disposition#0.5.3',
      dependencies: [
        'safe-buffer#5.1.2',
      ],
      error: null,
    },
  ],
  [
    'content-type#1.0.4',
    {
      name: 'content-type',
      version: '1.0.4',
      id: 'content-type#1.0.4',
      dependencies: [],
      error: null,
    },
  ],
  [
    'cookie#0.4.0',
    {
      name: 'cookie',
      version: '0.4.0',
      id: 'cookie#0.4.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'cookie-signature#1.0.6',
    {
      name: 'cookie-signature',
      version: '1.0.6',
      id: 'cookie-signature#1.0.6',
      dependencies: [],
      error: null,
    },
  ],
  [
    'debug#2.6.9',
    {
      name: 'debug',
      version: '2.6.9',
      id: 'debug#2.6.9',
      dependencies: [
        'ms#2.0.0',
      ],
      error: null,
    },
  ],
  [
    'depd#1.1.2',
    {
      name: 'depd',
      version: '1.1.2',
      id: 'depd#1.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'encodeurl#1.0.2',
    {
      name: 'encodeurl',
      version: '1.0.2',
      id: 'encodeurl#1.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'escape-html#1.0.3',
    {
      name: 'escape-html',
      version: '1.0.3',
      id: 'escape-html#1.0.3',
      dependencies: [],
      error: null,
    },
  ],
  [
    'etag#1.8.1',
    {
      name: 'etag',
      version: '1.8.1',
      id: 'etag#1.8.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'finalhandler#1.1.2',
    {
      name: 'finalhandler',
      version: '1.1.2',
      id: 'finalhandler#1.1.2',
      dependencies: [
        'debug#2.6.9',
        'encodeurl#1.0.2',
        'escape-html#1.0.3',
        'on-finished#2.3.0',
        'parseurl#1.3.3',
        'statuses#1.5.0',
        'unpipe#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'fresh#0.5.2',
    {
      name: 'fresh',
      version: '0.5.2',
      id: 'fresh#0.5.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'merge-descriptors#1.0.1',
    {
      name: 'merge-descriptors',
      version: '1.0.1',
      id: 'merge-descriptors#1.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'methods#1.1.2',
    {
      name: 'methods',
      version: '1.1.2',
      id: 'methods#1.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'on-finished#2.3.0',
    {
      name: 'on-finished',
      version: '2.3.0',
      id: 'on-finished#2.3.0',
      dependencies: [
        'ee-first#1.1.1',
      ],
      error: null,
    },
  ],
  [
    'parseurl#1.3.3',
    {
      name: 'parseurl',
      version: '1.3.3',
      id: 'parseurl#1.3.3',
      dependencies: [],
      error: null,
    },
  ],
  [
    'path-to-regexp#0.1.7',
    {
      name: 'path-to-regexp',
      version: '0.1.7',
      id: 'path-to-regexp#0.1.7',
      dependencies: [],
      error: null,
    },
  ],
  [
    'proxy-addr#2.0.5',
    {
      name: 'proxy-addr',
      version: '2.0.5',
      id: 'proxy-addr#2.0.5',
      dependencies: [
        'forwarded#0.1.2',
        'ipaddr.js#1.9.0',
      ],
      error: null,
    },
  ],
  [
    'qs#6.7.0',
    {
      name: 'qs',
      version: '6.7.0',
      id: 'qs#6.7.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'range-parser#1.2.1',
    {
      name: 'range-parser',
      version: '1.2.1',
      id: 'range-parser#1.2.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'safe-buffer#5.1.2',
    {
      name: 'safe-buffer',
      version: '5.1.2',
      id: 'safe-buffer#5.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'send#0.17.1',
    {
      name: 'send',
      version: '0.17.1',
      id: 'send#0.17.1',
      dependencies: [
        'debug#2.6.9',
        'depd#1.1.2',
        'destroy#1.0.4',
        'encodeurl#1.0.2',
        'escape-html#1.0.3',
        'etag#1.8.1',
        'fresh#0.5.2',
        'http-errors#1.7.2',
        'mime#1.6.0',
        'ms#2.1.1',
        'on-finished#2.3.0',
        'range-parser#1.2.1',
        'statuses#1.5.0',
      ],
      error: null,
    },
  ],
  [
    'serve-static#1.14.1',
    {
      name: 'serve-static',
      version: '1.14.1',
      id: 'serve-static#1.14.1',
      dependencies: [
        'encodeurl#1.0.2',
        'escape-html#1.0.3',
        'parseurl#1.3.3',
        'send#0.17.1',
      ],
      error: null,
    },
  ],
  [
    'setprototypeof#1.1.1',
    {
      name: 'setprototypeof',
      version: '1.1.1',
      id: 'setprototypeof#1.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'statuses#1.5.0',
    {
      name: 'statuses',
      version: '1.5.0',
      id: 'statuses#1.5.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'type-is#1.6.18',
    {
      name: 'type-is',
      version: '1.6.18',
      id: 'type-is#1.6.18',
      dependencies: [
        'media-typer#0.3.0',
        'mime-types#2.1.24',
      ],
      error: null,
    },
  ],
  [
    'utils-merge#1.0.1',
    {
      name: 'utils-merge',
      version: '1.0.1',
      id: 'utils-merge#1.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'vary#1.1.2',
    {
      name: 'vary',
      version: '1.1.2',
      id: 'vary#1.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'mime-types#2.1.24',
    {
      name: 'mime-types',
      version: '2.1.24',
      id: 'mime-types#2.1.24',
      dependencies: [
        'mime-db#1.40.0',
      ],
      error: null,
    },
  ],
  [
    'negotiator#0.6.2',
    {
      name: 'negotiator',
      version: '0.6.2',
      id: 'negotiator#0.6.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'bytes#3.1.0',
    {
      name: 'bytes',
      version: '3.1.0',
      id: 'bytes#3.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'http-errors#1.7.2',
    {
      name: 'http-errors',
      version: '1.7.2',
      id: 'http-errors#1.7.2',
      dependencies: [
        'depd#1.1.2',
        'inherits#2.0.3',
        'setprototypeof#1.1.1',
        'statuses#1.5.0',
        'toidentifier#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'iconv-lite#0.4.24',
    {
      name: 'iconv-lite',
      version: '0.4.24',
      id: 'iconv-lite#0.4.24',
      dependencies: [
        'safer-buffer#2.1.2',
      ],
      error: null,
    },
  ],
  [
    'raw-body#2.4.0',
    {
      name: 'raw-body',
      version: '2.4.0',
      id: 'raw-body#2.4.0',
      dependencies: [
        'bytes#3.1.0',
        'http-errors#1.7.2',
        'iconv-lite#0.4.24',
        'unpipe#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'ms#2.0.0',
    {
      name: 'ms',
      version: '2.0.0',
      id: 'ms#2.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'unpipe#1.0.0',
    {
      name: 'unpipe',
      version: '1.0.0',
      id: 'unpipe#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ee-first#1.1.1',
    {
      name: 'ee-first',
      version: '1.1.1',
      id: 'ee-first#1.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'forwarded#0.1.2',
    {
      name: 'forwarded',
      version: '0.1.2',
      id: 'forwarded#0.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ipaddr.js#1.9.0',
    {
      name: 'ipaddr.js',
      version: '1.9.0',
      id: 'ipaddr.js#1.9.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'destroy#1.0.4',
    {
      name: 'destroy',
      version: '1.0.4',
      id: 'destroy#1.0.4',
      dependencies: [],
      error: null,
    },
  ],
  [
    'mime#1.6.0',
    {
      name: 'mime',
      version: '1.6.0',
      id: 'mime#1.6.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ms#2.1.1',
    {
      name: 'ms',
      version: '2.1.1',
      id: 'ms#2.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'media-typer#0.3.0',
    {
      name: 'media-typer',
      version: '0.3.0',
      id: 'media-typer#0.3.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'mime-db#1.40.0',
    {
      name: 'mime-db',
      version: '1.40.0',
      id: 'mime-db#1.40.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'inherits#2.0.3',
    {
      name: 'inherits',
      version: '2.0.3',
      id: 'inherits#2.0.3',
      dependencies: [],
      error: null,
    },
  ],
  [
    'toidentifier#1.0.0',
    {
      name: 'toidentifier',
      version: '1.0.0',
      id: 'toidentifier#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'safer-buffer#2.1.2',
    {
      name: 'safer-buffer',
      version: '2.1.2',
      id: 'safer-buffer#2.1.2',
      dependencies: [],
      error: null,
    },
  ],
];

Object.freeze(expectedExpressFixture);

const expectedSnykFixture = [
  [
    'snyk#1.168.0',
    {
      name: 'snyk',
      version: '1.168.0',
      id: 'snyk#1.168.0',
      dependencies: [
        '@snyk/dep-graph#1.4.1',
        '@snyk/gemfile#1.2.0',
        'abbrev#1.1.1',
        'ansi-escapes#4.1.0',
        'chalk#2.4.2',
        'configstore#3.1.2',
        'debug#3.2.6',
        'diff#4.0.1',
        'git-url-parse#11.1.2',
        'glob#7.1.4',
        'inquirer#6.3.1',
        'lodash#4.17.11',
        'needle#2.4.0',
        'opn#5.5.0',
        'os-name#3.1.0',
        'proxy-agent#3.1.0',
        'proxy-from-env#1.0.0',
        'semver#6.1.1',
        'snyk-config#2.2.1',
        'snyk-docker-plugin#1.25.0',
        'snyk-go-plugin#1.7.2',
        'snyk-gradle-plugin#2.10.4',
        'snyk-module#1.9.1',
        'snyk-mvn-plugin#2.3.0',
        'snyk-nodejs-lockfile-parser#1.13.0',
        'snyk-nuget-plugin#1.10.0',
        'snyk-php-plugin#1.5.3',
        'snyk-policy#1.13.5',
        'snyk-python-plugin#1.10.1',
        'snyk-resolve#1.0.1',
        'snyk-resolve-deps#4.0.3',
        'snyk-sbt-plugin#2.2.0',
        'snyk-tree#1.0.0',
        'snyk-try-require#1.3.1',
        'source-map-support#0.5.12',
        'tempfile#2.0.0',
        'then-fs#2.0.0',
        'update-notifier#2.5.0',
        'uuid#3.3.2',
      ],
      error: null,
    },
  ],
  [
    '@snyk/dep-graph#1.4.1',
    {
      name: '@snyk/dep-graph',
      version: '1.4.1',
      id: '@snyk/dep-graph#1.4.1',
      dependencies: [],
      error: 401,
    },
  ],
  [
    '@snyk/gemfile#1.2.0',
    {
      name: '@snyk/gemfile',
      version: '1.2.0',
      id: '@snyk/gemfile#1.2.0',
      dependencies: [],
      error: 401,
    },
  ],
  [
    'abbrev#1.1.1',
    {
      name: 'abbrev',
      version: '1.1.1',
      id: 'abbrev#1.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ansi-escapes#4.1.0',
    {
      name: 'ansi-escapes',
      version: '4.1.0',
      id: 'ansi-escapes#4.1.0',
      dependencies: [
        'type-fest#0.3.1',
      ],
      error: null,
    },
  ],
  [
    'chalk#2.4.2',
    {
      name: 'chalk',
      version: '2.4.2',
      id: 'chalk#2.4.2',
      dependencies: [
        'ansi-styles#3.2.1',
        'escape-string-regexp#1.0.5',
        'supports-color#5.5.0',
      ],
      error: null,
    },
  ],
  [
    'configstore#3.1.2',
    {
      name: 'configstore',
      version: '3.1.2',
      id: 'configstore#3.1.2',
      dependencies: [
        'dot-prop#4.2.0',
        'graceful-fs#4.1.9',
        'make-dir#1.3.0',
        'unique-string#1.0.0',
        'write-file-atomic#2.4.3',
        'xdg-basedir#3.0.0',
      ],
      error: null,
    },
  ],
  [
    'debug#3.2.6',
    {
      name: 'debug',
      version: '3.2.6',
      id: 'debug#3.2.6',
      dependencies: [
        'ms#2.1.1',
      ],
      error: null,
    },
  ],
  [
    'diff#4.0.1',
    {
      name: 'diff',
      version: '4.0.1',
      id: 'diff#4.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'git-url-parse#11.1.2',
    {
      name: 'git-url-parse',
      version: '11.1.2',
      id: 'git-url-parse#11.1.2',
      dependencies: [
        'git-up#4.0.1',
      ],
      error: null,
    },
  ],
  [
    'glob#7.1.4',
    {
      name: 'glob',
      version: '7.1.4',
      id: 'glob#7.1.4',
      dependencies: [
        'fs.realpath#1.0.0',
        'inflight#1.0.6',
        'inherits#2.0.3',
        'minimatch#3.0.4',
        'once#1.4.0',
        'path-is-absolute#1.0.1',
      ],
      error: null,
    },
  ],
  [
    'inquirer#6.3.1',
    {
      name: 'inquirer',
      version: '6.3.1',
      id: 'inquirer#6.3.1',
      dependencies: [
        'ansi-escapes#3.2.0',
        'chalk#2.4.2',
        'cli-cursor#2.1.0',
        'cli-width#2.2.0',
        'external-editor#3.0.3',
        'figures#2.0.0',
        'lodash#4.17.11',
        'mute-stream#0.0.7',
        'run-async#2.3.0',
        'rxjs#6.5.2',
        'string-width#2.1.1',
        'strip-ansi#5.2.0',
        'through#2.3.8',
      ],
      error: null,
    },
  ],
  [
    'lodash#4.17.11',
    {
      name: 'lodash',
      version: '4.17.11',
      id: 'lodash#4.17.11',
      dependencies: [],
      error: null,
    },
  ],
  [
    'needle#2.4.0',
    {
      name: 'needle',
      version: '2.4.0',
      id: 'needle#2.4.0',
      dependencies: [
        'debug#3.2.6',
        'iconv-lite#0.4.9',
        'sax#1.2.4',
      ],
      error: null,
    },
  ],
  [
    'opn#5.5.0',
    {
      name: 'opn',
      version: '5.5.0',
      id: 'opn#5.5.0',
      dependencies: [
        'is-wsl#1.1.0',
      ],
      error: null,
    },
  ],
  [
    'os-name#3.1.0',
    {
      name: 'os-name',
      version: '3.1.0',
      id: 'os-name#3.1.0',
      dependencies: [
        'macos-release#2.2.0',
        'windows-release#3.2.0',
      ],
      error: null,
    },
  ],
  [
    'proxy-agent#3.1.0',
    {
      name: 'proxy-agent',
      version: '3.1.0',
      id: 'proxy-agent#3.1.0',
      dependencies: [
        'agent-base#4.2.1',
        'debug#3.2.6',
        'http-proxy-agent#2.1.0',
        'https-proxy-agent#2.2.1',
        'lru-cache#4.1.5',
        'pac-proxy-agent#3.0.0',
        'proxy-from-env#1.0.0',
        'socks-proxy-agent#4.0.2',
      ],
      error: null,
    },
  ],
  [
    'proxy-from-env#1.0.0',
    {
      name: 'proxy-from-env',
      version: '1.0.0',
      id: 'proxy-from-env#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'semver#6.1.1',
    {
      name: 'semver',
      version: '6.1.1',
      id: 'semver#6.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'snyk-config#2.2.1',
    {
      name: 'snyk-config',
      version: '2.2.1',
      id: 'snyk-config#2.2.1',
      dependencies: [
        'debug#3.2.6',
        'lodash#4.17.11',
        'nconf#0.10.0',
      ],
      error: null,
    },
  ],
  [
    'snyk-docker-plugin#1.25.0',
    {
      name: 'snyk-docker-plugin',
      version: '1.25.0',
      id: 'snyk-docker-plugin#1.25.0',
      dependencies: [
        'debug#4.1.1',
        'dockerfile-ast#0.0.16',
        'semver#6.1.1',
        'tslib#1.9.3',
      ],
      error: null,
    },
  ],
  [
    'snyk-go-plugin#1.7.2',
    {
      name: 'snyk-go-plugin',
      version: '1.7.2',
      id: 'snyk-go-plugin#1.7.2',
      dependencies: [
        'debug#4.1.1',
        'graphlib#2.1.7',
        'snyk-go-parser#1.0.2',
        'tmp#0.0.33',
      ],
      error: null,
    },
  ],
  [
    'snyk-gradle-plugin#2.10.4',
    {
      name: 'snyk-gradle-plugin',
      version: '2.10.4',
      id: 'snyk-gradle-plugin#2.10.4',
      dependencies: [
        'chalk#2.4.2',
        'clone-deep#0.3.0',
        'tmp#0.0.33',
        'tslib#1.9.3',
      ],
      error: null,
    },
  ],
  [
    'snyk-module#1.9.1',
    {
      name: 'snyk-module',
      version: '1.9.1',
      id: 'snyk-module#1.9.1',
      dependencies: [
        'debug#3.2.6',
        'hosted-git-info#2.7.1',
      ],
      error: null,
    },
  ],
  [
    'snyk-mvn-plugin#2.3.0',
    {
      name: 'snyk-mvn-plugin',
      version: '2.3.0',
      id: 'snyk-mvn-plugin#2.3.0',
      dependencies: [
        'lodash#4.17.11',
        'tslib#1.9.3',
      ],
      error: null,
    },
  ],
  [
    'snyk-nodejs-lockfile-parser#1.13.0',
    {
      name: 'snyk-nodejs-lockfile-parser',
      version: '1.13.0',
      id: 'snyk-nodejs-lockfile-parser#1.13.0',
      dependencies: [
        '@yarnpkg/lockfile#1.1.0',
        'graphlib#2.1.7',
        'lodash#4.17.11',
        'source-map-support#0.5.9',
        'tslib#1.9.3',
        'uuid#3.3.2',
      ],
      error: null,
    },
  ],
  [
    'snyk-nuget-plugin#1.10.0',
    {
      name: 'snyk-nuget-plugin',
      version: '1.10.0',
      id: 'snyk-nuget-plugin#1.10.0',
      dependencies: [
        'debug#3.2.6',
        'jszip#3.2.1',
        'lodash#4.17.11',
        'snyk-paket-parser#1.4.3',
        'xml2js#0.4.19',
      ],
      error: null,
    },
  ],
  [
    'snyk-php-plugin#1.5.3',
    {
      name: 'snyk-php-plugin',
      version: '1.5.3',
      id: 'snyk-php-plugin#1.5.3',
      dependencies: [
        'debug#3.2.6',
        'lodash#4.17.9',
      ],
      error: null,
    },
  ],
  [
    'snyk-policy#1.13.5',
    {
      name: 'snyk-policy',
      version: '1.13.5',
      id: 'snyk-policy#1.13.5',
      dependencies: [
        'debug#3.2.6',
        'email-validator#2.0.4',
        'js-yaml#3.13.1',
        'lodash.clonedeep#4.5.0',
        'semver#6.1.1',
        'snyk-module#1.9.1',
        'snyk-resolve#1.0.1',
        'snyk-try-require#1.3.1',
        'then-fs#2.0.0',
      ],
      error: null,
    },
  ],
  [
    'snyk-python-plugin#1.10.1',
    {
      name: 'snyk-python-plugin',
      version: '1.10.1',
      id: 'snyk-python-plugin#1.10.1',
      dependencies: [
        'tmp#0.0.33',
      ],
      error: null,
    },
  ],
  [
    'snyk-resolve#1.0.1',
    {
      name: 'snyk-resolve',
      version: '1.0.1',
      id: 'snyk-resolve#1.0.1',
      dependencies: [
        'debug#3.2.6',
        'then-fs#2.0.0',
      ],
      error: null,
    },
  ],
  [
    'snyk-resolve-deps#4.0.3',
    {
      name: 'snyk-resolve-deps',
      version: '4.0.3',
      id: 'snyk-resolve-deps#4.0.3',
      dependencies: [
        'ansicolors#0.3.2',
        'debug#3.2.6',
        'lodash.clone#4.5.0',
        'lodash.get#4.4.2',
        'lodash.set#4.3.2',
        'lodash.assign#4.2.0',
        'lodash.flatten#4.4.0',
        'lodash.assignin#4.2.0',
        'lru-cache#4.1.5',
        'semver#5.7.0',
        'snyk-module#1.9.1',
        'snyk-resolve#1.0.1',
        'snyk-tree#1.0.0',
        'snyk-try-require#1.3.1',
        'then-fs#2.0.0',
      ],
      error: null,
    },
  ],
  [
    'snyk-sbt-plugin#2.2.0',
    {
      name: 'snyk-sbt-plugin',
      version: '2.2.0',
      id: 'snyk-sbt-plugin#2.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'snyk-tree#1.0.0',
    {
      name: 'snyk-tree',
      version: '1.0.0',
      id: 'snyk-tree#1.0.0',
      dependencies: [
        'archy#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'snyk-try-require#1.3.1',
    {
      name: 'snyk-try-require',
      version: '1.3.1',
      id: 'snyk-try-require#1.3.1',
      dependencies: [
        'debug#3.2.6',
        'lodash.clonedeep#4.5.0',
        'lru-cache#4.1.5',
        'then-fs#2.0.0',
      ],
      error: null,
    },
  ],
  [
    'source-map-support#0.5.12',
    {
      name: 'source-map-support',
      version: '0.5.12',
      id: 'source-map-support#0.5.12',
      dependencies: [
        'buffer-from#1.1.1',
        'source-map#0.6.1',
      ],
      error: null,
    },
  ],
  [
    'tempfile#2.0.0',
    {
      name: 'tempfile',
      version: '2.0.0',
      id: 'tempfile#2.0.0',
      dependencies: [
        'temp-dir#1.0.0',
        'uuid#3.3.2',
      ],
      error: null,
    },
  ],
  [
    'then-fs#2.0.0',
    {
      name: 'then-fs',
      version: '2.0.0',
      id: 'then-fs#2.0.0',
      dependencies: [
        'promise#7.3.1',
      ],
      error: null,
    },
  ],
  [
    'update-notifier#2.5.0',
    {
      name: 'update-notifier',
      version: '2.5.0',
      id: 'update-notifier#2.5.0',
      dependencies: [
        'boxen#1.3.0',
        'chalk#2.4.2',
        'configstore#3.1.2',
        'import-lazy#2.1.0',
        'is-ci#1.2.1',
        'is-installed-globally#0.1.0',
        'is-npm#1.0.0',
        'latest-version#3.1.0',
        'semver-diff#2.1.0',
        'xdg-basedir#3.0.0',
      ],
      error: null,
    },
  ],
  [
    'uuid#3.3.2',
    {
      name: 'uuid',
      version: '3.3.2',
      id: 'uuid#3.3.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'type-fest#0.3.1',
    {
      name: 'type-fest',
      version: '0.3.1',
      id: 'type-fest#0.3.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ansi-styles#3.2.1',
    {
      name: 'ansi-styles',
      version: '3.2.1',
      id: 'ansi-styles#3.2.1',
      dependencies: [
        'color-convert#1.9.3',
      ],
      error: null,
    },
  ],
  [
    'escape-string-regexp#1.0.5',
    {
      name: 'escape-string-regexp',
      version: '1.0.5',
      id: 'escape-string-regexp#1.0.5',
      dependencies: [],
      error: null,
    },
  ],
  [
    'supports-color#5.5.0',
    {
      name: 'supports-color',
      version: '5.5.0',
      id: 'supports-color#5.5.0',
      dependencies: [
        'has-flag#3.0.0',
      ],
      error: null,
    },
  ],
  [
    'dot-prop#4.2.0',
    {
      name: 'dot-prop',
      version: '4.2.0',
      id: 'dot-prop#4.2.0',
      dependencies: [
        'is-obj#1.0.1',
      ],
      error: null,
    },
  ],
  [
    'graceful-fs#4.1.9',
    {
      name: 'graceful-fs',
      version: '4.1.9',
      id: 'graceful-fs#4.1.9',
      dependencies: [],
      error: null,
    },
  ],
  [
    'make-dir#1.3.0',
    {
      name: 'make-dir',
      version: '1.3.0',
      id: 'make-dir#1.3.0',
      dependencies: [
        'pify#3.0.0',
      ],
      error: null,
    },
  ],
  [
    'unique-string#1.0.0',
    {
      name: 'unique-string',
      version: '1.0.0',
      id: 'unique-string#1.0.0',
      dependencies: [
        'crypto-random-string#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'write-file-atomic#2.4.3',
    {
      name: 'write-file-atomic',
      version: '2.4.3',
      id: 'write-file-atomic#2.4.3',
      dependencies: [
        'graceful-fs#4.1.15',
        'imurmurhash#0.1.4',
        'signal-exit#3.0.2',
      ],
      error: null,
    },
  ],
  [
    'xdg-basedir#3.0.0',
    {
      name: 'xdg-basedir',
      version: '3.0.0',
      id: 'xdg-basedir#3.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ms#2.1.1',
    {
      name: 'ms',
      version: '2.1.1',
      id: 'ms#2.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'git-up#4.0.1',
    {
      name: 'git-up',
      version: '4.0.1',
      id: 'git-up#4.0.1',
      dependencies: [
        'is-ssh#1.3.1',
        'parse-url#5.0.1',
      ],
      error: null,
    },
  ],
  [
    'fs.realpath#1.0.0',
    {
      name: 'fs.realpath',
      version: '1.0.0',
      id: 'fs.realpath#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'inflight#1.0.6',
    {
      name: 'inflight',
      version: '1.0.6',
      id: 'inflight#1.0.6',
      dependencies: [
        'once#1.4.0',
        'wrappy#1.0.2',
      ],
      error: null,
    },
  ],
  [
    'inherits#2.0.3',
    {
      name: 'inherits',
      version: '2.0.3',
      id: 'inherits#2.0.3',
      dependencies: [],
      error: null,
    },
  ],
  [
    'minimatch#3.0.4',
    {
      name: 'minimatch',
      version: '3.0.4',
      id: 'minimatch#3.0.4',
      dependencies: [
        'brace-expansion#1.1.9',
      ],
      error: null,
    },
  ],
  [
    'once#1.4.0',
    {
      name: 'once',
      version: '1.4.0',
      id: 'once#1.4.0',
      dependencies: [
        'wrappy#1.0.2',
      ],
      error: null,
    },
  ],
  [
    'path-is-absolute#1.0.1',
    {
      name: 'path-is-absolute',
      version: '1.0.1',
      id: 'path-is-absolute#1.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ansi-escapes#3.2.0',
    {
      name: 'ansi-escapes',
      version: '3.2.0',
      id: 'ansi-escapes#3.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'cli-cursor#2.1.0',
    {
      name: 'cli-cursor',
      version: '2.1.0',
      id: 'cli-cursor#2.1.0',
      dependencies: [
        'restore-cursor#2.0.0',
      ],
      error: null,
    },
  ],
  [
    'cli-width#2.2.0',
    {
      name: 'cli-width',
      version: '2.2.0',
      id: 'cli-width#2.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'external-editor#3.0.3',
    {
      name: 'external-editor',
      version: '3.0.3',
      id: 'external-editor#3.0.3',
      dependencies: [
        'chardet#0.7.0',
        'iconv-lite#0.4.24',
        'tmp#0.0.33',
      ],
      error: null,
    },
  ],
  [
    'figures#2.0.0',
    {
      name: 'figures',
      version: '2.0.0',
      id: 'figures#2.0.0',
      dependencies: [
        'escape-string-regexp#1.0.5',
      ],
      error: null,
    },
  ],
  [
    'mute-stream#0.0.7',
    {
      name: 'mute-stream',
      version: '0.0.7',
      id: 'mute-stream#0.0.7',
      dependencies: [],
      error: null,
    },
  ],
  [
    'run-async#2.3.0',
    {
      name: 'run-async',
      version: '2.3.0',
      id: 'run-async#2.3.0',
      dependencies: [
        'is-promise#2.1.0',
      ],
      error: null,
    },
  ],
  [
    'rxjs#6.5.2',
    {
      name: 'rxjs',
      version: '6.5.2',
      id: 'rxjs#6.5.2',
      dependencies: [
        'tslib#1.9.3',
      ],
      error: null,
    },
  ],
  [
    'string-width#2.1.1',
    {
      name: 'string-width',
      version: '2.1.1',
      id: 'string-width#2.1.1',
      dependencies: [
        'is-fullwidth-code-point#2.0.0',
        'strip-ansi#4.0.0',
      ],
      error: null,
    },
  ],
  [
    'strip-ansi#5.2.0',
    {
      name: 'strip-ansi',
      version: '5.2.0',
      id: 'strip-ansi#5.2.0',
      dependencies: [
        'ansi-regex#4.1.0',
      ],
      error: null,
    },
  ],
  [
    'through#2.3.8',
    {
      name: 'through',
      version: '2.3.8',
      id: 'through#2.3.8',
      dependencies: [],
      error: null,
    },
  ],
  [
    'iconv-lite#0.4.9',
    {
      name: 'iconv-lite',
      version: '0.4.9',
      id: 'iconv-lite#0.4.9',
      dependencies: [],
      error: null,
    },
  ],
  [
    'sax#1.2.4',
    {
      name: 'sax',
      version: '1.2.4',
      id: 'sax#1.2.4',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-wsl#1.1.0',
    {
      name: 'is-wsl',
      version: '1.1.0',
      id: 'is-wsl#1.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'macos-release#2.2.0',
    {
      name: 'macos-release',
      version: '2.2.0',
      id: 'macos-release#2.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'windows-release#3.2.0',
    {
      name: 'windows-release',
      version: '3.2.0',
      id: 'windows-release#3.2.0',
      dependencies: [
        'execa#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'agent-base#4.2.1',
    {
      name: 'agent-base',
      version: '4.2.1',
      id: 'agent-base#4.2.1',
      dependencies: [
        'es6-promisify#5.0.0',
      ],
      error: null,
    },
  ],
  [
    'http-proxy-agent#2.1.0',
    {
      name: 'http-proxy-agent',
      version: '2.1.0',
      id: 'http-proxy-agent#2.1.0',
      dependencies: [
        'agent-base#4.2.1',
        'debug#3.1.0',
      ],
      error: null,
    },
  ],
  [
    'https-proxy-agent#2.2.1',
    {
      name: 'https-proxy-agent',
      version: '2.2.1',
      id: 'https-proxy-agent#2.2.1',
      dependencies: [
        'agent-base#4.2.1',
        'debug#3.2.6',
      ],
      error: null,
    },
  ],
  [
    'lru-cache#4.1.5',
    {
      name: 'lru-cache',
      version: '4.1.5',
      id: 'lru-cache#4.1.5',
      dependencies: [
        'pseudomap#1.0.2',
        'yallist#2.1.2',
      ],
      error: null,
    },
  ],
  [
    'pac-proxy-agent#3.0.0',
    {
      name: 'pac-proxy-agent',
      version: '3.0.0',
      id: 'pac-proxy-agent#3.0.0',
      dependencies: [
        'agent-base#4.2.1',
        'debug#3.2.6',
        'get-uri#2.0.3',
        'http-proxy-agent#2.1.0',
        'https-proxy-agent#2.2.1',
        'pac-resolver#3.0.0',
        'raw-body#2.4.0',
        'socks-proxy-agent#4.0.2',
      ],
      error: null,
    },
  ],
  [
    'socks-proxy-agent#4.0.2',
    {
      name: 'socks-proxy-agent',
      version: '4.0.2',
      id: 'socks-proxy-agent#4.0.2',
      dependencies: [
        'agent-base#4.2.1',
        'socks#2.3.2',
      ],
      error: null,
    },
  ],
  [
    'nconf#0.10.0',
    {
      name: 'nconf',
      version: '0.10.0',
      id: 'nconf#0.10.0',
      dependencies: [
        'async#1.5.2',
        'ini#1.3.5',
        'secure-keys#1.0.0',
        'yargs#3.32.0',
      ],
      error: null,
    },
  ],
  [
    'debug#4.1.1',
    {
      name: 'debug',
      version: '4.1.1',
      id: 'debug#4.1.1',
      dependencies: [
        'ms#2.1.1',
      ],
      error: null,
    },
  ],
  [
    'dockerfile-ast#0.0.16',
    {
      name: 'dockerfile-ast',
      version: '0.0.16',
      id: 'dockerfile-ast#0.0.16',
      dependencies: [
        'vscode-languageserver-types#3.9.0',
      ],
      error: null,
    },
  ],
  [
    'tslib#1.9.3',
    {
      name: 'tslib',
      version: '1.9.3',
      id: 'tslib#1.9.3',
      dependencies: [],
      error: null,
    },
  ],
  [
    'graphlib#2.1.7',
    {
      name: 'graphlib',
      version: '2.1.7',
      id: 'graphlib#2.1.7',
      dependencies: [
        'lodash#4.17.9',
      ],
      error: null,
    },
  ],
  [
    'snyk-go-parser#1.0.2',
    {
      name: 'snyk-go-parser',
      version: '1.0.2',
      id: 'snyk-go-parser#1.0.2',
      dependencies: [
        'toml#3.0.0',
        'tslib#1.9.3',
      ],
      error: null,
    },
  ],
  [
    'tmp#0.0.33',
    {
      name: 'tmp',
      version: '0.0.33',
      id: 'tmp#0.0.33',
      dependencies: [
        'os-tmpdir#1.0.2',
      ],
      error: null,
    },
  ],
  [
    'clone-deep#0.3.0',
    {
      name: 'clone-deep',
      version: '0.3.0',
      id: 'clone-deep#0.3.0',
      dependencies: [
        'for-own#1.0.0',
        'is-plain-object#2.0.4',
        'kind-of#3.2.2',
        'shallow-clone#0.1.2',
      ],
      error: null,
    },
  ],
  [
    'hosted-git-info#2.7.1',
    {
      name: 'hosted-git-info',
      version: '2.7.1',
      id: 'hosted-git-info#2.7.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    '@yarnpkg/lockfile#1.1.0',
    {
      name: '@yarnpkg/lockfile',
      version: '1.1.0',
      id: '@yarnpkg/lockfile#1.1.0',
      dependencies: [],
      error: 401,
    },
  ],
  [
    'source-map-support#0.5.9',
    {
      name: 'source-map-support',
      version: '0.5.9',
      id: 'source-map-support#0.5.9',
      dependencies: [
        'buffer-from#1.1.1',
        'source-map#0.6.1',
      ],
      error: null,
    },
  ],
  [
    'jszip#3.2.1',
    {
      name: 'jszip',
      version: '3.2.1',
      id: 'jszip#3.2.1',
      dependencies: [
        'lie#3.3.0',
        'pako#1.0.9',
        'readable-stream#2.3.6',
        'set-immediate-shim#1.0.1',
      ],
      error: null,
    },
  ],
  [
    'snyk-paket-parser#1.4.3',
    {
      name: 'snyk-paket-parser',
      version: '1.4.3',
      id: 'snyk-paket-parser#1.4.3',
      dependencies: [
        'tslib#1.9.3',
      ],
      error: null,
    },
  ],
  [
    'xml2js#0.4.19',
    {
      name: 'xml2js',
      version: '0.4.19',
      id: 'xml2js#0.4.19',
      dependencies: [
        'sax#1.2.4',
        'xmlbuilder#9.0.7',
      ],
      error: null,
    },
  ],
  [
    'lodash#4.17.9',
    {
      name: 'lodash',
      version: '4.17.9',
      id: 'lodash#4.17.9',
      dependencies: [],
      error: null,
    },
  ],
  [
    'email-validator#2.0.4',
    {
      name: 'email-validator',
      version: '2.0.4',
      id: 'email-validator#2.0.4',
      dependencies: [],
      error: null,
    },
  ],
  [
    'js-yaml#3.13.1',
    {
      name: 'js-yaml',
      version: '3.13.1',
      id: 'js-yaml#3.13.1',
      dependencies: [
        'argparse#1.0.9',
        'esprima#4.0.1',
      ],
      error: null,
    },
  ],
  [
    'lodash.clonedeep#4.5.0',
    {
      name: 'lodash.clonedeep',
      version: '4.5.0',
      id: 'lodash.clonedeep#4.5.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ansicolors#0.3.2',
    {
      name: 'ansicolors',
      version: '0.3.2',
      id: 'ansicolors#0.3.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'lodash.clone#4.5.0',
    {
      name: 'lodash.clone',
      version: '4.5.0',
      id: 'lodash.clone#4.5.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'lodash.get#4.4.2',
    {
      name: 'lodash.get',
      version: '4.4.2',
      id: 'lodash.get#4.4.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'lodash.set#4.3.2',
    {
      name: 'lodash.set',
      version: '4.3.2',
      id: 'lodash.set#4.3.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'lodash.assign#4.2.0',
    {
      name: 'lodash.assign',
      version: '4.2.0',
      id: 'lodash.assign#4.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'lodash.flatten#4.4.0',
    {
      name: 'lodash.flatten',
      version: '4.4.0',
      id: 'lodash.flatten#4.4.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'lodash.assignin#4.2.0',
    {
      name: 'lodash.assignin',
      version: '4.2.0',
      id: 'lodash.assignin#4.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'semver#5.7.0',
    {
      name: 'semver',
      version: '5.7.0',
      id: 'semver#5.7.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'archy#1.0.0',
    {
      name: 'archy',
      version: '1.0.0',
      id: 'archy#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'buffer-from#1.1.1',
    {
      name: 'buffer-from',
      version: '1.1.1',
      id: 'buffer-from#1.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'source-map#0.6.1',
    {
      name: 'source-map',
      version: '0.6.1',
      id: 'source-map#0.6.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'temp-dir#1.0.0',
    {
      name: 'temp-dir',
      version: '1.0.0',
      id: 'temp-dir#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'promise#7.3.1',
    {
      name: 'promise',
      version: '7.3.1',
      id: 'promise#7.3.1',
      dependencies: [
        'asap#2.0.6',
      ],
      error: null,
    },
  ],
  [
    'boxen#1.3.0',
    {
      name: 'boxen',
      version: '1.3.0',
      id: 'boxen#1.3.0',
      dependencies: [
        'ansi-align#2.0.0',
        'camelcase#4.1.0',
        'chalk#2.4.2',
        'cli-boxes#1.0.0',
        'string-width#2.1.1',
        'term-size#1.2.0',
        'widest-line#2.0.1',
      ],
      error: null,
    },
  ],
  [
    'import-lazy#2.1.0',
    {
      name: 'import-lazy',
      version: '2.1.0',
      id: 'import-lazy#2.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-ci#1.2.1',
    {
      name: 'is-ci',
      version: '1.2.1',
      id: 'is-ci#1.2.1',
      dependencies: [
        'ci-info#1.6.0',
      ],
      error: null,
    },
  ],
  [
    'is-installed-globally#0.1.0',
    {
      name: 'is-installed-globally',
      version: '0.1.0',
      id: 'is-installed-globally#0.1.0',
      dependencies: [
        'global-dirs#0.1.1',
        'is-path-inside#1.0.1',
      ],
      error: null,
    },
  ],
  [
    'is-npm#1.0.0',
    {
      name: 'is-npm',
      version: '1.0.0',
      id: 'is-npm#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'latest-version#3.1.0',
    {
      name: 'latest-version',
      version: '3.1.0',
      id: 'latest-version#3.1.0',
      dependencies: [
        'package-json#4.0.1',
      ],
      error: null,
    },
  ],
  [
    'semver-diff#2.1.0',
    {
      name: 'semver-diff',
      version: '2.1.0',
      id: 'semver-diff#2.1.0',
      dependencies: [
        'semver#5.7.0',
      ],
      error: null,
    },
  ],
  [
    'color-convert#1.9.3',
    {
      name: 'color-convert',
      version: '1.9.3',
      id: 'color-convert#1.9.3',
      dependencies: [
        'color-name#1.1.3',
      ],
      error: null,
    },
  ],
  [
    'has-flag#3.0.0',
    {
      name: 'has-flag',
      version: '3.0.0',
      id: 'has-flag#3.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-obj#1.0.1',
    {
      name: 'is-obj',
      version: '1.0.1',
      id: 'is-obj#1.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'pify#3.0.0',
    {
      name: 'pify',
      version: '3.0.0',
      id: 'pify#3.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'crypto-random-string#1.0.0',
    {
      name: 'crypto-random-string',
      version: '1.0.0',
      id: 'crypto-random-string#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'graceful-fs#4.1.15',
    {
      name: 'graceful-fs',
      version: '4.1.15',
      id: 'graceful-fs#4.1.15',
      dependencies: [],
      error: null,
    },
  ],
  [
    'imurmurhash#0.1.4',
    {
      name: 'imurmurhash',
      version: '0.1.4',
      id: 'imurmurhash#0.1.4',
      dependencies: [],
      error: null,
    },
  ],
  [
    'signal-exit#3.0.2',
    {
      name: 'signal-exit',
      version: '3.0.2',
      id: 'signal-exit#3.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-ssh#1.3.1',
    {
      name: 'is-ssh',
      version: '1.3.1',
      id: 'is-ssh#1.3.1',
      dependencies: [
        'protocols#1.4.7',
      ],
      error: null,
    },
  ],
  [
    'parse-url#5.0.1',
    {
      name: 'parse-url',
      version: '5.0.1',
      id: 'parse-url#5.0.1',
      dependencies: [
        'is-ssh#1.3.1',
        'normalize-url#3.3.0',
        'parse-path#4.0.1',
        'protocols#1.4.7',
      ],
      error: null,
    },
  ],
  [
    'wrappy#1.0.2',
    {
      name: 'wrappy',
      version: '1.0.2',
      id: 'wrappy#1.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'brace-expansion#1.1.9',
    {
      name: 'brace-expansion',
      version: '1.1.9',
      id: 'brace-expansion#1.1.9',
      dependencies: [
        'balanced-match#1.0.0',
        'concat-map#0.0.1',
      ],
      error: null,
    },
  ],
  [
    'restore-cursor#2.0.0',
    {
      name: 'restore-cursor',
      version: '2.0.0',
      id: 'restore-cursor#2.0.0',
      dependencies: [
        'onetime#2.0.1',
        'signal-exit#3.0.2',
      ],
      error: null,
    },
  ],
  [
    'chardet#0.7.0',
    {
      name: 'chardet',
      version: '0.7.0',
      id: 'chardet#0.7.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'iconv-lite#0.4.24',
    {
      name: 'iconv-lite',
      version: '0.4.24',
      id: 'iconv-lite#0.4.24',
      dependencies: [
        'safer-buffer#2.1.2',
      ],
      error: null,
    },
  ],
  [
    'is-promise#2.1.0',
    {
      name: 'is-promise',
      version: '2.1.0',
      id: 'is-promise#2.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-fullwidth-code-point#2.0.0',
    {
      name: 'is-fullwidth-code-point',
      version: '2.0.0',
      id: 'is-fullwidth-code-point#2.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'strip-ansi#4.0.0',
    {
      name: 'strip-ansi',
      version: '4.0.0',
      id: 'strip-ansi#4.0.0',
      dependencies: [
        'ansi-regex#3.0.0',
      ],
      error: null,
    },
  ],
  [
    'ansi-regex#4.1.0',
    {
      name: 'ansi-regex',
      version: '4.1.0',
      id: 'ansi-regex#4.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'execa#1.0.0',
    {
      name: 'execa',
      version: '1.0.0',
      id: 'execa#1.0.0',
      dependencies: [
        'cross-spawn#6.0.5',
        'get-stream#4.1.0',
        'is-stream#1.1.0',
        'npm-run-path#2.0.2',
        'p-finally#1.0.0',
        'signal-exit#3.0.2',
        'strip-eof#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'es6-promisify#5.0.0',
    {
      name: 'es6-promisify',
      version: '5.0.0',
      id: 'es6-promisify#5.0.0',
      dependencies: [
        'es6-promise#4.2.6',
      ],
      error: null,
    },
  ],
  [
    'debug#3.1.0',
    {
      name: 'debug',
      version: '3.1.0',
      id: 'debug#3.1.0',
      dependencies: [
        'ms#2.0.0',
      ],
      error: null,
    },
  ],
  [
    'pseudomap#1.0.2',
    {
      name: 'pseudomap',
      version: '1.0.2',
      id: 'pseudomap#1.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'yallist#2.1.2',
    {
      name: 'yallist',
      version: '2.1.2',
      id: 'yallist#2.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'get-uri#2.0.3',
    {
      name: 'get-uri',
      version: '2.0.3',
      id: 'get-uri#2.0.3',
      dependencies: [
        'data-uri-to-buffer#2.0.1',
        'ftp#0.3.10',
        'debug#4.1.1',
        'extend#3.0.2',
        'file-uri-to-path#1.0.0',
        'readable-stream#3.4.0',
      ],
      error: null,
    },
  ],
  [
    'pac-resolver#3.0.0',
    {
      name: 'pac-resolver',
      version: '3.0.0',
      id: 'pac-resolver#3.0.0',
      dependencies: [
        'co#4.6.0',
        'degenerator#1.0.4',
        'ip#1.1.5',
        'netmask#1.0.6',
        'thunkify#2.1.2',
      ],
      error: null,
    },
  ],
  [
    'raw-body#2.4.0',
    {
      name: 'raw-body',
      version: '2.4.0',
      id: 'raw-body#2.4.0',
      dependencies: [
        'bytes#3.1.0',
        'http-errors#1.7.2',
        'iconv-lite#0.4.24',
        'unpipe#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'socks#2.3.2',
    {
      name: 'socks',
      version: '2.3.2',
      id: 'socks#2.3.2',
      dependencies: [
        'ip#1.1.5',
        'smart-buffer#4.0.2',
      ],
      error: null,
    },
  ],
  [
    'async#1.5.2',
    {
      name: 'async',
      version: '1.5.2',
      id: 'async#1.5.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ini#1.3.5',
    {
      name: 'ini',
      version: '1.3.5',
      id: 'ini#1.3.5',
      dependencies: [],
      error: null,
    },
  ],
  [
    'secure-keys#1.0.0',
    {
      name: 'secure-keys',
      version: '1.0.0',
      id: 'secure-keys#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'yargs#3.32.0',
    {
      name: 'yargs',
      version: '3.32.0',
      id: 'yargs#3.32.0',
      dependencies: [
        'camelcase#2.1.1',
        'cliui#3.2.0',
        'decamelize#1.2.0',
        'os-locale#1.4.0',
        'string-width#1.0.2',
        'window-size#0.1.4',
        'y18n#3.2.1',
      ],
      error: null,
    },
  ],
  [
    'vscode-languageserver-types#3.9.0',
    {
      name: 'vscode-languageserver-types',
      version: '3.9.0',
      id: 'vscode-languageserver-types#3.9.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'toml#3.0.0',
    {
      name: 'toml',
      version: '3.0.0',
      id: 'toml#3.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'os-tmpdir#1.0.2',
    {
      name: 'os-tmpdir',
      version: '1.0.2',
      id: 'os-tmpdir#1.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'for-own#1.0.0',
    {
      name: 'for-own',
      version: '1.0.0',
      id: 'for-own#1.0.0',
      dependencies: [
        'for-in#1.0.2',
      ],
      error: null,
    },
  ],
  [
    'is-plain-object#2.0.4',
    {
      name: 'is-plain-object',
      version: '2.0.4',
      id: 'is-plain-object#2.0.4',
      dependencies: [
        'isobject#3.0.1',
      ],
      error: null,
    },
  ],
  [
    'kind-of#3.2.2',
    {
      name: 'kind-of',
      version: '3.2.2',
      id: 'kind-of#3.2.2',
      dependencies: [
        'is-buffer#1.1.6',
      ],
      error: null,
    },
  ],
  [
    'shallow-clone#0.1.2',
    {
      name: 'shallow-clone',
      version: '0.1.2',
      id: 'shallow-clone#0.1.2',
      dependencies: [
        'is-extendable#0.1.1',
        'kind-of#2.0.1',
        'lazy-cache#0.2.7',
        'mixin-object#2.0.1',
      ],
      error: null,
    },
  ],
  [
    'lie#3.3.0',
    {
      name: 'lie',
      version: '3.3.0',
      id: 'lie#3.3.0',
      dependencies: [
        'immediate#3.0.6',
      ],
      error: null,
    },
  ],
  [
    'pako#1.0.9',
    {
      name: 'pako',
      version: '1.0.9',
      id: 'pako#1.0.9',
      dependencies: [],
      error: null,
    },
  ],
  [
    'readable-stream#2.3.6',
    {
      name: 'readable-stream',
      version: '2.3.6',
      id: 'readable-stream#2.3.6',
      dependencies: [
        'core-util-is#1.0.2',
        'inherits#2.0.3',
        'isarray#1.0.0',
        'process-nextick-args#2.0.0',
        'safe-buffer#5.1.2',
        'string_decoder#1.1.1',
        'util-deprecate#1.0.2',
      ],
      error: null,
    },
  ],
  [
    'set-immediate-shim#1.0.1',
    {
      name: 'set-immediate-shim',
      version: '1.0.1',
      id: 'set-immediate-shim#1.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'xmlbuilder#9.0.7',
    {
      name: 'xmlbuilder',
      version: '9.0.7',
      id: 'xmlbuilder#9.0.7',
      dependencies: [],
      error: null,
    },
  ],
  [
    'argparse#1.0.9',
    {
      name: 'argparse',
      version: '1.0.9',
      id: 'argparse#1.0.9',
      dependencies: [
        'sprintf-js#1.0.3',
      ],
      error: null,
    },
  ],
  [
    'esprima#4.0.1',
    {
      name: 'esprima',
      version: '4.0.1',
      id: 'esprima#4.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'asap#2.0.6',
    {
      name: 'asap',
      version: '2.0.6',
      id: 'asap#2.0.6',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ansi-align#2.0.0',
    {
      name: 'ansi-align',
      version: '2.0.0',
      id: 'ansi-align#2.0.0',
      dependencies: [
        'string-width#2.1.1',
      ],
      error: null,
    },
  ],
  [
    'camelcase#4.1.0',
    {
      name: 'camelcase',
      version: '4.1.0',
      id: 'camelcase#4.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'cli-boxes#1.0.0',
    {
      name: 'cli-boxes',
      version: '1.0.0',
      id: 'cli-boxes#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'term-size#1.2.0',
    {
      name: 'term-size',
      version: '1.2.0',
      id: 'term-size#1.2.0',
      dependencies: [
        'execa#0.7.0',
      ],
      error: null,
    },
  ],
  [
    'widest-line#2.0.1',
    {
      name: 'widest-line',
      version: '2.0.1',
      id: 'widest-line#2.0.1',
      dependencies: [
        'string-width#2.1.1',
      ],
      error: null,
    },
  ],
  [
    'ci-info#1.6.0',
    {
      name: 'ci-info',
      version: '1.6.0',
      id: 'ci-info#1.6.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'global-dirs#0.1.1',
    {
      name: 'global-dirs',
      version: '0.1.1',
      id: 'global-dirs#0.1.1',
      dependencies: [
        'ini#1.3.5',
      ],
      error: null,
    },
  ],
  [
    'is-path-inside#1.0.1',
    {
      name: 'is-path-inside',
      version: '1.0.1',
      id: 'is-path-inside#1.0.1',
      dependencies: [
        'path-is-inside#1.0.2',
      ],
      error: null,
    },
  ],
  [
    'package-json#4.0.1',
    {
      name: 'package-json',
      version: '4.0.1',
      id: 'package-json#4.0.1',
      dependencies: [
        'got#6.7.1',
        'registry-auth-token#3.4.0',
        'registry-url#3.1.0',
        'semver#5.7.0',
      ],
      error: null,
    },
  ],
  [
    'color-name#1.1.3',
    {
      name: 'color-name',
      version: '1.1.3',
      id: 'color-name#1.1.3',
      dependencies: [],
      error: null,
    },
  ],
  [
    'protocols#1.4.7',
    {
      name: 'protocols',
      version: '1.4.7',
      id: 'protocols#1.4.7',
      dependencies: [],
      error: null,
    },
  ],
  [
    'normalize-url#3.3.0',
    {
      name: 'normalize-url',
      version: '3.3.0',
      id: 'normalize-url#3.3.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'parse-path#4.0.1',
    {
      name: 'parse-path',
      version: '4.0.1',
      id: 'parse-path#4.0.1',
      dependencies: [
        'protocols#1.4.7',
        'is-ssh#1.3.1',
      ],
      error: null,
    },
  ],
  [
    'balanced-match#1.0.0',
    {
      name: 'balanced-match',
      version: '1.0.0',
      id: 'balanced-match#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'concat-map#0.0.1',
    {
      name: 'concat-map',
      version: '0.0.1',
      id: 'concat-map#0.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'onetime#2.0.1',
    {
      name: 'onetime',
      version: '2.0.1',
      id: 'onetime#2.0.1',
      dependencies: [
        'mimic-fn#1.2.0',
      ],
      error: null,
    },
  ],
  [
    'safer-buffer#2.1.2',
    {
      name: 'safer-buffer',
      version: '2.1.2',
      id: 'safer-buffer#2.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ansi-regex#3.0.0',
    {
      name: 'ansi-regex',
      version: '3.0.0',
      id: 'ansi-regex#3.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'cross-spawn#6.0.5',
    {
      name: 'cross-spawn',
      version: '6.0.5',
      id: 'cross-spawn#6.0.5',
      dependencies: [
        'nice-try#1.0.5',
        'path-key#2.0.1',
        'semver#5.7.0',
        'shebang-command#1.2.0',
        'which#1.3.1',
      ],
      error: null,
    },
  ],
  [
    'get-stream#4.1.0',
    {
      name: 'get-stream',
      version: '4.1.0',
      id: 'get-stream#4.1.0',
      dependencies: [
        'pump#3.0.0',
      ],
      error: null,
    },
  ],
  [
    'is-stream#1.1.0',
    {
      name: 'is-stream',
      version: '1.1.0',
      id: 'is-stream#1.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'npm-run-path#2.0.2',
    {
      name: 'npm-run-path',
      version: '2.0.2',
      id: 'npm-run-path#2.0.2',
      dependencies: [
        'path-key#2.0.1',
      ],
      error: null,
    },
  ],
  [
    'p-finally#1.0.0',
    {
      name: 'p-finally',
      version: '1.0.0',
      id: 'p-finally#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'strip-eof#1.0.0',
    {
      name: 'strip-eof',
      version: '1.0.0',
      id: 'strip-eof#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'es6-promise#4.2.6',
    {
      name: 'es6-promise',
      version: '4.2.6',
      id: 'es6-promise#4.2.6',
      dependencies: [],
      error: null,
    },
  ],
  [
    'ms#2.0.0',
    {
      name: 'ms',
      version: '2.0.0',
      id: 'ms#2.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'data-uri-to-buffer#2.0.1',
    {
      name: 'data-uri-to-buffer',
      version: '2.0.1',
      id: 'data-uri-to-buffer#2.0.1',
      dependencies: [
        '@types/node#8.9.5',
      ],
      error: null,
    },
  ],
  [
    'ftp#0.3.10',
    {
      name: 'ftp',
      version: '0.3.10',
      id: 'ftp#0.3.10',
      dependencies: [
        'xregexp#2.0.0',
        'readable-stream#1.1.9',
      ],
      error: null,
    },
  ],
  [
    'extend#3.0.2',
    {
      name: 'extend',
      version: '3.0.2',
      id: 'extend#3.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'file-uri-to-path#1.0.0',
    {
      name: 'file-uri-to-path',
      version: '1.0.0',
      id: 'file-uri-to-path#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'readable-stream#3.4.0',
    {
      name: 'readable-stream',
      version: '3.4.0',
      id: 'readable-stream#3.4.0',
      dependencies: [
        'inherits#2.0.3',
        'string_decoder#1.2.0',
        'util-deprecate#1.0.2',
      ],
      error: null,
    },
  ],
  [
    'co#4.6.0',
    {
      name: 'co',
      version: '4.6.0',
      id: 'co#4.6.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'degenerator#1.0.4',
    {
      name: 'degenerator',
      version: '1.0.4',
      id: 'degenerator#1.0.4',
      dependencies: [
        'esprima#3.1.3',
        'escodegen#1.9.1',
        'ast-types#0.9.9',
      ],
      error: null,
    },
  ],
  [
    'ip#1.1.5',
    {
      name: 'ip',
      version: '1.1.5',
      id: 'ip#1.1.5',
      dependencies: [],
      error: null,
    },
  ],
  [
    'netmask#1.0.6',
    {
      name: 'netmask',
      version: '1.0.6',
      id: 'netmask#1.0.6',
      dependencies: [],
      error: null,
    },
  ],
  [
    'thunkify#2.1.2',
    {
      name: 'thunkify',
      version: '2.1.2',
      id: 'thunkify#2.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'bytes#3.1.0',
    {
      name: 'bytes',
      version: '3.1.0',
      id: 'bytes#3.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'http-errors#1.7.2',
    {
      name: 'http-errors',
      version: '1.7.2',
      id: 'http-errors#1.7.2',
      dependencies: [
        'depd#1.1.2',
        'inherits#2.0.3',
        'setprototypeof#1.1.1',
        'statuses#1.5.0',
        'toidentifier#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'unpipe#1.0.0',
    {
      name: 'unpipe',
      version: '1.0.0',
      id: 'unpipe#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'smart-buffer#4.0.2',
    {
      name: 'smart-buffer',
      version: '4.0.2',
      id: 'smart-buffer#4.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'camelcase#2.1.1',
    {
      name: 'camelcase',
      version: '2.1.1',
      id: 'camelcase#2.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'cliui#3.2.0',
    {
      name: 'cliui',
      version: '3.2.0',
      id: 'cliui#3.2.0',
      dependencies: [
        'string-width#1.0.2',
        'strip-ansi#3.0.1',
        'wrap-ansi#2.1.0',
      ],
      error: null,
    },
  ],
  [
    'decamelize#1.2.0',
    {
      name: 'decamelize',
      version: '1.2.0',
      id: 'decamelize#1.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'os-locale#1.4.0',
    {
      name: 'os-locale',
      version: '1.4.0',
      id: 'os-locale#1.4.0',
      dependencies: [
        'lcid#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'string-width#1.0.2',
    {
      name: 'string-width',
      version: '1.0.2',
      id: 'string-width#1.0.2',
      dependencies: [
        'code-point-at#1.1.0',
        'is-fullwidth-code-point#1.0.0',
        'strip-ansi#3.0.1',
      ],
      error: null,
    },
  ],
  [
    'window-size#0.1.4',
    {
      name: 'window-size',
      version: '0.1.4',
      id: 'window-size#0.1.4',
      dependencies: [],
      error: null,
    },
  ],
  [
    'y18n#3.2.1',
    {
      name: 'y18n',
      version: '3.2.1',
      id: 'y18n#3.2.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'for-in#1.0.2',
    {
      name: 'for-in',
      version: '1.0.2',
      id: 'for-in#1.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'isobject#3.0.1',
    {
      name: 'isobject',
      version: '3.0.1',
      id: 'isobject#3.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-buffer#1.1.6',
    {
      name: 'is-buffer',
      version: '1.1.6',
      id: 'is-buffer#1.1.6',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-extendable#0.1.1',
    {
      name: 'is-extendable',
      version: '0.1.1',
      id: 'is-extendable#0.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'kind-of#2.0.1',
    {
      name: 'kind-of',
      version: '2.0.1',
      id: 'kind-of#2.0.1',
      dependencies: [
        'is-buffer#1.1.6',
      ],
      error: null,
    },
  ],
  [
    'lazy-cache#0.2.7',
    {
      name: 'lazy-cache',
      version: '0.2.7',
      id: 'lazy-cache#0.2.7',
      dependencies: [],
      error: null,
    },
  ],
  [
    'mixin-object#2.0.1',
    {
      name: 'mixin-object',
      version: '2.0.1',
      id: 'mixin-object#2.0.1',
      dependencies: [
        'for-in#0.1.8',
        'is-extendable#0.1.1',
      ],
      error: null,
    },
  ],
  [
    'immediate#3.0.6',
    {
      name: 'immediate',
      version: '3.0.6',
      id: 'immediate#3.0.6',
      dependencies: [],
      error: null,
    },
  ],
  [
    'core-util-is#1.0.2',
    {
      name: 'core-util-is',
      version: '1.0.2',
      id: 'core-util-is#1.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'isarray#1.0.0',
    {
      name: 'isarray',
      version: '1.0.0',
      id: 'isarray#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'process-nextick-args#2.0.0',
    {
      name: 'process-nextick-args',
      version: '2.0.0',
      id: 'process-nextick-args#2.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'safe-buffer#5.1.2',
    {
      name: 'safe-buffer',
      version: '5.1.2',
      id: 'safe-buffer#5.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'string_decoder#1.1.1',
    {
      name: 'string_decoder',
      version: '1.1.1',
      id: 'string_decoder#1.1.1',
      dependencies: [
        'safe-buffer#5.1.2',
      ],
      error: null,
    },
  ],
  [
    'util-deprecate#1.0.2',
    {
      name: 'util-deprecate',
      version: '1.0.2',
      id: 'util-deprecate#1.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'sprintf-js#1.0.3',
    {
      name: 'sprintf-js',
      version: '1.0.3',
      id: 'sprintf-js#1.0.3',
      dependencies: [],
      error: null,
    },
  ],
  [
    'execa#0.7.0',
    {
      name: 'execa',
      version: '0.7.0',
      id: 'execa#0.7.0',
      dependencies: [
        'cross-spawn#5.1.0',
        'get-stream#3.0.0',
        'is-stream#1.1.0',
        'npm-run-path#2.0.2',
        'p-finally#1.0.0',
        'signal-exit#3.0.2',
        'strip-eof#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'path-is-inside#1.0.2',
    {
      name: 'path-is-inside',
      version: '1.0.2',
      id: 'path-is-inside#1.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'got#6.7.1',
    {
      name: 'got',
      version: '6.7.1',
      id: 'got#6.7.1',
      dependencies: [
        'create-error-class#3.0.2',
        'duplexer3#0.1.4',
        'get-stream#3.0.0',
        'is-redirect#1.0.0',
        'is-retry-allowed#1.1.0',
        'is-stream#1.1.0',
        'lowercase-keys#1.0.1',
        'safe-buffer#5.1.2',
        'timed-out#4.0.1',
        'unzip-response#2.0.1',
        'url-parse-lax#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'registry-auth-token#3.4.0',
    {
      name: 'registry-auth-token',
      version: '3.4.0',
      id: 'registry-auth-token#3.4.0',
      dependencies: [
        'rc#1.2.8',
        'safe-buffer#5.1.2',
      ],
      error: null,
    },
  ],
  [
    'registry-url#3.1.0',
    {
      name: 'registry-url',
      version: '3.1.0',
      id: 'registry-url#3.1.0',
      dependencies: [
        'rc#1.2.8',
      ],
      error: null,
    },
  ],
  [
    'mimic-fn#1.2.0',
    {
      name: 'mimic-fn',
      version: '1.2.0',
      id: 'mimic-fn#1.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'nice-try#1.0.5',
    {
      name: 'nice-try',
      version: '1.0.5',
      id: 'nice-try#1.0.5',
      dependencies: [],
      error: null,
    },
  ],
  [
    'path-key#2.0.1',
    {
      name: 'path-key',
      version: '2.0.1',
      id: 'path-key#2.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'shebang-command#1.2.0',
    {
      name: 'shebang-command',
      version: '1.2.0',
      id: 'shebang-command#1.2.0',
      dependencies: [
        'shebang-regex#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'which#1.3.1',
    {
      name: 'which',
      version: '1.3.1',
      id: 'which#1.3.1',
      dependencies: [
        'isexe#2.0.0',
      ],
      error: null,
    },
  ],
  [
    'pump#3.0.0',
    {
      name: 'pump',
      version: '3.0.0',
      id: 'pump#3.0.0',
      dependencies: [
        'end-of-stream#1.4.1',
        'once#1.4.0',
      ],
      error: null,
    },
  ],
  [
    '@types/node#8.9.5',
    {
      name: '@types/node',
      version: '8.9.5',
      id: '@types/node#8.9.5',
      dependencies: [],
      error: 401,
    },
  ],
  [
    'xregexp#2.0.0',
    {
      name: 'xregexp',
      version: '2.0.0',
      id: 'xregexp#2.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'readable-stream#1.1.9',
    {
      name: 'readable-stream',
      version: '1.1.9',
      id: 'readable-stream#1.1.9',
      dependencies: [
        'core-util-is#1.0.2',
        'debuglog#0.0.2',
      ],
      error: null,
    },
  ],
  [
    'string_decoder#1.2.0',
    {
      name: 'string_decoder',
      version: '1.2.0',
      id: 'string_decoder#1.2.0',
      dependencies: [
        'safe-buffer#5.1.2',
      ],
      error: null,
    },
  ],
  [
    'esprima#3.1.3',
    {
      name: 'esprima',
      version: '3.1.3',
      id: 'esprima#3.1.3',
      dependencies: [],
      error: null,
    },
  ],
  [
    'escodegen#1.9.1',
    {
      name: 'escodegen',
      version: '1.9.1',
      id: 'escodegen#1.9.1',
      dependencies: [
        'estraverse#4.2.0',
        'esutils#2.0.2',
        'esprima#3.1.3',
        'optionator#0.8.2',
        'source-map#0.6.1',
      ],
      error: null,
    },
  ],
  [
    'ast-types#0.9.9',
    {
      name: 'ast-types',
      version: '0.9.9',
      id: 'ast-types#0.9.9',
      dependencies: [],
      error: null,
    },
  ],
  [
    'depd#1.1.2',
    {
      name: 'depd',
      version: '1.1.2',
      id: 'depd#1.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'setprototypeof#1.1.1',
    {
      name: 'setprototypeof',
      version: '1.1.1',
      id: 'setprototypeof#1.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'statuses#1.5.0',
    {
      name: 'statuses',
      version: '1.5.0',
      id: 'statuses#1.5.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'toidentifier#1.0.0',
    {
      name: 'toidentifier',
      version: '1.0.0',
      id: 'toidentifier#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'strip-ansi#3.0.1',
    {
      name: 'strip-ansi',
      version: '3.0.1',
      id: 'strip-ansi#3.0.1',
      dependencies: [
        'ansi-regex#2.1.1',
      ],
      error: null,
    },
  ],
  [
    'wrap-ansi#2.1.0',
    {
      name: 'wrap-ansi',
      version: '2.1.0',
      id: 'wrap-ansi#2.1.0',
      dependencies: [
        'string-width#1.0.2',
        'strip-ansi#3.0.1',
      ],
      error: null,
    },
  ],
  [
    'lcid#1.0.0',
    {
      name: 'lcid',
      version: '1.0.0',
      id: 'lcid#1.0.0',
      dependencies: [
        'invert-kv#1.0.0',
      ],
      error: null,
    },
  ],
  [
    'code-point-at#1.1.0',
    {
      name: 'code-point-at',
      version: '1.1.0',
      id: 'code-point-at#1.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-fullwidth-code-point#1.0.0',
    {
      name: 'is-fullwidth-code-point',
      version: '1.0.0',
      id: 'is-fullwidth-code-point#1.0.0',
      dependencies: [
        'number-is-nan#1.0.1',
      ],
      error: null,
    },
  ],
  [
    'for-in#0.1.8',
    {
      name: 'for-in',
      version: '0.1.8',
      id: 'for-in#0.1.8',
      dependencies: [],
      error: null,
    },
  ],
  [
    'cross-spawn#5.1.0',
    {
      name: 'cross-spawn',
      version: '5.1.0',
      id: 'cross-spawn#5.1.0',
      dependencies: [
        'lru-cache#4.1.5',
        'shebang-command#1.2.0',
        'which#1.3.1',
      ],
      error: null,
    },
  ],
  [
    'get-stream#3.0.0',
    {
      name: 'get-stream',
      version: '3.0.0',
      id: 'get-stream#3.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'create-error-class#3.0.2',
    {
      name: 'create-error-class',
      version: '3.0.2',
      id: 'create-error-class#3.0.2',
      dependencies: [
        'capture-stack-trace#1.0.1',
      ],
      error: null,
    },
  ],
  [
    'duplexer3#0.1.4',
    {
      name: 'duplexer3',
      version: '0.1.4',
      id: 'duplexer3#0.1.4',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-redirect#1.0.0',
    {
      name: 'is-redirect',
      version: '1.0.0',
      id: 'is-redirect#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'is-retry-allowed#1.1.0',
    {
      name: 'is-retry-allowed',
      version: '1.1.0',
      id: 'is-retry-allowed#1.1.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'lowercase-keys#1.0.1',
    {
      name: 'lowercase-keys',
      version: '1.0.1',
      id: 'lowercase-keys#1.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'timed-out#4.0.1',
    {
      name: 'timed-out',
      version: '4.0.1',
      id: 'timed-out#4.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'unzip-response#2.0.1',
    {
      name: 'unzip-response',
      version: '2.0.1',
      id: 'unzip-response#2.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'url-parse-lax#1.0.0',
    {
      name: 'url-parse-lax',
      version: '1.0.0',
      id: 'url-parse-lax#1.0.0',
      dependencies: [
        'prepend-http#1.0.4',
      ],
      error: null,
    },
  ],
  [
    'rc#1.2.8',
    {
      name: 'rc',
      version: '1.2.8',
      id: 'rc#1.2.8',
      dependencies: [
        'deep-extend#0.6.0',
        'ini#1.3.5',
        'minimist#1.2.0',
        'strip-json-comments#2.0.1',
      ],
      error: null,
    },
  ],
  [
    'shebang-regex#1.0.0',
    {
      name: 'shebang-regex',
      version: '1.0.0',
      id: 'shebang-regex#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'isexe#2.0.0',
    {
      name: 'isexe',
      version: '2.0.0',
      id: 'isexe#2.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'end-of-stream#1.4.1',
    {
      name: 'end-of-stream',
      version: '1.4.1',
      id: 'end-of-stream#1.4.1',
      dependencies: [
        'once#1.4.0',
      ],
      error: null,
    },
  ],
  [
    'debuglog#0.0.2',
    {
      name: 'debuglog',
      version: '0.0.2',
      id: 'debuglog#0.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'estraverse#4.2.0',
    {
      name: 'estraverse',
      version: '4.2.0',
      id: 'estraverse#4.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'esutils#2.0.2',
    {
      name: 'esutils',
      version: '2.0.2',
      id: 'esutils#2.0.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'optionator#0.8.2',
    {
      name: 'optionator',
      version: '0.8.2',
      id: 'optionator#0.8.2',
      dependencies: [
        'prelude-ls#1.1.2',
        'deep-is#0.1.3',
        'wordwrap#1.0.0',
        'type-check#0.3.2',
        'levn#0.3.0',
        'fast-levenshtein#2.0.6',
      ],
      error: null,
    },
  ],
  [
    'ansi-regex#2.1.1',
    {
      name: 'ansi-regex',
      version: '2.1.1',
      id: 'ansi-regex#2.1.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'invert-kv#1.0.0',
    {
      name: 'invert-kv',
      version: '1.0.0',
      id: 'invert-kv#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'number-is-nan#1.0.1',
    {
      name: 'number-is-nan',
      version: '1.0.1',
      id: 'number-is-nan#1.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'capture-stack-trace#1.0.1',
    {
      name: 'capture-stack-trace',
      version: '1.0.1',
      id: 'capture-stack-trace#1.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'prepend-http#1.0.4',
    {
      name: 'prepend-http',
      version: '1.0.4',
      id: 'prepend-http#1.0.4',
      dependencies: [],
      error: null,
    },
  ],
  [
    'deep-extend#0.6.0',
    {
      name: 'deep-extend',
      version: '0.6.0',
      id: 'deep-extend#0.6.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'minimist#1.2.0',
    {
      name: 'minimist',
      version: '1.2.0',
      id: 'minimist#1.2.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'strip-json-comments#2.0.1',
    {
      name: 'strip-json-comments',
      version: '2.0.1',
      id: 'strip-json-comments#2.0.1',
      dependencies: [],
      error: null,
    },
  ],
  [
    'prelude-ls#1.1.2',
    {
      name: 'prelude-ls',
      version: '1.1.2',
      id: 'prelude-ls#1.1.2',
      dependencies: [],
      error: null,
    },
  ],
  [
    'deep-is#0.1.3',
    {
      name: 'deep-is',
      version: '0.1.3',
      id: 'deep-is#0.1.3',
      dependencies: [],
      error: null,
    },
  ],
  [
    'wordwrap#1.0.0',
    {
      name: 'wordwrap',
      version: '1.0.0',
      id: 'wordwrap#1.0.0',
      dependencies: [],
      error: null,
    },
  ],
  [
    'type-check#0.3.2',
    {
      name: 'type-check',
      version: '0.3.2',
      id: 'type-check#0.3.2',
      dependencies: [
        'prelude-ls#1.1.2',
      ],
      error: null,
    },
  ],
  [
    'levn#0.3.0',
    {
      name: 'levn',
      version: '0.3.0',
      id: 'levn#0.3.0',
      dependencies: [
        'prelude-ls#1.1.2',
        'type-check#0.3.2',
      ],
      error: null,
    },
  ],
  [
    'fast-levenshtein#2.0.6',
    {
      name: 'fast-levenshtein',
      version: '2.0.6',
      id: 'fast-levenshtein#2.0.6',
      dependencies: [],
      error: null,
    },
  ],
];
