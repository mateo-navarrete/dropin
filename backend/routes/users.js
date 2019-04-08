const express = require('express');
const router = express.Router();

const db = require('../db/queries/users');

/* GET users listing. */
router.get('/', db.getAllUsers);
router.post('/signup', db.signup);
router.post('/delete', db.deleteUser);
router.post('/edit', db.editUser);

// router.get('/', db.getAllDrops);
// router.post('/one', db.getOneDrop);

module.exports = router;
