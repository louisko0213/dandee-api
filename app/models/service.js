'use strict';

module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define('service', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: Sequelize.STRING(125),
      allowNull: false
    },
    kind: {
      type: Sequelize.STRING(125),
      allowNull: false
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    charset: 'utf8mb4'
  });


  Service.associate = () => {
    const {OrderServiceMap} = app.model;

    Order.belongsToMany(Service, {
      through: OrderServiceMap,
      foreignKey: 'serviceId'
    });
  };

  return Service;
};