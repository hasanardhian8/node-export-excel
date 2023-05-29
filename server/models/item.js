module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define(
    "item",
    {
      id_item: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_keranjang: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "keranjang",
          key: "id_keranjang",
        },
      },
      id_barang: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "barang",
          key: "id_barang",
        },
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      kuantitas: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return Item;
};
