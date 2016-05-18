/*jslint node: true */
"use strict";

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MailSchema = new Schema({
	name: String,
	email: String,
	message: String,
	client_message_id: String,
	internal_message_id: String
});

module.exports = mongoose.model('Mail', MailSchema);