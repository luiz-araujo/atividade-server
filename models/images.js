'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

let schema = new Schema({
	url: { type: String, required: true},
	categories: { type: Array, required: true},
	tags: { type: Array}
});

module.exports = mongoose.model('images', schema);