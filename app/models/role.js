'use strict';

module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define('role', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    character: {
      type: Sequelize.STRING(45),
      unique: true,
      allowNull: false,
      defaultValue: 'basic'
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    charset: 'utf8mb4'
  });

  Role.associate = () => {
    const {User} = app.model;

    Role.hasMany(User, {
      foreignKey: 'role_id'
    });
  };


  return Role;
};