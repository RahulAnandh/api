const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "root",
  database: "db_inari", //inari means prosperity
});
module.exports = pool;
