'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customer', [
      {
        name: 'tc1',
        gender: 'male',
        brand: 'bmw',
        model: 'm8',
        size: '中',
        color: '黑',
        plateNumber: 'abc-8787',
        washCoupon: 0,
        phone: '0912345678',
        address: '全家就他家',
        comment: '$$$',
        creatorId: 2,
        created_at: '2023-03-01 03:14:07'
      },
      {
        name: 'tc2',
        gender: 'female',
        brand: 'ford',
        model: 'focus',
        size: '中',
        color: '黑',
        plateNumber: 'zxc-7788',
        washCoupon: 1,
        phone: '091335678',
        address: '全家就他家',
        comment: '$$$',
        creatorId: 1,
        created_at: '2023-03-01 03:14:07'

      },
      {
        name: 'tc3',
        gender: 'male',
        brand: 'honda',
        model: 's2000',
        size: '中',
        color: '白',
        plateNumber: 'qwe-8787',
        washCoupon: 1,
        phone: '091223678',
        address: '全家就他家',
        comment: '$$$',
        creatorId: 1,
        created_at: '2023-03-01 03:14:07'

      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customer', null, {});
  }
};
