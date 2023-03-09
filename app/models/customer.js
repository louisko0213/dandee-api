'use strict';

module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('customer', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: Sequelize.STRING(255),
      unique: true,
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    brand: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    model: {
      type: Sequelize.STRING(125),
      allowNull: true
    },
    size: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    color: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    plateNumber: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
    },
    washCoupon: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    phone: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    phoneTwo: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    creatorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
        as: 'creatorId',
      }
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW
    },
    deletedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    charset: 'utf8mb4'
  });

  Customer.associate = () => {
    const {User, Order} = app.model;

    Customer.belongsTo(User, {
      foreignKey: 'creatorId'
    });
    Customer.hasMany(Order, {
      foreignKey: 'customerId'
    });

  };

  return Customer;
};