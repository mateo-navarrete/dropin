const pgp = require('pg-promise')({});
const db = pgp(
  process.env.DATABASE_URL ||
    'postgres://postgres:codenode@localhost/dropin_data'
);

module.exports = db;
