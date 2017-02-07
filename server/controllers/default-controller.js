const defaultController = (DefaultModel) => {
  const get = (req, res) => {
    DefaultModel.findOne().exec()
    .then((defaultData) => {
      res.json(defaultData.message);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  };

  return {
    get,
  };
};

module.exports = defaultController;

