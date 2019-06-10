class Resolver {
  constructor({ client }) {
    this.client = client;
    this.queue = new Set();
    this.packages = new Map();
    this.resolve = jest.fn().mockResolvedValue(this.packages);
    this.processQueue = jest.fn().mockResolvedValue(undefined);
    this.batchProcessor = jest.fn().mockResolvedValue(undefined);
    this.addToQueue = jest.fn();
  }
}

module.exports = {
  Resolver,
};
