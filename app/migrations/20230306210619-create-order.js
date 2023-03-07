'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      customer_id: {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  }
};