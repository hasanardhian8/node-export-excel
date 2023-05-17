const express = require("express");
const router = express.Router();
const { find } = require("../controller/barangController");

router.get("/barang", find);

module.exports = router;
