const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // http://mongoosejs.com/docs/promises.html
const Schema = mongoose.Schema;

/*  Schema for 'defaultmodels' collection
    ============================================================ */
const defaultSchema = new Schema({
  message: {
    type: String,
  },
});

module.exports = mongoose.model('Defaultmodel', defaultSchema);
