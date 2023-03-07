'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orderServiceMap', [
      {
        order_id: 1,
        service_id: 1,
        created_at: '2023-03-01 03:14:07'
      },
      {
        order_id: 1,
        service_id: 2,
        created_at: '2023-03-01 03:14:07'
      },
      {
        order_id: 1,
        service_id: 3,
        created_at: '2023-03-01 03:14:07'
      },
      {
        order_id: 1,
        service_id: 4,
        created_at: '2023-03-01 03:14:07'
      },
      {
        order_id: 2,
        service_id: 7,
        created_at: '2023-03-01 03:14:07'
      },
      {
        order_id: 2,
        service_id: 9,
        created_at: '2023-03-01 03:14:07'
      },
      {
        order_id: 3,
        service_id: 1,
        created_at: '2023-03-01 03:14:07'
      },
      {
        order_id: 3,
        service_id: 2,
        created_at: '2023-03-01 03:14:07'
      },
      {
        order_id: 3,
        service_id: 11,
        created_at: '2023-03-01 03:14:07'
      },
      {
        order_id: 3,
        service_id: 15,
        created_at: '2023-03-01 03:14:07'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orderServiceMap', null, {});
  }
};
