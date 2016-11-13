/*jslint node: true */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	category: String,
	clean: String,
	description: String,
	images: Array,
	location: {
		city: String,
		country: String,
		neighbourhood: String,
		province: String
	},
	tags: Array,
	thumb: Object,
	title: String,
	year: String
});

ProjectSchema
	.index({ clean: 1 })
	.pre('save', function (next) {
		this.clean = (this.detail.title.replace(/[\s:,!?]/g, '-')).replace("--", '-').toLowerCase();
		next();
	});

module.exports = mongoose.model('Project', ProjectSchema);