const { db } = require('../index.js');

function getAllUsers(req, res, next) {
  db.any('select username from users')
    .then(function (data) {
      res.send({
        status: 'success',
        data: data,
        message: 'Retrieved All users',
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function signup(req, res, next) {
  console.log(req.body);
  db.none(
    'INSERT INTO users (username, password_digest) VALUES (${username}, ${password})',
    { username: req.body.username, password: req.body.password }
  )
    .then(() => {
      res.status(200).json({
        message: 'Registration successful for ',
        username: req.body.username,
      });
    })
    .catch(err => {
      console.log(err, 'signup err');
      res.status(500).json({
        message: err,
      });
    });
}

function deleteUser(req, res, next) {
  db.any(`delete from users where id = ${req.body.id}`)
    .then(function (data) {
      res.send({
        status: 'success',
        message: 'deleted user' + req.body.id
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function editUser(req, res, next) {
  db.any("update users set username = ${username}, password_digest = ${password} where id = ${id}", req.body)
    .then(function (data) {
      res.send({
        status: 'success',
        data: data,
        message: 'edited user'
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

module.exports = {
  getAllUsers,
  signup,
  deleteUser,
  editUser
};
