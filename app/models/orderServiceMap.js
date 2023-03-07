'use strict';

module.exports = (sequelize, Sequelize) => {
  const OrderServiceMap = sequelize.define('orderServiceMap', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    orderId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id',
        as: 'orderId',
      }
    },
    serviceId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'service',
        key: 'id',
        as: 'serviceId',
      }
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    charset: 'utf8mb4'
  });

  return OrderServiceMap;
};