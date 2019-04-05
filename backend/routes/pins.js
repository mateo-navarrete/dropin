var express = require('express');
var router = express.Router();

var db = require('../db/queries/pins');

/* GET users listing. */
router.get('/', db.getAllPins);
router.post('/one', db.getOnePin);

module.exports = router;