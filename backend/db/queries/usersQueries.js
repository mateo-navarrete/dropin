const db = require('..');

const authHelpers = require('../auth/helpers');

const createUser = (req, res, next) => {
  const rb = req.body;
  const hash = authHelpers.createHash(rb.password_digest);
  const userObj = {
    user_name: rb.user_name,
    password_digest: hash,
    birth_date: rb.birth_date,
    profile_photo: rb.profile_photo || '',
    instagram_id: rb.instagram_id || '',
    linkedin_id: rb.linkedin_id || '',
  };

  db.none(
    'INSERT INTO users (user_name, password_digest, birth_date, profile_photo, instagram_id, linkedin_id) VALUES (${user_name}, ${password_digest}, ${birth_date}, ${profile_photo}, ${instagram_id}, ${linkedin_id})',
    userObj
  )
    .then(() => {
      res.send({
        status: 'success',
        message: `created user: ${JSON.stringify(userObj)}`,
      });
    })
    .catch(err => next(err));
};

const getUser = (req, res, next) => {
  db.any('SELECT * FROM users WHERE id=$1', +req.params.id)
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got user: ${req.params.id}`,
      });
    })
    .catch(err => next(err));
};

const getUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got all users`,
      });
    })
    .catch(err => next(err));
};

const updateUser = (req, res, next) => {
  const rb = req.body;
  const userObj = {
    user_id: rb.user_id,
    profile_photo: rb.profile_photo || '',
    instagram_id: rb.instagram_id || '',
    linkedin_id: rb.linkedin_id || '',
  };
  db.none(
    'UPDATE users SET profile_photo=${profile_photo}, instagram_id=${instagram_id}, linkedin_id=${linkedin_id} WHERE id=${user_id}',
    userObj
  )
    .then(() => {
      res.send({
        status: 'success',
        message: `updated user: ${JSON.stringify(userObj)}`,
      });
    })
    .catch(err => next(err));
};

const deleteUser = (req, res, next) => {
  db.none('DELETE FROM users WHERE id=$1', +req.params.id)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: `deleted user: ${req.params.id}`,
      });
    })
    .catch(err => next(err));
};

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send('log out success');
}

function loginUser(req, res) {
  res.json({ message: req.user.user_name + ' is now logged in.' });
}

function isLoggedIn(req, res) {
  console.log(req);

  if (req.user) {
    res.json({ message: req.user + ' is already logged in.' });
  } else {
    res.json({ message: 'No one is logged in.' });
  }
}

module.exports = {
  createUser,
  loginUser,
  isLoggedIn,
  logoutUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};

/*
TODO:
loginUser
isLoggedIn
logoutUser
*/
