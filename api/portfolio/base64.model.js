/*jslint node: true */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Base64Schema = new Schema({
	base64: String,
	filename: String,
	filesize: Number,
	filetype: String
});

module.exports = mongoose.model('Base64', Base64Schema);
