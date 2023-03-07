'use strict';

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    account: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true
    },
    roleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id',
      }
    },
    position: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false
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
    charset: 'utf8mb4',
  });

  User.associate = () => {
    const {Role} = app.model;

    User.belongsTo(Role, {
      foreignKey: 'role_id'
    });
  };

  return User;
};