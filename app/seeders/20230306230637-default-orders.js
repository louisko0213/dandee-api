'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('order', [
      {
        customer_id: 1,
        coating_time: '2023-03-18 03:14:07',
        comment: 'qqqq',
        status: 1,
        discount: 0,
        amount: 33331,
        created_at: '2023-03-01 03:14:07'
      },
      {
        customer_id: 2,
        coating_time: '2023-03-21 03:14:07',
        comment: 'qqqq',
        status: 1,
        discount: 0,
        amount: 19990,
        created_at: '2023-03-01 03:14:07'
      },
      {
        customer_id: 2,
        coating_time: '2023-04-08 03:14:07',
        comment: 'qqqq',
        status: 0,
        discount: 444,
        amount: 3431245,
        created_at: '2023-03-01 03:14:07'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('order', null, {});
  }
};