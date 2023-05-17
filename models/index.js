const Sequelize = require("sequelize");
const sequelize = new Sequelize("shop", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.barangs = require("./barang")(sequelize, Sequelize);
db.clients = require("./client")(sequelize, Sequelize);
db.items = require("./item")(sequelize, Sequelize);
db.keranjangs = require("./keranjang")(sequelize, Sequelize);

module.exports = db;
