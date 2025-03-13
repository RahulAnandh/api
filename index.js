const express = require("express");
const app = express();
var bodyParser = require("body-parser");
// const  dotenv = require ("dotenv");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var cors = require("cors");
const pool = require("./db");

// const PORT = process.env.PORT;
// const DB_URL = process.env.DB_URL;
const PORT = 3001;
const authRouters = require("./routes/auth");
const userRouters = require("./routes/user");
const employeeRouters = require("./routes/employee");

// dotenv.config()
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON http://localhost:${PORT}`);
});
pool.connect().then(() => {
  console.log("DATABASE CONNECTED.");
});
app.use("/setup", () => {
  // pool.query("CREATE DATABASE db_inari");
  pool.query(
    "CREATE TABLE tb_employee(id SERIAL PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), house_name VARCHAR(50), zip_code VARCHAR(10), town VARCHAR(50), city VARCHAR(50), state VARCHAR(50), country VARCHAR(50), bank_account_no VARCHAR(20), bank_name VARCHAR(50), bank_location VARCHAR(50), ifsc_code VARCHAR(10), email VARCHAR(50), contact VARCHAR(20), emergancy_contact VARCHAR(50))"
  );
});
app.use(cors());
app.use("/", authRouters);
app.use("/users", userRouters);
app.use("/employee", employeeRouters);
