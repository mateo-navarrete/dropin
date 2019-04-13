const passport = require('passport');

const db = require('..');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.user_name);
  });

  passport.deserializeUser((user_name, done) => {
    db.one('SELECT * FROM users WHERE user_name = ${user_name}', {
      user_name: user_name,
    })
      .then(user => {
        // console.log('@deserializeUser', user);
        done(null, user.user_name);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
