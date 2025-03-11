const express = require("express");
var jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  // const LoginData = req.body;
  // const { user_name, password } = LoginData;
  // const authUser = await UserModel.findOne({ user_name, password });
  // if (authUser) {
  //   var token = jwt.sign({ user_name, password }, "my_private_key");
  //   res.send({
  //     is_logged_in: true,
  //     token: `berer ${token}`,
  //     display_name: `${authUser.first_name} ${authUser.last_name}`,
  //   });
  // } else {
  //   res.send({ message: "User don't exist." });
  // }
});
router.get("/logout", (req, res) => {
  console.log("Logout");
  res.send("Logout");
});

module.exports = router;
