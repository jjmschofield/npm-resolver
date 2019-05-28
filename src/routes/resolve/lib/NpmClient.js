const axios = require('axios');
const semver = require('semver');
const { Package, resolvePackageId } = require('../models/Package');

/**
 * Provides request functionality into the NPM API.
 *
 * Caches each request in a simple map held in memory
 *
 * @property registry Full URL for the registry which the client will talk to
 * @property requestCache {Map<string, object>} Cache of requests made by the client
 */
class NpmClient {
  /**
   * @param {string} registry Full URL for the registry which the client should talk to
   */
  constructor({ registry = 'https://registry.npmjs.org' }) {
    this.registry = registry;
    this.requestCache = new Map();
  }

  /**
   * @param {string} name
   * @param {string} version
   * @returns {Promise<Package>}
   */
  async getPackage(name, version) {
    try {
      const response = await this.cachedRequest(`${this.registry}/${name}/${version}`);

      const pkg = Package.FromNpmResponse(response);

      if (response.dependencies) {
        const resolutionRequests = Object.keys(response.dependencies).map((depName) => {
          return this.resolveVersion(depName, response.dependencies[depName]);
        });

        const resolutions = await Promise.all(resolutionRequests);

        pkg.dependencies = resolutions.map((resolution) => {
          return resolvePackageId(resolution.name, resolution.version);
        });
      }

      return pkg;
    }
    catch (error) {
      if (error.response && error.response.status === 401) {
        const pkg = new Package({ name, version });
        pkg.error = 401;
        return pkg;
      }
      throw error;
    }
  }

  /**
   * @param {string} name
   * @param {string} version
   * @returns {Promise<{name: string, version: string}|null>}
   */
  async resolveVersion(name, version) {
    const response = await this.cachedRequest(`${this.registry}/${name}`);

    const versions = Object.keys(response.versions);
    versions.sort().reverse();

    for (const key in versions) {
      const testVersion = versions[key];

      if (semver.valid(testVersion) && semver.satisfies(testVersion, version)) {
        return {
          name,
          version: testVersion,
        };
      }
    }

    return null;
  }

  /**
   * @param {string} url
   * @returns {Promise<Promise<*|*>|any>}
   */
  async cachedRequest(url) {
    if (this.requestCache.has(url)) {
      return this.requestCache.get(url);
    }

    const response = await axios.get(url);

    this.requestCache.set(url, response.data);

    return response.data;
  }
}

module.exports = {
  NpmClient,
};
