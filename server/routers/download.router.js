const { excelBarang } = require("../controller/download.controller");

const router = require("express").Router();

router.get("/excel", excelBarang);

module.exports = router;
