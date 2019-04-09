const passport = require("passport");

const db = require('..');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.user_name);
  });

  passport.deserializeUser((user_name, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        done(null, user.username);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
