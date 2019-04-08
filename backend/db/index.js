const pgp = require('pg-promise')({});
const db = pgp('postgres://postgres:codenode@localhost/dropin_data');

module.exports = db;
