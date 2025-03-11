const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  console.log(req.body);
});
router.put("/update", (req, res) => {
  res.send("Update");
});
router.get("/get_one/:id", (req, res) => {
  res.send(`Getone ${req.params.id}`);
});
router.get("/get_all", async (req, res) => {
  res.send("GetAll");
});
router.delete("/delete", (req, res) => {
  res.send("Delete");
});
module.exports = router;
