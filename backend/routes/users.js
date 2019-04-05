var express = require('express');
var router = express.Router();

var db = require('../db/queries/get');

/* GET users listing. */
router.get('/', db.getAllUsers);
router.post('/signup', db.signup);


module.exports = router;
