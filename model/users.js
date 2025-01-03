const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  first_name: {
    type: String,
    required: true,
  },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
