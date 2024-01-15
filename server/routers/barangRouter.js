const express = require("express");
const router = express.Router();
const { find, add } = require("../controller/barangController");

router.get("/barang", find);
router.post("/barang", add);

module.exports = router;
