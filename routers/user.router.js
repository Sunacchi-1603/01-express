var express = require('express');
var shortid = require('shortid');
var router = express.Router();

var db = require('../db');
var controller = require('../controllers/user.controller')

router.get('/', controller.index);

router.get('/search',controller.search);

router.get('/create',controller.create);

router.get('/:id', controller.id);

router.post('/create',controller.portCreate);
module.exports = router