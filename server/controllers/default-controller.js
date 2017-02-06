const defaultController = (DefaultModel) => {
  const get = (req, res) => {
    DefaultModel.findOne().exec((err, defaultData) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(defaultData.message);
      }
    });
  };

  return {
    get,
  };
};

module.exports = defaultController;
