const express = require("express");
const router = express.Router();
const UserModel = require("../model/users");

router.post("/create", async (req, res) => {
  // console.log(req.body);

  const UserData = req.body;
  const user = new UserModel({ ...UserData });
  const savedUser = await user.save();
  res.send(savedUser);
});
router.put("/update", (req, res) => {
  res.send("Update");
});
router.get("/getone/:id", (req, res) => {
  res.send(`Getone ${req.params.id}`);
});
router.get("/getall", async (req, res) => {
  const allusers = await UserModel.find();
  res.send(allusers);
});
router.delete("/delete", (req, res) => {
  console.log("Delete");
  res.send("Delete");
});
module.exports = router;
