const db = require('..');
const authHelpers = require('../auth/helpers');

const createUser = (req, res, next) => {
  const rb = req.body;
  const hash = authHelpers.createHash(rb.password);
  const userObj = {
    user_name: rb.user_name,
    password: hash,
    email: rb.email
    // password_digest: hash,
  };

  // 'INSERT INTO users (user_name, password_digest, birth_date, profile_photo, instagram_id, linkedin_id) VALUES (${user_name}, ${password_digest}, ${birth_date}, ${profile_photo}, ${instagram_id}, ${linkedin_id})',

  db.none(
    'INSERT INTO users (user_name, password_digest, email) VALUES (${user_name}, ${password}, ${email})',
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
  let hash = authHelpers.createHash(rb.new_password);
  const userObj = {
    user_id: rb.user_id,
    new_password: hash
  };
  db.none(
    'UPDATE users SET password_digest=${new_password} WHERE id=${user_id}',
    userObj
  )
    .then(() => {
      res.send({
        status: 'success',
        message: `updated user: ${JSON.stringify(userObj)}`
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

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send('log out success');
};

const loginUser = (req, res) => {
  // res.json({ message: req.user.user_name + ' is now logged in.' });
  //TODO: REMOVE ^^ ?
  res.json(req.user);
};

const isLoggedIn = (req, res) => {
  res.json({ user_name: req.user || null });

  // if (req.user) {
  //   res.json({ user_name: req.user });
  // } else {
  //   res.json({ user_name: null });
  // }
};

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
