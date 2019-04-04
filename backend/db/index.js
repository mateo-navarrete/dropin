const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/dropin_data")

module.exports = { db }
