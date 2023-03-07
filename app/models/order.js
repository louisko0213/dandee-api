'use strict';

module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('order', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    customerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id',
      }
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    discount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    comment: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    coating_time: {
      type: Sequelize.DATE,
      defaultValue: null
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    charset: 'utf8mb4'
  });

  Order.associate = () => {
    const {OrderServiceMap} = app.model;

    Order.belongsToMany(Service, {
      through: OrderServiceMap,
      foreignKey: 'orderId'
    });
  };

  return Order;
};