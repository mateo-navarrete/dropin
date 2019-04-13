const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const init = require('./passport');
const helpers = require('./helpers');

const db = require('..');

passport.use(
  new LocalStrategy(
    { usernameField: 'user_name', passwordField: 'password' },
    (user_name, password, done) => {
      console.log(user_name);
      db.one('SELECT * FROM users WHERE user_name = ${user_name}', {
        user_name: user_name,
      })
        .then(user => {
          if (!helpers.comparePass(password, user.password_digest)) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        })
        .catch(err => {
          return done(err);
        });
    }
  )
);

init();

module.exports = passport;
