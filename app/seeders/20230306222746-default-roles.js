'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role', [
      {
        character: 'super',
      },
      {
        character: 'admin',
      },
      {
        character: 'basic',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role', null, {});
  }
};
