"use strict";

function handleError(res, err) {
	return res.send(500, err);
}

var mongoose = require('mongoose');
var Project = require('./../../model/project');

exports.index = function (req, res) {
	Project.find({}, {"images": 0}, function (err, data) {
		if(err) {return handleError(res,err);}
		return res.status(200).json(data);
	});
};

exports.show = function (req, res) {
	Project.findOne({clean:req.params.id}, {}, function (err, data) {
		if(err) { return handleError(res, err); }
		if(!data) { return res.sendStatus(404); }
		return res.json(data);
	});
};