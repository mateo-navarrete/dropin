const express = require('express');
const router = express.Router();
const passport = require("../db/auth/local");
const { loginRequired } = require("../db/auth/helpers");
const {
  createUser,
  loginUser,
  isLoggedIn,
  logoutUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require('../db/queries/usersQueries');

router.post('/new', createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);
router.get('/:id', getUser);
router.get('/', getUsers);
router.put('/', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
