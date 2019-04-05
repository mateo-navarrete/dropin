var express = require('express');
var router = express.Router();

var db = require('../db/queries/get');

/* GET users listing. */
router.get('/', db.getAllDrops);
router.post('/one', db.getOneDrop);

module.exports = router;
