module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define(
    "client",
    {
      id_client: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nama: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      kategori: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      daftar: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return Client;
};
