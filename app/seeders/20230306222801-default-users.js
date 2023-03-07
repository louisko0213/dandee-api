'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        name: 'Louis Ke',
        account: 'louis123',
        role_id: 1,
        position: 'boss',
        password: '1234',
        created_at: '2023-03-01 03:14:07'
      },
      {
        name: 'Leon Chuang',
        account: 'leon456',
        role_id: 1,
        position: 'basic',
        password: '1234',
        created_at: '2023-03-01 03:14:07'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
