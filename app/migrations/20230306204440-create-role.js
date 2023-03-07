'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('role');
  }
};