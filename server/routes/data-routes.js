const express = require('express');
const DefaultModel = require('../models/default-model');
const defaultController = require('../controllers/default-controller')(DefaultModel);

/*  Routing
    ======================================================== */
const router = () => {
  const dataRouter = express.Router();
  dataRouter.route('/')
    .get(defaultController.get);
  return dataRouter;
};

module.exports = router;
