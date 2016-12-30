var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    date: {type: String, required: true},
    sort: {type: Number, required: true},
    title: {type: String, required: true},
    detail: {type: String, required: true},
    dollar: {type: Number, required: true}
});

module.exports = mongoose.model('Info',schema);