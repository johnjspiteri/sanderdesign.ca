/*jslint node: true */
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Base64 = require('./base64.model');

var PortfolioSchema = new Schema({
	clean: String,
	detail: {
		categories: Array,
		designer: String,
		expansion_has: {
			state: Boolean,
			reference: String,
		},
		expansion_is: {
			state: Boolean,
			reference: String,
			title: String,
		},
		mechanics: Array,
		player_age: String,
		players_max: Number,
		players_min: Number,
		publisher: String,
		rating: Number,
		recommended_players: Number,
		sub_categories: Array,
		thumb: Base64.schema,
		time_max: Number,
		time_min: Number,
		title: String,
		year: Number
	}
});

PortfolioSchema
	.index({ clean: 1 })
	.pre('save', function (next) {
		this.clean = (this.detail.title.replace(/[\s:,!?]/g, '-')).replace("--", '-').toLowerCase();
		next();
	});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
