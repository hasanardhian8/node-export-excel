module.exports = (sequelize, Sequelize) => {
  const Barang = sequelize.define(
    "barang",
    {
      id_barang: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      barang: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return Barang;
};
