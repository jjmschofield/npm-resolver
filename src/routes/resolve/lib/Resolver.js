const { resolvePackage } = require('../models/Package');

class Resolver {
  constructor({ client } = {}) {
    this.client = client;
    this.queue = new Set();
    this.packages = new Map();
  }

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

  async processQueue() {
    while (this.queue.size > 0) {
      const packageIds = Array.from(this.queue); // TODO - extend here to add concurrency control
      await this.batchProcessor(packageIds);
    }
  }

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
