"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameTable('vanancies', 'vacancies');
  },

  async down(queryInterface) {
    queryInterface.renameTable('vacancies', 'vanancies');
  },
};
