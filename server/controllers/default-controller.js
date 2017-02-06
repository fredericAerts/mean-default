const defaultController = function(DefaultModel){

  const get = function(req,res){
    DefaultModel.findOne().exec(function(err, defaultData) {
      console.log(DefaultModel);
      if(err)
        res.status(500).send(err);
      else {
        res.json(defaultData.message);
      }
    });
  }

  return {
    get,
  }
}

module.exports = defaultController;
