const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*  Schema for 'defaultmodels' collection
    ============================================================ */
const defaultSchema = new Schema({
  message: {
    type: String,
  },
});

module.exports = mongoose.model('Defaultmodel', defaultSchema);
