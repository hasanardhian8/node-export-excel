module.exports = (sequelize, Sequelize) => {
  const Keranjang = sequelize.define(
    "keranjang",
    {
      id_keranjang: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_client: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "client",
          key: "id_client",
        },
      },
      bayar: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      tanggal: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return Keranjang;
};
