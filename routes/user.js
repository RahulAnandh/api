const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  // console.log(req.body);

  res.send(savedUser);
});
router.put("/update", (req, res) => {
  res.send("Update");
});
router.get("/getone/:id", (req, res) => {
  res.send(`Getone ${req.params.id}`);
});
router.get("/getall", async (req, res) => {
  res.send("allusers");
});
router.delete("/delete", (req, res) => {
  res.send("Delete");
});
module.exports = router;
