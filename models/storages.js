var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storagesSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Storages', storagesSchema);