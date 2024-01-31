module.exports = (sequelize, Sequelize) => {
  const Barang = sequelize.define("Barangs", {
    nama: {
      type: Sequelize.STRING,
    },
    harga: {
      type: Sequelize.INTEGER,
    },
    stok: {
      type: Sequelize.INTEGER,
    },
  });
  return Barang;
};
