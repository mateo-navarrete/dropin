var express = require('express');
var router = express.Router();

var db = require('../db/queries/users');

/* GET users listing. */
router.get('/', db.getAllUsers);
router.post('/signup', db.signup);
router.post('/delete', db.deleteUser);
router.post('/edit', db.editUser);

module.exports = router;
