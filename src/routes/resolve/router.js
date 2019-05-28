const express = require('express');

const resolveCtrl = require('./controllers/resolve');

const create = () => {
  const router = express.Router();
  router.get('/:name', resolveCtrl.get);
  return router;
};

module.exports = {
  create,
};
