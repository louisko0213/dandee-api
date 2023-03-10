const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = require("./customer.js")(sequelize, Sequelize);
db.order = require("./order.js")(sequelize, Sequelize);
db.role = require("./role.js")(sequelize, Sequelize);
db.orderServiceMap = require("./orderServiceMap")(sequelize, Sequelize);
db.service = require("./service.js")(sequelize, Sequelize);
db.user = require("./user.js")(sequelize, Sequelize);

module.exports = db;
