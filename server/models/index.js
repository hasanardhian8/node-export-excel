const dbConfig = require("../../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
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
