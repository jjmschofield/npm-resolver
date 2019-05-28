const { resolvePackage } = require('../models/Package');

/**
 * @property { NpmClient } client
 * @property { Set<string> } queue
 * @property { Map<string,Package> } packages
 */
class Resolver {
  /**
   * @param { NpmClient }client
   */
  constructor({ client } = {}) {
    this.client = client;
    this.queue = new Set();
    this.packages = new Map();
  }

  /**
   * Resets queue and packages and then begins resolving dependencies of the provided package.
   *
   * Operates concurrently but does not constrain that concurrency. Currently only lightly tested.
   *
   * Process:
   * - Getting package for name and version provided
   * - Add resolved package to package map
   * - Add dependencies to queue
   * - While queue has entries
   *   - Resolve each dependency package (entire queue at once currently)
   *   - Add each resolved package to package map
   *   - If dependencies are not in queue or package map add each dependency to the queue
   * - When done, return package map
   * @param name
   * @param version
   * @returns {Promise<Map<string,Package>>}
   */
  async resolve(name, version) {
    try {
      this.packages = new Map();
      this.queue = new Set();

      const srcPkg = await this.client.getPackage(name, version);

      this.packages.set(srcPkg.id, srcPkg);

      this.addToQueue(srcPkg.dependencies);

      await this.processQueue();

      return this.packages;
    }
    catch (error) {
      throw error;
    }
  }

  /**
   * Kicks off the process queue without concurrency control
   * @returns {Promise<void>}
   */
  async processQueue() {
    while (this.queue.size > 0) {
      const packageIds = Array.from(this.queue); // TODO - extend here to add concurrency control
      await this.batchProcessor(packageIds);
    }
  }

  /**
   * Resolves a package for each package Id
   * @param {string[]} packageIds
   * @returns {Promise<void>}
   */
  async batchProcessor(packageIds) {
    const requests = packageIds.map((id) => {
      const pkg = resolvePackage(id);
      return this.client.getPackage(pkg.name, pkg.version);
    });

    const results = await Promise.all(requests);

    results.forEach((pkg) => {
      this.packages.set(pkg.id, pkg);
      this.addToQueue(pkg.dependencies);
    });

    packageIds.forEach((id) => {
      this.queue.delete(id);
    });
  }

  /**
   * Adds provided ids to the queue if they are not in the queue or package map
   * @param {string[]} dependencies
   */
  addToQueue(dependencies) {
    dependencies.forEach((id) => {
      if (!this.queue.has(id) && !this.packages.has(id)) {
        this.queue.add(id);
      }
    });
  }
}

module.exports = {
  Resolver,
};
