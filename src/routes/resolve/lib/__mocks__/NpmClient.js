const { Package } = require('../../models/Package');

class NpmClient {
  constructor({ registry = 'https://registry.npmjs.org' }) {
    this.registry = registry;
    this.getPackage = jest.fn().mockResolvedValue(new Package({}));
    this.resolveVersion = jest.fn().mockResolvedValue(null);
    this.cachedRequest = jest.fn().mockResolvedValue({});
  }
}

module.exports = {
  NpmClient,
};
