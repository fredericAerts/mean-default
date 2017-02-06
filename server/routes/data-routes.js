var express = require('express');

/*  Routing
    ======================================================== */
var router = function (DefaultModel) {
    const dataRouter = express.Router();
    const defaultController = require('../controllers/default-controller')(DefaultModel);
    dataRouter.route('/')
      .get(defaultController.get);
    return dataRouter;
};

module.exports = router;
