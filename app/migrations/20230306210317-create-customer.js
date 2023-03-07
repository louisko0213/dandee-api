'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer', {
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
      color: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      size: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      plateNumber: {
        type: Sequelize.STRING(45),
        unique: true,
        allowNull: false,
      },
      washCoopon: {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customer');
  }
};