"use strict";

var express = require('express');
var controller = require('./api.project.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:clean', controller.show);

module.exports = router;
