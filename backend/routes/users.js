var express = require('express');
var router = express.Router();

var db = require('../db/get');

/* GET users listing. */
router.get('/', db.getAllUsers);
router.get('/drops', db.getAllDrops);
router.post('/signup', db.signup);


module.exports = router;
