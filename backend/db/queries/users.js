const db = require('..');

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

// deletes user and corresponding pins as well
function deleteUser(req, res, next) {
  db.any(`delete from users where id = ${req.body.id}`)
    .then(function (data) {
      res.send({
        status: 'success',
        message: 'deleted user',
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function editUser(req, res, next) {
  db.any(
    'update users set username = ${username}, password_digest = ${password} where id = ${id}',
    req.body
  )
    .then(function (data) {
      res.send({
        status: 'success',
        data: data,
        message: 'edited user',
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getAllDrops(req, res, next) {
  db.any('select * from drops')
    .then(function (data) {
      res.send({
        status: 'success',
        data: data,
        message: 'Retrieved All Drops',
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getOneDrop(req, res, next) {
  db.any(`select * from drops where id = ${req.body.id}`)
    .then(function (data) {
      res.send({
        status: 'success',
        data: data,
        message: 'Retrieved Drop',
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getAllPins(req, res, next) {
  db.any('select * from pins')
    .then(function (data) {
      res.send({
        status: 'success',
        data: data,
        message: 'Retrieved All Pins',
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getOnePin(req, res, next) {
  db.any(`select * from pins where id = ${req.body.id}`)
    .then(function (data) {
      res.send({
        status: 'success',
        data: data,
        message: 'Retrieved Drop',
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getAllUserPins(req, res, next) {
  db.any(`select * from pins where user_id = ${req.body.userId}`)
    .then(function (data) {
      res.send({
        status: 'success',
        data: data,
        message: 'Here are the drops from the user you requested',
      });
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getAllDropPins(req, res, next) {
  db.any(`select * from pins where drop_id = ${req.body.dropId}`)
    .then(function(data) {
      res.send({
        status: "success",
        data: data,
        message: "Here are the all the pins in the drop/category you selected"
      });
    })
    .catch(function(err) {
      console.log(err);
    });
}

module.exports = {
  getAllUsers,
  signup,
  deleteUser,
  editUser
};
