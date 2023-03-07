'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderServiceMap', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      order_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'order',
          key: 'id',
          as: 'orderId',
        }
      },
      service_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'service',
          key: 'id',
          as: 'serviceId',
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orderServiceMap');
  }
};