/**
 * A class representing a package from NPM.
 * @property {string} name
 * @property {string} version
 * @property {string} id In the format <name>@<version>
 * @property {string[]} dependencies List of dependent ID's
 */
class Package {
  /**
   * @param {string} name
   * @param {string} version
   * @param {string[]} dependencies
   */
  constructor({ name, version, dependencies = [] }) {
    this.name = name;
    this.version = version;
    this.id = resolvePackageId(name, version);
    this.dependencies = dependencies;
  }

  /**
   * Creates a package from a destructed NPM API response.
   * Note: Dependencies should be resolved and then applied to this model separately.
   * @param {string} name
   * @param {string} version
   * @returns {Package}
   * @constructor
   */
  static FromNpmResponse({ name, version }) {
    return new Package({
      name,
      version,
    });
  }
}

/**
 * Creates a package ID from name and version
 * @param {string} name
 * @param {string} version
 * @returns {string}
 */
const resolvePackageId = (name, version) => {
  return `${name}@${version}`;
};

/**
 * Reverts a package name and version from a given package ID
 * @param {string} id
 * @returns {{name: string, version: string}}
 */
const resolvePackage = (id) => {
  const split = id.split('@');
  return {
    name: split[0],
    version: split[1],
  };
};

module.exports = {
  Package,
  resolvePackageId,
  resolvePackage,
};
