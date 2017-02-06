const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const defaultSchema = new Schema({
  message: {
    type: String
  }
});

module.exports = mongoose.model('Defaultmodel', defaultSchema);
