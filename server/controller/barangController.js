const db = require("../models");
const Barang = db.barangs;

exports.find = async (req, res) => {
  try {
    console.log("kesini");
    const bar = await Barang.findAll();
    console.log(bar);
    return res.send(bar);
  } catch (error) {
    return res.status(404).send("not found mauk");
  }
};
