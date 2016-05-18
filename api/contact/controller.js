/*jslint node: true */
"use strict";

var mongoose = require('mongoose'),
   Mail = require('./model'),
  nodemailer = require('nodemailer'),
sesTransport = require('nodemailer-ses-transport');

exports.email = function (req, res) {
	var userEmail = req.body.email + ' <' + req.body.name + '>';
	var transport = nodemailer.createTransport(sesTransport({
		accessKeyId: "AKIAJGMQ47IYOYOLNOLA",
		secretAccessKey: "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",
		ServiceUrl: "email-smtp.us-east-1.amazonaws.com",
		rateLimit: 1
	}));

	var internalEmail = {
		from: 'Online Application <info@landonboardwalk.com>',
		to: 'Boardwalk Cafe Information <info@landonboardwalk.com>',
		subject: 'Online Contact Received',
		text: req.body.name + '\r\n' + req.body.email + '\r\n' + req.body.message
	};

	var clientEmail = {
		from: 'Boardwalk Cafe <info@landonboardwalk.com>',
		to: userEmail,
		subject: 'Online Contact Received',
		text: 'Thank you for contacting Boardwalk Cafe - We will respond to you ASAP.'
	};

	transport.sendMail(internalEmail, function(internalError, internalData){
		if(internalError){
			console.log(internalError);
		} else {
			console.log('Internal message sent');

			transport.sendMail(clientEmail, function(clientError, clientData){
				if(clientError){
					console.log(clientError);
				} else {
					console.log('Client message sent');
					var mail = {
						name: req.body.name,
						email: req.body.email,
						message: req.body.message,
						client_message_id: clientData.messageId,
						internal_message_id: internalData.messageId
					}
				}
			});
		}
	});
};
