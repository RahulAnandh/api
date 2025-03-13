const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/create", async (req, res) => {
  const {
    first_name,
    last_name,
    house_name,
    zip_code,
    town,
    city,
    state,
    country,
    bank_account_no,
    bank_name,
    bank_location,
    ifsc_code,
    email,
    contact,
    emergancy_contact,
  } = req.body;
  const insertQuery = `INSERT INTO tb_employee(
    first_name,
    last_name,
    house_name,
    zip_code,
    town,
    city,
    state,
    country,
    bank_account_no,
    bank_name,
    bank_location,
    ifsc_code,
    email,
    contact,
    emergancy_contact
    ) VALUES (
    '${first_name}',
    '${last_name}',
    '${house_name}',
    '${zip_code}',
    '${town}',
    '${city}',
    '${state}',
    '${country}',
    '${bank_account_no}',
    '${bank_name}',
    '${bank_location}',
    '${ifsc_code}',
    '${email}',
    '${contact}',
    '${emergancy_contact}')`;
  try {
    const result = await pool.query(insertQuery);
    if (result.rowCount > 0) {
      res.status(201).json({
        success: true,
        message: "Insert successful",
        data: result.rows[0],
      });
    } else {
      throw "No rows inserted";
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
router.put("/update", (req, res) => {
  res.send("Update");
});
router.get("/get_one/:id", (req, res) => {
  res.send(`Getone ${req.params.id}`);
});
router.get("/get_all", async (req, res) => {
  const getAllQuery = "SELECT * FROM tb_employee";
  try {
    const all_employees = await pool.query(getAllQuery);
    if (all_employees.rows.length > 0) {
      res.status(200).json({
        success: true,
        message: "Successful",
        data: all_employees.rows,
      });
      console.log(`${all_employees.rows.length} EMPLOYEES ARE FETCHED`);
    } else {
      throw "No data found.";
    }
  } catch (err) {
    res.status(200).json({ success: false, error: err.message, data: [] });
  }
});
router.delete("/delete", async (req, res) => {
  const id = req.query.id; // Extract the 'id' from the query string
  try {
    const deleteQuery = `DELETE FROM tb_employee WHERE id = ${id}`;
    const result = await pool.query(deleteQuery);
    if (result.rowCount > 0) {
      console.log("EMPLOYEE ID ", id, " IS DELETED");
      res.status(200).json({ success: true, message: "Successful", data: id });
    } else {
      throw "Employee is not deleted";
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
module.exports = router;
