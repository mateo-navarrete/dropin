var express = require('express');
var router = express.Router();

var db = require('../db/get');

/* GET users listing. */
router.get('/', db.getAllUsers);


module.exports = router;
