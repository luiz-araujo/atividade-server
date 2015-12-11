'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

let schema = new Schema({
	name: {type: String, required: true},
	created: {type: Date, set: Date.now}
});

module.exports = mongoose.model('categories', schema);