const Barang = require("../models").barangs;

module.exports.find = async (req, res) => {
  try {
    const bar = await Barang.findAll();
    return res.send(bar);
  } catch (error) {
    return res.status(404).send("not found mauk");
  }
};

module.exports.add = async (req, res) => {
  const { nama, harga, stok } = req.body;
  try {
    const barang = await Barang.create({
      nama,
      harga,
      stok,
    });
    return res.send(barang);
  } catch (error) {
    return res.status(404).send("not found mauk");
  }
};
module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { nama, harga, stok } = req.body;
  try {
    const barang = await Barang.update(
      {
        id,
        nama,
        harga,
        stok,
      },
      { where: { id } }
    );
    return res.send({ message: "Barang was updated successfully.", barang });
  } catch (error) {
    return res.status(500).send({
      message: "Error updating Tutorial with id=" + id,
    });
  }
};
module.exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const barang = await Barang.destroy({
      where: { id },
    });
    return res.send({ barang });
  } catch (error) {
    return res.status(404).send("not found");
  }
};
