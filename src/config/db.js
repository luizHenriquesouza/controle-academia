const { Pool } = require("pg")

module.exports = new Pool({
  user: 'postgres',
  password: "rique1369",
  host: "localhost",
  port: 5432,
  database: "gymmanager"
})