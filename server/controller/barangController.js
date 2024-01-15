const Barang = require("../models").Barang;

exports.find = async (req, res) => {
  try {
    const bar = await Barang.findAll();
    return res.send(bar);
  } catch (error) {
    return res.status(404).send("not found mauk");
  }
};

exports.add = async (req, res) => {
  const { nama, harga, stok } = req.body;
  try {
    const barang = await Barang.create({
      nama,
      harga,
      stok,
    });
    res.status(201).json(barang);
  } catch (error) {
    return res.status(404).send("not found mauk");
  }
};
