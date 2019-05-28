const { NpmClient } = require('./NpmClient');

describe('integration test', () => {
  it('should get express 4.17.0 a package correctly', async () => {
    const client = new NpmClient({});

    const result = await client.getPackage('express', '4.17.0');

    expect(result).toEqual(expectedExpressFixture);
  });

  it('should get snyk 1.168.0 a package correctly', async () => {
    const client = new NpmClient({});

    const result = await client.getPackage('snyk', '1.168.0');

    expect(result).toEqual(expectedSnykFixture);
  });
});

const expectedExpressFixture = {
  name: 'express',
  version: '4.17.0',
  id: 'express@4.17.0',
  dependencies: [
    'accepts@1.3.7',
    'array-flatten@1.1.1',
    'body-parser@1.19.0',
    'content-disposition@0.5.3',
    'content-type@1.0.4',
    'cookie@0.4.0',
    'cookie-signature@1.0.6',
    'debug@2.6.9',
    'depd@1.1.2',
    'encodeurl@1.0.2',
    'escape-html@1.0.3',
    'etag@1.8.1',
    'finalhandler@1.1.2',
    'fresh@0.5.2',
    'merge-descriptors@1.0.1',
    'methods@1.1.2',
    'on-finished@2.3.0',
    'parseurl@1.3.3',
    'path-to-regexp@0.1.7',
    'proxy-addr@2.0.5',
    'qs@6.7.0',
    'range-parser@1.2.1',
    'safe-buffer@5.1.2',
    'send@0.17.1',
    'serve-static@1.14.1',
    'setprototypeof@1.1.1',
    'statuses@1.5.0',
    'type-is@1.6.18',
    'utils-merge@1.0.1',
    'vary@1.1.2',
  ],
};

Object.freeze(expectedExpressFixture);

const expectedSnykFixture = {
  name: 'snyk',
  version: '1.168.0',
  id: 'snyk@1.168.0',
  dependencies: [
    '@snyk/dep-graph@1.4.1',
    '@snyk/gemfile@1.2.0',
    'abbrev@1.1.1',
    'ansi-escapes@4.1.0',
    'chalk@2.4.2',
    'configstore@3.1.2',
    'debug@3.2.6',
    'diff@4.0.1',
    'git-url-parse@11.1.2',
    'glob@7.1.4',
    'inquirer@6.3.1',
    'lodash@4.17.11',
    'needle@2.4.0',
    'opn@5.5.0',
    'os-name@3.1.0',
    'proxy-agent@3.1.0',
    'proxy-from-env@1.0.0',
    'semver@6.1.1',
    'snyk-config@2.2.1',
    'snyk-docker-plugin@1.25.0',
    'snyk-go-plugin@1.7.2',
    'snyk-gradle-plugin@2.10.4',
    'snyk-module@1.9.1',
    'snyk-mvn-plugin@2.3.0',
    'snyk-nodejs-lockfile-parser@1.13.0',
    'snyk-nuget-plugin@1.10.0',
    'snyk-php-plugin@1.5.3',
    'snyk-policy@1.13.5',
    'snyk-python-plugin@1.10.1',
    'snyk-resolve@1.0.1',
    'snyk-resolve-deps@4.0.3',
    'snyk-sbt-plugin@2.2.0',
    'snyk-tree@1.0.0',
    'snyk-try-require@1.3.1',
    'source-map-support@0.5.12',
    'tempfile@2.0.0',
    'then-fs@2.0.0',
    'update-notifier@2.5.0',
    'uuid@3.3.2',
  ],
};

Object.freeze(expectedSnykFixture);
