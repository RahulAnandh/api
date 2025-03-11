const { Pool } = require("pg");
const pool = new Pool({
  host: "postgres",
  port: "5432",
  user: "root",
  password: "root",
  db: "db_inari", //inari means prosperity
});
module.exports = pool;
