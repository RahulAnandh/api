const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
// const  dotenv = require ("dotenv");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var cors = require("cors");

// const PORT = process.env.PORT;
// const DB_URL = process.env.DB_URL;
const PORT = 3001;
const DB_URL = "mongodb://127.0.0.1:27017/finance";

const authRouters = require("./routes/auth");
const userRouters = require("./routes/user");
// dotenv.config()
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON http://localhost:${PORT}`);
});
app.use(cors());

mongoose
  .connect(DB_URL)
  .then(() => console.log(`SERVER CONNECTED TO ${DB_URL}`));

app.use("/", authRouters);
app.use("/users", userRouters);
