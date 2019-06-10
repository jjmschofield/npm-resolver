const { NpmClient } = require('../lib/NpmClient');
const { Resolver } = require('../lib/Resolver');

const { log, LOG_EVENTS } = require('../../../lib/logger/logger');
const { respond, respondUnexpectedError, respondBadRequest } = require('../../../lib/express/utils/responseUtils');

const get = async (req, res) => {
  try {
    const params = {
      name: req.params.name,
      version: req.query.version || 'latest',
    };

    if (!validators.get(params)) {
      respondBadRequest(req, res);
      return;
    }

    const client = new NpmClient();

    const resolver = new Resolver({ client });

    const packages = await resolver.resolve(params.name, params.version);

    respond(req, res, { packages: Array.from(packages.values()) });
  }
  catch (error) {
    log.error(LOG_EVENTS.ERROR.UNEXPECTED_ERROR, { error });
    respondUnexpectedError(req, res);
  }
};

const validators = {
  get: ({ name, version }) => {
    if (typeof name !== 'string') return false;
    if (name.length > 50) return false;
    if (typeof version !== 'string') return false;
    if (version.length > 50) return false;
    // TODO - this validation still needs to be hardened furhter
    return true;
  },
};

module.exports = {
  get,
};
